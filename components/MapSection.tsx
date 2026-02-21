
import { MapPin, Clock, Navigation } from 'lucide-react';

export default function MapSection() {
    return (
        <section id="ubicacion" className="py-32 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Text Content */}
                    <div className="w-full lg:w-2/5 space-y-10">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFB900]/10 border border-[#FFB900]/20 text-xs font-black text-[#b8860b] uppercase tracking-[0.2em]">
                                <MapPin className="w-3.5 h-3.5" />
                                Visita Nuestra Tienda
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter leading-tight">
                                Estamos en el <br />
                                <span className="text-[#FFB900]">Corazón de Huancayo</span>
                            </h2>
                            <p className="text-zinc-500 text-lg leading-relaxed">
                                Encuentra nuestra colección premium de miel, propóleo y equipamiento técnico en nuestro punto de venta exclusivo. Calidad garantizada en un espacio cómodo y accesible.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-zinc-100">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-zinc-900 font-black uppercase tracking-widest text-xs">
                                    <Navigation className="w-4 h-4 text-[#FFB900]" />
                                    Dirección
                                </div>
                                <p className="text-zinc-500 font-medium">Jr. Cusco 969, <br />Huancayo 12001, Perú</p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-zinc-900 font-black uppercase tracking-widest text-xs">
                                    <Clock className="w-4 h-4 text-[#FFB900]" />
                                    Horario
                                </div>
                                <p className="text-zinc-500 font-medium">Lunes - Domingo <br />10:00 AM - 10:00 PM</p>
                            </div>
                        </div>

                        <a
                            href="https://www.google.com/maps/search/Jr.+Cusco+969,+Huancayo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-black transition-all shadow-xl shadow-zinc-200"
                        >
                            ¿CÓMO LLEGAR?
                        </a>
                    </div>

                    {/* Map Container */}
                    <div className="w-full lg:w-3/5 h-[450px] md:h-[600px] rounded-[3rem] overflow-hidden border-8 border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative group">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.654!2d-75.212!3d-12.068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e964923e3b3b5%3A0x6b6e4e4e4e4e4e4e!2sJr.%20Cusco%20969%2C%20Huancayo!5e0!3m2!1ses!2spe!4v1707400000000!5m2!1ses!2spe"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="transition-all duration-700 opacity-90 group-hover:opacity-100"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
}
