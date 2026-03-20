import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ChevronRight, Zap } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="section-padding" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Background Decorative Text */}
            <div style={{ 
                position: 'absolute', 
                right: '-5%', 
                top: '50%', 
                transform: 'translateY(-50%) rotate(90deg)', 
                fontSize: '15rem', 
                fontWeight: '900', 
                color: 'rgba(114, 47, 55, 0.03)', 
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                zIndex: 0,
                fontFamily: 'Playfair Display'
            }}>
                MERN_STACK
            </div>

            <div className="scan-line"></div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 400px', gap: '4rem', alignItems: 'center', width: '100%' }}>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                        <div style={{ width: '40px', height: '2px', background: 'var(--accent-gold)' }}></div>
                        <span style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', letterSpacing: '5px', fontWeight: '600', fontFamily: 'Fira Code' }}>DEI_CORE.TERMINAL_BOOTED</span>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#874040ff', boxShadow: '0 0 10px #693e4fff' }}></div>
                    </div>

                    <div style={{ marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '1.8rem', color: 'var(--accent-gold)', fontWeight: '400', letterSpacing: '-0.5px', fontFamily: 'Playfair Display', fontStyle: 'italic', opacity: 0.8 }}>Hi, I'm</span>
                    </div>

                    <h1 style={{ fontSize: 'clamp(2rem, 7vw, 5rem)', lineHeight: '1', marginBottom: '3rem', fontWeight: '900', color: 'var(--text-primary)', fontFamily: 'Playfair Display', letterSpacing: '-3px', position: 'relative', whiteSpace: 'nowrap' }}>
                        Sivapraga<span className="gradient-text" style={{ textShadow: '20px 20px 80px rgba(114, 47, 55, 0.3)' }}>dheeswari</span>
                    </h1>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
                        <div style={{ padding: '0.5rem 1.2rem', background: 'var(--accent-primary)', color: 'white', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '2px', borderRadius: '2px' }}>
                            MERN ARCHITECT
                        </div>
                        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, var(--accent-gold), transparent)' }}></div>
                    </div>

                    <div style={{ maxWidth: '600px', marginBottom: '4rem', position: 'relative' }}>
                        <div style={{ position: 'absolute', left: '-20px', top: '0', bottom: '0', width: '2px', background: 'var(--accent-gold)', opacity: 0.5 }}></div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: '1.8', fontFamily: 'Inter', fontWeight: '300', paddingLeft: '20px' }}>
                            Specializing in <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Engineered Full-Stack Solutions</span>. I build high-frequency web ecosystems using the MongoDB, Express, React, and Node.js stack. Transforming technical debt into <span style={{ color: 'var(--accent-gold)' }}>scalable infrastructure</span>.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '2rem' }}>
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
                >
                    {/* Mass Image Frame */}
                    <div style={{ position: 'absolute', top: '-10px', left: '-10px', width: '100%', height: '100%', border: '4px solid var(--accent-primary)', zIndex: -1, opacity: 0.2 }}></div>
                    
                    <div style={{
                        width: '100%',
                        aspectRatio: '0.75',
                        background: 'var(--bg-secondary)',
                        backgroundImage: 'url("./src/assets/office_bg.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        border: '1px solid var(--glass-border)',
                        padding: '10px',
                        position: 'relative',
                        boxShadow: '40px 40px 0 -10px rgba(114, 47, 55, 0.1)',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(15, 5, 6, 0.6), transparent)', zIndex: 1 }}></div>
                        <img
                            src="./src/assets/profile.jpg"
                            alt="Profile"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.1) brightness(1.05) grayscale(0.2)', position: 'relative', zIndex: 0, opacity: 0.9 }}
                        />
                        <div style={{ 
                            position: 'absolute', 
                            bottom: '20px', 
                            left: '-30px', 
                            padding: '15px 30px', 
                            background: 'var(--bg-primary)', 
                            border: '1px solid var(--accent-gold)',
                            color: 'var(--accent-gold)', 
                            fontSize: '0.7rem', 
                            fontWeight: '600', 
                            letterSpacing: '3px',
                            backdropFilter: 'blur(10px)',
                            zIndex: 2
                        }}>
                             0xDEI_UID // 2026
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 1100px) {
          section#home div { grid-template-columns: 1fr !important; text-align: center; }
          section#home div div:first-child { display: flex; flex-direction: column; align-items: center; }
          section#home div div:last-child { margin: 0 auto; width: 300px; }
          .cyber-card { text-align: left; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
