import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { heroSlides } from '../../data/heroSlides';

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setCurrentImage(p => (p + 1) % heroSlides.length), 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
                <motion.div key={currentImage}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    style={{
                        position: 'absolute', inset: 0,
                        backgroundImage: `url(${heroSlides[currentImage].img})`,
                        backgroundSize: 'cover', backgroundPosition: 'center',
                    }}
                />
            </AnimatePresence>

            <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(15,23,42,0.75) 0%, rgba(15,23,42,0.4) 50%, rgba(37,99,235,0.15) 100%)',
            }} />

            <div style={{
                position: 'relative', zIndex: 10,
                maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem',
                minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800,
                        lineHeight: 1.05, letterSpacing: '-0.03em',
                        color: '#fff', marginBottom: '1.5rem', maxWidth: '700px',
                    }}>
                    {heroSlides[currentImage].label}
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.7)',
                        maxWidth: '540px', lineHeight: 1.7, marginBottom: '2.5rem',
                    }}>
                    Fenster · Haustüren · Rollladen · Markisen – alles aus einer Hand. Persönliche Beratung, saubere Montage, faire Preise.
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
                    style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <a href="#leistungen" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '1rem 2rem', background: '#2563eb', color: '#fff',
                        borderRadius: '0.75rem', fontWeight: 700, fontSize: '0.95rem',
                        transition: 'all 0.3s', boxShadow: '0 4px 20px rgba(37,99,235,0.4)',
                    }}
                        onMouseEnter={e => { e.target.style.background = '#1d4ed8'; e.target.style.transform = 'translateY(-2px)'; }}
                        onMouseLeave={e => { e.target.style.background = '#2563eb'; e.target.style.transform = 'translateY(0)'; }}>
                        Unsere Leistungen <ArrowRight size={18} />
                    </a>
                    <a href="tel:064368779226" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '1rem 2rem', background: 'rgba(255,255,255,0.12)',
                        border: '1px solid rgba(255,255,255,0.25)', color: '#fff',
                        borderRadius: '0.75rem', fontWeight: 600, backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s',
                    }}
                        onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.2)'}
                        onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.12)'}>
                        <Phone size={16} /> Anrufen
                    </a>
                </motion.div>

                <div style={{
                    position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
                    display: 'flex', gap: '0.5rem',
                }}>
                    {heroSlides.map((_, idx) => (
                        <button key={idx} onClick={() => setCurrentImage(idx)} style={{
                            width: idx === currentImage ? '2rem' : '0.5rem', height: '0.5rem',
                            borderRadius: '999px', border: 'none', cursor: 'pointer',
                            background: idx === currentImage ? '#2563eb' : 'rgba(255,255,255,0.4)',
                            transition: 'all 0.4s',
                        }} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
