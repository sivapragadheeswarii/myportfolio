import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Server, Settings, ShieldCheck, Zap } from 'lucide-react';

const SkillModule = ({ icon: Icon, title, skills, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="cyber-card"
        style={{ transition: 'all 0.3s ease', border: '1px solid var(--glass-border)', borderLeft: '3px solid var(--accent-primary)' }}
        whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(179, 0, 0, 0.15)', borderColor: 'var(--accent-primary)' }}
    >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
            <Icon size={20} style={{ color: 'var(--accent-primary)' }} />
            <h3 style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>{title}</h3>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {skills.map((skill) => (
                <span key={skill} style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '0.2rem 0.5rem', fontSize: '0.7rem', color: 'var(--text-secondary)', background: 'rgba(0,0,0,0.3)' }}>
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const categories = [
        { icon: Layout, title: 'UI_ARCHITECTURE', skills: ['React.js', 'Redux Toolkit', 'Framer Motion', 'Tailwind CSS'], delay: 0.1 },
        { icon: Server, title: 'BACKEND_ENGINE', skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Socket.io'], delay: 0.2 },
        { icon: Database, title: 'MODERN_LOGIC', skills: ['MongoDB', 'Mongoose', 'Indexing', 'PostgreSQL'], delay: 0.3 },
        { icon: Settings, title: 'DEV_UTILITIES', skills: ['Git', 'Postman', 'Vite','AWS'], delay: 0.4 },
        { icon: ShieldCheck, title: 'AUTH_SECURITY', skills: ['JWT', 'Bcrypt', 'CORS','Input Validation','Helmet'], delay: 0.5 },
        { icon: Zap, title: 'PERFORMANCE_OPT', skills: ['Lazy Loading', 'Caching', 'Asset Minification', 'CDN'], delay: 0.6 },
        { icon: Server, title: 'CLOUD_DEPLOY', skills: ['AWS', 'Vercel', 'Netlify', 'Docker'], delay: 0.7 },
        { icon: Settings, title: 'TESTING_SUITE', skills: ['Jest', 'Cypress', 'Mocha', 'Postman'], delay: 0.8 },
       
    ];

    return (
        <section id="skills" className="section-padding" style={{ background: 'rgba(0,0,0,0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2rem' }}>TECH_<span className="gradient-text">MODULES</span></h2>
                <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></div>
                <span style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 'bold' }}>// 03</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                {categories.map((cat, index) => (
                    <SkillModule key={cat.title} {...cat} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
