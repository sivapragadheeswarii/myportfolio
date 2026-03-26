import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Terminal, ChevronRight } from 'lucide-react';
import profile from '../assets/profile.jpg';

const Hero = () => {
    
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

   
    const smoothX = useSpring(mouseX, { damping: 50, stiffness: 200 });
    const smoothY = useSpring(mouseY, { damping: 50, stiffness: 200 });

   
    const auraX = useTransform(smoothX, (v) => v * 0.5);
    const auraY = useTransform(smoothY, (v) => v * 0.5);
    const photoX = useTransform(smoothX, (v) => v * 1);
    const photoY = useTransform(smoothY, (v) => v * 1);
    const frameX = useTransform(smoothX, (v) => v * 1.5);
    const frameY = useTransform(smoothY, (v) => v * 1.5);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x * 50);
        mouseY.set(y * 50);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section id="home" className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '100px', paddingLeft: '8%', paddingRight: '8%' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 450px', gap: '4rem', alignItems: 'center', width: '100%' }} className="hero-grid">
                
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                        <div style={{ width: '40px', height: '2px', background: 'var(--accent-gold)' }}></div>
                        <span style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', letterSpacing: '5px', fontWeight: '600', fontFamily: 'Fira Code' }}>IDENTITY_VAULT_DEI.BOOTED</span>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-primary)', boxShadow: '0 0 10px var(--accent-primary)' }}></div>
                    </div>

                    <div style={{ marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '1.8rem', color: 'var(--accent-gold)', fontWeight: '400', letterSpacing: '-0.5px', fontFamily: 'Playfair Display', fontStyle: 'italic', opacity: 0.8 }}>Hi, I'm</span>
                    </div>

                    <h1 
                        className="hero-name"
                        style={{ 
                            fontSize: 'clamp(1.8rem, 7.5vw, 4.2rem)', 
                            lineHeight: '1.1', 
                            marginBottom: '2.5rem', 
                            fontWeight: '900', 
                            background: 'linear-gradient(to right, var(--accent-gold), var(--accent-primary))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontFamily: 'Playfair Display', 
                            letterSpacing: '-1.5px',
                        }}
                    >
                        Sivapragadheeswari
                    </h1>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
                        <div style={{ padding: '0.5rem 1.2rem', background: 'var(--accent-primary)', color: 'var(--text-primary)', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '2px', borderRadius: '2px' }}>
                            MERN ARCHITECT
                        </div>
                        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, var(--accent-gold), transparent)' }}></div>
                    </div>

                    <div style={{ maxWidth: '600px', marginBottom: '3.5rem', borderLeft: '2px solid var(--accent-gold)', paddingLeft: '20px' }}>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', fontFamily: 'Inter', fontWeight: '300' }}>
                            Specializing in <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Engineered Full-Stack Solutions</span>. I build high-frequency web ecosystems using the MongoDB, Express, React, and Node.js stack. Transforming technical debt into <span style={{ color: 'var(--accent-gold)' }}>scalable infrastructure</span>.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <button 
                            className="cyber-button" 
                            style={{ border: '1px solid var(--accent-gold)', color: 'var(--accent-gold)', padding: '1rem 3rem' }}
                            onClick={() => window.location.href = '#projects'}
                        >
                            VIEW WORK
                        </button>
                        <button
                            style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem' }}
                            onClick={() => window.location.href = '#about'}
                        >
                            THE_IDENTITY <ChevronRight size={16} />
                        </button>
                    </div>
                </motion.div>

               
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <motion.div
                        whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        style={{ position: 'relative', zIndex: 10, cursor: 'pointer', perspective: '1000px' }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div style={{ position: 'relative', width: '340px', height: '420px' }}>
                       
                            <div style={{ 
                                position: 'absolute', 
                                inset: '-1px', 
                                border: '1.5px solid var(--accent-gold)', 
                                borderRadius: '4px',
                                boxShadow: '0 0 25px rgba(243, 229, 171, 0.15)',
                                zIndex: 2,
                                pointerEvents: 'none'
                            }}></div>

                         
                            <div style={{ 
                                width: '100%', 
                                height: '100%', 
                                borderRadius: '4px',
                                background: 'linear-gradient(135deg, rgba(26, 9, 13, 0.8) 0%, rgba(10, 2, 4, 0.9) 100%)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(243, 229, 171, 0.1)',
                                padding: '1px',
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: '0 30px 70px rgba(0,0,0,0.8)'
                            }}>
                                <div style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    borderRadius: '2.5px', 
                                    overflow: 'hidden', 
                                    position: 'relative'
                                }}>
                                    <img
                                        src={profile}
                                        alt="Profile"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.05) brightness(1.02)' }}
                                    />
                                   
                                    <div style={{ 
                                        position: 'absolute', 
                                        inset: 0, 
                                        background: 'linear-gradient(to top, rgba(26, 9, 13, 0.4) 0%, transparent 40%)',
                                        zIndex: 1
                                    }} />
                                </div>
                                
                             
                                <div style={{ position: 'absolute', top: 15, left: 15, width: '20px', height: '20px', borderTop: '1px solid var(--accent-gold)', borderLeft: '1px solid var(--accent-gold)', opacity: 0.6 }}></div>
                                <div style={{ position: 'absolute', bottom: 15, right: 15, width: '20px', height: '20px', borderBottom: '1px solid var(--accent-gold)', borderRight: '1px solid var(--accent-gold)', opacity: 0.6 }}></div>
                            </div>
                        </div>

                       
                        <div style={{ 
                            position: 'absolute', 
                            top: '-15px', 
                            right: '-10px', 
                            background: 'rgba(166, 45, 67, 0.95)', 
                            color: 'var(--accent-gold)', 
                            padding: '6px 16px', 
                            borderRadius: '4px', 
                            fontSize: '9px', 
                            fontWeight: '800', 
                            textTransform: 'uppercase',
                            fontFamily: 'Fira Code',
                            letterSpacing: '2px',
                            zIndex: 20,
                            boxShadow: '0 0 15px rgba(166, 45, 67, 0.5), 0 5px 15px rgba(0,0,0,0.4)',
                            border: '1px solid var(--accent-gold)'
                        }}>
                            Verified Identity
                        </div>
                        <div style={{ 
                            position: 'absolute', 
                            bottom: '30px', 
                            left: '-40px', 
                            border: '1px solid var(--accent-gold)', 
                            padding: '4px 12px', 
                            borderRadius: '2px', 
                            fontSize: '8px', 
                            color: 'var(--accent-gold)', 
                            fontWeight: '500', 
                            textTransform: 'uppercase',
                            fontFamily: 'Fira Code',
                            letterSpacing: '3px',
                            zIndex: 20, 
                            transform: 'rotate(-90deg)',
                            opacity: 0.7
                        }}>
                            SIVA.DEV.2024
                        </div>
                    </motion.div>

                  
                    <motion.div 
                        style={{ 
                            position: 'absolute', 
                            width: '400px',
                            height: '400px',
                            background: 'radial-gradient(circle, rgba(139, 30, 63, 0.2) 0%, transparent 70%)',
                            filter: 'blur(50px)',
                            zIndex: 1,
                            pointerEvents: 'none',
                            x: auraX,
                            y: auraY
                        }}
                    />
                </motion.div>
            </div>

            <style>{`
                .hero-section {
                    padding-top: 100px;
                    padding-left: 8%;
                    padding-right: 8%;
                }

                @media (max-width: 1100px) {
                    .hero-section { padding-top: 120px; }
                    .hero-grid { grid-template-columns: 1fr; text-align: center; gap: 4rem; }
                    .hero-grid > div { display: flex; flex-direction: column; align-items: center; justify-content: center; }
                    .hero-grid > div:last-child { order: -1; }
                    .hero-name { font-size: clamp(1.8rem, 10vw, 3.5rem) !important; letter-spacing: -0.5px !important; }
                }

                @media (max-width: 768px) {
                    .hero-section { padding-left: 5%; padding-right: 5%; padding-top: 100px; }
                }

                @media (max-width: 600px) {
                    .hero-grid > div:last-child { transform: scale(0.8); }
                    .hero-name { 
                        font-size: clamp(1.6rem, 12vw, 2.8rem) !important; 
                        letter-spacing: -0.5px !important;
                        margin-bottom: 2rem !important;
                    }
                    .hero-section { padding-top: 90px; }
                }

                @media (max-width: 400px) {
                    .hero-grid > div:last-child { transform: scale(0.7); margin-bottom: -40px; }
                    .hero-name { font-size: 1.8rem !important; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
