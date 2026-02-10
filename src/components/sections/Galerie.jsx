import React, { useState } from 'react';
import FadeInSection from '../ui/FadeInSection';
import { galerieBilder } from '../../data/galerie';

const Galerie = () => {
    const [filter, setFilter] = useState('Alle');
    const kategorien = ['Alle', ...new Set(galerieBilder.map(b => b.kategorie))];
    const gefilterteBilder = filter === 'Alle' ? galerieBilder : galerieBilder.filter(b => b.kategorie === filter);

    return (
        <section id="referenzen" className="py-24 lg:py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <FadeInSection>
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            Unsere Arbeit
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            Referenzprojekte
                        </h2>
                    </div>

                    {/* Filter Navigation */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {kategorien.map(k => (
                            <button
                                key={k}
                                onClick={() => setFilter(k)}
                                className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${filter === k
                                        ? 'bg-primary text-white shadow-xl shadow-primary/30'
                                        : 'bg-white text-slate-400 hover:text-slate-600 border border-slate-100'
                                    }`}
                            >
                                {k}
                            </button>
                        ))}
                    </div>
                </FadeInSection>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gefilterteBilder.map((bild, i) => (
                        <FadeInSection key={bild.titel} delay={i * 0.05}>
                            <div className="group relative rounded-[2.5rem] overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500">
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img
                                        src={bild.bild}
                                        alt={bild.titel}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                                        <div className="px-3 py-1 self-start bg-primary text-white text-[9px] font-black uppercase tracking-widest rounded-lg mb-4">
                                            {bild.kategorie}
                                        </div>
                                        <h3 className="text-2xl font-black text-white mb-2 leading-tight">
                                            {bild.titel}
                                        </h3>
                                        <p className="text-white/60 text-sm italic">
                                            {bild.beschreibung}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Galerie;
