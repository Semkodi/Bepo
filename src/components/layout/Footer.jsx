import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { navLinks } from '../../data/navLinks';

const Footer = ({ onShowImpressum, onShowDatenschutz }) => {
    return (
        <footer className="bg-slate-900 pt-24 pb-12 overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-20 pb-20 border-b border-white/5">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="text-2xl font-black text-white tracking-widest mb-8">
                            GIUSEPPE <br /> MILAZZO
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-xs">
                            Ihr Spezialist für Fenster, Türen und Sonnenschutz im Westerwald.
                            Handwerk aus Leidenschaft seit über 10 Jahren.
                        </p>
                        <div className="flex gap-4">
                            {[<Instagram size={18} />, <Facebook size={18} />].map((icon, i) => (
                                <button key={i} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white transition-all">
                                    {icon}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quicklinks */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-10 italic">Navigation</h4>
                        <ul className="space-y-6">
                            {navLinks.map(link => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-white/60 hover:text-white transition-colors flex items-center gap-3 group">
                                        <ArrowRight size={14} className="text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Footer */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-10 italic">Leistungen</h4>
                        <ul className="space-y-6 text-white/60 text-sm font-medium">
                            {['Fenstertausch', 'Haustür-Montage', 'Rollladenbau', 'Markisensysteme', 'Wartung & Service'].map(item => (
                                <li key={item} className="hover:text-white transition-colors cursor-default">{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-10 italic">Kontakt</h4>
                        <div className="space-y-8">
                            {[
                                { icon: <Phone size={18} />, text: '06436 8779226' },
                                { icon: <Mail size={18} />, text: 'info@bepo-milazzo.de' },
                                { icon: <MapPin size={18} />, text: '65599 Dornburg' },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    <div className="flex items-center gap-4 text-white font-bold group">
                                        <div className="text-primary">{item.icon}</div>
                                        <span>{item.text}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-[11px] font-black uppercase tracking-[0.2em]">
                    <div className="text-white/20">
                        &copy; {new Date().getFullYear()} GIUSEPPE MILAZZO. ALLE RECHTE VORBEHALTEN.
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 text-white/40">
                        <button onClick={onShowImpressum} className="hover:text-primary transition-colors">Impressum</button>
                        <button onClick={onShowDatenschutz} className="hover:text-primary transition-colors">Datenschutz</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
