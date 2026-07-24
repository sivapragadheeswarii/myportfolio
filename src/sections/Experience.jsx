import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Briefcase, Calendar, MapPin, Sparkles, ArrowRight, 
    CheckCircle2, Building2, Layers, Award, Terminal
} from 'lucide-react';

const experiences = [
    {
        id: 'sds',
        role: "MERN Stack Developer",
        company: "SDS Technologies",
        period: "FEB 2026 - PRESENT",
        location: "Coimbatore, India",
        status: "ACTIVE OPERATIONAL ROLE",
        statusColor: "#10B981", // Emerald live pulse
        type: "Full-Time Software Engineer",
        summary: "Leading end-to-end full stack web application development, designing scalable microservices backend architectures, and crafting responsive frontend user experiences.",
        kpis: [
            { label: "Architecture", val: "Microservices & REST" },
            { label: "Core Stack", val: "MERN Ecosystem" },
            { label: "Code Reliability", val: "100% Production Ready" }
        ],
        highlights: [
            "Architected and maintained full-stack web applications using React.js, Node.js, Express, and MongoDB.",
            "Engineered high-throughput RESTful API microservices to handle complex business logic and database CRUD flows.",
            "Implemented responsive, modern glassmorphic UIs with state management, custom hooks, and framer-motion animations.",
            "Optimized MongoDB data schemas and aggregation queries for maximum read/write performance."
        ],
        tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "REST API", "JavaScript ES6+"]
    },
    {
        id: 'glacier',
        role: "MERN Stack Intern",
        company: "Glacier Technology",
        period: "MAR 2025 - JUL 2025",
        location: "Coimbatore, India",
        status: "COMPLETED INTERNSHIP",
        statusColor: "var(--accent-gold)",
        type: "Engineering Internship",
        summary: "Accelerated engineering proficiency through real-world client project modules, collaborative code reviews, and full-stack component integration.",
        kpis: [
            { label: "Focus Domain", val: "Full Stack Development" },
            { label: "Workflow", val: "Git Version Control" },
            { label: "API Testing", val: "Postman Suite" }
        ],
        highlights: [
            "Developed responsive user interface components using React.js and integrated them seamlessly with Express backend endpoints.",
            "Assisted in structuring MongoDB collections and writing clean, reusable backend controller functions.",
            "Participated in daily standups, code reviews, and industry-standard version control pipelines using Git & GitHub."
        ],
        tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Git", "Postman", "CSS3"]
    }
];

const Experience = () => {
    const [activeTab, setActiveTab] = useState(experiences[0].id);
    const activeExp = experiences.find(e => e.id === activeTab);

    return (
        <section id="experience" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Ambient Glow Accent */}
            <div style={{
                position: 'absolute',
                top: '30%',
                right: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            {/* Section Header */}
            <div style={{ marginBottom: '3.5rem', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-gold)', marginBottom: '0.6rem' }}>
                    <div style={{ width: '40px', height: '1px', background: 'currentColor' }}></div>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '3px', fontFamily: 'Fira Code' }}>CAREER_TRAJECTORY</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
                    <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 'bold', color: '#FFFFFF', margin: 0, fontFamily: 'Playfair Display, serif' }}>
                        PROFESSIONAL_<span className="gradient-text">DOSSIER</span>
                    </h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.8rem', fontFamily: 'Fira Code' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 10px #10B981' }} />
                        <span>1+ YEARS HANDS-ON EXPERIENCE</span>
                    </div>
                </div>
            </div>

            {/* Role Navigation Selector Tabs */}
            <div style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '2.5rem',
                flexWrap: 'wrap',
                position: 'relative',
                zIndex: 1
            }}>
                {experiences.map((exp, idx) => {
                    const isActive = exp.id === activeTab;
                    return (
                        <button
                            key={exp.id}
                            onClick={() => setActiveTab(exp.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                background: isActive ? 'rgba(212, 175, 55, 0.12)' : 'rgba(12, 12, 18, 0.6)',
                                border: isActive ? '1px solid var(--accent-gold)' : '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '16px',
                                padding: '14px 24px',
                                cursor: 'pointer',
                                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                                backdropFilter: 'blur(12px)',
                                boxShadow: isActive ? '0 10px 25px rgba(212, 175, 55, 0.15)' : 'none'
                            }}
                        >
                            <span style={{
                                fontSize: '0.75rem',
                                color: isActive ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.4)',
                                fontFamily: 'Fira Code',
                                fontWeight: 'bold'
                            }}>
                                0{idx + 1}
                            </span>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '0.95rem', color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>
                                    {exp.company}
                                </div>
                                <div style={{ fontSize: '0.72rem', color: isActive ? 'var(--accent-gold)' : 'var(--text-secondary)', fontFamily: 'Fira Code' }}>
                                    {exp.role}
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Executive Dossier Card Container */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeExp.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        background: 'rgba(10, 10, 15, 0.75)',
                        border: '1px solid rgba(212, 175, 55, 0.22)',
                        borderRadius: '24px',
                        padding: '2.8rem',
                        backdropFilter: 'blur(24px)',
                        WebkitBackdropFilter: 'blur(24px)',
                        boxShadow: '0 30px 60px rgba(0, 0, 0, 0.75), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 1
                    }}
                >
                    {/* Top Gold Foil Accent */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: '8%',
                        right: '8%',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)'
                    }} />

                    {/* Header Strip */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                <span style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: activeExp.statusColor,
                                    display: 'inline-block',
                                    boxShadow: `0 0 10px ${activeExp.statusColor}`
                                }} />
                                <span style={{ fontSize: '0.72rem', color: 'var(--accent-gold)', letterSpacing: '2px', fontFamily: 'Fira Code', textTransform: 'uppercase' }}>
                                    {activeExp.status}
                                </span>
                            </div>

                            <h3 style={{ fontSize: '2rem', color: '#FFFFFF', fontFamily: 'Playfair Display, serif', fontWeight: 'bold', margin: '0 0 8px 0' }}>
                                {activeExp.role}
                            </h3>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FFFFFF', fontWeight: '500' }}>
                                    <Building2 size={16} style={{ color: 'var(--accent-gold)' }} />
                                    <span>{activeExp.company}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Fira Code', fontSize: '0.82rem' }}>
                                    <MapPin size={15} style={{ color: 'var(--accent-gold)' }} />
                                    <span>{activeExp.location}</span>
                                </div>
                            </div>
                        </div>

                        {/* Date & Type Badge */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: 'rgba(212, 175, 55, 0.08)',
                                border: '1px solid rgba(212, 175, 55, 0.22)',
                                padding: '8px 20px',
                                borderRadius: '20px',
                                color: 'var(--accent-gold)',
                                fontSize: '0.8rem',
                                fontFamily: 'Fira Code, monospace',
                                fontWeight: '600'
                            }}>
                                <Calendar size={15} />
                                <span>{activeExp.period}</span>
                            </div>
                            <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontFamily: 'Fira Code' }}>
                                {activeExp.type}
                            </span>
                        </div>
                    </div>

                    {/* Executive Summary Quote */}
                    <div style={{
                        background: 'rgba(212, 175, 55, 0.03)',
                        borderLeft: '3px solid var(--accent-gold)',
                        padding: '1.2rem 1.6rem',
                        borderRadius: '0 14px 14px 0',
                        marginBottom: '2.4rem'
                    }}>
                        <p style={{ fontSize: '0.96rem', color: '#CBD5E1', lineHeight: '1.7', fontWeight: '300', margin: 0, fontStyle: 'italic' }}>
                            "{activeExp.summary}"
                        </p>
                    </div>

                    {/* KPI Stat Cards Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '1.2rem',
                        marginBottom: '2.5rem'
                    }} className="dossier-kpi-grid">
                        {activeExp.kpis.map((kpi, idx) => (
                            <div key={idx} style={{
                                background: 'rgba(5, 5, 10, 0.5)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '16px',
                                padding: '16px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '0.65rem', color: 'var(--accent-gold)', fontFamily: 'Fira Code', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '1px' }}>
                                    {kpi.label}
                                </div>
                                <div style={{ fontSize: '0.92rem', color: '#FFFFFF', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>
                                    {kpi.val}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Key Deliverables Bullet Points */}
                    <div style={{ marginBottom: '2.4rem' }}>
                        <div style={{ fontSize: '0.72rem', color: 'var(--accent-gold)', letterSpacing: '2px', fontFamily: 'Fira Code', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
                            // KEY ENGINEERING DELIVERABLES & IMPACT
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }} className="dossier-highlights-grid">
                            {activeExp.highlights.map((point, idx) => (
                                <div key={idx} style={{
                                    display: 'flex',
                                    gap: '12px',
                                    alignItems: 'flex-start',
                                    background: 'rgba(15, 15, 22, 0.4)',
                                    padding: '14px 16px',
                                    borderRadius: '14px',
                                    border: '1px solid rgba(255, 255, 255, 0.03)'
                                }}>
                                    <div style={{
                                        width: '22px',
                                        height: '22px',
                                        borderRadius: '50%',
                                        background: 'rgba(212, 175, 55, 0.1)',
                                        border: '1px solid rgba(212, 175, 55, 0.25)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        marginTop: '2px'
                                    }}>
                                        <CheckCircle2 size={13} style={{ color: 'var(--accent-gold)' }} />
                                    </div>
                                    <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6', fontWeight: '300' }}>
                                        {point}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technical Arsenal Badges */}
                    <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.07)' }}>
                        <div style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', fontFamily: 'Fira Code', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                            CORE TECHNOLOGIES EMPLOYED IN ROLE:
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {activeExp.tech.map((t, idx) => (
                                <span key={idx} style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--accent-gold)',
                                    background: 'rgba(212, 175, 55, 0.07)',
                                    padding: '6px 16px',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(212, 175, 55, 0.2)',
                                    fontFamily: 'Fira Code, monospace'
                                }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    );
};
