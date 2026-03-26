import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                <span style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 'bold' }}>// 02</span>
                <h2 style={{ fontSize: '2rem' }}>SOURCE_<span className="gradient-text">PROFILE</span></h2>
                <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="about-grid">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="cyber-card" style={{ marginBottom: '2rem' }}>
                        <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            <span style={{ color: 'var(--accent-primary)' }}>[INFO]</span> MERN Stack Architect specializing in high-performance web applications and scalable backend systems.
                            My methodology focuses on robust data modeling and high-fidelity frontend integration.
                            Currently operational at <span style={{ color: 'var(--accent-primary)' }}>SDS Technologies</span>.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem', flexWrap: 'wrap' }} className="about-stats">
                        {[
                            { label: 'EXPERIENCE', value: '1.5Y+' },
                            { label: 'DEPLOYMENTS', value: '15+' },
                            { label: 'CLIENTS', value: '08+' }
                        ].map((stat, i) => (
                            <div key={i} style={{ minWidth: '100px' }}>
                                <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-primary)', marginBottom: '0.2rem' }}>{stat.value}</h3>
                                <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', letterSpacing: '1px' }}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ padding: '2rem', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.02)', position: 'relative' }}
                    className="about-info-card"
                >
                    <div style={{ position: 'absolute', top: '-1px', left: '20%', width: '60%', height: '2px', background: 'var(--accent-primary)' }}></div>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                        My development pipeline revolves around the core MERN stack, leveraging the React ecosystem for dynamic UIs and Node.js for high-throughput API services. 
                        I prioritize type safety, modular component architecture, and database performance.
                        Beyond the code, I focus on solving complex architectural puzzles and engineering seamless user journeys.
                    </p>
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
                    .about-stats { justify-content: center; text-align: center; gap: 1.5rem !important; }
                    .about-info-card { padding: 1.5rem !important; }
                }
                @media (max-width: 600px) {
                    .about-grid h2 { font-size: 1.8rem !important; }
                    .cyber-card p { font-size: 0.9rem !important; }
                    .about-info-card p { font-size: 0.85rem !important; }
                    .about-stats div h3 { font-size: 1.5rem !important; }
                }
            `}</style>
        </section>
    );
};

export default About;
