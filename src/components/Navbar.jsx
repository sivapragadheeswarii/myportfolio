import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-2 shadow-[0_0_20px_rgba(179,0,0,0.15)]' : 'bg-transparent py-4'}`}
            style={{ height: 'var(--nav-height)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 5%' }}>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="heading-font"
                style={{ fontSize: '1.5rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)' }}
            >
                <div style={{ width: '12px', height: '12px', background: 'var(--accent-primary)', borderRadius: '2px' }}></div>
                <span style={{ letterSpacing: '-0.5px' }}>Vintage_Dev</span>
            </motion.div>

            <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="hidden-mobile">
                {navLinks.map((link, index) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -2, color: 'var(--accent-gold)' }}
                        style={{
                            textDecoration: 'none',
                            color: 'var(--text-secondary)',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            transition: 'color 0.3s ease'
                        }}
                    >
                        {link.name}
                    </motion.a>
                ))}
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <a href="https://github.com/sivapragadheeswarii" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}><Github size={18} /></a>
                <a href="https://www.linkedin.com/in/sivapragadheeswari" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}><Linkedin size={18} /></a>
                <div style={{ padding: '0.5rem 1rem', border: '1px solid var(--accent-gold)', fontSize: '0.75rem', color: 'var(--accent-gold)', background: 'rgba(197, 160, 89, 0.05)', borderRadius: '2px', fontFamily: 'Fira Code' }}>
                    EST. 2026
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) { .hidden-mobile { display: none !important; } }
      `}</style>
        </nav>
    );
};

export default Navbar;
