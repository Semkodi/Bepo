import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';
import { faqDaten } from '../../data/faq';

// FAQ Akkordeon-Element
const FaqElement = ({ frage, antwort, istOffen, umschalten }) => (
    <div style={{
        background: '#fff', borderRadius: '1rem',
        border: istOffen ? '1px solid #dbeafe' : '1px solid #f1f5f9',
        overflow: 'hidden', transition: 'border-color 0.3s, box-shadow 0.3s',
        boxShadow: istOffen ? '0 4px 20px rgba(37,99,235,0.08)' : '0 1px 4px rgba(0,0,0,0.03)',
    }}>
        <button onClick={umschalten} style={{
            width: '100%', padding: '1.25rem 1.5rem',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: 'none', border: 'none', cursor: 'pointer',
            textAlign: 'left', fontFamily: 'inherit',
        }}>
            <span style={{
                fontSize: '0.95rem', fontWeight: 700,
                color: istOffen ? '#2563eb' : '#1e293b',
                transition: 'color 0.3s',
            }}>{frage}</span>
            <div style={{
                width: '32px', height: '32px', borderRadius: '0.5rem',
                background: istOffen ? '#eff6ff' : '#f8fafc',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, marginLeft: '1rem',
                transition: 'transform 0.3s, background 0.3s',
                transform: istOffen ? 'rotate(180deg)' : 'rotate(0)',
            }}>
                <ChevronDown size={18} style={{ color: istOffen ? '#2563eb' : '#94a3b8' }} />
            </div>
        </button>
        <div style={{
            maxHeight: istOffen ? '300px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.4s ease, padding 0.3s ease',
            padding: istOffen ? '0 1.5rem 1.25rem' : '0 1.5rem',
        }}>
            <p style={{ color: '#64748b', lineHeight: 1.7, fontSize: '0.9rem' }}>{antwort}</p>
        </div>
    </div>
);

// FAQ-Bereich
const FAQ = () => {
    const [offenerIndex, setOffenerIndex] = useState(null);

    return (
        <section id="faq" style={{ padding: '6rem 1.5rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <FadeInSection>
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <span style={{
                            display: 'inline-block', padding: '0.4rem 1rem', borderRadius: '999px',
                            background: '#eff6ff', color: '#2563eb', fontSize: '0.75rem',
                            fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem',
                        }}>Häufige Fragen</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.03em' }}>
                            FAQ – Alles Wichtige auf einen Blick
                        </h2>
                    </div>
                </FadeInSection>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {faqDaten.map((item, i) => (
                        <FadeInSection key={i} delay={i * 0.06}>
                            <FaqElement
                                frage={item.frage}
                                antwort={item.antwort}
                                istOffen={offenerIndex === i}
                                umschalten={() => setOffenerIndex(offenerIndex === i ? null : i)}
                            />
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
