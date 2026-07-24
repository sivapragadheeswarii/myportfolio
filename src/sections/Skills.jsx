import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Cpu, Globe, ShieldCheck, Terminal, Zap, Layers, 
    Database, Server, Layout, Sparkles, CheckCircle2,
    GitBranch, Code2, Lock, Workflow, ChevronRight, Activity, Command
} from 'lucide-react';

const techSkills = [
    {
        id: 'react',
        name: 'React.js Ecosystem',
        category: 'FRONTEND ARCHITECTURE',
        level: 96,
        icon: Code2,
        tagline: 'Modern Component-Driven UI & State Management',
        description: 'Building high-performance single-page web applications with React Hooks, Context API, Redux Toolkit, and Framer Motion animations.',
        capabilities: [
            'Modular Component Architecture',
            'Custom React Hooks & Context API',
            'Framer Motion & Smooth Page Transitions',
            'Virtual DOM Optimization & Re-render Prevention'
        ],
        benchmark: '100% Clean Component Patterns',
        projectsUsed: ['Executive Portfolio Studio', 'Real Estate Mobile Platform', 'SDS Enterprise Portal']
    },
    {
        id: 'node',
        name: 'Node.js & Express',
        category: 'BACKEND SERVICES',
        level: 94,
        icon: Server,
        tagline: 'Scalable Asynchronous Microservices & REST APIs',
        description: 'Designing non-blocking backend architectures, routing middleware, and asynchronous event-driven services.',
        capabilities: [
            'RESTful API Design & Versioning',
            'Express Router & Custom Middleware',
            'Error Handling & Logging Pipelines',
            'Third-Party Integration & Webhooks'
        ],
        benchmark: '<50ms Average Response Time',
        projectsUsed: ['Property Management API', 'Authentication Gateway', 'Holy Coins Backend']
    },
    {
        id: 'mongodb',
        name: 'MongoDB & Mongoose',
        category: 'DATABASE INTEGRITY',
        level: 93,
        icon: Database,
        tagline: 'High-Throughput NoSQL Data Modeling & Aggregation',
        description: 'Structuring document databases with schema validation, indexing, and complex aggregation pipelines.',
        capabilities: [
            'NoSQL Data Schema Modeling',
            'Mongoose Middleware & Population',
            'Aggregation Framework & Indexing',
            'MongoDB Atlas Cloud Cluster Management'
        ],
        benchmark: 'Zero-Downtime Data Consistency',
        projectsUsed: ['Real Estate Listing DB', 'User Auth & Role Store', 'Case Study CMS']
    },
    {
        id: 'javascript',
        name: 'JavaScript ES6+',
        category: 'CORE PROGRAMMING',
        level: 96,
        icon: Cpu,
        tagline: 'Asynchronous Programming & Data Structures',
        description: 'Mastery over core JavaScript fundamentals, asynchronous promises, ES modules, and functional execution paradigms.',
        capabilities: [
            'Async / Await & Promises',
            'Object-Oriented & Functional JS',
            'DOM Manipulation & Event Propagation',
            'Modern ES6+ Syntax & Array Methods'
        ],
        benchmark: 'High Execution Efficiency',
        projectsUsed: ['All Production Systems']
    },
    {
        id: 'security',
        name: 'JWT & Security Auth',
        category: 'SECURITY HARDENING',
        level: 95,
        icon: ShieldCheck,
        tagline: 'Enterprise Session Hardening & Role Control',
        description: 'Implementing token-based stateless authentication, bcrypt password hashing, and role-based access control (RBAC).',
        capabilities: [
            'JWT Bearer Token Lifecycle',
            'Bcrypt Password Encryption',
            'CORS, Rate Limiting & Helmet Rules',
            'Role-Based Authorization (RBAC)'
        ],
        benchmark: 'Bank-Grade Security Hardening',
        projectsUsed: ['Enterprise Auth Service', 'Admin Dashboard RBAC']
    },
    {
        id: 'git',
        name: 'Git & Developer Tools',
        category: 'DEVOPS & WORKFLOW',
        level: 95,
        icon: GitBranch,
        tagline: 'Version Control & Production Bundling',
        description: 'Utilizing Git workflows, Postman API testing suites, Vite build optimization, and CI/CD deployment pipelines.',
        capabilities: [
            'Git Branching & PR Code Reviews',
            'Postman Collection Testing',
            'Vite Build Optimization',
            'Deployment via Vercel / Netlify'
        ],
        benchmark: 'Streamlined Release Pipeline',
        projectsUsed: ['Version Controlled Codebases']
    }
];

const Skills = () => {
    const [selectedTech, setSelectedTech] = useState(techSkills[0]);

    return (
        <section id="skills" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Ambient Lighting Accents */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '-5%',
                width: '450px',
                height: '450px',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            {/* Header Block */}
            <div style={{ marginBottom: '3.5rem', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-gold)', marginBottom: '0.6rem' }}>
                    <div style={{ width: '40px', height: '1px', background: 'currentColor' }}></div>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '3px', fontFamily: 'Fira Code' }}>EXECUTIVE_CAPABILITIES</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
                    <h2 style={{ fontSize: 'clamp(2.3rem, 5vw, 3.4rem)', fontWeight: 'bold', color: '#FFFFFF', margin: 0, fontFamily: 'Playfair Display, serif', letterSpacing: '-0.5px' }}>
                        TECHNICAL_<span className="gradient-text">BLUEPRINT</span>
                    </h2>
                </div>
            </div>

            {/* Main Interactive Split Layout */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.35fr',
                gap: '2.5rem',
                position: 'relative',
                zIndex: 1,
                alignItems: 'stretch'
            }} className="skills-command-layout">

                {/* LEFT COLUMN: Tech Selector List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} className="skills-tech-selector-list">
                    {techSkills.map((tech) => {
                        const Icon = tech.icon;
                        const isSelected = selectedTech.id === tech.id;
                        return (
                            <motion.button
                                key={tech.id}
                                className="skills-tech-item-btn"
                                onClick={() => setSelectedTech(tech)}
                                whileHover={{ x: 4 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    background: isSelected 
                                        ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.14) 0%, rgba(15, 15, 22, 0.85) 100%)' 
                                        : 'rgba(12, 12, 18, 0.55)',
                                    border: isSelected 
                                        ? '1px solid var(--accent-gold)' 
                                        : '1px solid rgba(255, 255, 255, 0.07)',
                                    borderRadius: '16px',
                                    padding: '1.2rem 1.4rem',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                                    backdropFilter: 'blur(12px)',
                                    boxShadow: isSelected ? '0 10px 25px rgba(212, 175, 55, 0.12)' : 'none'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '12px',
                                        background: isSelected ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.04)',
                                        color: isSelected ? 'var(--bg-primary)' : 'var(--accent-gold)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <Icon size={19} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.98rem', fontWeight: '600', color: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.8)', fontFamily: 'Inter, sans-serif' }}>
                                            {tech.name}
                                        </div>
                                        <div style={{ fontSize: '0.68rem', color: isSelected ? 'var(--accent-gold)' : 'var(--text-secondary)', fontFamily: 'Fira Code', letterSpacing: '1px' }}>
                                            {tech.category}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontFamily: 'Fira Code', fontWeight: 'bold' }}>
                                        {tech.level}%
                                    </span>
                                    <ChevronRight size={16} style={{ color: isSelected ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.2)', transition: 'transform 0.3s ease', transform: isSelected ? 'translateX(3px)' : 'none' }} />
                                </div>
                            </motion.button>
                        );
                    })}
                </div>

                {/* RIGHT COLUMN: Executive System Blueprint Console */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTech.id}
                        className="skills-console-card"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        style={{
                            background: 'rgba(10, 10, 15, 0.75)',
                            border: '1px solid rgba(212, 175, 55, 0.25)',
                            borderRadius: '24px',
                            padding: '2.5rem',
                            backdropFilter: 'blur(24px)',
                            WebkitBackdropFilter: 'blur(24px)',
                            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.75), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Top Decorative Line */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '2px',
                            background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)'
                        }} />

                        <div>
                            {/* Blueprint Header */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', fontSize: '0.72rem', fontFamily: 'Fira Code', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>
                                        <Sparkles size={13} />
                                        <span>{selectedTech.category}</span>
                                    </div>
                                    <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', fontFamily: 'Playfair Display, serif', fontWeight: 'bold', margin: 0 }}>
                                        {selectedTech.name}
                                    </h3>
                                </div>

                                <div style={{
                                    background: 'rgba(212, 175, 55, 0.08)',
                                    border: '1px solid rgba(212, 175, 55, 0.2)',
                                    borderRadius: '16px',
                                    padding: '8px 16px',
                                    textAlign: 'right'
                                }}>
                                    <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontFamily: 'Fira Code' }}>MASTERY RATING</div>
                                    <div style={{ fontSize: '1.4rem', color: 'var(--accent-gold)', fontFamily: 'Playfair Display', fontWeight: 'bold' }}>{selectedTech.level}%</div>
                                </div>
                            </div>

                            <p style={{ fontSize: '0.95rem', color: '#E2E8F0', lineHeight: '1.7', fontWeight: '300', marginBottom: '2rem', fontStyle: 'italic' }}>
                                "{selectedTech.tagline}" — {selectedTech.description}
                            </p>

                            {/* Core Capabilities Bullet Matrix */}
                            <div style={{ marginBottom: '2.2rem' }}>
                                <span style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', letterSpacing: '2px', fontFamily: 'Fira Code', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
                                    // IMPLEMENTATION CAPABILITIES
                                </span>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="blueprint-caps-grid">
                                    {selectedTech.capabilities.map((cap, idx) => (
                                        <div key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            background: 'rgba(5, 5, 10, 0.4)',
                                            padding: '12px 14px',
                                            borderRadius: '12px',
                                            border: '1px solid rgba(255, 255, 255, 0.04)'
                                        }}>
                                            <CheckCircle2 size={15} style={{ color: '#10B981', flexShrink: 0 }} />
                                            <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontFamily: 'Inter, sans-serif' }}>
                                                {cap}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Production Benchmark & Usage */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }} className="blueprint-meta-grid">
                                <div style={{ background: 'rgba(212, 175, 55, 0.04)', padding: '14px 16px', borderRadius: '14px', border: '1px solid rgba(212, 175, 55, 0.12)' }}>
                                    <span style={{ fontSize: '0.65rem', color: 'var(--accent-gold)', fontFamily: 'Fira Code', display: 'block', marginBottom: '4px' }}>
                                        BENCHMARK METRIC
                                    </span>
                                    <span style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: '600' }}>
                                        {selectedTech.benchmark}
                                    </span>
                                </div>

                                <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '14px 16px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                    <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontFamily: 'Fira Code', display: 'block', marginBottom: '4px' }}>
                                        DEPLOYED IN
                                    </span>
                                    <span style={{ fontSize: '0.82rem', color: '#FFFFFF', fontWeight: '500' }}>
                                        {selectedTech.projectsUsed.join(' • ')}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Console Footer Ribbon */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2.5rem', paddingTop: '1.2rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)', fontSize: '0.72rem', color: 'var(--text-secondary)', fontFamily: 'Fira Code' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
                                <span>STATUS: ACTIVE OPERATIONAL STACK</span>
                            </div>
                            <span>VERIFIED BY SIVAPRAGADHEESWARI N.</span>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <style>{`
                @media (max-width: 950px) {
                    .skills-command-layout {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                    .blueprint-caps-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .blueprint-meta-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
                @media (max-width: 600px) {
                    .skills-command-layout {
                        gap: 1.5rem !important;
                    }
                    .skills-tech-selector-list {
                        display: flex !important;
                        flex-direction: row !important;
                        overflow-x: auto !important;
                        padding-bottom: 8px !important;
                        gap: 0.8rem !important;
                        scrollbar-width: none;
                        -ms-overflow-style: none;
                    }
                    .skills-tech-selector-list::-webkit-scrollbar {
                        display: none;
                    }
                    .skills-tech-item-btn {
                        min-width: 220px !important;
                        flex-shrink: 0 !important;
                        padding: 1rem 1.2rem !important;
                    }
                    .skills-console-card {
                        padding: 1.5rem 1.2rem !important;
                        border-radius: 18px !important;
                    }
                    .skills-console-card h3 {
                        font-size: 1.4rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Skills;
