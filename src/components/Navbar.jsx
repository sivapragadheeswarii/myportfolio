import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Cpu, Menu, X } from 'lucide-react';
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
                style={{ color: 'var(--accent-primary)' }}
            >[</motion.span>
            <span>{name}</span>
            <motion.span
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 5 }}
                style={{ color: 'var(--accent-primary)' }}
            >]</motion.span>
            
            {/* Click Ripple Effect Placeholder style */}
            <motion.div
                whileTap={{ scale: 0.95 }}
                style={{ position: 'absolute', inset: 0, borderRadius: '999px', background: 'rgba(139, 30, 63, 0.1)' }}
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
            <div style={{ 
                position: 'fixed', 
                top: '25px', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                zIndex: 3000,
                width: 'auto',
                minWidth: 'max-content'
            }}>
                <motion.nav 
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        background: 'rgba(26, 9, 13, 0.8)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(139, 30, 63, 0.3)',
                        borderRadius: '999px',
                        padding: '6px 8px',
                        gap: '0.5rem',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
                    }}
                >
                    

                    {/* Desktop Nav Links */}
                    <div style={{ display: 'flex', alignItems: 'center', paddingRight: '12px', background: 'transparent' }} className="desktop-nav-capsule">
                        {navLinks.map((link, index) => (
                            <NavItem key={link.name} name={link.name} href={link.href} index={index} />
                        ))}
                        
                        {/* Social Mini Icons */}
                        <div style={{ marginLeft: '1rem', display: 'flex', gap: '0.8rem', borderLeft: '1px solid rgba(139,30,63,0.2)', paddingLeft: '1rem', background: 'transparent' }}>
                            <motion.a whileHover={{ scale: 1.2, color: 'var(--accent-gold)' }} href="https://github.com/sivapragadheeswarii" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}><Github size={16} /></motion.a>
                            <motion.a whileHover={{ scale: 1.2, color: 'var(--accent-gold)' }} href="https://linkedin.com/in/sivapragadheeswari" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}><Linkedin size={16} /></motion.a>
                        </div>
                    </div>

                    {/* Mobile Toggle Button (Responsive) */}
                    <button 
                        className="mobile-toggle-capsule"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{ 
                            background: 'transparent', 
                            border: 'none', 
                            color: 'var(--text-primary)', 
                            padding: '0 12px',
                            cursor: 'pointer',
                            display: 'none'
                        }}
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </motion.nav>

                {/* Mobile Menu (Floating Sheet) */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            style={{
                                position: 'absolute',
                                top: '80px',
                                left: "50%",
                                x: "-50%",
                                width: 'min(320px, 90vw)',
                                background: 'rgba(26, 9, 13, 0.98)',
                                backdropFilter: 'blur(30px)',
                                border: '1px solid var(--accent-primary)',
                                borderRadius: '24px',
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                boxShadow: '0 30px 60px rgba(0,0,0,0.9), 0 0 20px rgba(139, 30, 63, 0.2)',
                                zIndex: 4000
                            }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {navLinks.map((link) => (
                                    <motion.a 
                                        key={link.name} 
                                        href={link.href} 
                                        onClick={() => setMobileMenuOpen(false)}
                                        whileTap={{ scale: 0.95, x: 5 }}
                                        style={{ 
                                            color: 'var(--text-primary)', 
                                            textDecoration: 'none', 
                                            fontSize: '1.1rem', 
                                            fontWeight: '600',
                                            padding: '1rem',
                                            fontFamily: 'Fira Code, monospace',
                                            borderBottom: '1px solid rgba(139,30,63,0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px'
                                        }}
                                    >
                                        <span style={{ color: 'var(--accent-primary)', fontSize: '0.8rem' }}>0{navLinks.indexOf(link) + 1}</span>
                                        <span>{link.name}</span>
                                    </motion.a>
                                ))}
                            </div>
                            
                            {/* Compact Soft-Corner Mobile Developer Connect Button */}
                            <motion.a 
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                style={{
                                    marginTop: '1.5rem',
                                    background: 'var(--accent-primary)',
                                    border: '1px solid var(--accent-gold)',
                                    borderRadius: '16px',
                                    padding: '14px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    cursor: 'pointer',
                                    color: 'white',
                                    textDecoration: 'none',
                                    boxShadow: '0 10px 20px rgba(139, 30, 63, 0.3)',
                                    fontFamily: 'Fira Code, monospace'
                                }}
                            >
                                <span style={{ fontSize: '0.9rem', fontWeight: '800' }}>INITIALIZE_CONTACT()</span>
                            </motion.a>
                        </motion.div>
                    )}
                </AnimatePresence>

                <style>{`
                    @media (max-width: 800px) {
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
                    scale: 1.05,
                    boxShadow: '0 0 20px rgba(139, 30, 63, 0.3)',
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                    position: 'fixed',
                    top: '25px',
                    right: '40px',
                    zIndex: 3000,
                    background: 'rgba(45, 16, 21, 0.9)',
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
                    fontFamily: 'Fira Code, monospace'
                }}
            >
                <span style={{ color: 'var(--accent-primary)', fontSize: '12px', fontWeight: '800' }}>[</span>
                <span style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '1px' }}>siva.connect()</span>
                <span style={{ color: 'var(--accent-primary)', fontSize: '12px', fontWeight: '800' }}>]</span>
                <span style={{ width: '4px', height: '10px', background: 'var(--accent-gold)', opacity: 0.5 }}></span>
            </motion.a>
        </>
    );
};

export default Navbar;
