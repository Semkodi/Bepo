import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';
import { faqDaten } from '../../data/faq';

const FaqElement = ({ frage, antwort, istOffen, umschalten }) => (
    <div className={`rounded-2xl border transition-all duration-300 overflow-hidden mb-3 ${istOffen ? 'bg-white border-blue-100 shadow-lg shadow-blue-500/5' : 'bg-white border-slate-50 hover:border-slate-100 shadow-sm'
        }`}>
        <button
            onClick={umschalten}
            className="w-full px-7 py-5 flex items-center justify-between text-left group"
        >
            <span className={`text-base font-bold tracking-tight transition-colors duration-300 ${istOffen ? 'text-[#2563eb]' : 'text-slate-800'
                }`}>
                {frage}
            </span>
            <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${istOffen ? 'bg-[#2563eb]/10 text-[#2563eb] rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'
                }`}>
                <ChevronDown size={16} />
            </div>
        </button>
        <div className={`transition-all duration-300 ease-in-out px-7 overflow-hidden ${istOffen ? 'max-h-[400px] pb-6 opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <div className="w-10 h-0.5 bg-[#2563eb]/10 mb-5 rounded-full" />
            <p className="text-slate-500 leading-relaxed text-sm">
                {antwort}
            </p>
        </div>
    </div>
);

const FAQ = () => {
    const [offenerIndex, setOffenerIndex] = useState(null);

    return (
        <section id="faq" className="py-20 lg:py-32 bg-slate-50/30 overflow-hidden relative">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <FadeInSection>
                    <div className="text-center mb-16">
                        <span className="text-[#2563eb] font-black uppercase tracking-[0.4em] text-[9px] mb-4 block">Häufige Fragen</span>
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter">
                            FAQ – Alles <span className="text-[#2563eb] italic underline decoration-blue-100 decoration-4 underline-offset-8">Wichtige</span>
                        </h2>
                    </div>
                </FadeInSection>

                <div className="flex flex-col">
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

                <FadeInSection className="mt-16 text-center">
                    <div className="inline-flex items-center gap-5 p-6 bg-white rounded-3xl shadow-lg border border-slate-50">
                        <div className="w-10 h-10 rounded-xl bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center">
                            <HelpCircle size={24} />
                        </div>
                        <div className="text-left">
                            <div className="text-base font-black text-slate-900 leading-none mb-1">Noch Fragen offen?</div>
                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic italic-none text-center">Schreiben Sie uns direkt</div>
                        </div>
                        <a href="#kontakt" className="ml-4 px-6 py-3 bg-[#2563eb] text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-blue-500/20 hover:scale-105 transition-all text-center">Kontakt</a>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
};

export default FAQ;
