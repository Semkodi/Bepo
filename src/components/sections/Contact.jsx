import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';

const Contact = () => {
    return (
        <section id="kontakt" style={{ padding: '5rem 1.5rem', background: 'linear-gradient(180deg, #fff 0%, #f8fafc 100%)' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <FadeInSection>
                    <div style={{
                        background: '#0f172a', borderRadius: '2rem', padding: 'clamp(2rem, 5vw, 4rem)',
                        color: '#fff', position: 'relative', overflow: 'hidden',
                        boxShadow: '0 25px 80px rgba(15,23,42,0.25)',
                    }}>
                        <div style={{
                            position: 'absolute', top: '-50%', right: '-20%',
                            width: '400px', height: '400px', borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)',
                            pointerEvents: 'none',
                        }} />

                        <div style={{ position: 'relative', zIndex: 10 }}>
                            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
                                    Projekt besprechen?
                                </h2>
                                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem' }}>
                                    Schreiben Sie uns oder rufen Sie direkt an – Beratung ist kostenlos.
                                </p>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
                                {[
                                    { icon: <Phone size={20} />, label: 'Telefon', value: '06436 8779226', href: 'tel:064368779226' },
                                    { icon: <Mail size={20} />, label: 'E-Mail', value: 'info@bepo-milazzo.de', href: 'mailto:info@bepo-milazzo.de' },
                                    { icon: <MapPin size={20} />, label: 'Standort', value: '65599 Dornburg' },
                                ].map((c, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <div style={{
                                            width: '42px', height: '42px', borderRadius: '0.75rem',
                                            background: 'rgba(37,99,235,0.15)', display: 'flex',
                                            alignItems: 'center', justifyContent: 'center', color: '#60a5fa', flexShrink: 0,
                                        }}>{c.icon}</div>
                                        <div>
                                            <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>{c.label}</div>
                                            {c.href
                                                ? <a href={c.href} style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>{c.value}</a>
                                                : <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>{c.value}</span>
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                                    <input type="text" placeholder="Name" style={{
                                        padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.06)',
                                        border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem',
                                        color: '#fff', fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.3s',
                                    }}
                                        onFocus={e => e.target.style.borderColor = '#2563eb'}
                                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                                    <input type="email" placeholder="E-Mail" style={{
                                        padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.06)',
                                        border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem',
                                        color: '#fff', fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.3s',
                                    }}
                                        onFocus={e => e.target.style.borderColor = '#2563eb'}
                                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                                </div>
                                <textarea placeholder="Beschreiben Sie Ihr Projekt..." rows={4} style={{
                                    padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.06)',
                                    border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem',
                                    color: '#fff', fontSize: '0.9rem', outline: 'none', resize: 'vertical',
                                    fontFamily: 'inherit', transition: 'border-color 0.3s',
                                }}
                                    onFocus={e => e.target.style.borderColor = '#2563eb'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                                <button type="submit" style={{
                                    padding: '1rem 2rem', background: '#2563eb', color: '#fff',
                                    borderRadius: '0.75rem', fontWeight: 700, fontSize: '0.95rem',
                                    cursor: 'pointer', border: 'none', transition: 'all 0.3s',
                                    boxShadow: '0 4px 20px rgba(37,99,235,0.3)',
                                }}
                                    onMouseEnter={e => e.target.style.background = '#1d4ed8'}
                                    onMouseLeave={e => e.target.style.background = '#2563eb'}>
                                    Anfrage senden
                                </button>
                            </form>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
};

export default Contact;
