import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavItem = ({ name, href, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.a
            href={href}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="nav-item-capsule"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                textDecoration: 'none',
                color: isHovered ? 'var(--accent-gold)' : 'var(--text-secondary)',
                fontSize: '0.8rem',
                fontWeight: '600',
                fontFamily: 'Fira Code, monospace',
                transition: 'all 0.3s ease',
                padding: '0.5rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                position: 'relative'
            }}
        >
            <motion.span
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -5 }}
                style={{ color: 'var(--accent-gold)' }}
            >[</motion.span>
            <span>{name}</span>
            <motion.span
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 5 }}
                style={{ color: 'var(--accent-gold)' }}
            >]</motion.span>
            
            {/* Click Ripple Effect */}
            <motion.div
                whileTap={{ scale: 0.95 }}
                style={{ position: 'absolute', inset: 0, borderRadius: '999px', background: 'rgba(197, 160, 89, 0.08)' }}
            />
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
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Works', href: '#projects' },
    ];

    return (
        <>
            <div 
                className="navbar-wrapper"
                style={{ 
                    position: 'fixed', 
                    top: '25px', 
                    left: '50%', 
                    transform: 'translateX(-50%)', 
                    zIndex: 3000,
                    width: 'auto',
                    minWidth: 'max-content'
                }}
            >
                <motion.nav 
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        background: isScrolled ? 'rgba(5, 5, 5, 0.85)' : 'rgba(8, 8, 8, 0.65)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '999px',
                        padding: '6px 8px',
                        gap: '0.5rem',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.7)',
                        transition: 'background-color 0.4s ease'
                    }}
                >
                    {/* Desktop Nav Links */}
                    <div style={{ display: 'flex', alignItems: 'center', paddingRight: '12px', background: 'transparent' }} className="desktop-nav-capsule">
                        {navLinks.map((link, index) => (
                            <NavItem key={link.name} name={link.name} href={link.href} index={index} />
                        ))}
                        
                        {/* Social Mini Icons */}
                        <div style={{ marginLeft: '1rem', display: 'flex', gap: '0.8rem', borderLeft: '1px solid rgba(197, 160, 89, 0.15)', paddingLeft: '1rem', background: 'transparent' }}>
                            <motion.a whileHover={{ scale: 1.15, color: 'var(--accent-gold)' }} href="https://github.com/sivapragadheeswarii" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}><Github size={16} /></motion.a>
                            <motion.a whileHover={{ scale: 1.15, color: 'var(--accent-gold)' }} href="https://linkedin.com/in/sivapragadheeswari" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}><Linkedin size={16} /></motion.a>
                        </div>
                    </div>

                    {/* Mobile Toggle Button Capsule */}
                    <button 
                        className="mobile-toggle-capsule"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{ 
                            background: 'rgba(12, 12, 18, 0.9)', 
                            border: '1px solid rgba(212, 175, 55, 0.35)', 
                            borderRadius: '999px',
                            color: 'var(--accent-gold)', 
                            padding: '6px 12px',
                            cursor: 'pointer',
                            display: 'none',
                            outline: 'none',
                            backdropFilter: 'blur(16px)',
                            WebkitBackdropFilter: 'blur(16px)',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.8), 0 0 12px rgba(212, 175, 55, 0.12)'
                        }}
                    >
                        {mobileMenuOpen ? (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <X size={15} style={{ color: 'var(--accent-gold)' }} />
                                <span style={{ fontSize: '0.65rem', fontFamily: 'Fira Code', fontWeight: 'bold' }}>CLOSE</span>
                            </div>
                        ) : (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <Menu size={15} style={{ color: 'var(--accent-gold)' }} />
                                <span style={{ fontSize: '0.65rem', fontFamily: 'Fira Code', fontWeight: 'bold', letterSpacing: '0.5px' }}>MENU</span>
                            </div>
                        )}
                    </button>
                </motion.nav>

                {/* Mobile Menu (Executive Floating Glass Command Sheet) */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.94, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.94, y: -10 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 240 }}
                            style={{
                                position: 'fixed',
                                top: '65px',
                                right: '14px',
                                width: 'min(270px, 85vw)',
                                background: 'rgba(10, 10, 15, 0.96)',
                                backdropFilter: 'blur(30px)',
                                WebkitBackdropFilter: 'blur(30px)',
                                border: '1px solid rgba(212, 175, 55, 0.3)',
                                borderRadius: '20px',
                                padding: '1.2rem 1.1rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.9rem',
                                boxShadow: '0 30px 60px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                                zIndex: 4000
                            }}
                        >
                            {/* Executive Branding Header */}
                            <div style={{ paddingBottom: '0.4rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                                <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#FFFFFF', fontFamily: 'Playfair Display, serif' }}>
                                    SIVAPRAGADHEESWARI N.
                                </div>
                            </div>

                            {/* Mobile Nav Links Stack */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                                {navLinks.map((link, idx) => (
                                    <motion.a 
                                        key={link.name} 
                                        href={link.href} 
                                        onClick={() => setMobileMenuOpen(false)}
                                        whileTap={{ scale: 0.97 }}
                                        style={{ 
                                            color: '#FFFFFF', 
                                            textDecoration: 'none', 
                                            fontSize: '0.82rem', 
                                            fontWeight: '600',
                                            padding: '0.65rem 0.8rem',
                                            fontFamily: 'Fira Code, monospace',
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            border: '1px solid rgba(255, 255, 255, 0.05)',
                                            borderRadius: '12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            transition: 'all 0.25s ease'
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: 'var(--accent-gold)', fontSize: '0.68rem', fontWeight: 'bold' }}>0{idx + 1}.</span>
                                            <span>{link.name}</span>
                                        </div>
                                        <span style={{ color: 'var(--accent-gold)', opacity: 0.6, fontSize: '0.75rem' }}>→</span>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Social Icons & Contact CTA */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '0.2rem' }}>
                                <motion.a 
                                    whileTap={{ scale: 0.95 }}
                                    href="https://github.com/sivapragadheeswarii" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '10px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.08)',
                                        color: '#FFFFFF',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}
                                >
                                    <Github size={15} />
                                </motion.a>

                                <motion.a 
                                    whileTap={{ scale: 0.95 }}
                                    href="https://linkedin.com/in/sivapragadheeswari" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '10px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.08)',
                                        color: '#FFFFFF',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}
                                >
                                    <Linkedin size={15} />
                                </motion.a>

                                <motion.a 
                                    whileTap={{ scale: 0.97 }}
                                    href="#contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{
                                        flex: 1,
                                        background: 'linear-gradient(135deg, var(--accent-gold), #8A6E3B)',
                                        borderRadius: '10px',
                                        padding: '9px 12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        color: 'var(--bg-primary)',
                                        textDecoration: 'none',
                                        boxShadow: '0 8px 18px rgba(197, 160, 89, 0.25)',
                                        fontFamily: 'Fira Code, monospace',
                                        fontWeight: '700',
                                        fontSize: '0.7rem'
                                    }}
                                >
                                    <span>siva.connect()</span>
                                </motion.a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <style>{`
                    @media (max-width: 800px) {
                        .navbar-wrapper {
                            left: auto !important;
                            right: 14px !important;
                            top: 14px !important;
                            transform: none !important;
                        }
                        .desktop-nav-capsule { display: none !important; }
                        .mobile-toggle-capsule { display: block !important; }
                        .desktop-connect-pill { display: none !important; }
                    }
                `}</style>
            </div>

            {/* Compact Soft-Corner Developer Connect Button (Top Right) */}
            <motion.a 
                href="#contact"
                className="desktop-connect-pill"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ 
                    scale: 1.04,
                    boxShadow: '0 0 25px rgba(197, 160, 89, 0.25), 0 10px 30px rgba(0,0,0,0.7)',
                }}
                whileTap={{ scale: 0.96 }}
                style={{
                    position: 'fixed',
                    top: '25px',
                    right: '40px',
                    zIndex: 3000,
                    background: 'rgba(12, 12, 12, 0.9)',
                    border: '1px solid var(--accent-gold)',
                    borderRadius: '12px',
                    padding: '8px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    color: 'var(--accent-gold)',
                    textDecoration: 'none',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    fontFamily: 'Fira Code, monospace',
                    transition: 'border-color 0.3s ease'
                }}
            >
                <span style={{ color: '#FFFFFF', opacity: 0.4, fontSize: '12px', fontWeight: '800' }}>[</span>
                <span style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '1px' }}>siva.connect()</span>
                <span style={{ color: '#FFFFFF', opacity: 0.4, fontSize: '12px', fontWeight: '800' }}>]</span>
                <span style={{ width: '4px', height: '10px', background: 'var(--accent-gold)', opacity: 0.6 }}></span>
            </motion.a>
        </>
    );
};

export default Navbar;
