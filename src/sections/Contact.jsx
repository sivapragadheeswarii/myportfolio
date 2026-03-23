import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Smartphone, Map, Send, Terminal, Loader2, CheckCircle2, AlertCircle, Linkedin, Github, User, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('IDLE'); // IDLE, SENDING, SUCCESS, ERROR

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('SENDING');

        // Note: These should be replaced with actual user keys
        emailjs.sendForm(
            'service_9yr6yxh', // Service ID
            'template_alz80sp', // Template ID
            form.current,
            'h8HH0DyHIDEklORXx' // Public Key
        )
            .then((result) => {
                console.log(result.text);
                setStatus('SUCCESS');
                form.current.reset();
                setTimeout(() => setStatus('IDLE'), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('ERROR');
                setTimeout(() => setStatus('IDLE'), 5000);
            });
    };

    return (
        <section id="contact" className="section-padding" style={{ background: 'rgba(0,0,0,0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2rem' }}>CONTACT_<span className="gradient-text">UPLINK</span></h2>
                <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></div>
                <span style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 'bold' }}>// 06</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }} className="contact-grid">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="cyber-card contact-info-card"
                    style={{ position: 'relative', background: 'rgba(114, 47, 55, 0.03)', border: '1px solid var(--glass-border)', padding: '2.5rem' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                        <Terminal size={18} style={{ color: 'var(--accent-primary)' }} />
                        <span style={{ fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--accent-primary)' }}>PROTOCOL_READY</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '0.9rem' }}>
                        Establishing encrypted communication channel. Awaiting input for collaborative development or mission briefing.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', position: 'relative' }}>
                        {/* Background Ping Grid Effect */}
                        <div style={{ position: 'absolute', right: '0', top: '0', bottom: '0', width: '1px', background: 'linear-gradient(to bottom, transparent, var(--accent-primary), transparent)', opacity: 0.2 }}></div>
                        
                        {[
                            { icon: Mail, label: 'MAIL_ADDR', val: 'sivapragadheeswari2004@gmail.com', href: 'mailto:sivapragadheeswari2004@gmail.com' },
                            { icon: Smartphone, label: 'PULSE_LINE', val: '+91 6381014445', href: 'tel:+916381014445' },
                            { icon: Linkedin, label: 'SOCIAL_LINK', val: 'linkedin/sivapragadheeswari', href: 'https://www.linkedin.com/in/sivapragadheeswari' },
                            { icon: Github, label: 'CODE_VALVE', val: 'github/sivapragadheeswarii', href: 'https://github.com/sivapragadheeswarii' },
                        ].map((item, i) => (
                            <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none', color: 'inherit', position: 'relative', padding: '0.8rem', borderRadius: '4px' }} className="contact-item">
                                {/* Technical Icon Box */}
                                <motion.div
                                    style={{ 
                                        height: '50px', 
                                        width: '50px', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center', 
                                        background: 'rgba(20,8,8,0.5)', 
                                        border: '1px solid var(--accent-gold)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    className="icon-box"
                                    whileHover={{ boxShadow: '0 0 15px rgba(197, 160, 89, 0.2)' }}
                                >
                                    {/* Scanline Animation */}
                                    <motion.div 
                                        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'var(--accent-gold)', opacity: 0.3, zIndex: 1 }}
                                        animate={{ top: ['0%', '100%'] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    />
                                    
                                    {/* Radar Crosshair dots */}
                                    <div style={{ position: 'absolute', top: '4px', left: '4px', width: '2px', height: '2px', background: 'var(--accent-gold)', opacity: 0.5 }}></div>
                                    <div style={{ position: 'absolute', top: '4px', right: '4px', width: '2px', height: '2px', background: 'var(--accent-gold)', opacity: 0.5 }}></div>
                                    <div style={{ position: 'absolute', bottom: '4px', left: '4px', width: '2px', height: '2px', background: 'var(--accent-gold)', opacity: 0.5 }}></div>
                                    <div style={{ position: 'absolute', bottom: '4px', right: '4px', width: '2px', height: '2px', background: 'var(--accent-gold)', opacity: 0.5 }}></div>

                                    <item.icon size={22} style={{ color: 'var(--accent-gold)', zIndex: 2 }} />
                                    
                                    {/* Pulse Background */}
                                    <motion.div 
                                        style={{ position: 'absolute', inset: '10px', border: '1px solid var(--accent-primary)', opacity: 0.2, borderRadius: '50%' }}
                                        animate={{ scale: [1, 2], opacity: [0.2, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    />
                                </motion.div>

                                <div style={{ flex: 1 }}>
                                    <p style={{ fontSize: '0.65rem', color: 'var(--accent-secondary)', letterSpacing: '2px', marginBottom: '0.2rem', fontWeight: 'bold' }}>{item.label}</p>
                                    <p style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-primary)', fontFamily: 'Fira Code' }} className="contact-val">{item.val}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="cyber-card contact-form-card"
                    style={{ background: 'rgba(26,8,8,0.4)', border: '1px solid var(--glass-border)', padding: '2rem' }}
                >
                    <form ref={form} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={sendEmail}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            <label style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', letterSpacing: '2px' }}>01_IDENT_NAME</label>
                            <div style={{ position: 'relative' }}>
                                <User size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)' }} />
                                <input name="user_name" type="text" required style={{ width: '100%', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--glass-border)', padding: '0.9rem 1rem 0.9rem 3rem', color: 'white', fontFamily: 'Fira Code', fontSize: '0.85rem', transition: 'all 0.3s ease' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            <label style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', letterSpacing: '2px' }}>02_COMMS_EMAIL</label>
                            <div style={{ position: 'relative' }}>
                                <Mail size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)' }} />
                                <input name="user_email" type="email" required style={{ width: '100%', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--glass-border)', padding: '0.9rem 1rem 0.9rem 3rem', color: 'white', fontFamily: 'Fira Code', fontSize: '0.85rem', transition: 'all 0.3s ease' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            <label style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', letterSpacing: '2px' }}>03_DATA_PAYLOAD</label>
                            <div style={{ position: 'relative' }}>
                                <MessageSquare size={16} style={{ position: 'absolute', left: '1rem', top: '1rem', color: 'rgba(255,255,255,0.3)' }} />
                                <textarea name="message" rows="4" required style={{ width: '100%', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--glass-border)', padding: '1rem 1rem 1rem 3rem', color: 'white', fontFamily: 'Fira Code', fontSize: '0.85rem', resize: 'none', transition: 'all 0.3s ease' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}></textarea>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'SENDING'}
                            className="cyber-button"
                            style={{
                                width: '100%',
                                marginTop: '0.5rem',
                                opacity: status === 'SENDING' ? 0.7 : 1,
                                cursor: status === 'SENDING' ? 'not-allowed' : 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.8rem'
                            }}
                        >
                            {status === 'IDLE' && <><span style={{ letterSpacing: '2px' }}>SEND_SIGNAL</span> <Send size={16} /></>}
                            {status === 'SENDING' && <><span style={{ letterSpacing: '2px' }}>TRANSMITTING...</span> <Loader2 size={16} className="animate-spin" /></>}
                            {status === 'SUCCESS' && <><span style={{ color: '#00ff41', letterSpacing: '2px' }}>SIGNAL_RECEIVED</span> <CheckCircle2 size={16} style={{ color: '#00ff41' }} /></>}
                            {status === 'ERROR' && <><span style={{ color: '#ff3131', letterSpacing: '2px' }}>LINK_FAILURE</span> <AlertCircle size={16} style={{ color: '#ff3131' }} /></>}
                        </button>
                    </form>
                </motion.div>
            </div>

            <style>{`
                .animate-spin {
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @media (max-width: 800px) {
                    .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
                    .contact-info-card, .contact-form-card { padding: 1.5rem !important; }
                    .contact-val { font-size: 0.8rem !important; }
                    .contact-item { gap: 1rem !important; padding: 0.5rem !important; }
                    .icon-box { height: 40px !important; width: 40px !important; }
                }
            `}</style>
        </section>
    );
};

export default Contact;
