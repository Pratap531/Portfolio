import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';

app.use(cors());
app.use(express.json());

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    await Contact.create({ name, email, message });
    res.status(201).json({ success: true, message: 'Message saved successfully.' });
  } catch (err) {
    console.error('Database error:', err.message);
    res.status(500).json({ error: 'Could not save message. Please try again later.' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err.message);
    console.log('Starting server without database connection...');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT} (no DB)`);
    });
  });
