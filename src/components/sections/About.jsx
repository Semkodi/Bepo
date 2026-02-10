import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';

const About = () => {
    return (
        <section id="ueber-uns" className="py-24 lg:py-40 bg-slate-50/50 relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="absolute top-1/4 -right-24 w-96 h-96 bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">

                    {/* Visual Side */}
                    <div className="lg:w-1/2 relative">
                        <FadeInSection>
                            <div className="relative z-10">
                                <img
                                    src="https://images.squarespace-cdn.com/content/v1/5d9e51dbc4bcc92e211c81c2/1729699175245-ROCW6XZH6CSAP82RLED5/image-asset.jpeg"
                                    alt="Giuseppe Milazzo Handwerk"
                                    className="w-full rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(2,6,23,0.15)] relative z-10"
                                />

                                {/* Floating Badge */}
                                <div className="absolute -bottom-10 -right-4 lg:-right-10 bg-[#2563eb] p-10 rounded-[3rem] shadow-2xl animate-float z-20 border-8 border-white">
                                    <div className="text-white">
                                        <div className="text-5xl font-black tracking-tighter mb-1">10+</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest opacity-80 leading-none text-center">Jahre<br />Erfahrung</div>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2">
                        <FadeInSection delay={0.2}>
                            <span className="bg-[#2563eb]/10 text-[#2563eb] px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest mb-8 inline-block">
                                Über uns
                            </span>
                            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-10 leading-[0.95] tracking-tighter">
                                Handwerk mit Herz <br />
                                <span className="text-[#2563eb] italic italic-none">& Präzision</span>
                            </h2>
                            <p className="text-slate-500 text-lg lg:text-xl leading-relaxed mb-12 font-medium">
                                Giuseppe Milazzo ist Ihr Ansprechpartner für professionellen Fensterbau, Rollladen, Haustüren und Markisen in Dornburg und dem Westerwald. Mit über 10 Jahren Erfahrung und dem Anspruch an höchste Qualität, setzen wir Ihre Projekte termingerecht und sauber um.
                            </p>

                            <div className="space-y-6 mb-16">
                                {[
                                    'Kostenlose Vor-Ort Beratung & Aufmaß',
                                    'Montage vom Chef persönlich',
                                    'Nur Markenprodukte namhafter Hersteller',
                                    'Festpreis-Angebote ohne versteckte Kosten'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 group">
                                        <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all transform group-hover:scale-110">
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <span className="text-slate-700 font-black text-sm uppercase tracking-widest">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-10 border-t border-slate-100 flex items-center gap-8">
                                <div className="text-slate-400 font-black italic tracking-widest uppercase text-[10px] italic-none">Giuseppe Milazzo</div>
                            </div>
                        </FadeInSection>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
