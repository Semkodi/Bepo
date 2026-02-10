import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

const HinweisLeiste = () => {
    const [sichtbar, setSichtbar] = useState(false);

    useEffect(() => {
        const akzeptiert = localStorage.getItem('cookies-akzeptiert');
        if (!akzeptiert) {
            const timer = setTimeout(() => setSichtbar(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const akzeptieren = () => {
        localStorage.setItem('cookies-akzeptiert', 'true');
        setSichtbar(false);
    };

    if (!sichtbar) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[10000] animate-fade-in-up">
            <div className="bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 lg:p-10 shadow-3xl overflow-hidden relative">
                {/* Glow Background */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                            <ShieldCheck size={28} />
                        </div>
                        <h4 className="text-lg font-black text-white tracking-tight uppercase italic underline decoration-primary decoration-4 underline-offset-4">
                            Cookie-Hinweis
                        </h4>
                    </div>

                    <p className="text-white/60 text-[13px] leading-relaxed mb-10">
                        Wir nutzen Google Fonts und essenzielle Cookies, um Ihnen die beste Erfahrung auf unserer Webseite zu ermöglichen.
                        Details finden Sie in unserer <span className="text-primary font-bold">Datenschutzerklärung</span>.
                    </p>

                    <div className="flex flex-col gap-3">
                        <button
                            onClick={akzeptieren}
                            className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-xl shadow-primary/20 transition-all hover:-translate-y-1"
                        >
                            Alle akzeptieren
                        </button>
                        <button
                            onClick={() => setSichtbar(false)}
                            className="w-full py-4 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all"
                        >
                            Nur Notwendige
                        </button>
                    </div>
                </div>

                <button
                    onClick={() => setSichtbar(false)}
                    className="absolute top-6 right-6 text-white/20 hover:text-white transition-colors"
                >
                    <X size={20} />
                </button>
            </div>
        </div>
    );
};

export default HinweisLeiste;
