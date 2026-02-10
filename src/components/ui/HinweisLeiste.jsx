import React, { useState, useEffect } from 'react';

// Cookie-Banner nach DSGVO
const CookieBanner = () => {
    const [sichtbar, setSichtbar] = useState(false);

    useEffect(() => {
        const akzeptiert = localStorage.getItem('cookies-akzeptiert');
        if (!akzeptiert) setSichtbar(true);
    }, []);

    const akzeptieren = () => {
        localStorage.setItem('cookies-akzeptiert', 'alle');
        setSichtbar(false);
    };

    const nurNotwendige = () => {
        localStorage.setItem('cookies-akzeptiert', 'notwendig');
        setSichtbar(false);
    };

    if (!sichtbar) return null;

    return (
        <div style={{
            position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9998,
            background: 'rgba(15,23,42,0.97)', backdropFilter: 'blur(20px)',
            padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
            <div style={{
                maxWidth: '1200px', margin: '0 auto',
                display: 'flex', flexWrap: 'wrap', alignItems: 'center',
                gap: '1.5rem', justifyContent: 'space-between',
            }}>
                <div style={{ flex: '1 1 400px' }}>
                    <p style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                        🍪 Wir nutzen Cookies
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', lineHeight: 1.6 }}>
                        Diese Website verwendet Cookies und externe Dienste (Google Fonts) für eine optimale Darstellung.
                        Weitere Informationen finden Sie in unserer Datenschutzerklärung.
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
                    <button onClick={nurNotwendige} style={{
                        padding: '0.65rem 1.25rem', background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)', borderRadius: '0.6rem',
                        color: '#fff', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer',
                        transition: 'background 0.3s',
                    }}
                        onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.2)'}
                        onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.1)'}>
                        Nur notwendige
                    </button>
                    <button onClick={akzeptieren} style={{
                        padding: '0.65rem 1.25rem', background: '#2563eb',
                        border: 'none', borderRadius: '0.6rem',
                        color: '#fff', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer',
                        transition: 'background 0.3s',
                    }}
                        onMouseEnter={e => e.target.style.background = '#1d4ed8'}
                        onMouseLeave={e => e.target.style.background = '#2563eb'}>
                        Alle akzeptieren
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
