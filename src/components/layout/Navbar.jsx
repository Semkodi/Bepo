import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../../data/navLinks';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = ({ scrolled }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${scrolled ? 'py-3 bg-white/80 backdrop-blur-lg shadow-sm border-b border-slate-100' : 'py-6 bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className={`text-2xl font-extrabold tracking-tighter transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'
                    }`}>
                    GIUSEPPE MILAZZO
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`text-sm font-bold tracking-wide uppercase hover:text-primary transition-colors duration-300 ${scrolled ? 'text-slate-600' : 'text-white/90'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#termin"
                        className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Termin buchen
                    </a>
                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`md:hidden p-2 rounded-xl transition-colors ${scrolled ? 'text-slate-900 bg-slate-50' : 'text-white bg-white/10'
                        }`}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg font-bold text-slate-800 hover:text-primary flex items-center justify-between"
                                >
                                    {link.label}
                                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                                        <Menu size={16} />
                                    </div>
                                </a>
                            ))}
                            <a
                                href="tel:064368779226"
                                className="mt-4 flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-2xl font-bold shadow-xl shadow-primary/20"
                            >
                                <Phone size={20} /> Jetzt anrufen
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
