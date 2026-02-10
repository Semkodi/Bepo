import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { heroSlides } from '../../data/heroSlides';

const Hero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setCurrent(p => (p + 1) % heroSlides.length), 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative h-screen flex items-center justify-start overflow-hidden bg-slate-900">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] scale-105"
                        style={{ backgroundImage: `url(${heroSlides[current].img})` }}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-12">
                <div className="max-w-2xl">
                    <motion.h1
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="text-white text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter"
                    >
                        {heroSlides[current].label.split(' ').map((word, i) => (
                            <span key={i} className="block">{word}</span>
                        ))}
                    </motion.h1>

                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                        className="flex flex-col sm:flex-row items-center justify-start gap-3"
                    >
                        <a href="#leistungen" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2563eb] text-white px-8 py-3.5 rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/25 hover:-translate-y-1">
                            Unsere Leistungen <ArrowRight size={18} />
                        </a>
                        <a href="tel:064368779226" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3.5 rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-white hover:text-slate-900 transition-all hover:-translate-y-1">
                            <Phone size={18} /> Jetzt anrufen
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Dots */}
            <div className="absolute bottom-10 left-6 flex gap-3 z-10">
                {heroSlides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`transition-all duration-500 rounded-full h-1 ${i === current ? 'bg-[#2563eb] w-10' : 'bg-white/20 w-2.5'}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
