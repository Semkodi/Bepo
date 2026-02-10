import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';

const Contact = () => {
    return (
        <section id="kontakt" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
            {/* Decors */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <FadeInSection>
                    <div className="bg-slate-900 rounded-[3.5rem] shadow-3xl overflow-hidden relative border border-white/5">
                        {/* Abstract Glow */}
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

                        <div className="flex flex-col lg:flex-row">
                            {/* Content Side */}
                            <div className="lg:w-1/2 p-10 lg:p-20 text-white">
                                <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                                    Projekt <br />
                                    <span className="text-primary italic">besprechen?</span>
                                </h2>
                                <p className="text-white/60 text-lg mb-12 max-w-md">
                                    Schreiben Sie uns oder rufen Sie direkt an –
                                    Ihre persönliche Beratung ist völlig kostenlos und unverbindlich.
                                </p>

                                <div className="space-y-8">
                                    {[
                                        { icon: <Phone size={24} />, label: 'Telefon', value: '06436 8779226', href: 'tel:064368779226' },
                                        { icon: <Mail size={24} />, label: 'E-Mail', value: 'info@bepo-milazzo.de', href: 'mailto:info@bepo-milazzo.de' },
                                        { icon: <MapPin size={24} />, label: 'Standort', value: '65599 Dornburg' },
                                    ].map((c, i) => (
                                        <div key={i} className="flex items-center gap-6 group">
                                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                {c.icon}
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-1">{c.label}</div>
                                                {c.href ? (
                                                    <a href={c.href} className="text-xl font-bold hover:text-primary transition-colors">{c.value}</a>
                                                ) : (
                                                    <span className="text-xl font-bold">{c.value}</span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Form Side */}
                            <div className="lg:w-1/2 p-10 lg:p-20 bg-white/5 backdrop-blur-3xl border-l border-white/10">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <InputField placeholder="Ihr Name" type="text" />
                                        <InputField placeholder="E-Mail Adresse" type="email" />
                                    </div>
                                    <textarea
                                        placeholder="Beschreiben Sie kurz Ihr Projekt..."
                                        rows={5}
                                        className="w-full p-6 bg-white/5 border border-white/10 rounded-3xl text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-all resize-none"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl shadow-primary/30 transition-all hover:-translate-y-1 active:scale-[0.98]"
                                    >
                                        <Send size={18} /> Nachricht senden
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
};

const InputField = ({ placeholder, type }) => (
    <input
        type={type}
        placeholder={placeholder}
        className="w-full p-6 bg-white/5 border border-white/10 rounded-3xl text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-all"
    />
);

export default Contact;
