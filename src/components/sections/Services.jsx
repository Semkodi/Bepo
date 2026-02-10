import React from 'react';
import FadeInSection from '../ui/FadeInSection';
import { services } from '../../data/services';

const Services = () => {
    return (
        <section id="leistungen" style={{ padding: '6rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
            <FadeInSection>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{
                        display: 'inline-block', padding: '0.4rem 1rem', borderRadius: '999px',
                        background: '#eff6ff', color: '#2563eb', fontSize: '0.75rem',
                        fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem',
                    }}>Unsere Fachbereiche</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.03em' }}>
                        Was wir für Sie tun
                    </h2>
                    <p style={{ fontSize: '1.05rem', color: '#64748b', marginTop: '0.75rem', maxWidth: '560px', margin: '0.75rem auto 0' }}>
                        Von der Beratung bis zur fertigen Montage – alles aus einer Hand mit Qualitätsgarantie.
                    </p>
                </div>
            </FadeInSection>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {services.map((s, i) => (
                    <FadeInSection key={s.id} delay={i * 0.1}>
                        <div className="hover-lift" style={{
                            background: '#fff', borderRadius: '1.5rem',
                            border: '1px solid #f1f5f9', boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                            overflow: 'hidden', cursor: 'default',
                        }}>
                            <div style={{ display: 'grid', gap: 0 }} className="service-card-grid">
                                {/* Bild */}
                                <div style={{ overflow: 'hidden', minHeight: '250px', position: 'relative' }}>
                                    <img src={s.img} alt={s.title} loading="lazy" style={{
                                        width: '100%', height: '100%', objectFit: 'cover',
                                        position: 'absolute', inset: 0,
                                    }} />
                                    <div style={{
                                        position: 'absolute', top: '1rem', left: '1rem',
                                        background: 'rgba(37,99,235,0.9)', color: '#fff',
                                        padding: '0.4rem 0.8rem', borderRadius: '0.5rem',
                                        fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase',
                                        letterSpacing: '0.08em', backdropFilter: 'blur(4px)',
                                    }}>
                                        {s.title}
                                    </div>
                                </div>

                                {/* Inhalt */}
                                <div style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.25rem' }}>
                                        {s.title}
                                    </h3>
                                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', marginBottom: '1rem', letterSpacing: '0.02em' }}>
                                        {s.subtitle}
                                    </div>
                                    <p style={{ color: '#64748b', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                                        {s.desc}
                                    </p>

                                    {/* Vorteile */}
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                        {s.benefits.map((b, j) => (
                                            <div key={j} style={{
                                                display: 'flex', alignItems: 'center', gap: '0.6rem',
                                                padding: '0.6rem 0.75rem', borderRadius: '0.6rem',
                                                background: '#f8fafc', border: '1px solid #f1f5f9',
                                            }}>
                                                <div style={{ color: '#2563eb', flexShrink: 0 }}>{b.icon}</div>
                                                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>{b.text}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Highlights */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {s.highlights.map((h, j) => (
                                            <span key={j} style={{
                                                padding: '0.35rem 0.75rem', borderRadius: '999px',
                                                background: '#eff6ff', color: '#2563eb',
                                                fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.03em',
                                            }}>
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                ))}
            </div>
        </section>
    );
};

export default Services;
