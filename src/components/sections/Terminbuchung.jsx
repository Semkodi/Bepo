import React from 'react';
import { Calendar, Clock, User, Phone, Settings, Send } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';

const Terminbuchung = () => {
    return (
        <section id="termin" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <FadeInSection>
                    <div className="text-center mb-16 lg:mb-20">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            Kostenlose Beratung
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            Termin <span className="text-primary italic">online</span> anfragen
                        </h2>
                    </div>
                </FadeInSection>

                <FadeInSection delay={0.2}>
                    <div className="bg-white rounded-[3.5rem] border border-slate-100 shadow-2xl overflow-hidden shadow-primary/5">
                        <div className="p-8 lg:p-16">
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <FormGroup label="Vor- & Nachname" icon={<User size={18} />}>
                                    <input type="text" placeholder="Max Mustermann" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-primary/50 transition-all font-medium" />
                                </FormGroup>

                                <FormGroup label="Telefonnummer" icon={<Phone size={18} />}>
                                    <input type="tel" placeholder="0123 / 4567890" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-primary/50 transition-all font-medium" />
                                </FormGroup>

                                <FormGroup label="Gewünschte Leistung" icon={<Settings size={18} />}>
                                    <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-primary/50 transition-all font-medium appearance-none">
                                        <option>Fenstertausch</option>
                                        <option>Haustüren</option>
                                        <option>Rollladen / Markisen</option>
                                        <option>Reparatur / Wartung</option>
                                        <option>Sonstiges</option>
                                    </select>
                                </FormGroup>

                                <FormGroup label="Wunschtermin (ca.)" icon={<Calendar size={18} />}>
                                    <input type="text" placeholder="z.B. Nächste Woche Dienstag" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-primary/50 transition-all font-medium" />
                                </FormGroup>

                                <div className="md:col-span-2">
                                    <FormGroup label="Zusätzliche Infos & Details" icon={<Clock size={18} />}>
                                        <textarea rows={4} placeholder="Beschreiben Sie kurz Ihr Vorhaben (Maße, Anzahl, etc.)..." className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-primary/50 transition-all font-medium resize-none" />
                                    </FormGroup>
                                </div>

                                <div className="md:col-span-2">
                                    <button
                                        type="submit"
                                        className="w-full py-6 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl shadow-primary/30 transition-all hover:-translate-y-1 active:scale-[0.98]"
                                    >
                                        <Send size={20} /> Terminanfrage absenden
                                    </button>
                                    <p className="mt-6 text-center text-xs text-slate-400 font-medium">
                                        Durch das Absenden erklären Sie sich mit der Datenschutzerklärung einverstanden.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
};

const FormGroup = ({ label, icon, children }) => (
    <div className="space-y-3">
        <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 pl-2">
            <span className="text-primary">{icon}</span>
            {label}
        </label>
        {children}
    </div>
);

export default Terminbuchung;
