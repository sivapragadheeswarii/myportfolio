import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

const text = "Hello, welcome to my portfolio. I'm Sivapragadheeswari N., a web developer.";

const VoiceAssistant = ({ isPlaying, setIsPlaying }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(-1);
    const [words, setWords] = useState([]);
    const utteranceRef = useRef(null);

    useEffect(() => {
        // Clean up speech synthesis on unmount
        return () => {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    useEffect(() => {
        const textWords = text.split(" ");
        let charAccumulator = 0;
        const wordMap = textWords.map((word) => {
            const start = text.indexOf(word, charAccumulator);
            const end = start + word.length;
            charAccumulator = end;
            return { word, start, end };
        });
        setWords(wordMap);
    }, []);

    const speak = () => {
        if (!window.speechSynthesis) {
            alert("Your browser does not support Speech Synthesis.");
            return;
        }

        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utteranceRef.current = utterance;

        // Select a premium English voice
        const voices = window.speechSynthesis.getVoices();
        const voice = voices.find(v => v.lang.includes('en-US') && v.name.toLowerCase().includes('google')) || 
                      voices.find(v => v.lang.includes('en-US') && v.name.toLowerCase().includes('natural')) ||
                      voices.find(v => v.lang.includes('en')) || 
                      voices[0];
        
        if (voice) {
            utterance.voice = voice;
        }

        utterance.pitch = 1.05;
        utterance.rate = 0.88; // Pace it elegantly

        utterance.onstart = () => {
            setIsPlaying(true);
            setCurrentWordIndex(0);
        };

        utterance.onend = () => {
            setIsPlaying(false);
            setCurrentWordIndex(-1);
        };

        utterance.onerror = () => {
            setIsPlaying(false);
            setCurrentWordIndex(-1);
        };

        // Synchronize subtitles word-by-word
        utterance.onboundary = (event) => {
            if (event.name === 'word') {
                const charIndex = event.charIndex;
                const wordIdx = words.findIndex(
                    (w) => charIndex >= w.start && charIndex < w.end
                );
                if (wordIdx !== -1) {
                    setCurrentWordIndex(wordIdx);
                }
            }
        };

        window.speechSynthesis.speak(utterance);
    };

    const stop = () => {
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
        setIsPlaying(false);
        setCurrentWordIndex(-1);
    };

    const handleToggle = () => {
        if (isPlaying) {
            stop();
        } else {
            speak();
        }
    };

    // Soundwave visualization heights
    const barCount = 12;
    const barVariants = {
        silent: { height: 4, transition: { type: 'spring', stiffness: 300 } },
        speaking: (i) => ({
            height: [8, 30 + Math.sin(i) * 18, 8],
            transition: {
                duration: 0.5 + Math.sin(i) * 0.12,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: i * 0.03
            }
        })
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            {/* Trigger Console */}
            <div 
                onClick={handleToggle}
                className="voice-console-pill"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: 'rgba(8, 8, 8, 0.75)',
                    border: isPlaying ? '1px solid var(--accent-gold)' : '1px solid var(--glass-border)',
                    borderRadius: '999px',
                    padding: '8px 24px',
                    cursor: 'pointer',
                    boxShadow: isPlaying ? '0 0 25px rgba(197, 160, 89, 0.18), 0 12px 30px rgba(0, 0, 0, 0.8)' : '0 12px 25px rgba(0, 0, 0, 0.6)',
                    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    backdropFilter: 'blur(10px)'
                }}
            >
                <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: isPlaying ? 'var(--accent-gold)' : 'rgba(197, 160, 89, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isPlaying ? 'var(--bg-primary)' : 'var(--accent-gold)',
                    transition: 'all 0.5s ease',
                    boxShadow: isPlaying ? '0 0 10px var(--accent-gold)' : 'none'
                }}>
                    {isPlaying ? <Volume2 size={14} /> : <VolumeX size={14} />}
                </div>

                <span style={{
                    fontFamily: 'Fira Code, monospace',
                    fontSize: '0.75rem',
                    color: isPlaying ? '#FFFFFF' : 'var(--text-secondary)',
                    letterSpacing: '1px',
                    fontWeight: '600'
                }}>
                    {isPlaying ? 'AUDIO_INTRO.ACTIVE' : 'ACTIVATE_AUDIO_INTRO()'}
                </span>

                {/* Soundwave Bars */}
                <div style={{ display: 'flex', gap: '3px', alignItems: 'center', height: '35px', paddingLeft: '8px' }}>
                    {[...Array(barCount)].map((_, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={barVariants}
                            animate={isPlaying ? 'speaking' : 'silent'}
                            style={{
                                width: '2.5px',
                                background: 'linear-gradient(to top, var(--accent-gold), var(--accent-gold-light))',
                                borderRadius: '99px'
                              }}
                        />
                    ))}
                </div>
            </div>

            {/* Subtitles Overlay */}
            <AnimatePresence>
                {isPlaying && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        style={{
                            position: 'fixed',
                            bottom: '120px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: 'rgba(5, 5, 5, 0.95)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '16px',
                            padding: '1.2rem 2.2rem',
                            width: 'min(680px, 90vw)',
                            textAlign: 'center',
                            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(197, 160, 89, 0.05)',
                            zIndex: 9998,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '6px'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                            <Sparkles size={12} style={{ color: 'var(--accent-gold)' }} />
                            <span style={{ fontFamily: 'Fira Code', fontSize: '0.6rem', color: 'var(--accent-gold)', letterSpacing: '2px', textTransform: 'uppercase' }}>AI_VOICE_NARRATOR</span>
                        </div>
                        <p style={{
                            fontSize: 'clamp(1rem, 3vw, 1.35rem)',
                            lineHeight: '1.6',
                            color: 'var(--text-secondary)',
                            fontFamily: 'Playfair Display, serif',
                            fontStyle: 'italic',
                            fontWeight: '400'
                        }}>
                            {words.map((w, idx) => (
                                <span 
                                    key={idx}
                                    style={{
                                        color: idx === currentWordIndex ? '#FFFFFF' : 'rgba(255,255,255,0.25)',
                                        textShadow: idx === currentWordIndex ? '0 0 12px rgba(255, 255, 255, 0.5)' : 'none',
                                        transition: 'all 0.15s ease',
                                        display: 'inline-block',
                                        marginRight: '6px'
                                    }}
                                >
                                    {w.word}
                                </span>
                            ))}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default VoiceAssistant;
