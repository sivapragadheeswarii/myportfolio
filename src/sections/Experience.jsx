import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, MapPin, Activity } from 'lucide-react';

const ExperienceCard = ({ company, role, period, location, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="cyber-card"
        style={{ marginBottom: '2rem', border: '1px solid var(--glass-border)', borderLeft: '4px solid var(--accent-secondary)' }}
    >
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-primary)', marginBottom: '0.3rem' }}>{role}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)', fontSize: '0.8rem' }}>
                    <Briefcase size={14} />
                    <span>{company}</span>
                </div>
            </div>
            <div style={{ textAlign: 'right', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'flex-end', marginBottom: '0.3rem' }}>
                    <Calendar size={14} />
                    <span>{period}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'flex-end' }}>
                    {/* <MapPin size={14} /> */}
                    <span>{location}</span>
                </div>
            </div>
        </div>
        <div style={{ borderTop: '1px dashed var(--glass-border)', paddingTop: '1rem' }}>
            {description.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.8rem', marginBottom: '0.6rem', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    <span style={{ color: 'var(--accent-secondary)' }}></span>
                    <span>{item}</span>
                </div>
            ))}
        </div>
    </motion.div>
);

const Experience = () => {
    const experiences = [
        {
            company: 'SDS Technologies',
            role: 'WEB_ENGINEER_STABLE',
            period: 'MAR 2026 - PRESENT',
        
            description: [
                'Architecting scalable full-stack applications using the MERN ecosystem.',
                'Designing and implementing secure RESTful APIs with Node.js and Express.',
                'Managing MongoDB database schemas and optimizing complex aggregations.',
                'Developing dynamic, responsive user interfaces with React and Redux.'
            ],
            delay: 0.1
        },
        {
            company: 'Glacier Technology',
            role: 'MERN_DEV_INTERN',
            period: 'MAR 2025 - JUL 2025',
            location: 'COIMBATORE, IN',
            description: [
                'Assisted in the development of MERN-based internal management tools.',
                'Collaborated on frontend component libraries using React and Tailwind.',
                'Participated in API documentation and testing using Postman.'
            ],
            delay: 0.2
        }
    ];

    return (
        <section id="experience" className="section-padding">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                <span style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 'bold' }}>// 04</span>
                <h2 style={{ fontSize: '2rem' }}>CAREER_<span className="gradient-text">PATHWAY</span></h2>
                <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 350px', gap: '4rem', alignItems: 'start' }}>
                <div style={{ maxWidth: '800px' }}>
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ position: 'sticky', top: '100px' }}
                >
                    <div className="cyber-card" style={{ padding: '1.5rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--accent-primary)', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)', animation: 'scan 2s linear infinite' }}></div>
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', pb: '0.8rem' }}>
                            <Activity size={18} style={{ color: 'var(--accent-primary)' }} />
                            <span style={{ fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '2px', color: 'var(--accent-primary)' }}>DEV_STATUS: ACTIVE</span>
                        </div>

                        <div style={{ fontFamily: 'Fira Code, monospace', fontSize: '0.7rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            <div style={{ color: 'var(--accent-secondary)' }}>$ npm run deploy:production</div>
                            <div style={{ color: '#4dff88', marginBottom: '0.5rem' }}>&gt; Initializing MERN build...</div>
                            <div>&gt; Processing assets... [DONE]</div>
                            <div>&gt; Optimizing DB queries... [DONE]</div>
                            <div style={{ color: 'var(--accent-primary)' }}>&gt; Injecting security headers...</div>
                            <div style={{ marginTop: '1rem' }}>
                                <motion.div 
                                    animate={{ opacity: [1, 0.4, 1] }} 
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    style={{ display: 'inline-block', width: '8px', height: '14px', background: 'var(--accent-primary)', verticalAlign: 'middle' }}
                                />
                            </div>
                        </div>

                        <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                            {['JS', 'RE', 'ND', 'MG', 'EX', 'AW'].map(tech => (
                                <div key={tech} style={{ border: '1px solid var(--glass-border)', padding: '0.5rem', textAlign: 'center', fontSize: '0.6rem', color: 'var(--accent-primary)', background: 'rgba(179, 0, 0, 0.05)' }}>
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
