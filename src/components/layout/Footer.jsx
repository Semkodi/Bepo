import React from 'react';

const Footer = ({ onShowImpressum, onShowDatenschutz }) => {
    return (
        <footer style={{ padding: '3rem 1.5rem', borderTop: '1px solid #f1f5f9', background: '#fff' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1e293b' }}>
                    Giuseppe <span style={{ color: '#2563eb' }}>Milazzo</span>
                </div>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <button onClick={onShowImpressum} style={{ fontSize: '0.85rem', fontWeight: 600, color: '#94a3b8', transition: 'color 0.3s', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                        onMouseEnter={e => e.target.style.color = '#2563eb'}
                        onMouseLeave={e => e.target.style.color = '#94a3b8'}>Impressum</button>
                    <button onClick={onShowDatenschutz} style={{ fontSize: '0.85rem', fontWeight: 600, color: '#94a3b8', transition: 'color 0.3s', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                        onMouseEnter={e => e.target.style.color = '#2563eb'}
                        onMouseLeave={e => e.target.style.color = '#94a3b8'}>Datenschutz</button>
                </div>
                <p style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>
                    © {new Date().getFullYear()} Giuseppe Milazzo. Alle Rechte vorbehalten.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
