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
        <section className="py-20 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
                {kennzahlen.map((k, i) => (
                    <FadeInSection key={i} delay={i * 0.1}>
                        <div className="text-center">
                            <div className="text-5xl font-black text-[#2563eb] mb-2 tracking-tighter">
                                <AnimierterZaehler zielwert={k.zahl} suffix={k.suffix} dauer={k.dauer} />
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                                {k.label}
                            </div>
                        </div>
                    </FadeInSection>
                ))}
            </div>
        </section>
    );
};

export default Kennzahlen;
