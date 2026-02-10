import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';

const Reviews = () => {
    const kundenstimmen = [
        {
            name: "L. Krauser",
            service: "Fenster",
            location: "Westerwald",
            text: "Top Service! Pünktlich und sauber. Meine neuen Fenster sind fantastisch.",
            initial: "L",
            stars: 5
        },
        {
            name: "S. Hartmann",
            service: "Markise",
            location: "Westerwald",
            text: "Endlich eine Markise, die hält was sie verspricht. Giuseppe Milazzo weiß was er tut.",
            initial: "S",
            stars: 5
        },
        {
            name: "Familie Jung",
            service: "Haustür",
            location: "Westerwald",
            text: "Wir schätzen die persönliche Beratung vor Ort. Absolut seriös und zuverlässig.",
            initial: "F",
            stars: 5
        }
    ];

    return (
        <section id="bewertungen" className="py-24 lg:py-40 bg-white overflow-hidden relative">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.4] pointer-events-none grayscale" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <FadeInSection>
                    <div className="text-center mb-24 lg:mb-32">
                        <span className="text-[#2563eb] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block italic">Kundenstimmen</span>
                        <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter">Was unsere Kunden sagen</h2>
                    </div>
                </FadeInSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
                    {kundenstimmen.map((review, i) => (
                        <FadeInSection key={review.name} delay={i * 0.1}>
                            <div className="bg-white rounded-[3.5rem] p-12 lg:p-14 border border-slate-100 shadow-2xl shadow-slate-200/50 flex flex-col h-full group hover:-translate-y-4 transition-all duration-700 relative">

                                {/* Top Decoration */}
                                <div className="absolute top-10 right-10 text-slate-50 group-hover:text-blue-50 transition-colors duration-700">
                                    <Quote size={80} fill="currentColor" />
                                </div>

                                <div className="flex gap-1 mb-10 text-amber-400 relative z-10">
                                    {[...Array(review.stars)].map((_, j) => (
                                        <Star key={j} size={18} fill="currentColor" strokeWidth={0} />
                                    ))}
                                </div>

                                <p className="text-slate-600 text-lg lg:text-xl italic font-medium leading-relaxed mb-12 flex-grow relative z-10 italic-none">
                                    "{review.text}"
                                </p>

                                <div className="flex items-center gap-6 pt-10 border-t border-slate-50 relative z-10">
                                    <div className="w-16 h-16 rounded-3xl bg-[#2563eb] text-white flex items-center justify-center text-3xl font-black shadow-lg shadow-blue-200">
                                        {review.initial}
                                    </div>
                                    <div>
                                        <div className="text-xl font-black text-slate-900 leading-none mb-2 tracking-tight">
                                            {review.name}
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                                                <MapPin size={10} className="text-[#2563eb]" /> {review.location}
                                            </div>
                                            <div className="px-3 py-1 bg-slate-50 rounded-lg text-[8px] font-black uppercase tracking-widest text-[#2563eb]">
                                                {review.service}
                                            </div>
                                        </div>
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

export default Reviews;
