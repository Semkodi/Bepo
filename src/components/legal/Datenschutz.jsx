import React from 'react';
import { X, Shield } from 'lucide-react';

const Datenschutz = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6 lg:p-12">
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                onClick={onClose}
            />
            <div className="relative w-full max-w-4xl max-h-full bg-white rounded-[3rem] shadow-3xl overflow-hidden flex flex-col animate-scale-in">
                {/* Header */}
                <div className="px-10 py-8 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-xs">
                            <Shield size={16} />
                        </span>
                        Datenschutzerklärung
                    </h2>
                    <button
                        onClick={onClose}
                        className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-100 hover:bg-red-50 transition-all"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-10 lg:p-16 overflow-y-auto text-slate-600 leading-relaxed text-sm space-y-12">
                    <section>
                        <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-4 italic">1. Datenschutz auf einen Blick</h3>
                        <p>
                            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>
                    </section>

                    <section className="pt-8 border-t border-slate-50">
                        <h4 className="text-lg font-bold text-slate-900 mb-4">Datenerfassung auf dieser Website</h4>
                        <p className="mb-4">
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Cookies werden zur Verbesserung der Seitennutzung verwendet.</li>
                            <li>Google Fonts werden lokal oder via Google Server eingebunden.</li>
                            <li>Kontaktformulardaten werden zur Bearbeitung Ihrer Anfrage gespeichert.</li>
                        </ul>
                    </section>

                    <section className="pt-8 border-t border-slate-50">
                        <h4 className="text-lg font-bold text-slate-900 mb-4">Ihre Rechte</h4>
                        <p>
                            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht auf Berichtigung oder Löschung dieser Daten.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Datenschutz;
