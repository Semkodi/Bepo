import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { navLinks } from '../../data/navLinks';

const Navbar = ({ scrolled }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav style={{
            position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
            background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
            borderBottom: scrolled ? '1px solid #e2e8f0' : '1px solid transparent',
            transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
            padding: '0 1.5rem',
        }}>
            <div style={{
                maxWidth: '1200px', margin: '0 auto',
                height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
                <a href="#home" style={{
                    fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.03em',
                    color: scrolled ? '#1e293b' : '#fff', transition: 'color 0.3s',
                }}>
                    Giuseppe <span style={{ color: '#2563eb' }}>Milazzo</span>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="nav-desktop">
                    {navLinks.map(l => (
                        <a key={l.href} href={l.href} style={{
                            fontSize: '0.85rem', fontWeight: 600,
                            color: scrolled ? '#64748b' : 'rgba(255,255,255,0.8)',
                            transition: 'color 0.3s',
                        }}
                            onMouseEnter={e => e.target.style.color = '#2563eb'}
                            onMouseLeave={e => e.target.style.color = scrolled ? '#64748b' : 'rgba(255,255,255,0.8)'}
                        >{l.label}</a>
                    ))}
                    <a href="tel:064368779226" style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        fontSize: '0.85rem', fontWeight: 700,
                        color: scrolled ? '#1e293b' : '#fff', transition: 'color 0.3s',
                    }}>
                        <Phone size={15} /> 06436 8779226
                    </a>
                </div>

                <button className="nav-mobile-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{ color: scrolled ? '#1e293b' : '#fff', padding: '0.5rem' }}>
                    {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                        style={{ background: '#fff', borderTop: '1px solid #e2e8f0', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {navLinks.map(l => (
                            <a key={l.href} href={l.href} onClick={() => setIsMenuOpen(false)}
                                style={{ fontWeight: 600, fontSize: '1rem', color: '#1e293b' }}>{l.label}</a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
