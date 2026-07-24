import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Preloader from './components/Preloader';
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
            {/* Cinematic Golden Digital Grid */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `
                    linear-gradient(rgba(197, 160, 89, 0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(197, 160, 89, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
                maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
                opacity: 0.6
            }} />

            {/* Floating Luxury Gold Mesh Blobs */}
            <motion.div style={{
                position: 'absolute',
                top: '10%',
                left: '20%',
                width: '45vw',
                height: '45vw',
                background: 'radial-gradient(circle, rgba(197, 160, 89, 0.06) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(100px)',
            }} animate={{ 
                x: [0, 80, -40, 0], 
                y: [0, -50, 60, 0] 
            }} transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }} />

            <motion.div style={{
                position: 'absolute',
                bottom: '15%',
                right: '25%',
                width: '40vw',
                height: '40vw',
                background: 'radial-gradient(circle, rgba(243, 229, 171, 0.04) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(120px)',
            }} animate={{ 
                x: [0, -60, 40, 0], 
                y: [0, 50, -30, 0] 
            }} transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />

            {/* Interactive Glow */}
            <motion.div 
                style={{
                    position: 'absolute',
                    top: springY,
                    left: springX,
                    width: '30vmax',
                    height: '30vmax',
                    background: 'radial-gradient(circle, rgba(197, 160, 89, 0.04) 0%, transparent 70%)',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    filter: 'blur(80px)',
                    pointerEvents: 'none',
                    zIndex: 1
                }}
            />

            {/* Digital scanline overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(rgba(10, 10, 10, 0) 50%, rgba(0, 0, 0, 0.1) 50%)',
                backgroundSize: '100% 4px',
                zIndex: 2,
                pointerEvents: 'none',
                opacity: 0.15
            }} />
        </div>
    );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync Lenis scroll status with loading
    if (isLoading) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <div className="portfolio-container" style={{ position: 'relative', maxWidth: '100vw', overflowX: 'hidden' }}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

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
      
      <footer className="app-footer-executive glass">
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)'
        }} />

        <div className="footer-copyright-row">
          <span style={{ color: 'var(--accent-gold)' }}>&lt;/&gt;</span>
          <span>© {new Date().getFullYear()} SIVAPRAGADHEESWARI N. // ALL_RIGHTS_RESERVED</span>
        </div>
        <div className="footer-stack-row">
          // STACK_BUILD: REACT_NODE_MONGODB.EXE
        </div>
        <div className="footer-status-pill-row">
          <span className="footer-pulse-dot" />
          <span>STATUS: 200_OK // BUILD: STABLE_V3.1 // LOC: COIMBATORE, IN</span>
        </div>
      </footer>

      <style>{`
        .app-footer-executive {
          padding: 4rem 2rem;
          text-align: center;
          color: var(--text-secondary);
          position: relative;
          z-index: 1;
          font-family: 'Fira Code', monospace;
          font-size: 0.75rem;
          letter-spacing: 1px;
          border-left: none;
          border-right: none;
          border-bottom: none;
          border-radius: 0;
          background: rgba(5, 5, 5, 0.85);
          backdrop-filter: blur(16px);
        }
        .footer-copyright-row {
          margin-bottom: 0.8rem;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          color: #FFFFFF;
          font-weight: 500;
        }
        .footer-stack-row {
          opacity: 0.6;
        }
        .footer-status-pill-row {
          margin-top: 1.5rem;
          font-size: 0.64rem;
          opacity: 0.6;
          letter-spacing: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .footer-pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 8px #10B981;
          display: inline-block;
        }
        @media (max-width: 600px) {
          .app-footer-executive {
            padding: 2.2rem 1.2rem 2.8rem 1.2rem !important;
            font-size: 0.68rem !important;
          }
          .footer-copyright-row {
            flex-direction: column !important;
            gap: 0.4rem !important;
            font-size: 0.72rem !important;
            line-height: 1.4 !important;
          }
          .footer-stack-row {
            font-size: 0.62rem !important;
          }
          .footer-status-pill-row {
            margin-top: 1.2rem !important;
            font-size: 0.56rem !important;
            letter-spacing: 1px !important;
            flex-wrap: wrap !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
