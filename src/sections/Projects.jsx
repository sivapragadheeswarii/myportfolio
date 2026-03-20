import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const ProjectCard = ({ title, description, tags, github, live, image, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="cyber-card"
        style={{ border: '1px solid var(--glass-border)', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', background: 'rgba(10,10,10,0.95)' }}
        whileHover={{ y: -5, borderColor: 'var(--accent-primary)' }}
    >
        <div style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden', borderBottom: '1px solid var(--glass-border)' }}>
            <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7, filter: 'grayscale(0.3)' }} />
            <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '5px' }}>
                {tags.slice(0, 2).map(tag => (
                    <span key={tag} style={{ padding: '0.1rem 0.4rem', border: '1px solid var(--accent-primary)', color: 'var(--accent-primary)', fontSize: '0.6rem', fontWeight: 'bold', background: 'rgba(0,0,0,0.8)' }}>{tag}</span>
                ))}
            </div>
        </div>
        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
                <Code size={16} style={{ color: 'var(--accent-primary)' }} />
                <h3 style={{ fontSize: '1rem', letterSpacing: '1px', textTransform: 'uppercase' }}>{title}</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>{description}</p>
            <div style={{ display: 'flex', gap: '1.5rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
                <a href={github} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Github size={14} /> SRC_CODE
                </a>
                <a href={live} style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <ExternalLink size={14} /> LIVE_VIEW
                </a>
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "MERN_COMMERCE_ENGINE",
            description: "High-performance E-commerce platform with MERN architecture, Stripe integration, and real-time inventory tracking.",
            tags: ["MongoDB", "Express", "React", "Node"],
            github: "#",
            live: "#",
            // image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1932&auto=format&fit=crop",
            delay: 0.1
        },
        {
            title: "SOCKET_CHAT_UPLINK",
            description: "Real-time communication protocol built on MERN, featuring end-to-end encryption and WebSocket synchronization.",
            tags: ["Socket.io", "Express", "React"],
            github: "#",
            live: "#",
            // image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2070&auto=format&fit=crop",
            delay: 0.2
        },
        {
            title: "DATA_VISUAL_CORE",
            description: "Advanced analytics dashboard for MERN applications, visualising complex data streams via D3.js and Recharts.",
            tags: ["React", "D3.js", "Node"],
            github: "#",
            live: "#",
            // image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
            delay: 0.3
        }
    ];

    return (
        <section id="projects" className="section-padding" style={{ position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                <span style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 'bold' }}>// 05</span>
                <h2 style={{ fontSize: '2rem' }}>PROJECT_<span className="gradient-text">ARCHIVE</span></h2>
                <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
