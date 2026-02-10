import React from 'react';
import { X } from 'lucide-react';

const Impressum = ({ onClose }) => {
    return (
        <div style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(8px)',
            display: 'flex', justifyContent: 'center', alignItems: 'flex-start',
            padding: '2rem 1rem', overflowY: 'auto',
        }}>
            <div style={{
                background: '#fff', borderRadius: '1.5rem', maxWidth: '750px', width: '100%',
                padding: 'clamp(2rem, 5vw, 3.5rem)', position: 'relative',
                boxShadow: '0 25px 80px rgba(0,0,0,0.2)', margin: '2rem 0',
            }}>
                <button onClick={onClose} style={{
                    position: 'absolute', top: '1.25rem', right: '1.25rem',
                    background: '#f1f5f9', border: 'none', borderRadius: '0.75rem',
                    width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', color: '#64748b', transition: 'all 0.2s',
                }}
                    onMouseEnter={e => { e.target.style.background = '#e2e8f0'; e.target.style.color = '#1e293b'; }}
                    onMouseLeave={e => { e.target.style.background = '#f1f5f9'; e.target.style.color = '#64748b'; }}>
                    <X size={20} />
                </button>

                <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#1e293b', marginBottom: '2rem', letterSpacing: '-0.03em' }}>
                    Impressum
                </h1>

                <div style={{ color: '#334155', lineHeight: 1.8, fontSize: '0.95rem' }}>

                    <Section title="Angaben gemäß § 5 TMG">
                        <p><strong>Giuseppe Milazzo</strong></p>
                        <p>Fenster · Rollladen · Markisen · Haustüren</p>
                        <p style={{ marginTop: '0.75rem' }}>
                            {/* WICHTIG: Bitte hier die vollständige Straße eintragen! */}
                            [Straße und Hausnummer]<br />
                            65599 Dornburg
                        </p>
                    </Section>

                    <Section title="Kontakt">
                        <p>Telefon: 06436 8779226</p>
                        <p>E-Mail: info@bepo-milazzo.de</p>
                    </Section>

                    <Section title="Umsatzsteuer-ID">
                        <p>
                            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                            {/* WICHTIG: Bitte hier die USt-IdNr. eintragen! */}
                            [USt-IdNr. eintragen]
                        </p>
                    </Section>

                    <Section title="Berufsbezeichnung und berufsrechtliche Regelungen">
                        <p>Berufsbezeichnung: Handwerker / Fensterbauer</p>
                        <p>Zuständige Kammer: Handwerkskammer [zuständige HWK eintragen]</p>
                    </Section>

                    <Section title="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
                        <p>
                            Giuseppe Milazzo<br />
                            [Straße und Hausnummer]<br />
                            65599 Dornburg
                        </p>
                    </Section>

                    <Section title="EU-Streitschlichtung">
                        <p>
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"
                                style={{ color: '#2563eb', textDecoration: 'underline' }}>
                                https://ec.europa.eu/consumers/odr/
                            </a>
                        </p>
                        <p style={{ marginTop: '0.5rem' }}>
                            Unsere E-Mail-Adresse finden Sie oben im Impressum.
                        </p>
                    </Section>

                    <Section title="Verbraucherstreitbeilegung / Universalschlichtungsstelle">
                        <p>
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
                            vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </Section>

                    <Section title="Haftung für Inhalte">
                        <p>
                            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
                            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                            Tätigkeit hinweisen.
                        </p>
                        <p style={{ marginTop: '0.5rem' }}>
                            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                            allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                            erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
                            umgehend entfernen.
                        </p>
                    </Section>

                    <Section title="Haftung für Links">
                        <p>
                            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                            Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                            mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                            Verlinkung nicht erkennbar.
                        </p>
                        <p style={{ marginTop: '0.5rem' }}>
                            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                            Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                        </p>
                    </Section>

                    <Section title="Urheberrecht">
                        <p>
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                            Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
                            nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                        </p>
                        <p style={{ marginTop: '0.5rem' }}>
                            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                            Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                            gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                            bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                            werden wir derartige Inhalte umgehend entfernen.
                        </p>
                    </Section>

                </div>

                <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #f1f5f9' }}>
                    <button onClick={onClose} style={{
                        padding: '0.75rem 2rem', background: '#2563eb', color: '#fff',
                        borderRadius: '0.75rem', fontWeight: 700, fontSize: '0.9rem',
                        cursor: 'pointer', border: 'none', transition: 'background 0.3s',
                    }}
                        onMouseEnter={e => e.target.style.background = '#1d4ed8'}
                        onMouseLeave={e => e.target.style.background = '#2563eb'}>
                        Zurück zur Startseite
                    </button>
                </div>
            </div>
        </div>
    );
};

const Section = ({ title, children }) => (
    <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem' }}>{title}</h2>
        {children}
    </div>
);

export default Impressum;
