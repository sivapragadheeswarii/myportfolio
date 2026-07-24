import React from 'react';
import { motion } from 'framer-motion';
import { 
    Cpu, Globe, Shield, Terminal, Zap, Layers, 
    Database, Server, Layout, Settings, Activity,
    Box, GitBranch, Code2
} from 'lucide-react';

const BentoCard = ({ children, title, icon: Icon, span = 1 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
            gridColumn: `span ${span}`,
            background: 'rgba(10, 10, 10, 0.45)',
            border: '1px solid var(--glass-border)',
            borderRadius: '20px',
            padding: '1.8rem',
            position: 'relative',
            overflow: 'hidden',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}
        whileHover={{
            borderColor: 'rgba(197, 160, 89, 0.35)',
            y: -4,
            boxShadow: '0 20px 40px rgba(0,0,0,0.6), 0 0 20px rgba(197, 160, 89, 0.03)'
        }}
    >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.8rem' }}>
            <div style={{ padding: '8px', background: 'rgba(197, 160, 89, 0.08)', borderRadius: '8px', color: 'var(--accent-gold)' }}>
                <Icon size={18} />
            </div>
            <h3 style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#FFFFFF', fontFamily: 'Fira Code' }}>
                {title}
            </h3>
        </div>
        {children}
    </motion.div>
);

const SkillItem = ({ label, level }) => (
    <div style={{ marginBottom: '1.4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', fontSize: '0.75rem', fontFamily: 'Fira Code' }}>
            <span style={{ color: 'var(--text-secondary)' }}>{label}</span>
            <span style={{ color: 'var(--accent-gold)' }}>{level}%</span>
        </div>
        <div style={{ height: '3px', background: 'rgba(255,255,255,0.03)', borderRadius: '2px', overflow: 'hidden' }}>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ height: '100%', background: 'linear-gradient(90deg, var(--accent-gold), var(--accent-gold-light))' }}
            />
        </div>
    </div>
);

const Skills = () => {
    return (
        <section id="skills" className="section-padding">
            <div style={{ marginBottom: '4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>
                    <div style={{ width: '40px', height: '1px', background: 'currentColor' }}></div>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '3px', fontFamily: 'Fira Code' }}>EXPERT_MATRIX</span>
                </div>
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#FFFFFF' }}>
                    TECHNICAL_<span className="gradient-text">CAPABILITIES</span>
                </h2>
            </div>

            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: '1.5rem',
                minHeight: '600px'
            }} className="skills-bento">
                
                {/* Core Architecture */}
                <BentoCard title="Core Architecture" icon={Layers} span={2}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6', fontWeight: '300' }}>
                        Architecting high-performance MERN applications with a focus on scalable service patterns and database integrity.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="skills-grid-inner">
                        <div>
                            <SkillItem label="React / Frontend" level={95} />
                            <SkillItem label="Node / Backend" level={92} />
                            <SkillItem label="Tailwind / Styling" level={90} />
                        </div>
                        <div>
                            <SkillItem label="MongoDB / Data" level={94} />
                            <SkillItem label="Express / Logic" level={95} />
                        </div>
                    </div>
                </BentoCard>

                {/* Security Core */}
                <BentoCard title="Security Core" icon={Shield}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { name: 'JWT Architecture', status: 'Verified' },
                            { name: 'OAuth 2.0 Integration', status: 'Verified' },
                            { name: 'Bcrypt Encryption', status: 'Verified' },
                            { name: 'Input Shielding', status: 'Verified' }
                        ].map((s, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'rgba(5,5,5,0.4)', borderRadius: '10px', border: '1px solid rgba(197, 160, 89, 0.05)' }}>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'Fira Code' }}>{s.name}</span>
                                <div style={{ width: '6px', height: '6px', background: '#C5A059', borderRadius: '50%', boxShadow: '0 0 8px #C5A059' }}></div>
                            </div>
                        ))}
                    </div>
                </BentoCard>

                {/* Engineering Workflow */}
                <BentoCard title="Engineering Workflow" icon={Settings}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        {[
                            { name: 'Git/GitHub', icon: GitBranch },
                            { name: 'Vite/ESBuild', icon: Zap },
                            { name: 'Postman/API', icon: Terminal },
                            { name: 'NPM/Packages', icon: Box }
                        ].map((t, i) => (
                            <div key={i} style={{ textAlign: 'center', padding: '1.2rem 1rem', background: 'rgba(5,5,5,0.3)', border: '1px solid rgba(197, 160, 89, 0.03)', borderRadius: '12px', transition: 'border-color 0.3s ease' }}>
                                <t.icon size={20} style={{ color: 'var(--accent-gold)', marginBottom: '8px' }} />
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontFamily: 'Fira Code' }}>{t.name}</div>
                            </div>
                        ))}
                    </div>
                </BentoCard>

                {/* Architecture Metrics */}
                <BentoCard title="Architecture Metrics" icon={Activity} span={2}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem', height: '100%', alignItems: 'center' }} className="metrics-grid">
                        {[
                            { label: 'System Uptime', value: '99.9%', desc: 'SLA Mentality' },
                            { label: 'Clean Code', value: '100%', desc: 'SOLID Principles' },
                            { label: 'Security Score', value: 'A+', desc: 'Hardened Logic' }
                        ].map((stat, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }} className="metric-item">
                                <div style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', textTransform: 'uppercase', marginBottom: '5px', letterSpacing: '1px', fontFamily: 'Fira Code' }}>{stat.label}</div>
                                <div style={{ fontSize: '2.4rem', fontWeight: 'bold', fontFamily: 'Playfair Display', color: '#FFFFFF' }}>{stat.value}</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', opacity: 0.6 }}>{stat.desc}</div>
                            </div>
                        ))}
                    </div>
                </BentoCard>
            </div>

            <style>{`
                @media (max-width: 1100px) {
                    .skills-bento { 
                        grid-template-columns: 1fr 1fr !important;
                        gap: 1.2rem !important;
                    }
                    .skills-bento > div { grid-column: span 1 !important; }
                    .skills-bento > div:first-child { grid-column: span 2 !important; }
                }

                @media (max-width: 768px) {
                    .skills-bento { 
                        grid-template-columns: 1fr !important;
                        display: flex !important;
                        flex-direction: column !important;
                    }
                    .metrics-grid { 
                        grid-template-columns: 1fr !important;
                        gap: 1.5rem !important;
                    }
                    .metric-item {
                        border-bottom: 1px solid rgba(197, 160, 89, 0.05);
                        padding-bottom: 1.2rem;
                    }
                    .metric-item:last-child { border-bottom: none; }
                    .skills-grid-inner { 
                        grid-template-columns: 1fr !important;
                        gap: 1.2rem !important;
                    }
                }

                @media (max-width: 600px) {
                    section h2 { 
                        font-size: clamp(1.4rem, 10vw, 2.2rem) !important; 
                        overflow-wrap: break-word;
                    }
                }
            `}</style>
        </section>
    );
};

export default Skills;
