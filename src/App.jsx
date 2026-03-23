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

import { useState, useEffect, useMemo, useRef } from 'react';
import { useSpring, useMotionValue } from 'framer-motion';

const CircuitTraces = ({ mousePos }) => {
  const canvasRef = useRef(null);
  const traces = useRef([]);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initTraces();
    };

    const initTraces = () => {
      traces.current = [...Array(40)].map(() => {
        const startX = Math.random() * canvas.width;
        const startY = Math.random() * canvas.height;
        const path = [{ x: startX, y: startY }];
        let currentX = startX;
        let currentY = startY;
        
        for (let j = 0; j < 4; j++) {
          const length = Math.random() * 100 + 50;
          const angle = (Math.floor(Math.random() * 8) * 45) * (Math.PI / 180);
          currentX += Math.cos(angle) * length;
          currentY += Math.sin(angle) * length;
          path.push({ x: currentX, y: currentY });
        }
        
        return { path, progress: Math.random(), speed: 0.002 + Math.random() * 0.003 };
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      traces.current.forEach(t => {
        t.progress += t.speed;
        if (t.progress > 1) t.progress = 0;

        ctx.beginPath();
        ctx.moveTo(t.path[0].x, t.path[0].y);
        for (let i = 1; i < t.path.length; i++) {
          ctx.lineTo(t.path[i].x, t.path[i].y);
        }
        
        // Base trace (Dark Merlot)
        ctx.strokeStyle = '#1F0407';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Pulsing data packet (Luminous Crimson highlight)
        const segmentCount = t.path.length - 1;
        const segmentIndex = Math.floor(t.progress * segmentCount);
        const segmentProgress = (t.progress * segmentCount) % 1;
        
        const p1 = t.path[segmentIndex];
        const p2 = t.path[segmentIndex + 1];
        
        if (p1 && p2) {
          const packetX = p1.x + (p2.x - p1.x) * segmentProgress;
          const packetY = p1.y + (p2.y - p1.y) * segmentProgress;
          
          ctx.beginPath();
          ctx.arc(packetX, packetY, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = '#E63946';
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#E63946';
          ctx.fill();
        }
      });

      animationFrameId.current = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.5 }} />;
};

const TerminalLogs = () => {
  const [logs, setLogs] = useState([]);
  
  useEffect(() => {
    const chars = '0123456789ABCDEF{}[]<>/?!@#$%^&*()';
    const newLogs = [...Array(10)].map(() => ({
      left: Math.random() * 100 + '%',
      delay: Math.random() * 10,
      speed: 15 + Math.random() * 10,
      content: [...Array(30)].map(() => chars[Math.floor(Math.random() * chars.length)]).join('')
    }));
    setLogs(newLogs);
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', opacity: 0.1 }}>
      {logs.map((log, i) => (
        <motion.div
          key={i}
          initial={{ y: '-100%' }}
          animate={{ y: '100%' }}
          transition={{ duration: log.speed, repeat: Infinity, delay: log.delay, ease: "linear" }}
          style={{
            position: 'absolute',
            left: log.left,
            color: 'var(--accent-primary)',
            fontFamily: 'Fira Code, monospace',
            fontSize: '12px',
            writingMode: 'vertical-rl',
            letterSpacing: '5px'
          }}
        >
          {log.content}
        </motion.div>
      ))}
    </div>
  );
};

const MERNSchematics = () => (
  <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.03, pointerEvents: 'none' }} className="mern-schematics">
    <div style={{ position: 'absolute', top: '20%', left: '15%', border: '1px solid #fff', padding: '10px' }}>[ MONGODB_CLUSTER ]</div>
    <div style={{ position: 'absolute', top: '45%', left: '40%', border: '1px solid #fff', padding: '10px' }}>[ EXPRESS_API_GATEWAY ]</div>
    <div style={{ position: 'absolute', top: '70%', left: '70%', border: '1px solid #fff', padding: '10px' }}>[ REACT_FRONTEND_UI ]</div>
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <line x1="22%" y1="25%" x2="40%" y2="45%" stroke="#fff" strokeWidth="0.5" strokeDasharray="5,5" />
      <line x1="55%" y1="50%" x2="70%" y2="70%" stroke="#fff" strokeWidth="0.5" strokeDasharray="5,5" />
    </svg>
    <style>{`
      @media (max-width: 900px) {
        .mern-schematics { display: none !important; }
      }
    `}</style>
  </div>
);

const CyberBackground = () => {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', background: '#050304', overflow: 'hidden' }}>
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03))',
        backgroundSize: '100% 2px, 3px 100%',
        zIndex: 10
      }} />
      
      <TerminalLogs />
      <CircuitTraces />
      <MERNSchematics />
      
      {/* Background Glows */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, #722F3722 0%, transparent 70%)', filter: 'blur(50px)' }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, #C5A05911 0%, transparent 70%)', filter: 'blur(50px)' }} />

      {/* Masking Vignette */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 50%, transparent 40%, #000 120%)',
        zIndex: 5
      }} />
      <div className="scan-line" style={{ zIndex: 11, opacity: 0.1 }}></div>
    </div>
  );
};

function App() {
  return (
    <div className="portfolio-container" style={{ position: 'relative', maxWidth: '100vw', overflowX: 'hidden' }}>
      <CyberBackground />

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
