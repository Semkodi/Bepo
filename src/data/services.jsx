import React from 'react';
import { Thermometer, Volume2, Lock, Droplets, Sun, Shield, Smartphone, Palette, Wind, Eye, Wrench } from 'lucide-react';

export const services = [
    {
        id: 'fenster',
        title: 'Fenster',
        subtitle: 'Kunststoff · Holz-Alu · Aluminium',
        img: 'https://images.squarespace-cdn.com/content/v1/5d9e51dbc4bcc92e211c81c2/1729699175245-ROCW6XZH6CSAP82RLED5/image-asset.jpeg',
        desc: 'Moderne Fenstersysteme bringen mehr Licht in Ihr Zuhause und senken gleichzeitig Ihre Heizkosten. Wir verbauen ausschließlich Markenfenster mit höchsten Dämmwerten.',
        benefits: [
            { icon: <Thermometer size={16} />, text: 'Wärmedämmung bis Passivhaus-Standard' },
            { icon: <Volume2 size={16} />, text: 'Schalldämmung bis 47 dB' },
            { icon: <Lock size={16} />, text: 'Einbruchschutz RC2 / RC3' },
            { icon: <Droplets size={16} />, text: 'Pflegeleichte Oberflächen' },
        ],
        highlights: ['3-fach Verglasung', '7-Kammer-Profil', 'Alle RAL-Farben', 'KfW-förderfähig'],
    },
    {
        id: 'tueren',
        title: 'Haustüren',
        subtitle: 'Aluminium · Kunststoff · Holz',
        img: 'https://images.squarespace-cdn.com/content/v1/5d9e51dbc4bcc92e211c81c2/1708339711697-4JC4PG3EXBK9WU26NYQ0/image-asset.jpeg',
        desc: 'Ihre Haustür ist die Visitenkarte Ihres Zuhauses. Wir bieten über 200 Designs in allen Materialien – mit modernster Sicherheitstechnik und perfekter Wärmedämmung.',
        benefits: [
            { icon: <Lock size={16} />, text: 'RC2 Sicherheitsstandard serienmäßig' },
            { icon: <Smartphone size={16} />, text: 'Fingerprint & Smart-Lock möglich' },
            { icon: <Thermometer size={16} />, text: 'U-Wert bis 0,47 W/(m²K)' },
            { icon: <Palette size={16} />, text: '200+ Designs & Farben' },
        ],
        highlights: ['Aluminium-Außenseite', 'Mehrfachverriegelung', 'Barrierefreie Schwelle', 'Made in Germany'],
    },
    {
        id: 'rollladen',
        title: 'Rollladen & Raffstoren',
        subtitle: 'Vorbau · Aufsatz · Neubau & Nachrüstung',
        img: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=700',
        desc: 'Rollläden schützen vor Hitze, Kälte, Lärm und Einbruch. Elektrisch oder manuell – wir finden die passende Lösung für jeden Fenstertyp. Auch für Raffstoren und Screens.',
        benefits: [
            { icon: <Sun size={16} />, text: 'Bis zu 75% weniger Hitze im Sommer' },
            { icon: <Shield size={16} />, text: 'Zusätzlicher Einbruchschutz' },
            { icon: <Volume2 size={16} />, text: 'Schallschutz bis 10 dB extra' },
            { icon: <Smartphone size={16} />, text: 'Smart-Home Motorsteuerung' },
        ],
        highlights: ['Aluminium-Lamellen', 'Flüsterleiser Motor', 'Zeitschaltuhr', 'Wind-/Sonnensensor'],
    },
    {
        id: 'markisen',
        title: 'Markisen & Sonnenschutz',
        subtitle: 'Kassetten · Gelenkarm · Pergola',
        img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=700',
        desc: 'Genießen Sie Ihre Terrasse ohne Hitze. Unsere Markisen bieten UV-Schutz, Regenschutz und verlängern Ihren Wohnraum nach draußen. Inklusive LED-Beleuchtung und Automatik.',
        benefits: [
            { icon: <Sun size={16} />, text: 'UV-Schutz bis 95%' },
            { icon: <Wind size={16} />, text: 'Windstabil bis 38 km/h' },
            { icon: <Eye size={16} />, text: 'Kassetten-System schützt Stoff' },
            { icon: <Wrench size={16} />, text: 'Wartungsarme Technik' },
        ],
        highlights: ['LED-Beleuchtung', 'Windwächter', 'Acryl-Hochleistungsstoff', 'Fernbedienung'],
    },
];
