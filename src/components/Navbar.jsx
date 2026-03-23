import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Cpu, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavItem = ({ name, href, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.a
            href={href}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{
                textDecoration: 'none',
                color: isHovered ? 'var(--accent-gold)' : 'var(--text-primary)',
                fontSize: '0.85rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontFamily: 'Fira Code, monospace',
                position: 'relative',
                transition: 'color 0.2s ease'
            }}
        >
            <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                style={{ color: 'var(--accent-primary)', fontSize: '10px' }}
            >
                [
            </motion.span>
            
            <motion.span
                animate={isHovered ? {
                    x: [0, -2, 2, 0],
                    transition: { duration: 0.2, repeat: Infinity }
                } : {}}
            >
                {isHovered && <span style={{ color: 'var(--accent-gold)', marginRight: '2px' }}>&gt;</span>}
                {name}
            </motion.span>

            <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
                style={{ color: 'var(--accent-primary)', fontSize: '10px' }}
            >
                ]
            </motion.span>

            {isHovered && (
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    style={{ position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '1px', background: 'var(--accent-gold)' }}
                />
            )}
        </motion.a>
    );
};

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home', code: '01' },
        { name: 'About', href: '#about', code: '02' },
        { name: 'Skills', href: '#skills', code: '03' },
        { name: 'Experience', href: '#experience', code: '04' },
        { name: 'Projects', href: '#projects', code: '05' },
        { name: 'Contact', href: '#contact', code: '06' },
    ];

    return (
        <nav 
            className={`transition-all duration-300 ${isScrolled ? 'glass' : ''}`}
            style={{ 
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 2000,
                height: 'var(--nav-height)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: '0 5%',
                background: isScrolled ? 'var(--glass-bg)' : 'rgba(8, 4, 5, 0.4)',
                backdropFilter: 'blur(10px)',
                borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid rgba(255,255,255,0.05)'
            }}>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="heading-font"
                style={{ fontSize: '1.2rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-gold)', fontFamily: 'Fira Code, monospace', zIndex: 100 }}
            >
                <Terminal size={20} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ letterSpacing: '-0.5px' }}>SIVA.DEV</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div style={{ display: 'flex', gap: '1.8rem', alignItems: 'center' }} className="desktop-nav">
                {navLinks.map((link, index) => (
                    <NavItem key={link.name} name={link.name} href={link.href} index={index} />
                ))}
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', zIndex: 100 }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }} className="social-links-nav">
                    <a href="https://github.com/sivapragadheeswarii" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}><Github size={18} /></a>
                    <a href="https://www.linkedin.com/in/sivapragadheeswari" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}><Linkedin size={18} /></a>
                </div>
                
                <div style={{ padding: '0.5rem 1rem', border: '1px solid var(--accent-gold)', fontSize: '0.75rem', color: 'var(--accent-gold)', background: 'rgba(230, 57, 70, 0.05)', borderRadius: '2px', fontFamily: 'Fira Code' }} className="est-box">
                    EST. 2026
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{ background: 'transparent', border: 'none', color: 'var(--accent-gold)', cursor: 'pointer', display: 'none', alignItems: 'center', justifyContent: 'center' }}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            width: '100%',
                            height: '100vh',
                            background: 'var(--bg-primary)',
                            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(114, 47, 55, 0.15) 1px, transparent 0)',
                            backgroundSize: '40px 40px',
                            zIndex: 2100,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '2rem',
                            padding: '2rem'
                        }}
                    >
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setMobileMenuOpen(false)}
                                style={{
                                    textDecoration: 'none',
                                    color: 'var(--text-primary)',
                                    fontSize: '1.5rem',
                                    fontFamily: 'Playfair Display',
                                    fontWeight: '700',
                                    letterSpacing: '2px'
                                }}
                            >
                                <span style={{ color: 'var(--accent-primary)', marginRight: '1rem', fontStyle: 'italic', fontSize: '1rem' }}>{link.code}</span>
                                {link.name.toUpperCase()}
                            </motion.a>
                        ))}
                        
                        <div style={{ marginTop: '3rem', width: '100px', height: '1px', background: 'var(--accent-crimson)', opacity: 0.3 }}></div>
                        
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <a href="https://github.com/sivapragadheeswarii" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)' }}><Github size={24} /></a>
                            <a href="https://www.linkedin.com/in/sivapragadheeswari" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)' }}><Linkedin size={24} /></a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 900px) {
                    .desktop-nav, .est-box, .social-links-nav { display: none !important; }
                    .mobile-toggle { display: flex !important; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
