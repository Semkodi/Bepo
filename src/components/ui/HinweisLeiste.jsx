import React, { useState, useEffect } from 'react';
import { ShieldAlert } from 'lucide-react';

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
        <div className="fixed bottom-8 left-8 right-8 md:right-auto md:max-w-lg z-[9999]">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-8">
                <div className="text-[#2563eb]"><ShieldAlert size={32} /></div>
                <div className="flex-1">
                    <div className="font-black mb-1">Datenschutz-Hinweis</div>
                    <p className="text-xs text-slate-500 italic">Wir nutzen Cookies zur Optimierung unserer Website.</p>
                </div>
                <button
                    onClick={akzeptieren}
                    className="bg-[#2563eb] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-500/20"
                >
                    Akzeptieren
                </button>
            </div>
        </div>
    );
};

export default HinweisLeiste;
