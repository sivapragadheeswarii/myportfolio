import React from 'react';
import { motion } from 'framer-motion';
import { 
    Briefcase, Calendar, ChevronRight, 
    Shield, Layers
} from 'lucide-react';

const ExperienceCard = ({ role, company, period, description, tech, index }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="experience-card"
        style={{
            background: 'rgba(25, 4, 7, 0.4)',
            border: '1px solid rgba(114, 47, 55, 0.2)',
            borderRadius: '16px',
            padding: '2rem',
            marginBottom: '2rem',
            position: 'relative',
            backdropFilter: 'blur(10px)',
        }}
    >
        {/* Timeline Bullet */}
        <div className="timeline-bullet" style={{
            position: 'absolute',
            left: '-48px',
            top: '32px',
            width: '24px',
            height: '24px',
            background: 'var(--bg-primary)',
            border: '2px solid var(--accent-primary)',
            borderRadius: '50%',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{ width: '8px', height: '8px', background: 'var(--accent-primary)', borderRadius: '50%' }}></div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>{role}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-primary)', marginTop: '4px', fontSize: '0.9rem', fontWeight: '600' }}>
                    <Briefcase size={14} />
                    {company}
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.03)', padding: '6px 12px', borderRadius: '20px', fontSize: '0.75rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                <Calendar size={14} />
                {period}
            </div>
        </div>

        <ul style={{ paddingLeft: '0', listStyle: 'none', marginBottom: '2rem' }}>
            {description.map((point, i) => (
                <li key={i} style={{ display: 'flex', gap: '12px', marginBottom: '0.8rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    <ChevronRight size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '4px' }} />
                    {point}
                </li>
            ))}
        </ul>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}>
            {tech.map((t, i) => (
                <span key={i} style={{ fontSize: '0.65rem', color: 'var(--accent-gold)', background: 'rgba(255,204,0,0.05)', padding: '4px 10px', borderRadius: '4px', border: '1px solid rgba(219, 182, 11, 0.2)', fontFamily: 'Fira Code' }}>
                    {t}
                </span>
            ))}
        </div>
    </motion.div>
);

const Experience = () => {
    const experiences = [
        {
            role: "MERN Stack Developer",
            company: "SDS Technologies",
            period: "FEB 2026 - PRESENT",
            description: [
                "Developing and maintaining full-stack web applications using the MERN ecosystem.",
                "Designing scalable backend architectures with Node.js and MongoDB for high-performance data handling.",
                "Implementing responsive and interactive frontend interfaces using React.js and modern CSS frameworks."
            ],
            tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "REST API"]
        },
        {
            role: "MERN Stack Intern",
            company: "Glacier Technology, Coimbatore",
            period: "MAR 2025 - JUL 2025",
            description: [
                "Gained hands-on experience in full-stack development through real-world project modules.",
                "Assisted in building UI components and integrating frontend with backend services.",
                "Participated in code reviews and learned industry-standard development workflows."
            ],
            tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Git", "Postman"]
        }
    ];

    return (
        <section id="experience" className="section-padding" style={{ position: 'relative' }}>
            <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
                <div style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '3px', marginBottom: '1rem' }}>
                    CAREER_TRAJECTORY
                </div>
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                    PROFESSIONAL_<span className="gradient-text">JOURNEY</span>
                </h2>
            </div>

            <div className="experience-container">
                {/* Timeline Axis */}
                <div className="timeline-axis"></div>

                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} {...exp} index={index} />
                ))}
            </div>

            <style>{`
                .experience-container {
                    max-width: 900px;
                    margin: 0 auto;
                    position: relative;
                }

                .timeline-axis {
                    position: absolute;
                    left: 2px;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: linear-gradient(to bottom, transparent, var(--accent-primary), transparent);
                    opacity: 0.3;
                }

                .experience-card {
                    margin-left: 52px;
                }

                @media (max-width: 768px) {
                    .experience-card {
                        margin-left: 35px;
                        padding: 1.5rem !important;
                    }
                    .timeline-bullet {
                        left: -38px !important;
                        width: 20px !important;
                        height: 20px !important;
                    }
                    .timeline-axis {
                       left: 10px !important;
                    }
                    section h2 {
                        font-size: 2.2rem !important;
                    }
                }

                @media (max-width: 480px) {
                    .experience-card {
                        margin-left: 25px;
                        padding: 1.2rem !important;
                    }
                    .timeline-bullet {
                        left: -32px !important;
                        width: 16px !important;
                        height: 16px !important;
                    }
                    .timeline-bullet > div {
                        width: 6px !important;
                        height: 6px !important;
                    }
                    .timeline-axis {
                        left: 10px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Experience;
