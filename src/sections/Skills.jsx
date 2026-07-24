import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Cpu, Globe, ShieldCheck, Terminal, Zap, Layers, 
    Database, Server, Layout, Sparkles, CheckCircle2,
    GitBranch, Code2, Lock, Workflow
} from 'lucide-react';

const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'frontend', label: 'Frontend Engineering' },
    { id: 'backend', label: 'Backend Architecture' },
    { id: 'database', label: 'Database & Security' },
    { id: 'tools', label: 'Tools & Ecosystem' }
];

const skillCategoriesData = [
    {
        id: 'frontend',
        title: 'Frontend Engineering',
        icon: Layout,
        tag: 'UI / UX PERFORMANCE',
        desc: 'Crafting responsive, high-fidelity user interfaces with modern React paradigms and smooth micro-interactions.',
        skills: [
            { name: 'React.js Ecosystem', level: 95, icon: Code2, highlight: 'Hooks, Context, State Mgmt' },
            { name: 'JavaScript (ES6+)', level: 96, icon: Cpu, highlight: 'Async/Await, Closures, DOM' },
            { name: 'CSS3 / Glassmorphism', level: 92, icon: Globe, highlight: 'Custom Animations, Flex/Grid' },
            { name: 'Framer Motion', level: 90, icon: Sparkles, highlight: 'Smooth Page & Component Motion' },
            { name: 'Responsive Web Design', level: 95, icon: Layout, highlight: 'Mobile-First Layouts' }
        ]
    },
    {
        id: 'backend',
        title: 'Backend Architecture',
        icon: Server,
        tag: 'MICROSERVICES & LOGIC',
        desc: 'Building scalable API endpoints, business logic pipelines, and robust microservices architecture.',
        skills: [
            { name: 'Node.js Runtime', level: 94, icon: Server, highlight: 'Event Loop, Streams, Async IO' },
            { name: 'Express.js Framework', level: 95, icon: Layers, highlight: 'RESTful Routers & Middleware' },
            { name: 'RESTful API Engineering', level: 96, icon: Workflow, highlight: 'Standardized Payload Structures' },
            { name: 'System Integration', level: 90, icon: Zap, highlight: 'Third-Party & Webhook Services' }
        ]
    },
    {
        id: 'database',
        title: 'Database & Security',
        icon: Database,
        tag: 'DATA INTEGRITY & AUTH',
        desc: 'Structuring non-relational document databases with hardened authentication & authorization controls.',
        skills: [
            { name: 'MongoDB & Mongoose', level: 93, icon: Database, highlight: 'Schema Design, Aggregations' },
            { name: 'JWT & Session Auth', level: 95, icon: Lock, highlight: 'Bearer Token Security' },
            { name: 'Bcrypt Password Hashing', level: 94, icon: ShieldCheck, highlight: 'Hardened Encryption' },
            { name: 'CORS & Rate Limiting', level: 92, icon: ShieldCheck, highlight: 'API Protection' }
        ]
    },
    {
        id: 'tools',
        title: 'Tools & Ecosystem',
        icon: Terminal,
        tag: 'DEVELOPER WORKFLOW',
        desc: 'Leveraging modern CLI, version control, and API client suites to maintain seamless development cycles.',
        skills: [
            { name: 'Git & GitHub', level: 95, icon: GitBranch, highlight: 'Branching, PRs, Versioning' },
            { name: 'Postman API Suite', level: 94, icon: Terminal, highlight: 'Endpoint Testing & Docs' },
            { name: 'Vite & Build Tooling', level: 92, icon: Zap, highlight: 'HMR & Production Bundling' },
            { name: 'NPM Package Ecosystem', level: 96, icon: Cpu, highlight: 'Dependency Management' }
        ]
    }
];

const Skills = () => {
    const [activeTab, setActiveTab] = useState('all');

    const filteredData = activeTab === 'all' 
        ? skillCategoriesData 
        : skillCategoriesData.filter(item => item.id === activeTab);

    return (
        <section id="skills" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Ambient Glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            {/* Section Header */}
            <div style={{ marginBottom: '3.5rem', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-gold)', marginBottom: '0.6rem' }}>
                    <div style={{ width: '40px', height: '1px', background: 'currentColor' }}></div>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '3px', fontFamily: 'Fira Code' }}>SYSTEM_CAPABILITIES</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
                    <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 'bold', color: '#FFFFFF', margin: 0, fontFamily: 'Playfair Display, serif' }}>
                        TECHNICAL_<span className="gradient-text">ARCHITECTURE</span>
                    </h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.8rem', fontFamily: 'Fira Code' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 10px #10B981' }} />
                        <span>PRODUCTION-READY STACK</span>
                    </div>
                </div>
            </div>

            {/* Category Filter Tabs */}
            <div style={{
                display: 'flex',
                gap: '0.8rem',
                marginBottom: '3rem',
                flexWrap: 'wrap',
                position: 'relative',
                zIndex: 1
            }}>
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveTab(cat.id)}
                        style={{
                            background: activeTab === cat.id ? 'rgba(212, 175, 55, 0.12)' : 'rgba(15, 15, 20, 0.6)',
                            border: activeTab === cat.id ? '1px solid var(--accent-gold)' : '1px solid rgba(255, 255, 255, 0.08)',
                            color: activeTab === cat.id ? '#FFFFFF' : 'var(--text-secondary)',
                            padding: '10px 22px',
                            borderRadius: '30px',
                            fontSize: '0.82rem',
                            fontFamily: 'Fira Code, monospace',
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                            backdropFilter: 'blur(12px)',
                            boxShadow: activeTab === cat.id ? '0 0 20px rgba(212, 175, 55, 0.15)' : 'none'
                        }}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Premium Category Cards Grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: filteredData.length === 1 ? '1fr' : 'repeat(2, 1fr)',
                        gap: '2rem',
                        position: 'relative',
                        zIndex: 1
                    }}
                    className="skills-premium-grid"
                >
                    {filteredData.map((category) => {
                        const CategoryIcon = category.icon;
                        return (
                            <motion.div
                                key={category.id}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    background: 'rgba(12, 12, 18, 0.6)',
                                    border: '1px solid rgba(212, 175, 55, 0.15)',
                                    borderRadius: '24px',
                                    padding: '2.4rem',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Subtle Top Border Highlight Accent */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: '10%',
                                    right: '10%',
                                    height: '1px',
                                    background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.4), transparent)'
                                }} />

                                {/* Card Header */}
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                        <div style={{
                                            width: '46px',
                                            height: '46px',
                                            borderRadius: '14px',
                                            background: 'rgba(212, 175, 55, 0.08)',
                                            border: '1px solid rgba(212, 175, 55, 0.2)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--accent-gold)'
                                        }}>
                                            <CategoryIcon size={22} />
                                        </div>
                                        <div>
                                            <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', margin: 0, fontFamily: 'Playfair Display, serif', fontWeight: 'bold' }}>
                                                {category.title}
                                            </h3>
                                            <span style={{ fontSize: '0.68rem', color: 'var(--accent-gold)', letterSpacing: '2px', fontFamily: 'Fira Code' }}>
                                                {category.tag}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '2.2rem', lineHeight: '1.6', fontWeight: '300' }}>
                                    {category.desc}
                                </p>

                                {/* Skills Progress Items */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
                                    {category.skills.map((skill, index) => {
                                        const SkillIcon = skill.icon;
                                        return (
                                            <div key={index}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '6px' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                                                        <SkillIcon size={15} style={{ color: 'var(--accent-gold)', opacity: 0.9 }} />
                                                        <span style={{ fontSize: '0.9rem', color: '#FFFFFF', fontWeight: '500', fontFamily: 'Inter, sans-serif' }}>
                                                            {skill.name}
                                                        </span>
                                                        <span style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.4)', fontFamily: 'Fira Code' }}>
                                                            • {skill.highlight}
                                                        </span>
                                                    </div>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                        <CheckCircle2 size={13} style={{ color: '#10B981' }} />
                                                        <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontFamily: 'Fira Code', fontWeight: '600' }}>
                                                            {skill.level}%
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Progress Bar Container */}
                                                <div style={{
                                                    height: '6px',
                                                    background: 'rgba(255, 255, 255, 0.04)',
                                                    borderRadius: '4px',
                                                    overflow: 'hidden',
                                                    border: '1px solid rgba(255, 255, 255, 0.05)'
                                                }}>
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.level}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
                                                        style={{
                                                            height: '100%',
                                                            background: 'linear-gradient(90deg, #B58A38 0%, #D4AF37 50%, #F5E08F 100%)',
                                                            borderRadius: '4px',
                                                            boxShadow: '0 0 12px rgba(212, 175, 55, 0.4)'
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </AnimatePresence>

            <style>{`
                @media (max-width: 900px) {
                    .skills-premium-grid {
                        grid-template-columns: 1fr !important;
                        gap: 1.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Skills;
