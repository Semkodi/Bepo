import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks } from '../../data/navLinks';

const Navbar = ({ scrolled }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${scrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-md' : 'py-6 bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#home" className={`text-xl font-black uppercase tracking-tight transition-colors ${scrolled ? 'text-[#2563eb]' : 'text-white'
                    }`}>
                    Giuseppe Milazzo
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map(link => (
                        <a key={link.label} href={link.href} className={`text-xs font-black uppercase tracking-[0.1em] hover:text-[#2563eb] transition-colors ${scrolled ? 'text-slate-900' : 'text-white/80'}`}>{link.label}</a>
                    ))}
                    <a href="#kontakt" className="bg-[#2563eb] text-white px-6 py-3 rounded-xl font-black uppercase tracking-[0.1em] text-[10px] hover:bg-blue-600 transition-all shadow-lg hover:-translate-y-0.5">
                        Termin buchen
                    </a>
                </div>

                {/* Mobile btn */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`md:hidden ${scrolled ? 'text-slate-900' : 'text-white'}`}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white p-6 shadow-xl border-t flex flex-col gap-5">
                    {navLinks.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-lg font-bold text-slate-800"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href="tel:064368779226" className="bg-[#2563eb] text-white p-4 rounded-lg flex items-center justify-center gap-3 font-bold">
                        <Phone size={20} /> Jetzt anrufen
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
