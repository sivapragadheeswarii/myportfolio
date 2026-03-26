import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import './App.css';

const BackgroundAura = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { damping: 50, stiffness: 200 });
    const springY = useSpring(mouseY, { damping: 50, stiffness: 200 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: -1,
            background: 'var(--bg-primary)',
        }}>
            {/* Developer Digital Grid */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `
                    linear-gradient(rgba(139, 30, 63, 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(139, 30, 63, 0.05) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
                opacity: 0.5
            }} />

            {/* Mesh Blobs */}
            <motion.div style={{
                position: 'absolute',
                top: '5%',
                left: '15%',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
                opacity: 0.12,
                borderRadius: '50%',
                filter: 'blur(100px)',
            }} animate={{ 
                x: [0, 100, -50, 0], 
                y: [0, -60, 80, 0] 
            }} transition={{ duration: 25, repeat: Infinity }} />

            <motion.div style={{
                position: 'absolute',
                bottom: '10%',
                right: '20%',
                width: '45vw',
                height: '45vw',
                background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)',
                opacity: 0.08,
                borderRadius: '50%',
                filter: 'blur(120px)',
            }} animate={{ 
                x: [0, -80, 60, 0], 
                y: [0, 70, -40, 0] 
            }} transition={{ duration: 30, repeat: Infinity, delay: 2 }} />

            {/* Interactive Glow */}
            <motion.div 
                style={{
                    position: 'absolute',
                    top: springY,
                    left: springX,
                    width: '35vmax',
                    height: '35vmax',
                    background: 'radial-gradient(circle, rgba(243, 229, 171, 0.04) 0%, transparent 70%)',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    filter: 'blur(80px)',
                    pointerEvents: 'none',
                    zIndex: 1
                }}
            />

            {/* Digital Scanline Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.15) 50%)',
                backgroundSize: '100% 4px',
                zIndex: 2,
                pointerEvents: 'none',
                opacity: 0.1
            }} />
        </div>
    );
};

function App() {
  return (
    <div className="portfolio-container" style={{ position: 'relative', maxWidth: '100vw', overflowX: 'hidden' }}>
      <BackgroundAura />

      <Navbar />
      <main style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
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
