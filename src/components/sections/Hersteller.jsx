import React from 'react';
import FadeInSection from '../ui/FadeInSection';
import { hersteller } from '../../data/hersteller';

// Hersteller-Partner Logos / Badges
const Hersteller = () => {
    return (
        <section style={{ padding: '4rem 1.5rem', background: '#fff' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <FadeInSection>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <span style={{
                            display: 'inline-block', padding: '0.4rem 1rem', borderRadius: '999px',
                            background: '#eff6ff', color: '#2563eb', fontSize: '0.75rem',
                            fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem',
                        }}>Qualitätspartner</span>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.03em' }}>
                            Wir verbauen nur Markenprodukte
                        </h2>
                    </div>

                    <div style={{
                        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem',
                    }}>
                        {hersteller.map((h, i) => (
                            <div key={i} className="hover-lift" style={{
                                padding: '1.5rem 2.5rem',
                                background: '#f8fafc', borderRadius: '1rem',
                                border: '1px solid #f1f5f9',
                                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
                                minWidth: '180px',
                                transition: 'all 0.3s',
                            }}>
                                <span style={{
                                    fontSize: '1.25rem', fontWeight: 800, color: '#1e293b',
                                    letterSpacing: '-0.02em',
                                }}>{h.name}</span>
                                <span style={{
                                    fontSize: '0.7rem', fontWeight: 600, color: '#94a3b8',
                                    textTransform: 'uppercase', letterSpacing: '0.08em',
                                }}>{h.kategorie}</span>
                            </div>
                        ))}
                    </div>

                    <p style={{
                        textAlign: 'center', marginTop: '2rem',
                        fontSize: '0.82rem', color: '#94a3b8',
                    }}>
                        Alle Produkte sind „Made in Germany" und erfüllen höchste Qualitätsstandards.
                    </p>
                </FadeInSection>
            </div>
        </section>
    );
};

export default Hersteller;
