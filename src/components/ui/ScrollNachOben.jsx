import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollNachOben = () => {
    const [sichtbar, setSichtbar] = useState(false);

    useEffect(() => {
        const toggleSichtbarkeit = () => setSichtbar(window.scrollY > 400);
        window.addEventListener('scroll', toggleSichtbarkeit);
        return () => window.removeEventListener('scroll', toggleSichtbarkeit);
    }, []);

    if (!sichtbar) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-28 right-6 z-[9998] w-12 h-12 bg-white/80 backdrop-blur-md border border-slate-100 text-slate-900 rounded-2xl flex items-center justify-center shadow-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1 active:scale-95 group"
        >
            <ChevronUp size={20} className="group-hover:translate-y-[-2px] transition-transform" />
        </button>
    );
};

export default ScrollNachOben;
