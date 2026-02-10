import React from 'react';
import FadeInSection from '../ui/FadeInSection';
import { hersteller } from '../../data/hersteller';

const Hersteller = () => {
    return (
        <section className="py-20 bg-white border-y border-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <FadeInSection>
                    <div className="text-center mb-16">
                        <span className="text-slate-400 font-black uppercase tracking-[0.4em] text-[10px] block mb-4 italic">Vertrauen & Qualität</span>
                        <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic">
                            Unsere <span className="text-[#2563eb]">Partner</span> & Hersteller
                        </h3>
                    </div>
                </FadeInSection>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-700">
                    {hersteller.map((h, i) => (
                        <div key={i} className="group cursor-default">
                            <div className="text-3xl md:text-4xl font-black text-slate-800 tracking-tighter group-hover:text-[#2563eb] transition-colors">
                                {h.name}
                            </div>
                            <div className="text-[9px] font-black text-[#2563eb]/50 uppercase tracking-[0.3em] mt-1 group-hover:text-[#2563eb] transition-colors">
                                {h.kategorie}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hersteller;
