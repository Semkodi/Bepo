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
        <section id="home" className="relative min-h-screen overflow-hidden">
            {/* Background Slideshow */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroSlides[currentImage].img})` }}
                />
            </AnimatePresence>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-primary/20" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-3xl"
                >
                    <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
                        {heroSlides[currentImage].label}
                    </h1>
                    <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                        Fenster · Haustüren · Rollladen · Markisen – alles aus einer Hand.
                        Persönliche Beratung, saubere Montage, faire Preise im Westerwald.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#leistungen"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-extrabold shadow-2xl shadow-primary/40 group overflow-hidden relative"
                        >
                            <span className="relative z-10">Unsere Leistungen</span>
                            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>
                        <a
                            href="tel:064368779226"
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold transition-all"
                        >
                            <Phone size={18} /> Anrufen
                        </a>
                    </div>
                </motion.div>

                {/* Progress Indicators */}
                <div className="absolute bottom-12 left-6 right-6 flex justify-center gap-3">
                    {heroSlides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentImage(idx)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentImage ? 'w-12 bg-primary' : 'w-2 bg-white/30'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
