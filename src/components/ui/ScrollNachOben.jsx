import React, { useState, useEffect } from 'react';

// Scroll-nach-oben Button
const ScrollNachOben = () => {
    const [sichtbar, setSichtbar] = useState(false);

    useEffect(() => {
        const pruefen = () => setSichtbar(window.scrollY > 400);
        window.addEventListener('scroll', pruefen);
        return () => window.removeEventListener('scroll', pruefen);
    }, []);

    const nachObenScrollen = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!sichtbar) return null;

    return (
        <button
            onClick={nachObenScrollen}
            aria-label="Nach oben scrollen"
            style={{
                position: 'fixed', bottom: '5.5rem', right: '1.5rem', zIndex: 9989,
                width: '46px', height: '46px', borderRadius: '50%',
                background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#fff',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s, background 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = '#2563eb'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = '#1e293b'; }}
        >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6" />
            </svg>
        </button>
    );
};

export default ScrollNachOben;
