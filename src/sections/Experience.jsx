import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Briefcase, Calendar, MapPin, Sparkles, ArrowRight, 
    CheckCircle2, Building2, Terminal, ChevronDown, ChevronUp, Layers, Award
} from 'lucide-react';

const experiences = [
    {
        id: 'sds',
        number: '01',
        role: "MERN Stack Developer",
        company: "SDS Technologies",
        period: "FEB 2026 - PRESENT",
        location: "Coimbatore, India",
        status: "CURRENT OPERATIONAL ROLE",
        statusColor: "#10B981", // Emerald live pulse
        type: "Full-Time Engineer",
        summary: "Architecting end-to-end full stack web applications, designing scalable backend microservices, and engineering dynamic React frontend user experiences.",
        highlights: [
            "Developing and maintaining full-stack enterprise web applications using MongoDB, Express, React, and Node.js.",
            "Designing scalable backend architectures with Node.js microservices for high-performance data operations.",
            "Implementing responsive, accessible, and high-fidelity frontend interfaces with React.js and modern state management."
        ],
        metrics: [
            { label: "Role Type", val: "Full Stack Developer" },
            { label: "Core Stack", val: "MERN Ecosystem" },
            { label: "Status", val: "Active Operational" }
        ],
        tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "REST API", "JavaScript ES6+"]
    },
    {
        id: 'glacier',
        number: '02',
        role: "MERN Stack Intern",
        company: "Glacier Technology",
        period: "MAR 2025 - JUL 2025",
        location: "Coimbatore, India",
        status: "COMPLETED INTERNSHIP",
        statusColor: "var(--accent-gold)",
        type: "Engineering Internship",
        summary: "Accelerated technical mastery through hands-on development of production-ready web modules, collaborative code reviews, and API integrations.",
        highlights: [
            "Gained extensive hands-on experience in full-stack web engineering across real-world client project modules.",
            "Assisted senior engineers in building dynamic React UI components and connecting frontend clients to Express backend APIs.",
            "Participated in daily standups, code reviews, and industry-standard version control workflows using Git & GitHub."
        ],
        metrics: [
            { label: "Role Type", val: "Engineering Intern" },
            { label: "Focus", val: "UI & REST APIs" },
            { label: "Status", val: "Successfully Completed" }
        ],
        tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Git", "Postman", "CSS3"]
    }
];

const Experience = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const toggleExpand = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    return (
        <section id="experience" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Radial Spotlight */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            {/* Section Header */}
            <div style={{ marginBottom: '4rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
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
                    PROFESSIONAL_<span className="gradient-text">SHOWCASE</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', fontFamily: 'Fira Code', letterSpacing: '1px', marginTop: '0.6rem' }}>
                    // 1+ YEARS OF HANDS-ON FULL STACK EXPERIENCE
                </p>
            </div>

            {/* Side-by-Side Dual Column Executive Cards Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2rem',
                position: 'relative',
                zIndex: 1
            }} className="ex-dual-grid">
                {experiences.map((exp, index) => {
                    const isExpanded = expandedCard === exp.id;
                    return (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            whileHover={{ y: -6 }}
                            style={{
                                background: 'rgba(11, 11, 16, 0.75)',
                                border: '1px solid rgba(212, 175, 55, 0.2)',
                                borderRadius: '24px',
                                padding: '2.5rem',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            {/* Top Gold Border Highlight Accent */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: '10%',
                                right: '10%',
                                height: '2px',
                                background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)'
                            }} />

                            <div>
                                {/* Top Header Ribbon */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span style={{
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            background: exp.statusColor,
                                            display: 'inline-block',
                                            boxShadow: `0 0 10px ${exp.statusColor}`
                                        }} />
                                        <span style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', letterSpacing: '2px', fontFamily: 'Fira Code', textTransform: 'uppercase' }}>
                                            {exp.status}
                                        </span>
                                    </div>
                                    <span style={{ fontSize: '1.4rem', color: 'rgba(212, 175, 55, 0.4)', fontFamily: 'Playfair Display', fontWeight: 'bold' }}>
                                        {exp.number}
                                    </span>
                                </div>

                                {/* Role Title & Company */}
                                <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', fontFamily: 'Playfair Display, serif', fontWeight: 'bold', margin: '0 0 8px 0' }}>
                                    {exp.role}
                                </h3>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.2rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FFFFFF', fontWeight: '500' }}>
                                        <Building2 size={15} style={{ color: 'var(--accent-gold)' }} />
                                        <span>{exp.company}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Fira Code', fontSize: '0.8rem' }}>
                                        <MapPin size={14} style={{ color: 'var(--accent-gold)' }} />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>

                                {/* Period Pill */}
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    background: 'rgba(212, 175, 55, 0.08)',
                                    border: '1px solid rgba(212, 175, 55, 0.2)',
                                    padding: '6px 16px',
                                    borderRadius: '20px',
                                    color: 'var(--accent-gold)',
                                    fontSize: '0.78rem',
                                    fontFamily: 'Fira Code, monospace',
                                    fontWeight: '600',
                                    marginBottom: '1.5rem'
                                }}>
                                    <Calendar size={14} />
                                    <span>{exp.period}</span>
                                </div>

                                {/* Executive Summary */}
                                <p style={{ fontSize: '0.92rem', color: '#CBD5E1', lineHeight: '1.65', fontWeight: '300', marginBottom: '1.8rem', borderLeft: '2px solid var(--accent-gold)', paddingLeft: '14px' }}>
                                    {exp.summary}
                                </p>

                                {/* Highlights list */}
                                <div style={{ marginBottom: '1.8rem' }}>
                                    <div style={{ fontSize: '0.68rem', color: 'var(--accent-gold)', letterSpacing: '2px', fontFamily: 'Fira Code', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                                        // KEY CONTRIBUTIONS
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                        {exp.highlights.slice(0, 2).map((point, i) => (
                                            <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                                <CheckCircle2 size={15} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }} />
                                                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', fontWeight: '300' }}>
                                                    {point}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Expandable Additional Highlight */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ overflow: 'hidden', marginBottom: '1.5rem' }}
                                        >
                                            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', background: 'rgba(212, 175, 55, 0.04)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.15)' }}>
                                                <CheckCircle2 size={15} style={{ color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
                                                <span style={{ fontSize: '0.85rem', color: '#FFFFFF', lineHeight: '1.5', fontWeight: '300' }}>
                                                    {exp.highlights[2]}
                                                </span>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div>
                                {/* Read More / Expand Toggle */}
                                <button
                                    onClick={() => toggleExpand(exp.id)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '6px',
                                        width: '100%',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid rgba(255, 255, 255, 0.08)',
                                        borderRadius: '12px',
                                        padding: '8px',
                                        color: 'var(--accent-gold)',
                                        fontSize: '0.75rem',
                                        fontFamily: 'Fira Code',
                                        cursor: 'pointer',
                                        marginBottom: '1.5rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <span>{isExpanded ? 'COLLAPSE DETAILS' : 'EXPAND FULL IMPACT'}</span>
                                    {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                </button>

                                {/* Tech Tags */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '1.2rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                                    {exp.tech.map((t, i) => (
                                        <span key={i} style={{
                                            fontSize: '0.72rem',
                                            color: 'var(--accent-gold)',
                                            background: 'rgba(212, 175, 55, 0.06)',
                                            padding: '4px 12px',
                                            borderRadius: '6px',
                                            border: '1px solid rgba(212, 175, 55, 0.18)',
                                            fontFamily: 'Fira Code, monospace'
                                        }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .ex-dual-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Experience;
