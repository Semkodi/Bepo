import React from 'react';
import { X } from 'lucide-react';

const Datenschutz = ({ onClose }) => {
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

                <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>
                    Datenschutzerklärung
                </h1>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '2rem' }}>
                    Stand: {new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}
                </p>

                <div style={{ color: '#334155', lineHeight: 1.8, fontSize: '0.95rem' }}>

                    <Section title="1. Datenschutz auf einen Blick">
                        <h3 style={h3Style}>Allgemeine Hinweise</h3>
                        <p>
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
                            sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche
                            Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
                            Datenschutzerklärung.
                        </p>

                        <h3 style={h3Style}>Datenerfassung auf dieser Website</h3>
                        <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
                        <p>
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                            Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser
                            Datenschutzerklärung entnehmen.
                        </p>
                        <p style={{ marginTop: '0.75rem' }}><strong>Wie erfassen wir Ihre Daten?</strong></p>
                        <p>
                            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
                            sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                        </p>
                        <p style={{ marginTop: '0.5rem' }}>
                            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch
                            unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser,
                            Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
                            automatisch, sobald Sie diese Website betreten.
                        </p>
                        <p style={{ marginTop: '0.75rem' }}><strong>Wofür nutzen wir Ihre Daten?</strong></p>
                        <p>
                            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                            gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                        </p>
                        <p style={{ marginTop: '0.75rem' }}><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p>
                        <p>
                            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
                            Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die
                            Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
                            Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft
                            widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
                            Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
                            Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                        </p>
                        <p style={{ marginTop: '0.5rem' }}>
                            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                        </p>
                    </Section>

                    <Section title="2. Hosting">
                        <p>
                            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                        </p>
                        <h3 style={h3Style}>Externes Hosting</h3>
                        <p>
                            Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website
                            erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.&nbsp;a.
                            um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
                            Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert
                            werden, handeln.
                        </p>
                        <p style={{ marginTop: '0.5rem' }}>
                            Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen
                            und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren,
                            schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen
                            Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                        </p>
                    </Section>

                    <Section title="3. Allgemeine Hinweise und Pflichtinformationen">
                        <h3 style={h3Style}>Datenschutz</h3>
                        <p>
                            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
                            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
                            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>
                        <p style={{ marginTop: '0.5rem' }}>
                            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                            Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
                            Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
                            sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                        </p>
                        <p style={{ marginTop: '0.5rem' }}>
                            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B. bei der
                            Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
                            Daten vor dem Zugriff durch Dritte ist nicht möglich.
                        </p>

                        <h3 style={h3Style}>Hinweis zur verantwortlichen Stelle</h3>
                        <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                        <p style={{ marginTop: '0.5rem' }}>
                            Giuseppe Milazzo<br />
                            {/* WICHTIG: Straße eintragen */}
                            [Straße und Hausnummer]<br />
                            65599 Dornburg
                        </p>
                        <p style={{ marginTop: '0.5rem' }}>
                            Telefon: 06436 8779226<br />
                            E-Mail: info@bepo-milazzo.de
                        </p>
                        <p style={{ marginTop: '0.5rem' }}>
                            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam
                            mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
                            (z.&nbsp;B. Namen, E-Mail-Adressen o.&nbsp;Ä.) entscheidet.
                        </p>

                        <h3 style={h3Style}>Speicherdauer</h3>
                        <p>
                            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
                            verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung
                            entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung
                            zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen
                            rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben
                            (z.&nbsp;B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall
                            erfolgt die Löschung nach Fortfall dieser Gründe.
                        </p>

                        <h3 style={h3Style}>Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten</h3>
                        <p>
                            Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA oder sonstigen
                            datenschutzrechtlich nicht sicheren Drittstaaten. Wenn diese Tools aktiv sind, können Ihre
                            personenbezogenen Daten in diese Drittstaaten übertragen und dort verarbeitet werden.
                            Wir weisen darauf hin, dass in diesen Ländern kein mit der EU vergleichbares
                            Datenschutzniveau garantiert werden kann.
                        </p>

                        <h3 style={h3Style}>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                        <p>
                            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
                            Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
                            der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                        </p>

                        <h3 style={h3Style}>Recht auf Datenübertragbarkeit</h3>
                        <p>
                            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung
                            eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen,
                            maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der
                            Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
                            machbar ist.
                        </p>

                        <h3 style={h3Style}>Auskunft, Löschung und Berichtigung</h3>
                        <p>
                            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
                            unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft
                            und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung
                            oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
                            Daten können Sie sich jederzeit an uns wenden.
                        </p>

                        <h3 style={h3Style}>Recht auf Einschränkung der Verarbeitung</h3>
                        <p>
                            Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                            verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der
                            Verarbeitung besteht in folgenden Fällen:
                        </p>
                        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                            <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten.</li>
                            <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht.</li>
                            <li>Wenn Sie die Löschung Ihrer personenbezogenen Daten verlangen, wir die Daten aber noch benötigen.</li>
                            <li>Wenn Sie Widerspruch eingelegt haben, solange noch nicht feststeht, ob unsere Interessen überwiegen.</li>
                        </ul>

                        <h3 style={h3Style}>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                        <p>
                            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei
                            einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
                            Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Das
                            Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
                            gerichtlicher Rechtsbehelfe.
                        </p>
                    </Section>

                    <Section title="4. Datenerfassung auf dieser Website">
                        <h3 style={h3Style}>Kontaktformular</h3>
                        <p>
                            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                            der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
                            wir nicht ohne Ihre Einwilligung weiter.
                        </p>
                        <p style={{ marginTop: '0.5rem' }}>
                            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                            sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
                            vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
                            Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an
                            uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung
                            (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
                        </p>
                        <p style={{ marginTop: '0.5rem' }}>
                            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur
                            Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
                            Datenspeicherung entfällt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
                            Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                        </p>

                        <h3 style={h3Style}>Anfrage per E-Mail oder Telefon</h3>
                        <p>
                            Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller
                            daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung
                            Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne
                            Ihre Einwilligung weiter.
                        </p>
                    </Section>

                    <Section title="5. Externe Dienste und Drittanbieter">
                        <h3 style={h3Style}>Google Fonts (lokales Hosting)</h3>
                        <p>
                            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts,
                            die von Google bereitgestellt werden. Die Google Fonts werden über einen externen Server
                            von Google geladen. Dabei wird Ihre IP-Adresse an Google übermittelt.
                        </p>
                        <p style={{ marginTop: '0.5rem' }}>
                            Die Nutzung von Google Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                            Websitebetreiber hat ein berechtigtes Interesse an der einheitlichen Darstellung des
                            Schriftbildes auf seiner Website.
                        </p>
                        <p style={{ marginTop: '0.5rem' }}>
                            Weitere Informationen zu Google Fonts finden Sie unter{' '}
                            <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer"
                                style={{ color: '#2563eb', textDecoration: 'underline' }}>
                                https://developers.google.com/fonts/faq
                            </a>{' '}
                            und in der Datenschutzerklärung von Google:{' '}
                            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
                                style={{ color: '#2563eb', textDecoration: 'underline' }}>
                                https://policies.google.com/privacy
                            </a>.
                        </p>
                    </Section>

                    <Section title="6. Ihre Rechte im Überblick">
                        <p>Ihnen stehen folgende Rechte zu:</p>
                        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                            <li><strong>Auskunftsrecht</strong> (Art. 15 DSGVO)</li>
                            <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO)</li>
                            <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO)</li>
                            <li><strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
                            <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
                            <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO)</li>
                        </ul>
                        <p style={{ marginTop: '0.75rem' }}>
                            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:<br />
                            Giuseppe Milazzo · 06436 8779226 · info@bepo-milazzo.de
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

const h3Style = { fontSize: '1rem', fontWeight: 700, color: '#1e293b', marginTop: '1.25rem', marginBottom: '0.25rem' };

const Section = ({ title, children }) => (
    <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.75rem' }}>{title}</h2>
        {children}
    </div>
);

export default Datenschutz;
