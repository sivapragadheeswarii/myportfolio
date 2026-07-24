import React from 'react';
import { motion } from 'framer-motion';
import { 
    Briefcase, Calendar, ChevronRight
} from 'lucide-react';

const ExperienceCard = ({ role, company, period, description, tech, index }) => (
    <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
        className="experience-card"
        style={{
            background: 'rgba(10, 10, 10, 0.45)',
            border: '1px solid var(--glass-border)',
            borderRadius: '20px',
            padding: '2.2rem',
            marginBottom: '2.5rem',
            position: 'relative',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
        }}
    >
        {/* Timeline Bullet */}
        <div className="timeline-bullet" style={{
            position: 'absolute',
            left: '-49px',
            top: '35px',
            width: '20px',
            height: '20px',
            background: 'var(--bg-primary)',
            border: '2px solid var(--accent-gold)',
            borderRadius: '50%',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 10px rgba(197, 160, 89, 0.3)'
        }}>
            <div style={{ width: '6px', height: '6px', background: 'var(--accent-gold)', borderRadius: '50%' }}></div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.2rem', marginBottom: '1.8rem' }}>
            <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#FFFFFF', fontFamily: 'Playfair Display' }}>{role}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', marginTop: '4px', fontSize: '0.9rem', fontWeight: '600', fontFamily: 'Fira Code' }}>
                    <Briefcase size={14} />
                    {company}
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.02)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.75rem', border: '1px solid rgba(197, 160, 89, 0.1)', fontFamily: 'Fira Code' }}>
                <Calendar size={14} style={{ color: 'var(--accent-gold)' }} />
                {period}
            </div>
        </div>

        <ul style={{ paddingLeft: '0', listStyle: 'none', marginBottom: '2rem' }}>
            {description.map((point, i) => (
                <li key={i} style={{ display: 'flex', gap: '12px', marginBottom: '0.8rem', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', fontWeight: '300' }}>
                    <ChevronRight size={16} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '4px' }} />
                    {point}
                </li>
            ))}
        </ul>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', borderTop: '1px solid rgba(197, 160, 89, 0.1)', paddingTop: '1.5rem' }}>
            {tech.map((t, i) => (
                <span key={i} style={{ fontSize: '0.65rem', color: 'var(--accent-gold)', background: 'rgba(197, 160, 89, 0.04)', padding: '4px 12px', borderRadius: '4px', border: '1px solid rgba(197, 160, 89, 0.15)', fontFamily: 'Fira Code' }}>
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
                <div style={{ color: 'var(--accent-gold)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '4px', marginBottom: '1rem', fontFamily: 'Fira Code' }}>
                    CAREER_TRAJECTORY
                </div>
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#FFFFFF' }}>
                    PROFESSIONAL_<span className="gradient-text">JOURNEY</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.8rem', fontFamily: 'Fira Code', letterSpacing: '1px' }}>
                    // 1+ YEARS OF HANDS-ON FULL STACK EXPERIENCE
                </p>
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
                    max-width: 850px;
                    margin: 0 auto;
                    position: relative;
                }

                .timeline-axis {
                    position: absolute;
                    left: 2px;
                    top: 10px;
                    bottom: 20px;
                    width: 1px;
                    background: linear-gradient(to bottom, transparent, rgba(197, 160, 89, 0.4) 15%, rgba(197, 160, 89, 0.4) 85%, transparent);
                    opacity: 0.5;
                }

                .experience-card {
                    margin-left: 50px;
                }

                @media (max-width: 768px) {
                    .experience-card {
                        margin-left: 36px;
                        padding: 1.8rem !important;
                    }
                    .timeline-bullet {
                        left: -37px !important;
                        width: 18px !important;
                        height: 18px !important;
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
                        margin-left: 28px;
                        padding: 1.4rem !important;
                    }
                    .timeline-bullet {
                        left: -30px !important;
                        width: 14px !important;
                        height: 14px !important;
                    }
                    .timeline-bullet > div {
                        width: 4px !important;
                        height: 4px !important;
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
