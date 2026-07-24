import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Briefcase, Calendar, MapPin, Sparkles, ArrowRight, 
    CheckCircle2, Building2, ChevronLeft, ChevronRight, Award, Terminal, Activity
} from 'lucide-react';

const experiences = [
    {
        id: 'sds',
        year: '2026 — PRESENT',
        shortTitle: 'SDS Technologies',
        role: "MERN Stack Developer",
        company: "SDS Technologies",
        period: "FEB 2026 - PRESENT",
        location: "Coimbatore, India",
        status: "ACTIVE OPERATIONAL ROLE",
        statusColor: "#10B981", // Emerald live pulse
        type: "Full-Time Software Engineer",
        tagline: "Architecting Scalable Microservices & Reactive Web Interfaces",
        description: "Leading end-to-end full stack web application engineering, designing scalable backend Node.js/Express REST microservices, and implementing high-fidelity React interfaces.",
        achievements: [
            "Architected and maintained full-stack web applications using React.js, Node.js, Express, and MongoDB.",
            "Engineered high-throughput RESTful API microservices to handle complex business logic and database operations.",
            "Implemented responsive, modern glassmorphic UIs with state management, custom hooks, and Framer Motion animations.",
            "Optimized MongoDB data schemas and aggregation queries for maximum performance."
        ],
        metrics: [
            { label: "Engineering Scope", value: "Full Stack (MERN)" },
            { label: "Backend Reliability", value: "REST API Microservices" },
            { label: "Frontend Standard", value: "React & Framer Motion" }
        ],
        tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "REST API", "JavaScript ES6+"]
    },
    {
        id: 'glacier',
        year: '2025',
        shortTitle: 'Glacier Technology',
        role: "MERN Stack Intern",
        company: "Glacier Technology",
        period: "MAR 2025 - JUL 2025",
        location: "Coimbatore, India",
        status: "COMPLETED INTERNSHIP",
        statusColor: "var(--accent-gold)",
        type: "Engineering Internship",
        tagline: "Building Core Web Modules & Integrating Backend Services",
        description: "Accelerated full-stack software development skills through real-world client application modules, team code reviews, and API integrations.",
        achievements: [
            "Developed responsive user interface components using React.js and connected them to Express backend endpoints.",
            "Assisted senior engineers in structuring MongoDB collections and writing reusable backend controllers.",
            "Participated in daily standups, code reviews, and industry-standard version control workflows using Git & GitHub."
        ],
        metrics: [
            { label: "Internship Scope", value: "MERN Full Stack" },
            { label: "API Work", value: "Postman & REST API" },
            { label: "Version Control", value: "Git Branching Workflows" }
        ],
        tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Git", "Postman", "CSS3"]
    }
];

const Experience = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const activeExp = experiences[currentIndex];

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % experiences.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
    };

    return (
        <section id="experience" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Ambient Background Light Spotlights */}
            <div style={{
                position: 'absolute',
                top: '15%',
                left: '-10%',
                width: '550px',
                height: '550px',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            {/* Header */}
            <div style={{ marginBottom: '3.5rem', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-gold)', marginBottom: '0.6rem' }}>
                    <div style={{ width: '40px', height: '1px', background: 'currentColor' }}></div>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '3px', fontFamily: 'Fira Code' }}>EDITORIAL_TIMELINE</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
                    <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 'bold', color: '#FFFFFF', margin: 0, fontFamily: 'Playfair Display, serif' }}>
                        CAREER_<span className="gradient-text">TRAJECTORY</span>
                    </h2>

                    {/* Timeline Stage Switcher Buttons */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <button
                            onClick={handlePrev}
                            style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '50%',
                                background: 'rgba(212, 175, 55, 0.08)',
                                border: '1px solid rgba(212, 175, 55, 0.25)',
                                color: 'var(--accent-gold)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'Fira Code' }}>
                            0{currentIndex + 1} / 0{experiences.length}
                        </span>
                        <button
                            onClick={handleNext}
                            style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '50%',
                                background: 'rgba(212, 175, 55, 0.08)',
                                border: '1px solid rgba(212, 175, 55, 0.25)',
                                color: 'var(--accent-gold)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Interactive Timeline Milestone Bar */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem',
                marginBottom: '2.5rem',
                position: 'relative',
                zIndex: 1
            }} className="ex-timeline-track">
                {experiences.map((exp, idx) => {
                    const isActive = idx === currentIndex;
                    return (
                        <button
                            key={exp.id}
                            onClick={() => setCurrentIndex(idx)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                background: isActive 
                                    ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(15, 15, 22, 0.8) 100%)' 
                                    : 'rgba(12, 12, 18, 0.5)',
                                border: isActive 
                                    ? '1px solid var(--accent-gold)' 
                                    : '1px solid rgba(255, 255, 255, 0.07)',
                                borderRadius: '18px',
                                padding: '1.2rem 1.6rem',
                                cursor: 'pointer',
                                textAlign: 'left',
                                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                                backdropFilter: 'blur(12px)',
                                boxShadow: isActive ? '0 10px 30px rgba(212, 175, 55, 0.14)' : 'none'
                            }}
                        >
                            <div style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                background: isActive ? exp.statusColor : 'rgba(255, 255, 255, 0.2)',
                                boxShadow: isActive ? `0 0 12px ${exp.statusColor}` : 'none',
                                flexShrink: 0
                            }} />
                            <div>
                                <div style={{ fontSize: '0.72rem', color: isActive ? 'var(--accent-gold)' : 'var(--text-secondary)', fontFamily: 'Fira Code', letterSpacing: '1px' }}>
                                    {exp.year}
                                </div>
                                <div style={{ fontSize: '1.05rem', fontWeight: 'bold', color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)', fontFamily: 'Playfair Display, serif' }}>
                                    {exp.shortTitle}
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Editorial Showcase Stage */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeExp.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        background: 'rgba(10, 10, 15, 0.8)',
                        border: '1px solid rgba(212, 175, 55, 0.25)',
                        borderRadius: '28px',
                        padding: '3rem',
                        backdropFilter: 'blur(24px)',
                        WebkitBackdropFilter: 'blur(24px)',
                        boxShadow: '0 30px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 1
                    }}
                >
                    {/* Glowing Gold Border Top Highlight */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)'
                    }} />

                    {/* Split Editorial Stage Layout */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1.1fr 1.3fr',
                        gap: '3rem',
                        alignItems: 'start'
                    }} className="ex-editorial-grid">

                        {/* LEFT COLUMN: Role Brand & Overview */}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
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

                            <h3 style={{ fontSize: '2.2rem', color: '#FFFFFF', fontFamily: 'Playfair Display, serif', fontWeight: 'bold', lineHeight: '1.25', margin: '0 0 0.8rem 0' }}>
                                {activeExp.role}
                            </h3>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', color: '#FFFFFF', fontSize: '1rem', fontWeight: '500', marginBottom: '1.4rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <Building2 size={16} style={{ color: 'var(--accent-gold)' }} />
                                    <span>{activeExp.company}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)', fontFamily: 'Fira Code', fontSize: '0.82rem' }}>
                                    <MapPin size={14} style={{ color: 'var(--accent-gold)' }} />
                                    <span>{activeExp.location}</span>
                                </div>
                            </div>

                            {/* Date Badge */}
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: 'rgba(212, 175, 55, 0.08)',
                                border: '1px solid rgba(212, 175, 55, 0.22)',
                                padding: '8px 20px',
                                borderRadius: '20px',
                                color: 'var(--accent-gold)',
                                fontSize: '0.8rem',
                                fontFamily: 'Fira Code, monospace',
                                fontWeight: '600',
                                marginBottom: '1.8rem'
                            }}>
                                <Calendar size={15} />
                                <span>{activeExp.period}</span>
                            </div>

                            <p style={{ fontSize: '0.96rem', color: '#CBD5E1', lineHeight: '1.7', fontWeight: '300', marginBottom: '2rem', fontStyle: 'italic', borderLeft: '3px solid var(--accent-gold)', paddingLeft: '16px' }}>
                                "{activeExp.tagline}" — {activeExp.description}
                            </p>

                            {/* Key Role Metrics */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                {activeExp.metrics.map((m, idx) => (
                                    <div key={idx} style={{
                                        background: 'rgba(5, 5, 10, 0.45)',
                                        padding: '12px 16px',
                                        borderRadius: '12px',
                                        border: '1px solid rgba(255, 255, 255, 0.04)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontFamily: 'Fira Code', textTransform: 'uppercase' }}>
                                            {m.label}
                                        </span>
                                        <span style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: '600', fontFamily: 'Inter, sans-serif' }}>
                                            {m.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Key Deliverables & Tech Arsenal */}
                        <div>
                            <div style={{ fontSize: '0.72rem', color: 'var(--accent-gold)', letterSpacing: '2px', fontFamily: 'Fira Code', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
                                // KEY ENGINEERING ACHIEVEMENTS
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                                {activeExp.achievements.map((ach, idx) => (
                                    <div key={idx} style={{
                                        display: 'flex',
                                        gap: '12px',
                                        alignItems: 'flex-start',
                                        background: 'rgba(15, 15, 22, 0.45)',
                                        padding: '14px 18px',
                                        borderRadius: '14px',
                                        border: '1px solid rgba(255, 255, 255, 0.04)'
                                    }}>
                                        <CheckCircle2 size={16} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }} />
                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', fontWeight: '300' }}>
                                            {ach}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Tech Stack Arsenal */}
                            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontFamily: 'Fira Code', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem' }}>
                                    CORE TECHNOLOGIES & TOOLS:
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
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <style>{`
                @media (max-width: 950px) {
                    .ex-editorial-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2.5rem !important;
                    }
                    .ex-timeline-track {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Experience;
