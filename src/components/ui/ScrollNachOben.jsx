import React, { useState, useEffect } from 'react';
import { MousePointer2, ChevronUp } from 'lucide-react';

const ScrollNachOben = () => {
    const [sichtbar, setSichtbar] = useState(false);

    useEffect(() => {
        const toggleSichtbarkeit = () => setSichtbar(window.scrollY > 500);
        window.addEventListener('scroll', toggleSichtbarkeit);
        return () => window.removeEventListener('scroll', toggleSichtbarkeit);
    }, []);

    if (!sichtbar) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-32 lg:bottom-40 right-8 z-[9998] w-16 h-16 bg-white/80 backdrop-blur-xl border border-slate-100 text-slate-900 rounded-[2rem] flex items-center justify-center shadow-xl hover:bg-slate-900 hover:text-white transition-all duration-500 hover:-translate-y-2 group animate-scale-in"
        >
            <div className="relative">
                <ChevronUp size={24} className="group-hover:-translate-y-2 transition-transform duration-500" />
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all" />
            </div>
        </button>
    );
};

export default ScrollNachOben;
