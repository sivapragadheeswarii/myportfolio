import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = 100;
        const duration = 1600; // ms
        const startTime = performance.now();

        const animate = (timestamp) => {
            const runtime = timestamp - startTime;
            const progress = Math.min(runtime / duration, 1);
            // Ease out quad formula for natural deceleration
            const ease = progress * (2 - progress);
            const currentCount = Math.floor(ease * end);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setTimeout(() => {
                    onComplete();
                }, 400); // Small pause at 100%
            }
        };

        requestAnimationFrame(animate);
    }, [onComplete]);

    // Split text into characters for premium hover/stagger
    const text = "SIVAPRAGADHEESWARI N.";

    return (
        <motion.div
            className="preloader-wrapper"
            exit={{ 
                y: '-100vh',
                transition: { 
                    duration: 0.8, 
                    ease: [0.76, 0, 0.24, 1], // iOS/Apple style ease-in-out
                    delay: 0.2
                }
            }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: '#050505',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'
            }}
        >
            {/* Background elements */}
            <div style={{
                position: 'absolute',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(197, 160, 89, 0.05) 0%, transparent 70%)',
                filter: 'blur(50px)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }} />

            {/* Glowing Golden Line drawing in */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: '120px' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                style={{
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)',
                    marginBottom: '2.5rem'
                }}
            />

            {/* Percentage Counter */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: 'clamp(3rem, 10vw, 5.5rem)',
                        fontWeight: '900',
                        color: 'transparent',
                        WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)',
                        letterSpacing: '-2px',
                        lineHeight: '1',
                        position: 'relative'
                    }}
                >
                    {count.toString().padStart(3, '0')}
                    <span style={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        color: 'var(--accent-gold)', 
                        width: `${count}%`, 
                        overflow: 'hidden', 
                        whiteSpace: 'nowrap',
                        WebkitTextStroke: '1px var(--accent-gold)'
                    }}>
                        {count.toString().padStart(3, '0')}
                    </span>
                </motion.span>

                {/* Staggered Name Reveal */}
                <div style={{ display: 'flex', gap: '2px', marginTop: '1rem' }}>
                    {text.split('').map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 0.6, y: 0 }}
                            transition={{
                                delay: 0.1 + index * 0.04,
                                ease: 'easeOut'
                            }}
                            style={{
                                fontFamily: 'Fira Code, monospace',
                                fontSize: '0.65rem',
                                color: 'var(--text-primary)',
                                letterSpacing: '4px',
                                fontWeight: '500'
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
            </div>

            {/* Mini Systems Initialize Logs */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.4, 0.2, 0.5, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    fontFamily: 'Fira Code, monospace',
                    fontSize: '0.55rem',
                    color: 'var(--accent-gold)',
                    letterSpacing: '2px'
                }}
            >
                SYSTEM_INITIALIZE_OK // V3.1
            </motion.div>
        </motion.div>
    );
};

export default Preloader;
