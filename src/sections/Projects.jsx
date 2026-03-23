import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import sdsTechImg from '../assets/projects/sds_tech.png';

const ProjectCard = ({ title, description, tags, github, live, image, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="cyber-card"
        style={{ border: '1px solid var(--glass-border)', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', background: 'rgba(31, 4, 7, 0.9)', backdropFilter: 'blur(10px)' }}
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
            title: "SDS_OFFICIAL_PORTAL",
            description: "The official corporate website for SDS Technologies, a software powerhouse. Built with a full-stack MERN architecture and Tailwind CSS for high-performance service delivery and client engagement.",
            tags: ["React", "Node", "MongoDB", "Tailwind"],
            github: "https://github.com/sivapragadheeswarii/sds",
            live: "https://sds-24l4.vercel.app/",
            image: sdsTechImg,
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

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }} className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>

            <style>{`
                @media (max-width: 600px) {
                    .projects-grid { gap: 1.5rem !important; grid-template-columns: 1fr !important; }
                    .cyber-card h3 { font-size: 0.9rem !important; }
                    .cyber-card a { padding: 0.6rem 0 !important; width: 50%; justify-content: center; border: 1px solid rgba(255,255,255,0.05); border-radius: 4px; }
                }
            `}</style>
        </section>
    );
};

export default Projects;
