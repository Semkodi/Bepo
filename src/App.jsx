import React, { useState, useEffect } from 'react';

/**
 * =========================================================================================
 *  🌟 PROJEKT: BEPO MILAZZO (Meisterbetrieb)
 *  📅 STAND: Februar 2026
 *  ⚙️ TECHNOLOGIE: React 18, Tailwind CSS, Framer Motion
 * 
 *  HAUPT-KOMPONENTE (App.jsx)
 *  Dies ist der zentrale Einstiegspunkt der Anwendung. Hier werden alle Sektionen
 *  strukturiert und in der richtigen Reihenfolge geladen.
 * =========================================================================================
 */

// 1. IMPORT: Layout-Elemente (Kopf- und Fußzeile)
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// 2. IMPORT: Haupt-Sektionen (Das "Fleisch" der Seite)
// Die Reihenfolge hier bestimmt die Reihenfolge auf der Website.
import Hero from './components/sections/Hero';           // Startbildschirm
import Kennzahlen from './components/sections/Kennzahlen'; // Trust-Elemente (10+ Jahre etc.)
import Services from './components/sections/Services';     // Was wir tun (Fenster, Türen...)
import Galerie from './components/sections/Galerie';       // Referenz-Bilder
import About from './components/sections/About';           // Über Uns (Giuseppe Milazzo)
import Reviews from './components/sections/Reviews';       // Kundenstimmen
import FAQ from './components/sections/FAQ';               // Häufige Fragen
import Einzugsgebiet from './components/sections/Einzugsgebiet'; // Karte & Orte
import Blog from './components/sections/Blog';             // Ratgeber & Tipps
import Hersteller from './components/sections/Hersteller'; // Partner-Logos
import Terminbuchung from './components/sections/Terminbuchung'; // Online-Termin
import Contact from './components/sections/Contact';       // Kontaktformular

// 3. IMPORT: Rechtliches (als Overlay/Modal gelöst)
import Impressum from './components/legal/Impressum';
import Datenschutz from './components/legal/Datenschutz';

// 4. IMPORT: UI-Helfer (Floating Elements)
import CookieBanner from './components/ui/CookieBanner';     // DSGVO Banner
import WhatsAppButton from './components/ui/WhatsAppButton'; // WhatsApp Chat
import ScrollNachOben from './components/ui/ScrollNachOben'; // "Nach oben"-Pfeil

const App = () => {
    // STATE: Verwaltet den Zustand der Anwendung
    const [scrolled, setScrolled] = useState(false); // Erkennt, ob gescrollt wurde (für Navbar-Effekt)
    const [showImpressum, setShowImpressum] = useState(false); // Zeigt Impressum an/aus
    const [showDatenschutz, setShowDatenschutz] = useState(false); // Zeigt Datenschutz an/aus

    // EFFEKT: Überwacht das Scrollen
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        // Aufräumen beim Verlassen
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans antialiased text-slate-900 selection:bg-blue-100 selection:text-blue-900">
            {/* 🧭 NAVIGATION (Oben fixiert) */}
            <Navbar scrolled={scrolled} />

            {/* 📦 HAUPT-INHALT (Alle Sektionen untereinander) */}
            <main>
                <Hero />            {/* Großes Startbild + Call-to-Action */}
                <Kennzahlen />      {/* Zahlen & Fakten Leiste */}
                <Services />        {/* Unsere Leistungen (Cards) */}
                <Galerie />         {/* Projekt-Galerie */}
                <About />           {/* Über den Meister */}
                <Reviews />         {/* Was Kunden sagen */}
                <FAQ />             {/* Fragen & Antworten */}
                <Einzugsgebiet />   {/* Wo wir arbeiten (Karte) */}
                <Blog />            {/* Ratgeber-Artikel */}
                <Hersteller />      {/* Unsere Partner */}
                <Terminbuchung />   {/* Online Termin-Formular */}
                <Contact />         {/* Kontakt & Adresse */}
            </main>

            {/* 🦶 FOOTER (Abschlussbereich) */}
            <Footer
                onShowImpressum={() => setShowImpressum(true)}
                onShowDatenschutz={() => setShowDatenschutz(true)}
            />

            {/* 🎈 SCHWEBENDE ELEMENTE (Z-Index: High) */}
            <WhatsAppButton />
            <ScrollNachOben />
            <CookieBanner />

            {/* ⚖️ RECHTLICHE OVERLAYS (Modals) */}
            {showImpressum && <Impressum onClose={() => setShowImpressum(false)} />}
            {showDatenschutz && <Datenschutz onClose={() => setShowDatenschutz(false)} />}
        </div>
    );
};

export default App;
