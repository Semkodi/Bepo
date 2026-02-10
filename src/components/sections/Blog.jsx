import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';
import { blogBeitraege } from '../../data/blogBeitraege';

const Blog = () => {
    return (
        <section id="blog" className="py-24 lg:py-40 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <FadeInSection>
                    <div className="text-center mb-24 lg:mb-32">
                        <span className="text-[#2563eb] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block italic">Wissen</span>
                        <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter">Ratgeber & Tipps</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium italic italic-none leading-relaxed">
                            Nützliches Wissen rund um Fenster, Türen, Förderung und Sicherheit für Ihr Zuhause.
                        </p>
                    </div>
                </FadeInSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
                    {blogBeitraege.map((post, i) => (
                        <FadeInSection key={i} delay={i * 0.1}>
                            <article className="group bg-white rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col h-full hover:-translate-y-4 transition-all duration-700">
                                {/* Image Port */}
                                <div className="h-72 relative overflow-hidden">
                                    <img
                                        src={post.bild}
                                        alt={post.titel}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute top-6 left-6 bg-[#2563eb] text-white px-5 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest z-10 shadow-lg">
                                        {post.kategorie}
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </div>

                                {/* Content Side */}
                                <div className="p-10 lg:p-12 flex flex-col flex-grow">
                                    <div className="flex items-center gap-6 mb-8 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                                        <div className="flex items-center gap-2 italic-none"><Clock size={14} className="text-[#2563eb]" /> {post.lesedauer}</div>
                                        <div className="flex items-center gap-2 italic-none"><Calendar size={14} className="text-[#2563eb]" /> {post.datum}</div>
                                    </div>

                                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-6 leading-tight tracking-tight group-hover:text-[#2563eb] transition-colors">
                                        {post.titel}
                                    </h3>

                                    <p className="text-slate-500 leading-relaxed mb-10 text-sm font-medium italic italic-none line-clamp-3">
                                        {post.vorschau}
                                    </p>

                                    <div className="mt-auto">
                                        <button className="flex items-center gap-3 text-[#2563eb] font-black uppercase tracking-[0.2em] text-[10px] hover:gap-5 transition-all group/btn">
                                            Weiterlesen <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                                        </button>
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
