import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-10 left-6 right-6 md:left-10 md:right-auto md:max-w-md z-[10000] animate-fade-in-up">
            <div className="bg-white/80 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(2,6,23,0.3)] border border-white/20 flex flex-col gap-6">
                <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-[#2563eb]/10 text-[#2563eb] rounded-2xl flex items-center justify-center">
                        <ShieldCheck size={28} />
                    </div>
                    <div>
                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest italic leading-none mb-1.5">Datenschutz</h4>
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] italic">Privatsphäre Einstellungen</div>
                    </div>
                </div>

                <p className="text-xs text-slate-500 font-medium leading-relaxed italic-none">
                    Wir nutzen Cookies, um Ihr Erlebnis auf unserer Website zu optimieren. Mit Klick auf "Akzeptieren" stimmen Sie der Nutzung zu.
                </p>

                <div className="flex gap-4">
                    <button
                        onClick={handleAccept}
                        className="flex-1 bg-[#2563eb] py-4 rounded-xl text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 active:scale-95"
                    >
                        Akzeptieren
                    </button>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="flex-1 bg-slate-50 py-4 rounded-xl text-slate-400 text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 hover:text-slate-600 transition-all active:scale-95"
                    >
                        Ablehnen
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
