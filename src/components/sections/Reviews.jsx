import React from 'react';
import { Star, MapPin } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';
import { reviews } from '../../data/reviews';

const Reviews = () => {
    return (
        <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6 overflow-hidden">
            <FadeInSection>
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                        Kundenstimmen
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Was unsere Kunden sagen
                    </h2>
                </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reviews.map((r, i) => (
                    <FadeInSection key={i} delay={i * 0.1}>
                        <div className="group h-full bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-slate-700 font-medium italic leading-relaxed mb-8 flex-grow">
                                "{r.text}"
                            </p>

                            {/* Author Information */}
                            <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-white font-black text-lg">
                                        {r.name[0]}
                                    </div>
                                    <div>
                                        <div className="font-extrabold text-slate-900 text-sm">{r.name}</div>
                                        <div className="flex items-center gap-1 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                                            <MapPin size={10} /> {r.location || 'Westerwald'}
                                        </div>
                                    </div>
                                </div>
                                <div className="px-3 py-1 rounded-lg bg-slate-50 text-slate-400 text-[9px] font-black uppercase tracking-widest border border-slate-100">
                                    {r.service}
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
