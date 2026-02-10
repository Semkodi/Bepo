import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import FadeInSection from '../ui/FadeInSection';
import { kennzahlen } from '../../data/kennzahlen';

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
        <section className="py-20 lg:py-24 bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {kennzahlen.map((k, i) => (
                        <FadeInSection key={i} delay={i * 0.1}>
                            <div className="text-center group p-6 lg:p-8 rounded-[2rem] hover:bg-white/5 transition-all duration-500">
                                <div className="text-4xl lg:text-6xl font-black text-primary mb-3 tracking-tighter transition-transform duration-500 group-hover:scale-110">
                                    <AnimierterZaehler
                                        zielwert={k.zahl}
                                        suffix={k.suffix}
                                        dauer={k.dauer}
                                    />
                                </div>
                                <div className="text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-white/60 transition-colors">
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
