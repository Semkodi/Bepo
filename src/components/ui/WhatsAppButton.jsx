import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/4964368779226?text=Guten%20Tag%20Herr%20Milazzo,%20ich%20hätte%20eine%20Anfrage%20bezüglich..."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[9999] group"
        >
            {/* Pulsating Ring */}
            <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-emerald-500/40 animate-pulse transition-all duration-700" />

            <div className="relative bg-emerald-500 hover:bg-emerald-600 text-white w-16 h-16 lg:w-20 lg:h-20 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-emerald-500/40 transition-all duration-500 transform group-hover:-translate-y-3 group-hover:rotate-12 active:scale-90">
                <MessageCircle size={36} className="text-white drop-shadow-md" />

                {/* Floating Notification Dot */}
                <div className="absolute top-0 right-0 w-6 h-6 bg-red-500 border-2 border-white rounded-full flex items-center justify-center animate-bounce shadow-lg">
                    <div className="w-1 h-1 bg-white rounded-full animate-ping" />
                </div>
            </div>

            {/* Premium Tooltip */}
            <div className="absolute right-28 top-1/2 -translate-y-1/2 px-6 py-3 bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-8 group-hover:translate-x-0 hidden md:flex items-center gap-3 border border-white/10 shadow-2xl pointer-events-none whitespace-nowrap italic">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Beratung
            </div>
        </a>
    );
};

export default WhatsAppButton;
