import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';

const Einzugsgebiet = () => {
    return (
        <section id="einzugsgebiet" className="py-24 lg:py-32 bg-slate-900 relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <FadeInSection>
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-4">
                            Standort
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-8">
                            Unser Einzugsgebiet
                        </h2>
                    </div>
                </FadeInSection>

                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* List Side */}
                    <FadeInSection className="lg:col-span-2">
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 lg:p-12">
                            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                                <Navigation size={24} className="text-primary" />
                                📍 Wir sind mobil
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    'Dornburg', 'Limburg', 'Hadamar', 'Elz',
                                    'Diez', 'Montabaur', 'Westerburg', 'Herborn',
                                    'Weilburg', 'Runkel', 'Villmar', 'Beselich',
                                ].map(ort => (
                                    <div key={ort} className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-primary/20 hover:scale-105 transition-all duration-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span className="text-sm font-bold text-white/80">{ort}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-12 text-sm text-white/40 leading-relaxed italic border-t border-white/5 pt-8">
                                Ihr Ort ist nicht dabei? Kein Problem – sprechen Sie uns einfach an.
                                Wir kommen auch gerne in die weitere Umgebung.
                            </p>
                        </div>
                    </FadeInSection>

                    {/* Map Side */}
                    <FadeInSection className="lg:col-span-3" delay={0.2}>
                        <div className="relative rounded-[3.5rem] overflow-hidden border border-white/10 shadow-3xl bg-slate-800 p-2 lg:p-4">
                            <iframe
                                title="Standort Giuseppe Milazzo"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40585.89!2d8.0!3d50.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc0a09e97a0baf%3A0x41db728f061d380!2sDornburg!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                                className="w-full h-[500px] lg:h-[600px] rounded-[2.8rem] grayscale hover:grayscale-0 transition-all duration-1000"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            {/* Floating Card for Map */}
                            <div className="absolute top-10 right-10 bg-white p-6 rounded-3xl shadow-2xl hidden md:block border border-slate-100 animate-fade-in-up">
                                <div className="flex items-center gap-3 text-slate-900 font-extrabold mb-1">
                                    <MapPin size={18} className="text-primary" />
                                    65599 Dornburg
                                </div>
                                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest pl-7">
                                    Und der Westerwald
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </section>
    );
};

export default Einzugsgebiet;
