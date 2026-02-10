import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';

const About = () => {
    return (
        <section id="ueber-uns" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Visual Side */}
                    <FadeInSection className="relative">
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.squarespace-cdn.com/content/v1/5d9e51dbc4bcc92e211c81c2/1729699175245-ROCW6XZH6CSAP82RLED5/image-asset.jpeg"
                                alt="Giuseppe Milazzo bei der Arbeit"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-[2rem] shadow-2xl flex flex-col items-center">
                            <span className="text-4xl font-black mb-1 leading-none">10+</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Jahre Erfahrung</span>
                        </div>

                        {/* Floating Decoration */}
                        <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
                    </FadeInSection>

                    {/* Content Side */}
                    <FadeInSection delay={0.2}>
                        <div className="flex flex-col">
                            <span className="inline-block self-start px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                                Über uns
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
                                Handwerk mit Herz <br />
                                <span className="text-primary">& Präzision</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-10">
                                Giuseppe Milazzo ist Ihr Ansprechpartner für professionellen Fensterbau, Rollladen,
                                Haustüren und Markisen in Dornburg und dem Westerwald. Mit über 10 Jahren Erfahrung
                                und dem Anspruch an höchste Qualität, setzen wir Ihre Projekte termingerecht und sauber um.
                            </p>

                            <div className="space-y-5">
                                {[
                                    'Kostenlose Vor-Ort Beratung & Aufmaß',
                                    'Montage vom Chef persönlich',
                                    'Nur Markenprodukte namhafter Hersteller',
                                    'Festpreis-Angebote ohne versteckte Kosten',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <span className="font-bold text-slate-700 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 flex items-center gap-6">
                                <div className="w-16 h-[2px] bg-primary/20" />
                                <div className="italic text-slate-400 text-sm uppercase tracking-widest font-bold">
                                    Giuseppe Milazzo
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </section>
    );
};

export default About;
