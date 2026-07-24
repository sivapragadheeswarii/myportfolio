import React from 'react';
import { motion } from 'framer-motion';
import { 
    Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, 
    Award, ArrowRight, Terminal
} from 'lucide-react';

const experiences = [
    {
        role: "MERN Stack Developer",
        company: "SDS Technologies",
        period: "FEB 2026 - PRESENT",
        location: "Coimbatore, India",
        status: "CURRENT OPERATIONAL ROLE",
        statusColor: "#10B981", // Emerald active dot
        type: "Full-Time Engineer",
        summary: "Architecting end-to-end web software solutions, designing scalable database models, and implementing high-throughput REST APIs.",
        highlights: [
            "Developing and maintaining full-stack enterprise web applications using MongoDB, Express, React, and Node.js.",
            "Designing scalable backend architectures with Node.js microservices for high-performance data operations.",
            "Crafting responsive, accessible, and high-fidelity frontend interfaces with React.js and modern state management."
        ],
        metrics: [
            { label: "Core Tech", value: "MERN Stack" },
            { label: "Architecture", value: "RESTful / Microservices" },
            { label: "Code Quality", value: "Clean & Modular" }
        ],
        tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "REST API", "JavaScript ES6+"]
    },
    {
        role: "MERN Stack Intern",
        company: "Glacier Technology",
        period: "MAR 2025 - JUL 2025",
        location: "Coimbatore, India",
        status: "COMPLETED INTERNSHIP",
        statusColor: "var(--accent-gold)",
        type: "Engineering Internship",
        summary: "Accelerated technical mastery through hands-on development of production-ready web modules and team collaboration.",
        highlights: [
            "Gained extensive hands-on experience in full-stack web engineering across real-world client project modules.",
            "Assisted senior engineers in building dynamic React UI components and connecting frontend clients to Express backend APIs.",
            "Participated in rigorous code reviews, debugging sessions, and industry-standard version control workflows."
        ],
        metrics: [
            { label: "Focus", value: "Full Stack UI/API" },
            { label: "Workflow", value: "Git & Agile" },
            { label: "Testing", value: "Postman Suite" }
        ],
        tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Git", "Postman", "CSS3"]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Ambient Glow */}
            <div style={{
                position: 'absolute',
                top: '25%',
                left: '-8%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            {/* Section Header */}
            <div style={{ marginBottom: '4.5rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--accent-gold)',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    letterSpacing: '3px',
                    fontFamily: 'Fira Code',
                    marginBottom: '0.8rem',
                    background: 'rgba(212, 175, 55, 0.08)',
                    padding: '6px 18px',
                    borderRadius: '20px',
                    border: '1px solid rgba(212, 175, 55, 0.2)'
                }}>
                    <Sparkles size={13} />
                    <span>CAREER_TRAJECTORY</span>
                </div>
                <h2 style={{ fontSize: 'clamp(2.3rem, 5vw, 3.5rem)', fontWeight: 'bold', color: '#FFFFFF', fontFamily: 'Playfair Display, serif', margin: '0.4rem 0' }}>
                    PROFESSIONAL_<span className="gradient-text">JOURNEY</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', fontFamily: 'Fira Code', letterSpacing: '1px', marginTop: '0.6rem' }}>
                    // 1+ YEARS OF HANDS-ON FULL STACK EXPERIENCE
                </p>
            </div>

            {/* Timeline Container */}
            <div style={{ maxWidth: '920px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                {/* Glowing Vertical Timeline Conduit Line */}
                <div style={{
                    position: 'absolute',
                    left: '24px',
                    top: '20px',
                    bottom: '40px',
                    width: '2px',
                    background: 'linear-gradient(to bottom, var(--accent-gold), rgba(212, 175, 55, 0.2) 80%, transparent)',
                    boxShadow: '0 0 12px rgba(212, 175, 55, 0.4)'
                }} className="ex-timeline-line" />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                            style={{ position: 'relative', paddingLeft: '70px' }}
                            className="ex-card-wrapper"
                        >
                            {/* Glowing Timeline Node Dot */}
                            <div style={{
                                position: 'absolute',
                                left: '13px',
                                top: '32px',
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                background: 'var(--bg-primary)',
                                border: '2px solid var(--accent-gold)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 0 16px rgba(212, 175, 55, 0.6)',
                                zIndex: 2
                            }} className="ex-node-dot">
                                <div style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: exp.statusColor,
                                    boxShadow: `0 0 8px ${exp.statusColor}`
                                }} />
                            </div>

                            {/* Main Glassmorphic Experience Card */}
                            <motion.div
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    background: 'rgba(11, 11, 16, 0.7)',
                                    border: '1px solid rgba(212, 175, 55, 0.18)',
                                    borderRadius: '24px',
                                    padding: '2.4rem',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    boxShadow: '0 20px 45px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Top Accent Light Reflect Line */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: '10%',
                                    right: '10%',
                                    height: '1px',
                                    background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.4), transparent)'
                                }} />

                                {/* Card Header */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.2rem', marginBottom: '1.5rem' }}>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                                            <span style={{
                                                width: '7px',
                                                height: '7px',
                                                borderRadius: '50%',
                                                background: exp.statusColor,
                                                display: 'inline-block',
                                                boxShadow: `0 0 8px ${exp.statusColor}`
                                            }} />
                                            <span style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', letterSpacing: '2px', fontFamily: 'Fira Code', textTransform: 'uppercase' }}>
                                                {exp.status}
                                            </span>
                                        </div>

                                        <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', fontFamily: 'Playfair Display, serif', fontWeight: 'bold', margin: '0 0 6px 0' }}>
                                            {exp.role}
                                        </h3>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FFFFFF', fontWeight: '500' }}>
                                                <Briefcase size={15} style={{ color: 'var(--accent-gold)' }} />
                                                <span>{exp.company}</span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Fira Code', fontSize: '0.8rem' }}>
                                                <MapPin size={14} style={{ color: 'var(--accent-gold)' }} />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Date Badge */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        background: 'rgba(212, 175, 55, 0.08)',
                                        border: '1px solid rgba(212, 175, 55, 0.2)',
                                        padding: '8px 18px',
                                        borderRadius: '20px',
                                        color: 'var(--accent-gold)',
                                        fontSize: '0.78rem',
                                        fontFamily: 'Fira Code, monospace',
                                        fontWeight: '600'
                                    }}>
                                        <Calendar size={14} />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                <p style={{ fontSize: '0.94rem', color: '#CBD5E1', lineHeight: '1.7', fontWeight: '300', marginBottom: '1.8rem', borderLeft: '2px solid rgba(212, 175, 55, 0.3)', paddingLeft: '14px' }}>
                                    {exp.summary}
                                </p>

                                {/* Highlights Bullets */}
                                <div style={{ marginBottom: '2rem' }}>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', letterSpacing: '2px', fontFamily: 'Fira Code', textTransform: 'uppercase', marginBottom: '1rem' }}>
                                        // KEY CONTRIBUTIONS & IMPACT
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                                        {exp.highlights.map((point, i) => (
                                            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                                                    <ArrowRight size={12} style={{ color: 'var(--accent-gold)' }} />
                                                </div>
                                                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', fontWeight: '300' }}>
                                                    {point}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Experience Metrics Ribbon */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                    gap: '1rem',
                                    marginBottom: '1.8rem',
                                    background: 'rgba(5, 5, 10, 0.45)',
                                    padding: '12px 18px',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(255, 255, 255, 0.04)'
                                }} className="ex-metrics-ribbon">
                                    {exp.metrics.map((m, i) => (
                                        <div key={i} style={{ textAlign: 'center' }}>
                                            <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontFamily: 'Fira Code', textTransform: 'uppercase', marginBottom: '3px' }}>{m.label}</div>
                                            <div style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>{m.value}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Tech Tags */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '1.2rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                                    {exp.tech.map((t, i) => (
                                        <span key={i} style={{
                                            fontSize: '0.72rem',
                                            color: 'var(--accent-gold)',
                                            background: 'rgba(212, 175, 55, 0.06)',
                                            padding: '5px 14px',
                                            borderRadius: '6px',
                                            border: '1px solid rgba(212, 175, 55, 0.18)',
                                            fontFamily: 'Fira Code, monospace'
                                        }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .ex-timeline-line { left: 16px !important; }
                    .ex-node-dot { left: 5px !important; }
                    .ex-card-wrapper { padding-left: 42px !important; }
                    .ex-metrics-ribbon { grid-template-columns: 1fr !important; gap: 0.8rem !important; }
                }
            `}</style>
        </section>
    );
};

export default Experience;
