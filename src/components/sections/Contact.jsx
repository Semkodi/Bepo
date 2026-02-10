import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';

const Contact = () => {
    return (
        <section id="kontakt" className="py-24 lg:py-40 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-[#0f172a] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(2,6,23,0.5)] flex flex-col lg:flex-row min-h-[700px]">

                    {/* Brand/Info Side */}
                    <div className="lg:w-1/2 p-12 lg:p-24 relative overflow-hidden flex flex-col justify-center">
                        {/* Decorative background circle */}
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-[120px]" />

                        <div className="relative z-10">
                            <h2 className="text-5xl lg:text-7xl font-black text-white mb-10 leading-[0.9] tracking-tighter">
                                Projekt <br />
                                <span className="text-[#2563eb] italic underline decoration-blue-500/30 decoration-8 underline-offset-8">besprechen?</span>
                            </h2>
                            <p className="text-slate-400 text-lg lg:text-xl font-medium mb-16 leading-relaxed max-w-md italic italic-none">
                                Schreiben Sie uns oder rufen Sie direkt an – Ihre persönliche Beratung ist völlig kostenlos und unverbindlich.
                            </p>

                            <div className="space-y-12">
                                {[
                                    { icon: <Phone size={24} />, label: 'Telefon', value: '06436 8779226', href: 'tel:064368779226' },
                                    { icon: <Mail size={24} />, label: 'E-Mail', value: 'info@bepo-milazzo.de', href: 'mailto:info@bepo-milazzo.de' },
                                    { icon: <MapPin size={24} />, label: 'Standort', value: '65599 Dornburg' },
                                ].map((c, i) => (
                                    <div key={i} className="flex gap-8 items-center group cursor-pointer">
                                        <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-500 group-hover:scale-110">
                                            {c.icon}
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-2 group-hover:text-[#2563eb] transition-colors">
                                                {c.label}
                                            </div>
                                            {c.href ? (
                                                <a href={c.href} className="text-xl lg:text-2xl font-black text-white hover:text-[#2563eb] transition-colors tracking-tight italic-none">
                                                    {c.value}
                                                </a>
                                            ) : (
                                                <div className="text-xl lg:text-2xl font-black text-white tracking-tight italic-none">
                                                    {c.value}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:w-1/2 p-12 lg:p-24 bg-white/5 flex flex-col justify-center border-l lg:border-l-0 border-white/5 relative">
                        <form className="space-y-8 lg:space-y-10 relative z-10 w-full">
                            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                                <div className="space-y-4">
                                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Ihr Name</label>
                                    <input
                                        type="text"
                                        placeholder="Max Mustermann"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white focus:border-[#2563eb] focus:bg-white/10 outline-none transition-all placeholder:text-white/10 font-medium"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/20">E-Mail Adresse</label>
                                    <input
                                        type="email"
                                        placeholder="email@beispiel.de"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white focus:border-[#2563eb] focus:bg-white/10 outline-none transition-all placeholder:text-white/10 font-medium"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Beschreiben Sie kurz Ihr Projekt...</label>
                                <textarea
                                    rows={5}
                                    placeholder="Wobei können wir Sie unterstützen?"
                                    className="w-full bg-white/5 border border-white/10 rounded-[2.5rem] p-8 text-white focus:border-[#2563eb] focus:bg-white/10 outline-none transition-all placeholder:text-white/10 resize-none font-medium"
                                />
                            </div>
                            <button className="w-full bg-[#2563eb] py-8 rounded-[2rem] text-white font-black uppercase tracking-[0.3em] text-sm flex items-center justify-center gap-4 hover:bg-blue-600 transition-all shadow-2xl shadow-blue-500/20 hover:-translate-y-2 group">
                                <Send size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /> Nachricht senden
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
