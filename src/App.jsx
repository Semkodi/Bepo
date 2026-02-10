import React, { useState, useEffect } from 'react';

/* ============================================================
   GIUSEPPE MILAZZO – Fenster · Rollladen · Markisen · Haustüren
   Alle Komponenten modular aufgebaut.
   ============================================================ */

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Sektionen
import Hero from './components/sections/Hero';
import Kennzahlen from './components/sections/Kennzahlen';
import Services from './components/sections/Services';
import Galerie from './components/sections/Galerie';
import Hersteller from './components/sections/Hersteller';
import About from './components/sections/About';
import Reviews from './components/sections/Reviews';
import FAQ from './components/sections/FAQ';
import Einzugsgebiet from './components/sections/Einzugsgebiet';
import Blog from './components/sections/Blog';
import Terminbuchung from './components/sections/Terminbuchung';
import Contact from './components/sections/Contact';

// Rechtliches
import Impressum from './components/legal/Impressum';
import Datenschutz from './components/legal/Datenschutz';

// UI-Elemente
import CookieBanner from './components/ui/HinweisLeiste';
import WhatsAppButton from './components/ui/WhatsAppButton';
import ScrollNachOben from './components/ui/ScrollNachOben';

const App = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showImpressum, setShowImpressum] = useState(false);
    const [showDatenschutz, setShowDatenschutz] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div style={{ minHeight: '100vh', background: '#fff' }}>

            {/* Navigation */}
            <Navbar scrolled={scrolled} />

            {/* Hauptinhalt */}
            <Hero />
            <Kennzahlen />
            <Services />
            <Galerie />
            <Hersteller />
            <About />
            <Reviews />
            <FAQ />
            <Einzugsgebiet />
            <Blog />
            <Terminbuchung />
            <Contact />

            {/* Footer */}
            <Footer
                onShowImpressum={() => setShowImpressum(true)}
                onShowDatenschutz={() => setShowDatenschutz(true)}
            />

            {/* Responsive Stile */}
            <style>{`
                .nav-desktop { display: none; }
                .nav-mobile-btn { display: block; }
                .about-grid { grid-template-columns: 1fr !important; }
                .service-card-grid { grid-template-columns: 1fr !important; }

                @media (min-width: 768px) {
                    .nav-desktop { display: flex !important; }
                    .nav-mobile-btn { display: none !important; }
                }

                @media (min-width: 900px) {
                    .about-grid { grid-template-columns: 1fr 1fr !important; }
                    .service-card-grid { grid-template-columns: 1fr 1.2fr !important; }
                }

                input::placeholder, textarea::placeholder {
                    color: rgba(255,255,255,0.3);
                }

                html {
                    scroll-behavior: smooth;
                }

                .hover-lift {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .hover-lift:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 40px rgba(0,0,0,0.08);
                }
            `}</style>

            {/* Schwebende UI-Elemente */}
            <WhatsAppButton />
            <ScrollNachOben />
            <CookieBanner />

            {/* Rechtliche Overlays */}
            {showImpressum && <Impressum onClose={() => setShowImpressum(false)} />}
            {showDatenschutz && <Datenschutz onClose={() => setShowDatenschutz(false)} />}
        </div>
    );
};

export default App;
