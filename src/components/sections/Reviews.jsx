import React from 'react';
import { Star } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';
import { reviews } from '../../data/reviews';

const Reviews = () => {
    return (
        <section style={{ padding: '5rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
            <FadeInSection>
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <span style={{
                        display: 'inline-block', padding: '0.4rem 1rem', borderRadius: '999px',
                        background: '#eff6ff', color: '#2563eb', fontSize: '0.75rem',
                        fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem',
                    }}>Kundenstimmen</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.03em' }}>
                        Was unsere Kunden sagen
                    </h2>
                </div>
            </FadeInSection>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {reviews.map((r, i) => (
                    <FadeInSection key={i} delay={i * 0.12}>
                        <div className="hover-lift" style={{
                            background: '#fff', borderRadius: '1.25rem', padding: '2rem',
                            border: '1px solid #f1f5f9', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', height: '100%',
                        }}>
                            <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem' }}>
                                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="#facc15" style={{ color: '#facc15' }} />)}
                            </div>
                            <p style={{ color: '#334155', fontWeight: 500, lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.25rem', fontStyle: 'italic' }}>
                                "{r.text}"
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{
                                        width: '40px', height: '40px', borderRadius: '999px',
                                        background: 'linear-gradient(135deg, #dbeafe, #eff6ff)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontWeight: 700, color: '#2563eb', fontSize: '0.85rem',
                                    }}>{r.name[0]}</div>
                                    <div>
                                        <div style={{ fontWeight: 700, color: '#1e293b', fontSize: '0.9rem' }}>{r.name}</div>
                                        <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Dornburg</div>
                                    </div>
                                </div>
                                <span style={{
                                    padding: '0.25rem 0.6rem', borderRadius: '999px',
                                    background: '#f8fafc', color: '#94a3b8', fontSize: '0.7rem', fontWeight: 600,
                                }}>{r.service}</span>
                            </div>
                        </div>
                    </FadeInSection>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
