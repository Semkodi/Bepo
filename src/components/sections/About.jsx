import React from 'react';
import { CheckCircle } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';

const About = () => {
    return (
        <section id="ueber-uns" style={{ padding: '6rem 1.5rem', background: 'linear-gradient(180deg, #f8fafc 0%, #fff 100%)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="about-grid-outer">
                <FadeInSection>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span style={{
                            display: 'inline-block', padding: '0.4rem 1rem', borderRadius: '999px',
                            background: '#eff6ff', color: '#2563eb', fontSize: '0.75rem',
                            fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem',
                        }}>Über uns</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.03em' }}>
                            Handwerk mit Herz und Präzision
                        </h2>
                    </div>
                </FadeInSection>

                <div style={{ display: 'grid', gap: '4rem', alignItems: 'center' }} className="about-grid">
                    <FadeInSection>
                        <div style={{ position: 'relative' }}>
                            <div style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
                                <img src="https://images.squarespace-cdn.com/content/v1/5d9e51dbc4bcc92e211c81c2/1729699175245-ROCW6XZH6CSAP82RLED5/image-asset.jpeg"
                                    alt="BEWA Fenster Referenzprojekt" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                            </div>
                            <div style={{
                                position: 'absolute', bottom: '-1.5rem', right: '1.5rem',
                                background: '#2563eb', color: '#fff', padding: '1.25rem 1.75rem',
                                borderRadius: '1rem', boxShadow: '0 8px 30px rgba(37,99,235,0.35)',
                                fontWeight: 700, fontSize: '0.85rem', textAlign: 'center',
                            }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>10+</div>
                                Jahre Erfahrung
                            </div>
                        </div>
                    </FadeInSection>

                    <FadeInSection delay={0.15}>
                        <div>
                            <p style={{ color: '#64748b', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '2rem' }}>
                                Giuseppe Milazzo ist Ihr Ansprechpartner für professionellen Fensterbau, Rollladen, Haustüren und Markisen in Dornburg und dem Westerwald. Mit über 10 Jahren Erfahrung und dem Anspruch an höchste Qualität, setzen wir Ihre Projekte termingerecht und sauber um.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    'Kostenlose Vor-Ort Beratung',
                                    'Montage vom Chef persönlich',
                                    'Nur Markenprodukte namhafter Hersteller',
                                    'Festpreis-Angebot ohne versteckte Kosten',
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <div style={{
                                            width: '28px', height: '28px', borderRadius: '0.5rem',
                                            background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                        }}>
                                            <CheckCircle size={16} style={{ color: '#16a34a' }} />
                                        </div>
                                        <span style={{ fontWeight: 600, color: '#334155', fontSize: '0.95rem' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </section>
    );
};

export default About;
