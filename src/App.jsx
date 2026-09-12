import { useState } from 'react';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  MapPin,
  Send,
  Terminal,
  X,
} from 'lucide-react';

const profile = {
  name: 'Piyush Pratap Singh',
  email: 'piyushpratap531@gmail.com',
  github: 'https://github.com/Pratap531',
  linkedin: 'https://linkedin.com/in/pratap-singh',
  resume: '/Resume-Piyush_Pratap_Singh-Latest.pdf',
  location: 'Kolkata, India',
};

const navItems = ['About', 'Skills', 'Projects', 'DSA', 'Contact'];

const skillGroups = [
  { title: 'Languages', skills: ['C++', 'JavaScript'] },
  { title: 'Frontend', skills: ['HTML', 'CSS', 'React', 'Tailwind CSS'] },
  { title: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Data & Tools', skills: ['MongoDB', 'Git', 'GitHub', 'VS Code'] },
  { title: 'Computer Science', skills: ['DSA', 'OOP', 'Computer Networks', 'OS', 'DBMS'] },
];

const projects = [
  {
    number: '01',
    title: 'Task Scheduler',
    type: 'Productivity Tool',
    description: 'A responsive task management app designed around a simple, focused workflow for getting work organized.',
    features: ['Create, edit, delete, and complete tasks', 'Local Storage persistence', 'Responsive interface for daily use'],
    stack: ['React.js', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/Pratap531/Task-Scheduler',
    live: '',
  },
  {
    number: '02',
    title: 'X / Twitter Clone',
    type: 'Frontend Recreation',
    description: 'A responsive recreation of a familiar social feed, built to practice layout systems and reusable UI patterns.',
    features: ['Responsive homepage layout', 'Reusable interface sections', 'Desktop, tablet, and mobile support'],
    stack: ['HTML5', 'Tailwind CSS'],
    github: 'https://github.com/Pratap531/X-Clone',
    live: 'https://pratapindustries.online/',
  },
  {
    number: '03',
    title: 'Netflix Clone',
    type: 'Streaming Interface',
    description: 'A polished landing page exercise focused on semantic markup, visual hierarchy, and responsive CSS.',
    features: ['Semantic HTML structure', 'Modern CSS layout', 'Cross-device responsive testing'],
    stack: ['HTML5', 'CSS3'],
    github: 'https://github.com/Pratap531/Netflix-Clone',
    live: '',
  },
];

const dsaTopics = ['Arrays', 'Strings', 'Recursion', 'Sorting', 'Searching', 'Bit Manipulation', 'Mathematics', 'Linked Lists', 'Stacks & Queues', 'Trees', 'Graphs', 'Dynamic Programming'];

function SectionHeader({ index, title, tagline }) {
  return (
    <div className="section-head">
      <span className="section-index">§{index}</span>
      <div className="section-head-text">
        <h2>{title}</h2>
        {tagline && <p>{tagline}</p>}
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setError('');
    const form = event.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSent(true);
      form.reset();
    } catch (err) {
      setError('Could not send message. Please email me directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="doc">
      <div className="status-bar">
        <span>DOC: portfolio.spec</span>
        <span className="status-live"><span className="live-dot" /> STATUS: open.to.work</span>
        <span className="hide-mobile">REV: 2026.01</span>
      </div>

      <header className="doc-header">
        <a className="brand" href="#top">
          <span className="brand-mark">PS</span>
          <span>Piyush Pratap Singh</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
          <a className="nav-resume" href={profile.resume} target="_blank" rel="noreferrer">Resume <ArrowUpRight size={13} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-left">
            <p className="hero-label">PORTFOLIO · SPECIFICATION DOCUMENT · 2026</p>
            <h1>Piyush&nbsp;Pratap<br /><em>Singh.</em></h1>
            <p className="hero-role">Computer Science Student <span>/</span> Full-Stack Developer <span>/</span> C++ &amp; DSA Enthusiast</p>
            <p className="hero-intro">I build practical software while strengthening the fundamentals behind it — from data structures and algorithms to thoughtful, responsive web experiences.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">View projects <ArrowUpRight size={15} /></a>
              <a className="btn btn-outline" href={profile.resume} target="_blank" rel="noreferrer"><Download size={15} /> View resume</a>
            </div>
            <div className="social-links">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
              <a href={`mailto:${profile.email}`}><Mail size={15} /> Email</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="spec-card">
              <div className="spec-header">Specification</div>
              <div className="spec-rows">
                <div className="spec-row"><span className="spec-label">name</span><span className="spec-value">Piyush Pratap Singh</span></div>
                <div className="spec-row"><span className="spec-label">focus</span><span className="spec-value">Full-Stack Dev</span></div>
                <div className="spec-row"><span className="spec-label">language</span><span className="spec-value">C++</span></div>
                <div className="spec-row"><span className="spec-label">status</span><span className="spec-value spec-status"><span className="live-dot" /> Open</span></div>
                <div className="spec-row"><span className="spec-label">location</span><span className="spec-value">Kolkata, IN</span></div>
              </div>
              <div className="spec-footer">doc: 001 · rev: 2026.01</div>
            </div>
            <div className="stamp">
              <div className="stamp-inner">
                <span>OPEN TO WORK</span>
                <small>2026</small>
              </div>
            </div>
          </div>
        </section>

        <div className="scroll-hint"><ChevronDown size={16} /> <span>scroll to read</span></div>

        <section className="section" id="about">
          <SectionHeader index="01" title="About me" tagline="A practical approach to growing as an engineer." />
          <div className="about-grid">
            <p className="about-lead">I'm a Computer Science student who enjoys understanding how things work, then putting that understanding into practice.</p>
            <div className="about-text">
              <p>My current focus is split between building a solid base in <strong>C++ and Data Structures &amp; Algorithms</strong>, and learning the tools used to ship full-stack web products.</p>
              <p>I'm interested in the details that make software reliable: clean interfaces, maintainable code, and thoughtful problem solving. My goal is to become internship and job ready through consistent practice and real projects.</p>
              <div className="mini-facts"><span><MapPin size={13} /> Kolkata, India</span><span><Code2 size={13} /> B.Tech CSE (AI &amp; ML)</span></div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <SectionHeader index="02" title="Skills" tagline="A growing toolkit, grounded in strong fundamentals." />
          <div className="skill-grid">
            {skillGroups.map((group, i) => (
              <div className={`skill-cell ${i === 4 ? 'wide' : ''}`} key={group.title}>
                <span className="skill-num">0{i + 1}</span>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
          <div className="learning-note"><span className="note-mark">!</span><p><strong>Currently learning:</strong> deeper DSA patterns, backend architecture, and the habits that turn good code into dependable software.</p></div>
        </section>

        <section className="section" id="projects">
          <div className="section-head-row">
            <SectionHeader index="03" title="Projects" tagline="Small, practical projects that turn concepts into working experiences." />
            <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={14} /></a>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-entry" key={project.number}>
                <div className="project-num">{project.number}</div>
                <div className="project-body">
                  <div className="project-top">
                    <h3>{project.title}</h3>
                    <span className="project-type">{project.type}</span>
                  </div>
                  <p>{project.description}</p>
                  <ul>
                    {project.features.map((f) => <li key={f}><Check size={13} /> {f}</li>)}
                  </ul>
                  <div className="project-end">
                    <div className="project-stack">
                      {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                    </div>
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}><Github size={16} /></a>
                      {project.live && <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}><ExternalLink size={16} /></a>}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="dsa">
          <SectionHeader index="04" title="Problem solving" tagline="I use C++ and structured practice to sharpen the way I break down unfamiliar problems." />
          <div className="dsa-topics-card">
            <div className="dsa-card-head"><Terminal size={14} /> <span>topics.in.progress</span></div>
            <div className="topic-grid">
              {dsaTopics.map((topic, i) => (
                <div className="topic-cell" key={topic}>
                  <span className="topic-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="topic-name">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="edu-exp-grid">
            <div className="edu-col">
              <SectionHeader index="05" title="Education" />
              <div className="edu-item">
                <span className="edu-date">2023 — 2027</span>
                <h3>B.Tech in Computer Science &amp; Engineering <span>(AI &amp; ML)</span></h3>
                <p>Adamas University <span>·</span> Kolkata, India</p>
              </div>
              <div className="edu-item muted">
                <span className="edu-date">2022</span>
                <h3>Class 12 — CBSE Board</h3>
                <p>Higher Secondary Education</p>
              </div>
            </div>
            <div className="exp-col">
              <SectionHeader index="06" title="Experience" />
              <div className="open-card">
                <div className="open-icon"><BriefcaseBusiness size={18} /></div>
                <h3>Open to Software Engineering / Full-Stack Development Internships</h3>
                <p>I'm actively looking for opportunities where I can contribute to real-world software, learn from experienced developers, and grow through meaningful work.</p>
                <a className="text-link" href="#contact">Start a conversation <ArrowUpRight size={14} /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="resume">
          <div className="resume-banner">
            <div>
              <span className="resume-eyebrow">§07 — Resume</span>
              <h2>A snapshot of my journey.</h2>
              <p>Get the concise version of my education, skills, and projects.</p>
            </div>
            <a className="btn btn-dark" href={profile.resume} target="_blank" rel="noreferrer"><Download size={16} /> Download resume</a>
          </div>
        </section>

        <section className="section" id="contact">
          <SectionHeader index="08" title={<>Let's build <em>something.</em></>} tagline="I'm currently open to software engineering, full-stack development, and internship opportunities." />
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-links">
                <a href={`mailto:${profile.email}`}><Mail size={16} /><span><small>Email</small>{profile.email}</span><ArrowUpRight size={14} /></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /><span><small>LinkedIn</small>/in/pratap-singh</span><ArrowUpRight size={14} /></a>
                <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /><span><small>GitHub</small>/Pratap531</span><ArrowUpRight size={14} /></a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>NAME<input name="name" type="text" placeholder="Your name" required /></label>
              <label>EMAIL<input name="email" type="email" placeholder="you@example.com" required /></label>
              <label>MESSAGE<textarea name="message" placeholder="Tell me about your project or opportunity..." rows={5} required /></label>
              <button className="btn btn-primary" type="submit" disabled={sending || sent}>
                {sent ? <><Check size={15} /> Message sent</> : sending ? <><span className="live-dot" /> Sending...</> : <><Send size={15} /> Send message</>}
              </button>
              {sent && <p className="form-note">Thanks for reaching out — I'll get back to you soon.</p>}
              {error && <p className="form-note" style={{ color: '#c8553d' }}>{error}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="doc-footer">
        <a className="brand" href="#top"><span className="brand-mark">PS</span><span>Piyush Pratap Singh</span></a>
        <p>© 2026 Piyush Pratap Singh. Built with curiosity and care.</p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
