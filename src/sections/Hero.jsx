import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ChevronRight, Zap } from 'lucide-react';
import profile from '../assets/profile.jpg';



const Hero = () => {
    return (
        <section id="home" className="section-padding" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>

            <div className="scan-line"></div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 400px', gap: '4rem', alignItems: 'center', width: '100%' }} className="hero-grid">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="hero-text-col"
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                        <div style={{ width: '40px', height: '2px', background: 'var(--accent-gold)' }}></div>
                        <span style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', letterSpacing: '5px', fontWeight: '600', fontFamily: 'Fira Code' }}>DEI_CORE.TERMINAL_BOOTED</span>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#874040ff', boxShadow: '0 0 10px #693e4fff' }}></div>
                    </div>

                    <div style={{ marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '1.8rem', color: 'var(--accent-gold)', fontWeight: '400', letterSpacing: '-0.5px', fontFamily: 'Playfair Display', fontStyle: 'italic', opacity: 0.8 }}>Hi, I'm</span>
                    </div>

                    <h1 style={{ fontSize: 'clamp(2.2rem, 10vw, 5rem)', lineHeight: '1.2', marginBottom: '2.5rem', fontWeight: '900', color: 'var(--text-primary)', fontFamily: 'Playfair Display', letterSpacing: '-2px', position: 'relative' }} className="hero-name">
                        <span style={{ display: 'inline-block' }}>Sivapraga</span><span className="gradient-text" style={{ display: 'inline-block', textShadow: '20px 20px 80px rgba(114, 47, 55, 0.3)' }}>dheeswari</span>
                    </h1>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }} className="hero-status-bar">
                        <div style={{ padding: '0.5rem 1.2rem', background: 'var(--accent-primary)', color: 'white', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '2px', borderRadius: '2px' }}>
                            MERN ARCHITECT
                        </div>
                        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, var(--accent-gold), transparent)' }} className="status-line"></div>
                    </div>

                    <div style={{ maxWidth: '600px', marginBottom: '3.5rem', position: 'relative' }} className="hero-description">
                        <div style={{ position: 'absolute', left: '-20px', top: '0', bottom: '0', width: '2px', background: 'var(--accent-gold)', opacity: 0.5 }} className="desc-border"></div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', fontFamily: 'Inter', fontWeight: '300', paddingLeft: '20px' }}>
                            Specializing in <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Engineered Full-Stack Solutions</span>. I build high-frequency web ecosystems using the MongoDB, Express, React, and Node.js stack. Transforming technical debt into <span style={{ color: 'var(--accent-gold)' }}>scalable infrastructure</span>.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }} className="hero-btns">
                        <button 
                            className="cyber-button" 
                            style={{ border: '1px solid var(--accent-gold)', color: 'var(--accent-gold)', padding: '1rem 3rem' }}
                            onClick={() => window.location.href = '#projects'}
                        >
                            VIEW WORK
                        </button>
                        <button
                            style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem', borderBottom: '1px solid transparent', transition: 'border-color 0.3s ease' }}
                            onMouseEnter={(e) => e.currentTarget.style.borderBottom = '1px solid var(--accent-gold)'}
                            onMouseLeave={(e) => e.currentTarget.style.borderBottom = '1px solid transparent'}
                            onClick={() => window.location.href = '#about'}
                        >
                            THE_IDENTITY <ChevronRight size={16} />
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    style={{ position: 'relative' }}
                    className="hero-img-col"
                >
                    <div style={{ position: 'absolute', top: '-10px', left: '-10px', width: '100%', height: '100%', border: '4px solid var(--accent-primary)', zIndex: -1, opacity: 0.2 }}></div>
                    
                    <div style={{
                        width: '100%',
                        aspectRatio: '0.8',
                        background: 'var(--bg-secondary)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        border: '1px solid var(--glass-border)',
                        padding: '8px',
                        position: 'relative',
                        boxShadow: '40px 40px 0 -10px rgba(114, 47, 55, 0.1)',
                    }} className="hero-image-container">
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(15, 5, 6, 0.6), transparent)', zIndex: 1 }}></div>
                        <img
                            src={profile} alt="Profile" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.1) brightness(1.05) grayscale(0.2)', position: 'relative', zIndex: 0, opacity: 0.9 }}
                        />
                        <div style={{ 
                            position: 'absolute', 
                            bottom: '20px', 
                            left: '-20px', 
                            padding: '12px 25px', 
                            background: 'var(--bg-primary)', 
                            border: '1px solid var(--accent-gold)',
                            color: 'var(--accent-gold)', 
                            fontSize: '0.65rem', 
                            fontWeight: '600', 
                            letterSpacing: '3px',
                            backdropFilter: 'blur(10px)',
                            zIndex: 10
                        }} className="id-label">
                             0xDEI_UID // 2026
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 1100px) {
          section#home { 
            padding-top: 100px !important; 
            text-align: center !important; 
            height: auto !important; 
            min-height: 100vh !important;
            overflow-x: hidden !important;
          }
          .hero-grid { 
            grid-template-columns: 1fr !important; 
            gap: 2rem !important; 
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
          }
          .hero-img-col { 
            max-width: 300px !important; 
            width: 100% !important;
            margin: 0 auto 1.5rem !important; 
            order: -1 !important; 
            display: flex !important;
            justify-content: center !important;
          }
          .hero-image-container { width: 100% !important; }
          .hero-status-bar { justify-content: center; }
          .status-line { display: none; }
          .hero-description { margin: 0 auto 2.5rem !important; width: 100% !important; }
          .desc-border { left: 50% !important; transform: translateX(-50%); width: 40px !important; height: 2px !important; top: -10px !important; bottom: auto !important; }
          .hero-btns { justify-content: center; }
          .id-label { 
            left: 50% !important; 
            transform: translateX(-50%) !important; 
            width: max-content !important; 
            bottom: -15px !important;
            position: absolute !important;
            white-space: nowrap !important;
          }
        }
        @media (max-width: 600px) {
            .hero-name { font-size: clamp(1.6rem, 8vw, 2.2rem) !important; letter-spacing: -1px !important; white-space: nowrap !important; }
            .hero-name span { display: inline !important; }
            .hero-img-col { max-width: 220px !important; }
            .hero-btns { gap: 0.8rem !important; flex-direction: column; align-items: center; }
            .cyber-button { width: 100%; max-width: 240px; padding: 0.8rem 1rem !important; }
            .hero-description p { padding-left: 0 !important; font-size: 1rem !important; }
        }
      `}</style>

        </section>
    );
};

export default Hero;
