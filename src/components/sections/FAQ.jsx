import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';
import { faqDaten } from '../../data/faq';

const FaqElement = ({ frage, antwort, istOffen, umschalten }) => (
    <div className={`rounded-3xl border transition-all duration-300 overflow-hidden mb-4 ${istOffen ? 'bg-white border-blue-100 shadow-xl shadow-blue-500/5' : 'bg-white border-slate-50 hover:border-slate-100 shadow-sm'
        }`}>
        <button
            onClick={umschalten}
            className="w-full px-8 py-7 flex items-center justify-between text-left group"
        >
            <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${istOffen ? 'text-[#2563eb]' : 'text-slate-800'
                }`}>
                {frage}
            </span>
            <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${istOffen ? 'bg-[#2563eb]/10 text-[#2563eb] rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'
                }`}>
                <ChevronDown size={20} />
            </div>
        </button>
        <div className={`transition-all duration-300 ease-in-out px-8 overflow-hidden ${istOffen ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <div className="w-12 h-1 bg-[#2563eb]/10 mb-6 rounded-full" />
            <p className="text-slate-500 leading-relaxed text-base">
                {antwort}
            </p>
        </div>
    </div>
);

const FAQ = () => {
    const [offenerIndex, setOffenerIndex] = useState(null);

    return (
        <section id="faq" className="py-24 lg:py-32 bg-slate-50/30 overflow-hidden relative">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <FadeInSection>
                    <div className="text-center mb-20">
                        <span className="bg-[#2563eb]/10 text-[#2563eb] px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            Häufige Fragen
                        </span>
                        <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter">
                            FAQ – Alles <span className="text-[#2563eb] italic italic-none">Wichtige</span>
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

                <FadeInSection className="mt-20 text-center">
                    <div className="inline-flex items-center gap-6 p-8 bg-white rounded-[2.5rem] shadow-xl border border-slate-50">
                        <div className="w-14 h-14 rounded-2xl bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center">
                            <HelpCircle size={32} />
                        </div>
                        <div className="text-left">
                            <div className="text-lg font-black text-slate-900 leading-none mb-1">Noch Fragen offen?</div>
                            <div className="text-xs text-slate-400 font-bold uppercase tracking-widest italic italic-none">Schreiben Sie uns direkt</div>
                        </div>
                        <a href="#kontakt" className="ml-6 px-8 py-4 bg-[#2563eb] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-blue-500/20 hover:scale-105 transition-all">Kontakt</a>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
};

export default FAQ;
