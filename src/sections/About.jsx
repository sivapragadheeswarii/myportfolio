import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedStat = ({ label, value }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        
        const numericStr = value.replace(/[^0-9.]/g, '');
        const targetVal = parseFloat(numericStr);
        const hasDecimals = value.includes('.');
        
        const duration = 1200; // ms
        const startTime = performance.now();

        const animate = (timestamp) => {
            const runtime = timestamp - startTime;
            const progress = Math.min(runtime / duration, 1);
            const ease = progress * (2 - progress);
            const current = ease * targetVal;

            if (hasDecimals) {
                setCount(parseFloat(current.toFixed(1)));
            } else {
                setCount(Math.floor(current));
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Ensure precise target value at completion
                setCount(targetVal);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, value]);

    const suffix = value.replace(/[0-9.]/g, '');

    return (
        <div ref={ref} style={{ minWidth: '100px' }}>
            <h3 style={{ fontSize: '2.2rem', color: 'var(--accent-gold)', marginBottom: '0.2rem', fontFamily: 'Playfair Display', fontWeight: 'bold' }}>
                {count}{suffix}
            </h3>
            <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', letterSpacing: '2px', fontFamily: 'Fira Code' }}>{label}</p>
        </div>
    );
};

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ position: 'relative' }}>
            <div style={{ marginBottom: '3.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-gold)', marginBottom: '0.6rem' }}>
                    <div style={{ width: '40px', height: '1px', background: 'currentColor' }}></div>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '3px', fontFamily: 'Fira Code' }}>SOURCE_PROFILE</span>
                </div>
                <h2 style={{ fontSize: 'clamp(2.3rem, 5vw, 3.4rem)', fontWeight: 'bold', color: '#FFFFFF', margin: 0, fontFamily: 'Playfair Display, serif', letterSpacing: '-0.5px' }}>
                    ABOUT_<span className="gradient-text">BIOGRAPHY</span>
                </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="about-grid">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="cyber-card" style={{ marginBottom: '2.5rem', background: 'rgba(10, 10, 10, 0.5)' }}>
                        <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-secondary)', fontWeight: '300' }}>
                            <span style={{ color: 'var(--accent-gold)', fontFamily: 'Fira Code', fontSize: '0.8rem', marginRight: '6px' }}>[INFO]</span> 
                            MERN Stack Architect specializing in high-performance web applications and scalable backend systems. My methodology focuses on robust data modeling and high-fidelity frontend integration. Currently operational at <span style={{ color: '#FFFFFF', fontWeight: '500' }}>SDS Technologies</span>.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '2.5rem', marginTop: '3rem', flexWrap: 'wrap' }} className="about-stats">
                        <AnimatedStat label="EXPERIENCE" value="1+ Yrs" />
                        <AnimatedStat label="DEPLOYMENTS" value="15+" />
                        <AnimatedStat label="CLIENTS" value="08+" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                    style={{ padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--glass-border)', background: 'rgba(10,10,10,0.3)', position: 'relative', backdropFilter: 'blur(10px)' }}
                    className="about-info-card"
                >
                    <div style={{ position: 'absolute', top: '-1px', left: '15%', width: '70%', height: '1.5px', background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)' }}></div>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-secondary)', fontWeight: '300' }}>
                        My development pipeline revolves around the core MERN stack, leveraging the React ecosystem for dynamic UIs and Node.js for high-throughput API services. I prioritize type safety, modular component architecture, and database performance. 
                    </p>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-secondary)', fontWeight: '300', marginTop: '1.2rem' }}>
                        Beyond the code, I focus on solving complex architectural puzzles, optimizing memory consumption, and engineering seamless, elegant user journeys that leave a lasting impression.
                    </p>
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
                    .about-stats { justify-content: center; text-align: center; gap: 2rem !important; }
                    .about-info-card { padding: 1.8rem !important; }
                }
                @media (max-width: 600px) {
                    .about-grid h2 { 
                        font-size: clamp(1.4rem, 10vw, 2.2rem) !important; 
                        overflow-wrap: break-word;
                    }
                    .cyber-card p { font-size: 0.9rem !important; }
                    .about-info-card p { font-size: 0.85rem !important; }
                    .about-stats div h3 { font-size: 1.8rem !important; }
                }
                @media (max-width: 400px) {
                    .about-grid h2 { font-size: 1.6rem !important; }
                }
            `}</style>
        </section>
    );
};

export default About;
