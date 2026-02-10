import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

const Datenschutz = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6 lg:p-12">
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl" onClick={onClose} />
            <div className="relative w-full max-w-5xl max-h-full bg-white rounded-[4rem] shadow-3xl overflow-hidden flex flex-col animate-scale-in">

                {/* Header Decoration */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

                {/* Header */}
                <div className="px-12 py-12 border-b border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-[2rem] bg-emerald-50 text-emerald-600 flex items-center justify-center">
                            <ShieldCheck size={36} />
                        </div>
                        <div>
                            <span className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.4em] mb-2 block italic">Privacy Data Protection</span>
                            <h2 className="text-4xl font-black text-slate-950 tracking-tighter italic whitespace-nowrap">Datenschutzerklärung<span className="text-emerald-500">.</span></h2>
                        </div>
                    </div>
                    <button onClick={onClose} className="w-16 h-16 rounded-[2rem] bg-slate-50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-900 transition-all duration-500">
                        <X size={32} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-12 lg:p-20 overflow-y-auto no-scrollbar space-y-20">
                    <section className="space-y-12">
                        <div className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100">
                            <h3 className="text-xl font-black text-slate-950 mb-6 italic underline decoration-emerald-500 decoration-4 underline-offset-8">Grundlagen</h3>
                            <p className="text-lg text-slate-500 leading-relaxed font-medium">Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Personenbezogene Daten werden vertraulich und entsprechend der gesetzlichen Vorschriften behandelt.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <PrivacyCard title="Datenerfassung" text="Die Datenverarbeitung erfolgt direkt durch den Websitebetreiber. Essenzielle Cookies dienen der Funktionalität." />
                            <PrivacyCard title="Ihre Rechte" text="Sie haben jederzeit das Recht auf unentgeltliche Auskunft, Berichtigung oder Löschung Ihrer Daten." />
                        </div>
                    </section>

                    <section className="pt-12 border-t border-slate-50 text-slate-500 italic text-sm leading-relaxed max-w-2xl px-12">
                        Detaillierte Beschreibungen zu Google Fonts, Drittanbieter-Services und Verschlüsselungstechnologien finden Sie in den vollständigen DSGVO-Unterlagen direkt auf Anfrage.
                    </section>
                </div>
            </div>
        </div>
    );
};

const PrivacyCard = ({ title, text }) => (
    <div className="p-10 border border-slate-100 rounded-[2.5rem] hover:bg-slate-50 transition-colors">
        <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-4">{title}</h4>
        <p className="text-sm leading-relaxed opacity-80">{text}</p>
    </div>
);

export default Datenschutz;
