import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/4964368779226?text=Guten%20Tag%20Herr%20Milazzo,%20ich%20hätte%20eine%20Anfrage%20bezüglich..."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[9999] group"
        >
            <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-emerald-500/40 transition-all duration-500" />
            <div className="relative bg-emerald-500 hover:bg-emerald-600 text-white w-16 h-16 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-emerald-500/40 transition-all duration-300 hover:-translate-y-2 active:scale-90">
                <MessageCircle size={32} />
                {/* Badge */}
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 border-2 border-white rounded-full animate-pulse" />
            </div>
            {/* Tooltip */}
            <div className="absolute right-20 top-1/2 -translate-y-1/2 px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 hidden md:block whitespace-nowrap border border-white/10">
                WhatsApp Beratung
            </div>
        </a>
    );
};

export default WhatsAppButton;
