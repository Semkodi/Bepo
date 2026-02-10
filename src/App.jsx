import React, { useState, useEffect } from 'react';

/* ============================================================
   GIUSEPPE MILAZZO – MASTERING THE VIEW
   ============================================================ */

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Sektionen
import Hero from './components/sections/Hero';
import Kennzahlen from './components/sections/Kennzahlen';
import Services from './components/sections/Services';
import Galerie from './components/sections/Galerie';
import About from './components/sections/About';
import Reviews from './components/sections/Reviews';
import FAQ from './components/sections/FAQ';
import Einzugsgebiet from './components/sections/Einzugsgebiet';
import Blog from './components/sections/Blog';
import Terminbuchung from './components/sections/Terminbuchung';
import Contact from './components/sections/Contact';
import Hersteller from './components/sections/Hersteller';

// Rechtliches
import Impressum from './components/legal/Impressum';
import Datenschutz from './components/legal/Datenschutz';

// UI-Elemente
import HinweisLeiste from './components/ui/HinweisLeiste';
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
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <Navbar scrolled={scrolled} />

            {/* Main Content Area */}
            <main>
                <Hero />
                <Kennzahlen />
                <Services />
                <Galerie />
                <About />
                <Reviews />
                <FAQ />
                <Einzugsgebiet />
                <Blog />
                <Hersteller />
                <Terminbuchung />
                <Contact />
            </main>

            {/* Footer with modal triggers */}
            <Footer
                onShowImpressum={() => setShowImpressum(true)}
                onShowDatenschutz={() => setShowDatenschutz(true)}
            />

            {/* Floating UI Layer */}
            <WhatsAppButton />
            <ScrollNachOben />
            <HinweisLeiste />

            {/* Overlays / Modals */}
            {showImpressum && <Impressum onClose={() => setShowImpressum(false)} />}
            {showDatenschutz && <Datenschutz onClose={() => setShowDatenschutz(false)} />}
        </div>
    );
};

export default App;
