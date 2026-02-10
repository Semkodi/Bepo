import React from 'react';
import FadeInSection from '../ui/FadeInSection';
import { hersteller } from '../../data/hersteller';

const Hersteller = () => {
    return (
        <section className="py-20 lg:py-24 border-y border-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <FadeInSection>
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            Qualitätspartner
                        </span>
                        <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-800 tracking-tight">
                            Wir verbauen nur Markenprodukte
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
                        {hersteller.map((h, i) => (
                            <div
                                key={i}
                                className="group flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all duration-500 hover:-translate-y-1"
                            >
                                <div className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter mb-1">
                                    {h.name}
                                </div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors">
                                    {h.kategorie}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 pt-8 border-t border-slate-50 text-center">
                        <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                            Made in Germany Quality Standards
                        </p>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
};

export default Hersteller;
