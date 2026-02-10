import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import FadeInSection from '../ui/FadeInSection';
import { kennzahlen } from '../../data/kennzahlen';

// Animierter Zähler
const AnimierterZaehler = ({ zielwert, suffix, dauer }) => {
    const [wert, setWert] = useState(0);
    const ref = useRef(null);
    const istSichtbar = useInView(ref, { once: true });

    useEffect(() => {
        if (!istSichtbar) return;
        let start = 0;
        const schritte = 60;
        const inkrement = zielwert / schritte;
        const intervall = dauer / schritte;

        const timer = setInterval(() => {
            start += inkrement;
            if (start >= zielwert) {
                setWert(zielwert);
                clearInterval(timer);
            } else {
                setWert(Math.floor(start));
            }
        }, intervall);

        return () => clearInterval(timer);
    }, [istSichtbar, zielwert, dauer]);

    return <span ref={ref}>{wert}{suffix}</span>;
};

const Kennzahlen = () => {
    return (
        <section style={{
            padding: '4rem 1.5rem',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem',
                    textAlign: 'center',
                }}>
                    {kennzahlen.map((k, i) => (
                        <FadeInSection key={i} delay={i * 0.1}>
                            <div style={{ padding: '1.5rem' }}>
                                <div style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                    fontWeight: 800,
                                    color: '#2563eb',
                                    letterSpacing: '-0.03em',
                                    lineHeight: 1,
                                    marginBottom: '0.5rem',
                                }}>
                                    <AnimierterZaehler
                                        zielwert={k.zahl}
                                        suffix={k.suffix}
                                        dauer={k.dauer}
                                    />
                                </div>
                                <div style={{
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    color: 'rgba(255,255,255,0.7)',
                                    letterSpacing: '0.02em',
                                }}>
                                    {k.label}
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Kennzahlen;
