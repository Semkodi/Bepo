import React from 'react';
import { X, ShieldCheck, HelpCircle } from 'lucide-react';

const Impressum = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6 lg:p-12">
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl" onClick={onClose} />
            <div className="relative w-full max-w-5xl max-h-full bg-white rounded-[4rem] shadow-3xl overflow-hidden flex flex-col animate-scale-in">

                {/* Header Decoration */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent" />

                {/* Header */}
                <div className="px-12 py-12 border-b border-slate-50 flex items-center justify-between">
                    <div>
                        <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-2 block italic">Legal Information</span>
                        <h2 className="text-4xl font-black text-slate-950 tracking-tighter italic">Impressum<span className="text-primary">.</span></h2>
                    </div>
                    <button onClick={onClose} className="w-16 h-16 rounded-[2rem] bg-slate-50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-900 transition-all duration-500">
                        <X size={32} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-12 lg:p-20 overflow-y-auto no-scrollbar space-y-20">
                    <section className="grid lg:grid-cols-2 gap-16">
                        <div className="space-y-6">
                            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary italic">Angaben gemäß § 5 TMG</h3>
                            <div className="text-3xl font-black text-slate-950 leading-tight">
                                Giuseppe Milazzo<br />
                                <span className="text-lg text-slate-500 font-bold block mt-2 italic">Fenster · Haustüren · Rollladen</span>
                            </div>
                        </div>
                        <div className="space-y-8 pt-8 border-t border-slate-50 lg:border-t-0">
                            <AddressBlock label="Adresse" value="Musterstraße 123, 65599 Dornburg" />
                            <AddressBlock label="Kontakt" value="06436 8779226 | info@bepo-milazzo.de" />
                        </div>
                    </section>

                    <section className="pt-12 border-t border-slate-50 grid lg:grid-cols-3 gap-12 text-sm text-slate-500 leading-relaxed italic">
                        <div className="space-y-4">
                            <h4 className="font-black text-slate-900 uppercase tracking-widest text-[10px]">Aufsichtsbehörde</h4>
                            <p>Handwerkskammer Wiesbaden<br />Betriebsnummer: 1234567</p>
                        </div>
                        <div className="lg:col-span-2 space-y-4">
                            <h4 className="font-black text-slate-900 uppercase tracking-widest text-[10px]">Haftung für Inhalte</h4>
                            <p>Wir übernehmen gemäß § 7 Abs.1 TMG die Verantwortung für unsere eigenen Inhalte nach den allgemeinen Gesetzen. Die Überwachung fremder Informationen ist jedoch nach §§ 8-10 TMG nicht verpflichtend.</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

const AddressBlock = ({ label, value }) => (
    <div className="space-y-2">
        <div className="text-[10px] font-black uppercase tracking-widest text-slate-300">{label}</div>
        <div className="text-lg font-bold text-slate-900">{value}</div>
    </div>
);

export default Impressum;
