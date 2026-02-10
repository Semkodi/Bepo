import React from 'react';
import FadeInSection from '../ui/FadeInSection';
import { services } from '../../data/services';

const Services = () => {
    return (
        <section id="leistungen" className="py-24 lg:py-32 max-w-7xl mx-auto px-6">
            <FadeInSection>
                <div className="text-center mb-16 lg:mb-24">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                        Unsere Fachbereiche
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                        Was wir für Sie tun
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Von der Beratung bis zur fertigen Montage – alles aus einer Hand mit Qualitätsgarantie.
                        Wir setzen auf Markenprodukte „Made in Germany“.
                    </p>
                </div>
            </FadeInSection>

            <div className="grid gap-12 lg:gap-20">
                {services.map((s, i) => (
                    <FadeInSection key={s.id} delay={i * 0.1}>
                        <div className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                            <div className="flex flex-col lg:flex-row">
                                {/* Image Container */}
                                <div className="lg:w-5/12 relative aspect-[16/10] lg:aspect-square overflow-hidden">
                                    <img
                                        src={s.img}
                                        alt={s.title}
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-primary/90 text-white text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
                                        {s.title}
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="lg:w-7/12 p-8 lg:p-16 flex flex-col justify-center">
                                    <h3 className="text-3xl font-extrabold text-slate-900 mb-2">
                                        {s.title}
                                    </h3>
                                    <div className="text-sm font-bold text-primary mb-6 flex items-center gap-2">
                                        <span className="w-8 h-[2px] bg-primary/20" />
                                        {s.subtitle}
                                    </div>
                                    <p className="text-slate-500 leading-relaxed mb-10 text-lg">
                                        {s.desc}
                                    </p>

                                    {/* Features Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                        {s.benefits.map((b, j) => (
                                            <div key={j} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100/50 hover:bg-white hover:shadow-lg transition-all">
                                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                                    {b.icon}
                                                </div>
                                                <span className="text-sm font-bold text-slate-700">{b.text}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Badges */}
                                    <div className="flex flex-wrap gap-2 text-[10px] font-black tracking-widest uppercase">
                                        {s.highlights.map((h, j) => (
                                            <span key={j} className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-500 border border-slate-200/50">
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                ))}
            </div>
        </section>
    );
};

export default Services;
