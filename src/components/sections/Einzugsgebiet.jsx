import React from 'react';
import FadeInSection from '../ui/FadeInSection';

// Einzugsgebiet mit Google Maps
const Einzugsgebiet = () => {
    return (
        <section id="einzugsgebiet" style={{ padding: '6rem 1.5rem', background: '#f8fafc' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <FadeInSection>
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <span style={{
                            display: 'inline-block', padding: '0.4rem 1rem', borderRadius: '999px',
                            background: '#eff6ff', color: '#2563eb', fontSize: '0.75rem',
                            fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem',
                        }}>Standort</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.03em' }}>
                            Unser Einzugsgebiet
                        </h2>
                        <p style={{ fontSize: '1.05rem', color: '#64748b', marginTop: '0.75rem', maxWidth: '560px', margin: '0.75rem auto 0' }}>
                            Wir sind in Dornburg, dem Westerwald und der gesamten Region Limburg-Weilburg für Sie im Einsatz.
                        </p>
                    </div>
                </FadeInSection>

                <FadeInSection delay={0.1}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                        alignItems: 'start',
                    }}>
                        {/* Karte */}
                        <div style={{
                            borderRadius: '1.5rem', overflow: 'hidden',
                            boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                            border: '1px solid #f1f5f9',
                        }}>
                            <iframe
                                title="Standort Giuseppe Milazzo – Dornburg"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40585.89!2d8.0!3d50.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc0a09e97a0baf%3A0x41db728f061d380!2sDornburg!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        {/* Ortsliste */}
                        <div style={{
                            background: '#fff', borderRadius: '1.5rem', padding: '2rem',
                            border: '1px solid #f1f5f9', boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                        }}>
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1e293b', marginBottom: '1.5rem' }}>
                                📍 Wir kommen zu Ihnen
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                                {[
                                    'Dornburg', 'Limburg', 'Hadamar', 'Elz',
                                    'Diez', 'Montabaur', 'Westerburg', 'Herborn',
                                    'Weilburg', 'Runkel', 'Villmar', 'Beselich',
                                ].map(ort => (
                                    <div key={ort} style={{
                                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                                        padding: '0.5rem 0.75rem', borderRadius: '0.5rem',
                                        background: '#f8fafc',
                                    }}>
                                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563eb', flexShrink: 0 }} />
                                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>{ort}</span>
                                    </div>
                                ))}
                            </div>
                            <p style={{ marginTop: '1.5rem', fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.6 }}>
                                Ihr Ort ist nicht dabei? Kein Problem – sprechen Sie uns einfach an.
                                Wir kommen auch gerne weiter.
                            </p>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
};

export default Einzugsgebiet;
