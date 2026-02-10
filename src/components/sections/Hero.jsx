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
                    <div className="absolute inset-0 bg-black/50" />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
                <div className="max-w-3xl">
                    <motion.h1
                        initial={{ x: -40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-white text-5xl md:text-8xl font-black mb-10 leading-[1.05] tracking-tighter"
                    >
                        {heroSlides[current].label.split(' ').map((word, i) => (
                            <span key={i} className="block">{word}</span>
                        ))}
                    </motion.h1>

                    <motion.div
                        initial={{ x: -40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-start gap-4"
                    >
                        <a href="#leistungen" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#2563eb] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/25 hover:-translate-y-1">
                            Unsere Leistungen <ArrowRight size={20} />
                        </a>
                        <a href="tel:064368779226" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white hover:text-slate-900 transition-all hover:-translate-y-1">
                            <Phone size={20} /> Jetzt anrufen
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Dots */}
            <div className="absolute bottom-12 left-6 flex gap-4 z-10">
                {heroSlides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`transition-all duration-500 rounded-full h-1.5 ${i === current ? 'bg-[#2563eb] w-12' : 'bg-white/20 w-3'}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
