import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';
import { blogBeitraege } from '../../data/blogBeitraege';

// Blog / Ratgeber Bereich
const Blog = () => {
    return (
        <section id="ratgeber" style={{ padding: '6rem 1.5rem', background: '#f8fafc' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <FadeInSection>
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <span style={{
                            display: 'inline-block', padding: '0.4rem 1rem', borderRadius: '999px',
                            background: '#eff6ff', color: '#2563eb', fontSize: '0.75rem',
                            fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem',
                        }}>Wissen</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.03em' }}>
                            Ratgeber & Tipps
                        </h2>
                        <p style={{ fontSize: '1.05rem', color: '#64748b', marginTop: '0.75rem', maxWidth: '560px', margin: '0.75rem auto 0' }}>
                            Nützliches Wissen rund um Fenster, Türen, Förderung und Sicherheit.
                        </p>
                    </div>
                </FadeInSection>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '1.5rem',
                }}>
                    {blogBeitraege.map((beitrag, i) => (
                        <FadeInSection key={i} delay={i * 0.1}>
                            <div className="hover-lift" style={{
                                background: '#fff', borderRadius: '1.25rem', overflow: 'hidden',
                                border: '1px solid #f1f5f9', boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                                cursor: 'pointer', height: '100%',
                                display: 'flex', flexDirection: 'column',
                            }}>
                                <div style={{ position: 'relative', overflow: 'hidden' }}>
                                    <img
                                        src={beitrag.bild}
                                        alt={beitrag.titel}
                                        loading="lazy"
                                        style={{
                                            width: '100%', height: '180px', objectFit: 'cover',
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
                                        letterSpacing: '0.05em',
                                    }}>{beitrag.kategorie}</span>
                                </div>
                                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{
                                        display: 'flex', alignItems: 'center', gap: '1rem',
                                        marginBottom: '0.75rem', fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600,
                                    }}>
                                        <span>{beitrag.datum}</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                            <Clock size={12} /> {beitrag.lesezeit}
                                        </span>
                                    </div>
                                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                                        {beitrag.titel}
                                    </h3>
                                    <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6, flex: 1 }}>
                                        {beitrag.auszug}
                                    </p>
                                    <div style={{
                                        display: 'flex', alignItems: 'center', gap: '0.4rem',
                                        marginTop: '1rem', fontSize: '0.82rem', fontWeight: 700, color: '#2563eb',
                                    }}>
                                        Weiterlesen <ArrowRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
