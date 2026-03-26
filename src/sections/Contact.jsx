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

        emailjs.sendForm(
            'service_9yr6yxh', // Service ID
            'template_alz80sp', // Template ID
            form.current,
            'h8HH0DyHIDEklORXx' // Public Key
        )
            .then((result) => {
                setStatus('SUCCESS');
                form.current.reset();
                setTimeout(() => setStatus('IDLE'), 5000);
            }, (error) => {
                setStatus('ERROR');
                setTimeout(() => setStatus('IDLE'), 5000);
            });
    };

    const contactInfo = [
        { icon: Mail, label: 'Email Address', val: 'sivapragadheeswari2004@gmail.com', href: 'mailto:sivapragadheeswari2004@gmail.com' },
        { icon: Smartphone, label: 'Pulse Line', val: '+91 6381014445', href: 'tel:+916381014445' },
        { icon: Linkedin, label: 'Professional Link', val: 'linkedin/sivapragadheeswari', href: 'https://www.linkedin.com/in/sivapragadheeswari' },
        { icon: Github, label: 'Technical Forge', val: 'github/sivapragadheeswarii', href: 'https://github.com/sivapragadheeswarii' },
    ];

    return (
        <section id="contact" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
       
            <div style={{ position: 'absolute', top: '20%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139, 30, 63, 0.1) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: -1 }}></div>
            
            <div className="contact-header-luxury">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '700' }}
                >
                    Let's <span className="gradient-text">Connect</span>
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}
                >
                    Awaiting new horizons. Whether it's a bold idea or a technical challenge, my door is always open for collaboration.
                </motion.p>
            </div>

            <div className="contact-container">
            
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="contact-card-luxury info-card"
                    style={{ height: 'fit-content' }}
                >
                    <div style={{ marginBottom: '2.5rem' }}>
                        <h3 className="card-heading-luxury">Contact Information</h3>
                        <div style={{ width: '40px', height: '2px', background: 'var(--accent-primary)' }}></div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {contactInfo.map((item, i) => (
                            <motion.a 
                                key={i} 
                                href={item.href} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="contact-link-premium"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', padding: '0.8rem', overflow: 'hidden' }}
                            >
                                <div className="icon-wrapper-luxury" style={{ flexShrink: 0 }}>
                                    <item.icon size={20} />
                                </div>
                                <div style={{ overflow: 'hidden', minWidth: 0, flex: 1 }}>
                                    <span style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-secondary)', marginBottom: '2px' }}>{item.label}</span>
                                    <span className="contact-info-val" style={{ 
                                        color: 'var(--text-primary)', 
                                        fontWeight: '500',
                                        whiteSpace: 'nowrap',
                                        display: 'block'
                                    }}>{item.val}</span>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            <div className="status-dot"></div>
                            Available for new opportunities
                        </div>
                    </div>
                </motion.div>

             
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="contact-card-luxury form-card"
                >
                    <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="input-group-luxury">
                            <label>Full Name</label>
                            <div className="input-wrapper">
                                <User className="input-icon" size={18} />
                                <input name="user_name" type="text" required placeholder="Enter your name" />
                            </div>
                        </div>

                        <div className="input-group-luxury">
                            <label>Email Address</label>
                            <div className="input-wrapper">
                                <Mail className="input-icon" size={18} />
                                <input name="user_email" type="email" required placeholder="example@email.com" />
                            </div>
                        </div>

                        <div className="input-group-luxury">
                            <label>Your Message</label>
                            <div className="input-wrapper">
                                <MessageSquare className="input-icon" size={18} style={{ top: '1.2rem' }} />
                                <textarea name="message" rows="5" required placeholder="How can I help you?"></textarea>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'SENDING'}
                            className="premium-submit-btn"
                        >
                            {status === 'IDLE' && (
                                <>
                                    <span>Send Message</span>
                                    <Send size={18} />
                                </>
                            )}
                            {status === 'SENDING' && (
                                <>
                                    <span>Sending signal...</span>
                                    <Loader2 className="animate-spin" size={18} />
                                </>
                            )}
                            {status === 'SUCCESS' && (
                                <>
                                    <span style={{ color: '#10b981' }}>Signal Transmitted</span>
                                    <CheckCircle2 size={18} style={{ color: '#10b981' }} />
                                </>
                            )}
                            {status === 'ERROR' && (
                                <>
                                    <span style={{ color: '#ef4444' }}>Link Failure</span>
                                    <AlertCircle size={18} style={{ color: '#ef4444' }} />
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>

            <style>{`
                .contact-container {
                    display: grid;
                    grid-template-columns: minmax(350px, 500px) 1fr;
                    gap: 3rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .contact-header-luxury {
                    text-align: center;
                    margin-bottom: 4rem;
                }

                .card-heading-luxury {
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                    color: var(--accent-gold);
                }

                .contact-card-luxury {
                    background: rgba(26, 9, 13, 0.4);
                    backdrop-filter: blur(20px);
                    border: 1px solid var(--glass-border);
                    padding: 3rem;
                    border-radius: 20px;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }

                .contact-card-luxury:hover {
                    background: rgba(45, 16, 21, 0.5);
                    border-color: var(--accent-primary);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 
                                0 0 20px rgba(139, 30, 63, 0.1);
                    transform: translateY(-5px);
                }

                .contact-link-premium {
                    display: flex;
                    alignItems: center;
                    gap: 1.2rem;
                    text-decoration: none;
                    padding: 1rem;
                    border-radius: 12px;
                    transition: all 0.3s ease;
                    border: 1px solid transparent;
                }

                .contact-link-premium:hover {
                    background: rgba(255, 255, 255, 0.03);
                    border-color: rgba(243, 229, 171, 0.1);
                    transform: translateX(5px);
                }

                .icon-wrapper-luxury {
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(139, 30, 63, 0.1);
                    border: 1px solid rgba(139, 30, 63, 0.2);
                    border-radius: 12px;
                    color: var(--accent-gold);
                    transition: all 0.3s ease;
                }

                .contact-link-premium:hover .icon-wrapper-luxury {
                    background: var(--accent-primary);
                    color: var(--text-primary);
                    transform: scale(1.1) rotate(-5deg);
                }

                .input-group-luxury {
                    display: flex;
                    flex-direction: column;
                    gap: 0.6rem;
                }

                .input-group-luxury label {
                    font-family: 'Playfair Display', serif;
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    letter-spacing: 0.5px;
                }

                .input-wrapper {
                    position: relative;
                }

                .input-icon {
                    position: absolute;
                    left: 1.2rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: var(--accent-primary);
                    opacity: 0.5;
                    transition: all 0.3s ease;
                }

                .input-group-luxury input, 
                .input-group-luxury textarea {
                    width: 100%;
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid var(--glass-border);
                    padding: 1rem 1rem 1rem 3.5rem;
                    border-radius: 12px;
                    color: var(--text-primary);
                    font-family: 'Inter', sans-serif;
                    font-size: 0.95rem;
                    transition: all 0.3s ease;
                }

                .input-group-luxury input:focus, 
                .input-group-luxury textarea:focus {
                    outline: none;
                    background: rgba(255, 255, 255, 0.05);
                    border-color: var(--accent-gold);
                    box-shadow: 0 0 15px rgba(243, 229, 171, 0.1);
                }

                .input-group-luxury input:focus + .input-icon,
                .input-group-luxury textarea:focus + .input-icon {
                    opacity: 1;
                    color: var(--accent-gold);
                }

                .premium-submit-btn {
                    margin-top: 1rem;
                    background: linear-gradient(135deg, var(--accent-primary), #63142d);
                    color: white;
                    border: none;
                    padding: 1.2rem;
                    border-radius: 12px;
                    font-weight: 600;
                    letter-spacing: 1px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
                    position: relative;
                    overflow: hidden;
                }

                .premium-submit-btn::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    transition: 0.5s;
                }

                .premium-submit-btn:hover::before {
                    left: 100%;
                }

                .premium-submit-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(139, 30, 63, 0.3);
                }

                .premium-submit-btn:active {
                    transform: translateY(0);
                }

                .premium-submit-btn:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                    transform: none;
                }

                .status-dot {
                    width: 8px;
                    height: 8px;
                    background: #10b981;
                    border-radius: 50%;
                    box-shadow: 0 0 10px #10b981;
                    animation: pulse-green 2s infinite;
                }

                @keyframes pulse-green {
                    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
                    70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
                    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
                }

                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .animate-spin {
                    animation: spin 1s linear infinite;
                }

                @media (max-width: 992px) {
                    .contact-container {
                        grid-template-columns: 1fr;
                    }
                }

                .contact-info-val {
                    font-size: 0.95rem;
                }

                @media (max-width: 600px) {
                    .contact-card-luxury {
                        padding: 1.5rem;
                        border-radius: 15px;
                    }
                    .contact-header-luxury h2 {
                        font-size: 2.2rem !important;
                    }
                    .icon-wrapper-luxury {
                        width: 40px;
                        height: 40px;
                        border-radius: 10px;
                    }
                    .contact-link-premium {
                        gap: 1rem !important;
                        padding: 0.8rem !important;
                    }
                    .contact-info-val {
                        font-size: 0.85rem;
                    }
                    .contact-header-luxury p {
                        font-size: 1rem !important;
                    }
                }
                
                @media (max-width: 400px) {
                    .contact-info-val {
                        font-size: 0.75rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Contact;
