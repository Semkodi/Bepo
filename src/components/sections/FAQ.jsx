import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';
import { faqDaten } from '../../data/faq';

const FaqElement = ({ frage, antwort, istOffen, umschalten }) => (
    <div className={`rounded-3xl border transition-all duration-500 overflow-hidden ${istOffen ? 'bg-white border-primary/20 shadow-xl shadow-primary/5' : 'bg-white/50 border-slate-100 hover:border-slate-200'
        }`}>
        <button
            onClick={umschalten}
            className="w-full px-8 py-6 flex items-center justify-between text-left group"
        >
            <span className={`text-lg font-bold transition-colors duration-300 ${istOffen ? 'text-primary' : 'text-slate-800 group-hover:text-primary'
                }`}>
                {frage}
            </span>
            <div className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${istOffen ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-slate-400'
                }`}>
                <ChevronDown size={20} />
            </div>
        </button>
        <div className={`transition-all duration-500 ease-in-out px-8 overflow-hidden ${istOffen ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <p className="text-slate-500 leading-relaxed text-[15px]">
                {antwort}
            </p>
        </div>
    </div>
);

const FAQ = () => {
    const [offenerIndex, setOffenerIndex] = useState(null);

    return (
        <section id="faq" className="py-24 lg:py-32 bg-white overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                <FadeInSection>
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            Häufige Fragen
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            FAQ – Alles <span className="text-primary italic">Wichtige</span>
                        </h2>
                    </div>
                </FadeInSection>

                <div className="flex flex-col gap-4">
                    {faqDaten.map((item, i) => (
                        <FadeInSection key={i} delay={i * 0.05}>
                            <FaqElement
                                frage={item.frage}
                                antwort={item.antwort}
                                istOffen={offenerIndex === i}
                                umschalten={() => setOffenerIndex(offenerIndex === i ? null : i)}
                            />
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
