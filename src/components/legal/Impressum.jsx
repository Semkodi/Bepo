import React from 'react';
import { X } from 'lucide-react';

const Impressum = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6 lg:p-12">
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                onClick={onClose}
            />
            <div className="relative w-full max-w-4xl max-h-full bg-white rounded-[3rem] shadow-3xl overflow-hidden flex flex-col animate-scale-in">
                {/* Header */}
                <div className="px-10 py-8 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-xs">§</span>
                        Impressum
                    </h2>
                    <button
                        onClick={onClose}
                        className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-100 hover:bg-red-50 transition-all"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-10 lg:p-16 overflow-y-auto text-slate-600 leading-relaxed space-y-12">
                    <section>
                        <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-4 italic">Angaben gemäß § 5 TMG</h3>
                        <p className="text-xl font-bold text-slate-800">
                            Giuseppe Milazzo<br />
                            Fenster · Rollladen · Markisen · Haustüren
                        </p>
                        <p className="mt-4">
                            Musterstraße 123<br />
                            65599 Dornburg
                        </p>
                    </section>

                    <section className="grid md:grid-cols-2 gap-12 pt-8 border-t border-slate-50">
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Kontakt</h4>
                            <p className="font-bold text-slate-800">
                                Telefon: 06436 8779226<br />
                                E-Mail: info@bepo-milazzo.de
                            </p>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Aufsichtsbehörde</h4>
                            <p className="text-sm">
                                Handwerkskammer Wiesbaden<br />
                                Betriebsnummer: 1234567
                            </p>
                        </div>
                    </section>

                    <section className="pt-8 border-t border-slate-50">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-4">Haftung für Inhalte</h4>
                        <p className="text-sm">
                            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Impressum;
