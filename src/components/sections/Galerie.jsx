import React, { useState } from 'react';
import FadeInSection from '../ui/FadeInSection';
import { galerieBilder } from '../../data/galerie';

// Referenz-Galerie mit Kategorie-Filter
const Galerie = () => {
    const [filter, setFilter] = useState('Alle');
    const kategorien = ['Alle', ...new Set(galerieBilder.map(b => b.kategorie))];
    const gefilterteBilder = filter === 'Alle' ? galerieBilder : galerieBilder.filter(b => b.kategorie === filter);

    return (
        <section id="referenzen" style={{ padding: '6rem 1.5rem', background: '#f8fafc' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <FadeInSection>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{
                            display: 'inline-block', padding: '0.4rem 1rem', borderRadius: '999px',
                            background: '#eff6ff', color: '#2563eb', fontSize: '0.75rem',
                            fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem',
                        }}>Unsere Arbeit</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.03em' }}>
                            Referenzprojekte
                        </h2>
                        <p style={{ fontSize: '1.05rem', color: '#64748b', marginTop: '0.75rem', maxWidth: '560px', margin: '0.75rem auto 0' }}>
                            Überzeugen Sie sich von unserer Arbeit – hier sehen Sie eine Auswahl unserer Projekte.
                        </p>
                    </div>

                    {/* Kategorie-Filter */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                        {kategorien.map(k => (
                            <button key={k} onClick={() => setFilter(k)} style={{
                                padding: '0.5rem 1.25rem', borderRadius: '999px',
                                border: 'none', cursor: 'pointer',
                                fontSize: '0.8rem', fontWeight: 600,
                                background: filter === k ? '#2563eb' : '#fff',
                                color: filter === k ? '#fff' : '#64748b',
                                boxShadow: filter === k ? '0 4px 12px rgba(37,99,235,0.3)' : '0 1px 4px rgba(0,0,0,0.06)',
                                transition: 'all 0.3s',
                            }}>
                                {k}
                            </button>
                        ))}
                    </div>
                </FadeInSection>

                {/* Bilder-Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '1.5rem',
                }}>
                    {gefilterteBilder.map((bild, i) => (
                        <FadeInSection key={bild.titel} delay={i * 0.08}>
                            <div className="hover-lift" style={{
                                borderRadius: '1.25rem', overflow: 'hidden',
                                background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                                border: '1px solid #f1f5f9',
                            }}>
                                <div style={{ position: 'relative', overflow: 'hidden' }}>
                                    <img
                                        src={bild.bild}
                                        alt={bild.titel}
                                        loading="lazy"
                                        style={{
                                            width: '100%', height: '220px', objectFit: 'cover',
                                            transition: 'transform 0.5s',
                                        }}
                                        onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                                        onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                                    />
                                    <span style={{
                                        position: 'absolute', top: '0.75rem', left: '0.75rem',
                                        padding: '0.3rem 0.7rem', borderRadius: '999px',
                                        background: 'rgba(37,99,235,0.9)', color: '#fff',
                                        fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase',
                                        letterSpacing: '0.05em', backdropFilter: 'blur(4px)',
                                    }}>{bild.kategorie}</span>
                                </div>
                                <div style={{ padding: '1.25rem' }}>
                                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.3rem' }}>
                                        {bild.titel}
                                    </h3>
                                    <p style={{ fontSize: '0.85rem', color: '#64748b' }}>{bild.beschreibung}</p>
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Galerie;
