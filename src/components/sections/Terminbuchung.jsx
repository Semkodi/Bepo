import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';

// Online-Terminbuchung
const Terminbuchung = () => {
    const [formDaten, setFormDaten] = useState({
        name: '', telefon: '', email: '',
        leistung: '', wunschtermin: '', nachricht: '',
    });
    const [gesendet, setGesendet] = useState(false);

    const aendern = (feld, wert) => setFormDaten(prev => ({ ...prev, [feld]: wert }));

    const absenden = (e) => {
        e.preventDefault();
        // Hier kann die Anbindung an ein Backend erfolgen
        setGesendet(true);
        setTimeout(() => setGesendet(false), 4000);
    };

    return (
        <section id="termin" style={{ padding: '6rem 1.5rem' }}>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                <FadeInSection>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{
                            display: 'inline-block', padding: '0.4rem 1rem', borderRadius: '999px',
                            background: '#eff6ff', color: '#2563eb', fontSize: '0.75rem',
                            fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem',
                        }}>Terminvereinbarung</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.03em' }}>
                            Kostenlose Beratung buchen
                        </h2>
                        <p style={{ fontSize: '1.05rem', color: '#64748b', marginTop: '0.75rem' }}>
                            Vereinbaren Sie jetzt einen unverbindlichen Beratungstermin bei Ihnen vor Ort.
                        </p>
                    </div>
                </FadeInSection>

                <FadeInSection delay={0.1}>
                    <div style={{
                        background: '#fff', borderRadius: '1.5rem', padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                        border: '1px solid #f1f5f9', boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
                    }}>
                        {gesendet ? (
                            <div style={{ textAlign: 'center', padding: '2rem' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem' }}>
                                    Anfrage gesendet!
                                </h3>
                                <p style={{ color: '#64748b' }}>Wir melden uns schnellstmöglich bei Ihnen.</p>
                            </div>
                        ) : (
                            <form onSubmit={absenden} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                                    <EingabeFeld label="Name *" typ="text" wert={formDaten.name} aendern={v => aendern('name', v)} pflicht />
                                    <EingabeFeld label="Telefon *" typ="tel" wert={formDaten.telefon} aendern={v => aendern('telefon', v)} pflicht />
                                </div>
                                <EingabeFeld label="E-Mail" typ="email" wert={formDaten.email} aendern={v => aendern('email', v)} />

                                <div>
                                    <label style={labelStil}>Gewünschte Leistung</label>
                                    <select
                                        value={formDaten.leistung}
                                        onChange={e => aendern('leistung', e.target.value)}
                                        style={{ ...eingabeStil, cursor: 'pointer' }}
                                    >
                                        <option value="">Bitte wählen...</option>
                                        <option value="fenster">Fenster</option>
                                        <option value="tueren">Haustüren</option>
                                        <option value="rollladen">Rollladen & Raffstoren</option>
                                        <option value="markisen">Markisen & Sonnenschutz</option>
                                        <option value="reparatur">Reparatur</option>
                                        <option value="sonstiges">Sonstiges</option>
                                    </select>
                                </div>

                                <div>
                                    <label style={labelStil}>
                                        <Calendar size={14} style={{ marginRight: '0.4rem', verticalAlign: 'middle' }} />
                                        Wunschtermin
                                    </label>
                                    <input
                                        type="date"
                                        value={formDaten.wunschtermin}
                                        onChange={e => aendern('wunschtermin', e.target.value)}
                                        style={eingabeStil}
                                    />
                                </div>

                                <div>
                                    <label style={labelStil}>Nachricht</label>
                                    <textarea
                                        rows={3}
                                        value={formDaten.nachricht}
                                        onChange={e => aendern('nachricht', e.target.value)}
                                        placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                                        style={{ ...eingabeStil, resize: 'vertical', fontFamily: 'inherit' }}
                                    />
                                </div>

                                <button type="submit" style={{
                                    padding: '1rem 2rem', background: '#2563eb', color: '#fff',
                                    borderRadius: '0.75rem', fontWeight: 700, fontSize: '0.95rem',
                                    cursor: 'pointer', border: 'none', transition: 'all 0.3s',
                                    boxShadow: '0 4px 20px rgba(37,99,235,0.3)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                                }}
                                    onMouseEnter={e => e.target.style.background = '#1d4ed8'}
                                    onMouseLeave={e => e.target.style.background = '#2563eb'}>
                                    <Clock size={18} /> Termin anfragen
                                </button>
                            </form>
                        )}
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
};

// Wiederverwendbare Eingabe-Komponente
const EingabeFeld = ({ label, typ, wert, aendern, pflicht = false }) => (
    <div>
        <label style={labelStil}>{label}</label>
        <input
            type={typ} value={wert} onChange={e => aendern(e.target.value)}
            required={pflicht} style={eingabeStil}
        />
    </div>
);

// Gemeinsame Stile
const labelStil = {
    display: 'block', fontSize: '0.8rem', fontWeight: 600,
    color: '#64748b', marginBottom: '0.4rem',
};

const eingabeStil = {
    width: '100%', padding: '0.85rem 1rem',
    borderRadius: '0.6rem', border: '1px solid #e2e8f0',
    fontSize: '0.9rem', color: '#1e293b', outline: 'none',
    transition: 'border-color 0.3s', boxSizing: 'border-box',
};

export default Terminbuchung;
