import React from 'react';
import { motion } from 'framer-motion';
import { 
    Cpu, Globe, Shield, Terminal, Zap, Layers, 
    Database, Server, Layout, Settings, Activity,
    Box, GitBranch, Code2
} from 'lucide-react';

const BentoCard = ({ children, title, icon: Icon, span = 1 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{
            gridColumn: `span ${span}`,
            background: 'rgba(25, 4, 7, 0.4)',
            border: '1px solid rgba(114, 47, 55, 0.2)',
            borderRadius: '16px',
            padding: '1.5rem',
            position: 'relative',
            overflow: 'hidden',
            backdropFilter: 'blur(10px)'
        }}
    >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
            <div style={{ padding: '8px', background: 'rgba(114, 47, 55, 0.1)', borderRadius: '8px', color: 'var(--accent-primary)' }}>
                <Icon size={18} />
            </div>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-primary)' }}>
                {title}
            </h3>
        </div>
        {children}
    </motion.div>
);

const SkillItem = ({ label, level }) => (
    <div style={{ marginBottom: '1.2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.75rem', fontFamily: 'Fira Code' }}>
            <span style={{ color: 'var(--text-secondary)' }}>{label}</span>
            <span style={{ color: 'var(--accent-gold)' }}>{level}%</span>
        </div>
        <div style={{ height: '3px', background: 'rgba(255,255,255,0.03)', borderRadius: '2px', overflow: 'hidden' }}>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ height: '100%', background: 'var(--accent-primary)' }}
            />
        </div>
    </div>
);

const Skills = () => {
    return (
        <section id="skills" className="section-padding">
            <div style={{ marginBottom: '4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
                    <div style={{ width: '40px', height: '1px', background: 'currentColor' }}></div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '2px' }}>EXPERT_MATRIX</span>
                </div>
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                    TECHNICAL_<span className="gradient-text">CAPABILITIES</span>
                </h2>
            </div>

            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: '1.5rem',
                minHeight: '600px'
            }} className="skills-bento">
                
             
                <BentoCard title="Core Architecture" icon={Layers} span={2}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
                        Architecting high-performance MERN applications with a focus on scalable service patterns and data integrity.
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

          
                <BentoCard title="Security Core" icon={Shield}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { name: 'JWT Architecture', status: 'Verfied' },
                            { name: 'OAuth 2.0 Integration', status: 'Verfied' },
                            { name: 'Bcrypt Encryption', status: 'Verfied' },
                            { name: 'Input Shielding', status: 'Verfied' }
                        ].map((s, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.03)' }}>
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{s.name}</span>
                                <div style={{ width: '6px', height: '6px', background: '#4caf50', borderRadius: '50%', boxShadow: '0 0 10px #4caf50' }}></div>
                            </div>
                        ))}
                    </div>
                </BentoCard>

             
                <BentoCard title="Engineering Workflow" icon={Settings}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        {[
                            { name: 'Git/GitHub', icon: GitBranch },
                            { name: 'Vite/ESBuild', icon: Zap },
                            { name: 'Postman/API', icon: Terminal },
                            { name: 'NPM/Deployment', icon: Box }
                        ].map((t, i) => (
                            <div key={i} style={{ textAlign: 'center', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px' }}>
                                <t.icon size={20} style={{ color: 'var(--accent-primary)', marginBottom: '8px' }} />
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{t.name}</div>
                            </div>
                        ))}
                    </div>
                </BentoCard>

              
                <BentoCard title="Architecture Metrics" icon={Activity} span={2}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem', height: '100%' }} className="metrics-grid">
                        {[
                            { label: 'System Uptime', value: '99.9%', desc: 'SLA Mentality' },
                            { label: 'Clean Code', value: '100%', desc: 'SOLID Principles' },
                            { label: 'Security Score', value: 'A+', desc: 'Hardened Logic' }
                        ].map((stat, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }} className="metric-item">
                                <div style={{ fontSize: '0.7rem', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '5px' }}>{stat.label}</div>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stat.value}</div>
                                <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', opacity: 0.6 }}>{stat.desc}</div>
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
                        border-bottom: 1px solid rgba(255,255,255,0.05);
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
