import React from 'react';
import { navLinks } from '../../data/navLinks';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = ({ onShowImpressum, onShowDatenschutz }) => {
    return (
        <footer className="bg-slate-950 text-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                    <div className="md:col-span-1">
                        <div className="text-2xl font-black mb-6 italic underline decoration-[#2563eb] decoration-8 underline-offset-8">
                            MILAZZO.
                        </div>
                        <p className="text-white/40 italic leading-relaxed">
                            Ihr Spezialist für Fenster, Türen und Sonnenschutz im Westerwald.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-black uppercase tracking-widest text-[#2563eb] mb-8 text-sm">Links</h4>
                        <ul className="space-y-4">
                            {navLinks.map(link => (
                                <li key={link.label}><a href={link.href} className="text-white/60 hover:text-white transition-colors">{link.label}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-black uppercase tracking-widest text-[#2563eb] mb-8 text-sm">Kontakt</h4>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors">
                                <Phone size={20} className="text-[#2563eb]" /> 06436 8779226
                            </div>
                            <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors">
                                <Mail size={20} className="text-[#2563eb]" /> info@bepo-milazzo.de
                            </div>
                            <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors">
                                <MapPin size={20} className="text-[#2563eb]" /> 65599 Dornburg
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/20">
                        &copy; {new Date().getFullYear()} GIUSEPPE MILAZZO. ALLE RECHTE VORBEHALTEN.
                    </div>
                    <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
                        <button onClick={onShowImpressum} className="text-white/40 hover:text-white transition-colors">Impressum</button>
                        <button onClick={onShowDatenschutz} className="text-white/40 hover:text-white transition-colors">Datenschutz</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
