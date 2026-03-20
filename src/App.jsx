import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import './App.css';

function App() {
  return (
    <div className="portfolio-container" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background Blobs */}
      <motion.div 
        className="wine-blob"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ top: '10%', left: '-10%' }}
      />
      <motion.div 
        className="wine-blob"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ bottom: '10%', right: '-10%' }}
      />

      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="glass" style={{ padding: '4rem 2rem', textAlign: 'center', color: 'var(--text-secondary)', position: 'relative', zIndex: 1, fontFamily: 'Fira Code, monospace', fontSize: '0.75rem', letterSpacing: '1px' }}>
        <div style={{ marginBottom: '0.8rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: 'var(--accent-primary)' }}>&lt;/&gt;</span>
          <span>© {new Date().getFullYear()} SIVAPRAGADHEEWARI // ALL_RIGHTS_RESERVED</span>
        </div>
        <div style={{ opacity: 0.6 }}>
          // STACK_BUILD: REACT_NODE_MONGODB.EXE
        </div>
        <div style={{ marginTop: '1.5rem', fontSize: '0.6rem', opacity: 0.4, letterSpacing: '2px' }}>
          STATUS: 200_OK // BUILD: STABLE_V3.1 // LOC: COIMBATORE, IN
        </div>
      </footer>
    </div>
  );
}

export default App;
