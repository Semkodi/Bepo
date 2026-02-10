import React from 'react';
import { Check, ShieldCheck, Sun, Wind, Lock, Zap, Gauge, Star } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';

const ServiceCard = ({ image, title, subtitle, desc, benefits, tags, badgeColor }) => (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-100 border border-slate-100 mb-10 last:mb-0 flex flex-col lg:flex-row group hover:shadow-2xl transition-all duration-700">
        {/* Image Side */}
        <div className="lg:w-[38%] h-[300px] lg:h-auto relative overflow-hidden">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className={`absolute top-6 left-6 ${badgeColor} text-white px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest z-10 shadow-lg`}>
                {title}
            </div>
        </div>

        {/* Content Side */}
        <div className="lg:w-[62%] p-8 lg:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-black text-slate-900 mb-1 tracking-tight">{title}</h3>
            <div className="flex gap-2 mb-4">
                {subtitle.map((s, i) => (
                    <span key={i} className="text-[#2563eb] text-[9px] font-black uppercase tracking-widest">
                        {i > 0 && <span className="text-slate-200 mx-1">·</span>}
                        {s}
                    </span>
                ))}
            </div>

            <p className="text-slate-500 leading-relaxed mb-6 text-sm font-medium">
                {desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50/50 rounded-xl border border-slate-50">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#2563eb] shadow-sm">
                            {React.cloneElement(b.icon, { size: 14 })}
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-600">{b.text}</span>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap gap-2">
                {tags.map((t, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-[8px] font-black uppercase tracking-widest text-slate-400">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const Services = () => {
    const leistungen = [
        {
            title: "Fenster",
            image: "https://images.squarespace-cdn.com/content/v1/5d9e51dbc4bcc92e211c81c2/1729699175245-ROCW6XZH6CSAP82RLED5/image-asset.jpeg",
            subtitle: ["Kunststoff", "Holz-Alu", "Aluminium"],
            desc: "Moderne Fenstersysteme bringen mehr Licht in Ihr Zuhause und senken gleichzeitig Ihre Heizkosten. Wir verbauen ausschließlich Markenfenster (z.B. BEWA Plast).",
            badgeColor: "bg-[#2563eb]",
            benefits: [
                { icon: <Gauge />, text: "Passivhaus-Standard" },
                { icon: <Zap />, text: "Schalldämmung bis 47 dB" },
                { icon: <Lock />, text: "Einbruchschutz RC2 / RC3" },
                { icon: <Star />, text: "Pflegeleichte Oberflächen" }
            ],
            tags: ["3-fach Verglasung", "7-Kammer-Profil", "Alle RAL-Farben", "KfW-Förderfähig"]
        },
        {
            title: "Haustüren",
            image: "https://images.squarespace-cdn.com/content/v1/5d9e51dbc4bcc92e211c81c2/1708339711697-4JC4PG3EXBK9WU26NYQ0/image-asset.jpeg",
            subtitle: ["Aluminium", "Kunststoff", "Holz"],
            desc: "Ihre Haustür ist die Visitenkarte Ihres Zuhauses. Wir bieten über 200 Designs in allen Materialien – mit modernster Sicherheitstechnik.",
            badgeColor: "bg-[#2563eb]",
            benefits: [
                { icon: <ShieldCheck />, text: "RC2 Sicherheitsstandard" },
                { icon: <Lock />, text: "Fingerprint & Smart-Lock" },
                { icon: <Gauge />, text: "U-Wert bis 0,47 W/(m²K)" },
                { icon: <Sun />, text: "200+ Designs & Farben" }
            ],
            tags: ["Aluminium-Aussenseite", "Mehrfachverriegelung", "Barrierefreie Schwelle", "Made in Germany"]
        },
        {
            title: "Rollladen & Raffstoren",
            image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=1400",
            subtitle: ["Vorbau", "Aufsatz", "Neubau & Nachrüstung"],
            desc: "Rollladen schützen vor Hitze, Kälte, Lärm und Einbruch. Elektrisch oder manuell – wir finden die passende Lösung für jeden Fenstertyp.",
            badgeColor: "bg-[#2563eb]",
            benefits: [
                { icon: <Sun />, text: "Bis zu 75% weniger Hitze" },
                { icon: <ShieldCheck />, text: "Zusätzlicher Einbruchschutz" },
                { icon: <Zap />, text: "Schallschutz bis 10 dB" },
                { icon: <Lock />, text: "Smart-Home Steuerung" }
            ],
            tags: ["Aluminium-Lamellen", "Flüsterleiser Motor", "Zeitschaltuhr", "Wind-/Sonnen-Sensor"]
        },
        {
            title: "Markisen & Sonnenschutz",
            image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1400",
            subtitle: ["Kassetten", "Gelenkarm", "Pergola"],
            desc: "Genießen Sie Ihre Terrasse ohne Hitze. Unsere Markisen bieten UV-Schutz, Regenschutz und verlängern Ihren Wohnraum nach draußen.",
            badgeColor: "bg-[#2563eb]",
            benefits: [
                { icon: <Sun />, text: "UV-Schutz bis 95%" },
                { icon: <Wind />, text: "Windstabil bis 38 km/h" },
                { icon: <ShieldCheck />, text: "Stoffschutz-System" },
                { icon: <Zap />, text: "Wartungsarme Technik" }
            ],
            tags: ["LED-Beleuchtung", "Windwächter", "Acryl-Hochleistungsstoff", "Fernbedienung"]
        }
    ];

    return (
        <section id="leistungen" className="py-20 lg:py-32 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <FadeInSection>
                    <div className="text-center mb-16 lg:mb-24">
                        <span className="text-[#2563eb] font-black uppercase tracking-[0.4em] text-[9px] mb-4 block underline decoration-blue-100 decoration-4 underline-offset-4">Unsere Fachbereiche</span>
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">Was wir für Sie tun</h2>
                    </div>
                </FadeInSection>

                <div className="flex flex-col">
                    {leistungen.map((service, i) => (
                        <FadeInSection key={i} delay={i * 0.1}>
                            <ServiceCard {...service} />
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
