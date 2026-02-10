import React, { useState } from 'react';
import FadeInSection from '../ui/FadeInSection';
import { galerieBilder } from '../../data/galerie';

const Galerie = () => {
    const [filter, setFilter] = useState('Alle');
    const kategorien = ['Alle', ...new Set(galerieBilder.map(b => b.kategorie))];
    const gefilterteBilder = filter === 'Alle' ? galerieBilder : galerieBilder.filter(b => b.kategorie === filter);

    return (
        <section id="referenzen" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <FadeInSection>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-black text-slate-900 mb-8">Referenzprojekte</h2>
                        <div className="flex flex-wrap justify-center gap-2">
                            {kategorien.map(k => (
                                <button
                                    key={k}
                                    onClick={() => setFilter(k)}
                                    className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${filter === k ? 'bg-[#2563eb] text-white' : 'bg-white text-slate-500 border border-slate-200'
                                        }`}
                                >
                                    {k}
                                </button>
                            ))}
                        </div>
                    </div>
                </FadeInSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gefilterteBilder.map((bild, i) => (
                        <FadeInSection key={i} delay={i * 0.05}>
                            <div className="bg-white rounded-3xl overflow-hidden shadow-lg group">
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={bild.bild}
                                        alt={bild.titel}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="text-[#2563eb] text-[10px] font-black uppercase mb-2">{bild.kategorie}</div>
                                    <h3 className="text-xl font-black mb-2">{bild.titel}</h3>
                                    <p className="text-slate-500 text-sm italic">{bild.beschreibung}</p>
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
