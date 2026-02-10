import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';
import { blogBeitraege } from '../../data/blogBeitraege';

const Blog = () => {
    return (
        <section id="ratgeber" className="py-24 lg:py-32 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <FadeInSection>
                    <div className="text-center mb-16 lg:mb-24">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            Wissen
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            Ratgeber & Tipps
                        </h2>
                        <p className="mt-6 text-slate-500 max-w-2xl mx-auto leading-relaxed italic">
                            Nützliches Wissen rund um Fenster, Türen, Förderung und Sicherheit für Ihr Zuhause.
                        </p>
                    </div>
                </FadeInSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogBeitraege.map((beitrag, i) => (
                        <FadeInSection key={i} delay={i * 0.1}>
                            <article className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden">
                                {/* Article Image */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={beitrag.bild}
                                        alt={beitrag.titel}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-primary/90 text-white text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
                                        {beitrag.kategorie}
                                    </div>
                                </div>

                                {/* Article Content */}
                                <div className="p-10 pb-12 flex flex-col flex-grow">
                                    <div className="flex items-center gap-6 mb-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                        <span className="flex items-center gap-2">
                                            <Clock size={12} className="text-primary" /> {beitrag.lesezeit}
                                        </span>
                                        <span>{beitrag.datum}</span>
                                    </div>

                                    <h3 className="text-2xl font-black text-slate-900 mb-6 leading-tight group-hover:text-primary transition-colors">
                                        {beitrag.titel}
                                    </h3>

                                    <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                                        {beitrag.auszug}
                                    </p>

                                    <div className="inline-flex items-center gap-3 text-primary font-black text-xs uppercase tracking-[0.2em] group/btn pt-8 border-t border-slate-50">
                                        Weiterlesen
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-all">
                                            <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
