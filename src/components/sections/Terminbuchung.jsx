import React from 'react';
import { User, Phone, Settings, Calendar, Send } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';

const Terminbuchung = () => {
    return (
        <section id="termin" className="py-24 lg:py-40 bg-slate-50/50 overflow-hidden relative">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.4] pointer-events-none grayscale" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <FadeInSection>
                    <div className="text-center mb-20 lg:mb-24">
                        <span className="text-[#2563eb] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block italic underline decoration-blue-100 decoration-8 underline-offset-8">Kostenlose Beratung</span>
                        <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
                            Termin <span className="text-[#2563eb] italic">online</span> anfragen
                        </h2>
                    </div>
                </FadeInSection>

                <FadeInSection delay={0.2}>
                    <div className="bg-white rounded-[4rem] p-12 lg:p-20 shadow-4xl shadow-slate-200/50 border border-slate-100">
                        <form className="space-y-10 lg:space-y-12">
                            <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
                                <div className="space-y-4">
                                    <label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#2563eb]">
                                        <User size={14} /> Vor- & Nachname
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Max Mustermann"
                                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-6 text-slate-900 focus:bg-white focus:border-[#2563eb] focus:shadow-xl focus:shadow-blue-500/5 transition-all outline-none font-medium"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#2563eb]">
                                        <Phone size={14} /> Telefonnummer
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="0123 / 4567890"
                                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-6 text-slate-900 focus:bg-white focus:border-[#2563eb] focus:shadow-xl focus:shadow-blue-500/5 transition-all outline-none font-medium"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#2563eb]">
                                        <Settings size={14} /> Gewünschte Leistung
                                    </label>
                                    <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-6 text-slate-900 focus:bg-white focus:border-[#2563eb] focus:shadow-xl focus:shadow-blue-500/5 transition-all outline-none font-medium appearance-none">
                                        <option>Fenstertausch</option>
                                        <option>Haustür-Montage</option>
                                        <option>Sonnenschutz-Systeme</option>
                                        <option>Rollladen & Service</option>
                                    </select>
                                </div>
                                <div className="space-y-4">
                                    <label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#2563eb]">
                                        <Calendar size={14} /> Wunschtermin (ca.)
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="z.B. Nächste Woche Dienstag"
                                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-6 text-slate-900 focus:bg-white focus:border-[#2563eb] focus:shadow-xl focus:shadow-blue-500/5 transition-all outline-none font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#2563eb]">
                                    <Calendar size={14} /> Zusätzliche Infos & Details
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Beschreiben Sie kurz Ihr Vorhaben (Maße, Anzahl, etc.)..."
                                    className="w-full bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 text-slate-900 focus:bg-white focus:border-[#2563eb] focus:shadow-xl focus:shadow-blue-500/5 transition-all outline-none resize-none font-medium"
                                />
                            </div>

                            <button className="w-full bg-[#2563eb] py-8 rounded-[2rem] text-white font-black uppercase tracking-[0.3em] text-sm flex items-center justify-center gap-4 hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/30 hover:-translate-y-2 active:translate-y-0 group">
                                <Send size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /> Terminanfrage absenden
                            </button>

                            <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-12 italic opacity-60">
                                Durch das Absenden erklären Sie sich mit der Datenschutzerklärung einverstanden.
                            </p>
                        </form>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
};

export default Terminbuchung;
