import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Download, CheckCircle2, ShieldCheck, Terminal, Layers, Code2, Sparkles, Briefcase } from 'lucide-react';
import profile from '../assets/profile.jpeg';
import './Hero.css';

/* ── Typewriter Component ─────────────────────────── */
const Typewriter = ({ words }) => {
  const [i, setI] = useState(0);
  const [sub, setSub] = useState(0);
  const [rev, setRev] = useState(false);
  useEffect(() => {
    if (sub === words[i].length + 1 && !rev) { const t = setTimeout(() => setRev(true), 2500); return () => clearTimeout(t); }
    if (sub === 0 && rev) { setRev(false); setI(p => (p + 1) % words.length); return; }
    const t = setTimeout(() => setSub(p => p + (rev ? -1 : 1)), rev ? 30 : 65);
    return () => clearTimeout(t);
  }, [sub, i, rev]);
  return <><span>{words[i].substring(0, sub)}</span><span className="ex-cursor" /></>;
};

/* ── Executive Professional Hero Component ─────────────────────────── */
const Hero = () => {
  const [scroll, setScroll] = useState(0);
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const smoothX = useSpring(mouseX, { stiffness: 75, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 75, damping: 20 });

  const cardRotateX = useTransform(smoothY, [0, window.innerHeight || 900], [5, -5]);
  const cardRotateY = useTransform(smoothX, [0, window.innerWidth || 1400], [-7, 7]);

  useEffect(() => {
    const onMv = e => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    const onSc = () => {
      const t = document.documentElement.scrollHeight - window.innerHeight;
      setScroll(t > 0 ? window.scrollY / t : 0);
    };
    window.addEventListener('mousemove', onMv);
    window.addEventListener('scroll', onSc);
    return () => {
      window.removeEventListener('mousemove', onMv);
      window.removeEventListener('scroll', onSc);
    };
  }, [mouseX, mouseY]);

  const roles = [
    'Full Stack Engineer',
    'MERN Stack Architect',
    'React & Node Specialist',
    'Enterprise System Developer'
  ];

  return (
    <section id="home" className="ex-hero">
      {/* Scroll Progress Bar */}
      <div className="ex-scrollbar" style={{ width: `${scroll * 100}%` }} />

      {/* Ambient Radial Spotlight */}
      <div className="ex-spotlight" />
      <div className="ex-grid-bg" />

      <div className="ex-container">
        {/* LEFT COLUMN: Ultra-Clean Executive Typography */}
        <div className="ex-left">

          {/* Availability Pill */}
          <motion.div
            className="ex-status-pill"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="ex-live-dot" />
            <span className="ex-status-text">AVAILABLE FOR SENIOR ROLES & CONTRACTS</span>
          </motion.div>

          {/* Name & Title Header */}
          <motion.div
            className="ex-title-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="ex-greeting">SENIOR SOFTWARE ENGINEER</span>
            <h1 className="ex-name">
              Sivapragadheeswari <span className="ex-gold-accent">N.</span>
            </h1>
          </motion.div>

          {/* Typewriter Role */}
          <motion.div
            className="ex-role-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <span className="ex-role-prefix">// Specializing as</span>
            <div className="ex-role-text">
              <Typewriter words={roles} />
            </div>
          </motion.div>

          {/* Professional Bio */}
          <motion.p
            className="ex-bio"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            Building high-impact software solutions with modern React architectures, scalable Node.js microservices, and high-performance databases. Committed to engineering excellence, clean maintainable code, and seamless UI performance.
          </motion.p>

          {/* Core Tech Stack Pills */}
          <motion.div
            className="ex-tech-stack"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <span className="ex-stack-label">Core Tech Stack:</span>
            <div className="ex-stack-items">
              <span className="ex-tech-tag">React.js</span>
              <span className="ex-tech-tag">Node.js</span>
              <span className="ex-tech-tag">Express</span>
              <span className="ex-tech-tag">MongoDB</span>
              <span className="ex-tech-tag">JavaScript / ES6+</span>
              <span className="ex-tech-tag">RESTful APIs</span>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            className="ex-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            <button
              className="ex-btn-primary"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>View Featured Work</span>
              <ArrowUpRight size={16} />
            </button>

            <a
              href="/resume.pdf"
              download="Sivapragadheeswari_N_Resume.pdf"
              className="ex-btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={15} />
              <span>Download Resume</span>
            </a>

            <button
              className="ex-btn-ghost"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Get In Touch</span>
            </button>
          </motion.div>

          {/* Executive Metrics Bar */}
          <motion.div
            className="ex-metrics"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
          >
            <div className="ex-metric">
              <span className="ex-metric-val">15+</span>
              <span className="ex-metric-lbl">Completed Projects</span>
            </div>
            <div className="ex-metric-divider" />
            <div className="ex-metric">
              <span className="ex-metric-val">3+ Yrs</span>
              <span className="ex-metric-lbl">Software Experience</span>
            </div>
            <div className="ex-metric-divider" />
            <div className="ex-metric">
              <span className="ex-metric-val">100%</span>
              <span className="ex-metric-lbl">High Performance</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Ultra-Clean Executive Portrait Card */}
        <motion.div
          className="ex-right"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            className="ex-portrait-card"
            style={{
              rotateX: cardRotateX,
              rotateY: cardRotateY,
            }}
          >
            {/* Subtle Gold Border Glow */}
            <div className="ex-card-border-glow" />

            {/* Main Clean Image Wrapper */}
            <div className="ex-img-wrapper">
              <img src={profile} alt="Sivapragadheeswari" />
              <div className="ex-img-overlay" />
            </div>

            {/* Floating Executive Glass Badge */}
            <div className="ex-executive-badge">
              <div className="ex-badge-icon">
                <ShieldCheck size={18} color="#D4AF37" />
              </div>
              <div className="ex-badge-info">
                <span className="ex-badge-name">SIVAPRAGADHEESWARI N.</span>
                <span className="ex-badge-role">FULL STACK SOFTWARE ENGINEER</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Info Strip */}
      <div className="ex-footer-strip">
        <div className="ex-footer-item">
          <Terminal size={13} color="#D4AF37" />
          <span>ENTERPRISE MERN ARCHITECTURE</span>
        </div>
        <div className="ex-footer-item">
          <Briefcase size={13} color="#D4AF37" />
          <span>LOCATION: COIMBATORE, IN</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
