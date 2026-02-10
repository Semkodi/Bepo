import React from 'react';
import { MapPin, Navigation, Compass, Box } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';

const Einzugsgebiet = () => {
    const orte = ['Dornburg', 'Limburg', 'Hadamar', 'Elz', 'Diez', 'Montabaur', 'Westerburg', 'Herborn', 'Weilburg', 'Runkel', 'Villmar', 'Beselich'];

    return (
        <section id="einzugsgebiet" className="py-24 lg:py-40 bg-[#0f172a] overflow-hidden relative">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <FadeInSection>
                    <div className="text-center mb-24 lg:mb-32">
                        <span className="text-[#2563eb] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block italic">Standort</span>
                        <h2 className="text-5xl lg:text-8xl font-black text-white mb-8 tracking-tighter">Unser Einzugsgebiet</h2>
                    </div>
                </FadeInSection>

                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* List Side */}
                    <div className="lg:col-span-12 xl:col-span-5">
                        <FadeInSection delay={0.1}>
                            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[4rem] p-12 lg:p-16 relative overflow-hidden group">
                                <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#2563eb]/10 rounded-full blur-[80px]" />

                                <div className="flex items-center gap-6 mb-12">
                                    <div className="w-14 h-14 rounded-2xl bg-[#2563eb] text-white flex items-center justify-center shadow-2xl shadow-[#2563eb]/20 animate-pulse">
                                        <Navigation size={28} />
                                    </div>
                                    <h3 className="text-3xl font-black text-white tracking-tight">Wir sind mobil</h3>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                                    {orte.map((o, i) => (
                                        <div key={o} className="flex items-center gap-4 p-5 rounded-3xl bg-white/5 hover:bg-white/10 transition-all group/item hover:translate-x-2 duration-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb] shadow-[0_0_10px_rgba(37,99,235,1)]" />
                                            <span className="text-sm font-black text-white/70 group-hover:text-white uppercase tracking-widest">{o}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-16 pt-12 border-t border-white/5">
                                    <p className="text-white/30 text-xs leading-relaxed italic font-medium max-w-sm">
                                        Ihr Ort ist nicht dabei? Kein Problem – sprechen Sie uns einfach an. Wir kommen auch gerne in die weitere Umgebung.
                                    </p>
                                </div>
                            </div>
                        </FadeInSection>
                    </div>

                    {/* Map Side */}
                    <div className="lg:col-span-12 xl:col-span-7">
                        <FadeInSection delay={0.3}>
                            <div className="relative rounded-[5rem] overflow-hidden border-8 border-slate-900 shadow-4xl group h-[500px] lg:h-[700px] w-full">
                                <iframe
                                    title="Standort"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40585.89!2d8.0!3d50.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc0a09e97a0baf%3A0x41db728f061d380!2sDornburg!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                                    className="w-full h-full grayscale invert opacity-50 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                />

                                {/* stylized address tag */}
                                <div className="absolute top-12 right-12 px-8 py-5 bg-white rounded-3xl shadow-3xl text-slate-900 z-20 flex items-center gap-6 border-b-4 border-[#2563eb]">
                                    <div className="w-12 h-12 bg-blue-50 text-[#2563eb] rounded-2xl flex items-center justify-center">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <div className="text-xl font-bold tracking-tight">65599 Dornburg</div>
                                        <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest italic">Zentrale West</div>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Einzugsgebiet;
