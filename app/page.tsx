
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MapSection from '@/components/MapSection';
import { db } from '@/lib/db';
import { products } from '@/lib/schema';
import { desc, eq } from 'drizzle-orm';
import { ArrowRight, ShoppingBag, Star, Quote, ShieldCheck, Truck, Clock } from 'lucide-react';
import CategoryFilter from '@/components/CategoryFilter';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  let query = db.select().from(products).orderBy(desc(products.createdAt));

  if (category && category !== 'all') {
    // @ts-ignore - drizzle type inference
    query = db.select().from(products).where(eq(products.category, category)).orderBy(desc(products.createdAt));
  }

  const allProducts = await query;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Apicultura Elite',
    image: 'https://images.unsplash.com/photo-1587334274328-64186a80aeee?auto=format&fit=crop&q=80&w=800',
    description: 'Venta de miel 100% pura y equipamiento profesional para apicultura en Huancayo. Especialistas en derivados de la colmena.',
    '@id': 'https://apiculturaelite.pe',
    url: 'https://apiculturaelite.pe',
    telephone: '+51 943 677 832',
    priceRange: 'S/',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Ferrocarril 1035, Real Plaza Huancayo',
      addressLocality: 'Huancayo',
      addressRegion: 'Junín',
      postalCode: '12001',
      addressCountry: 'PE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -12.0700833,
      longitude: -75.2064669,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '10:00',
        closes: '22:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/apiculturaelite',
      'https://www.instagram.com/apiculturaelite'
    ]
  };

  const testimonials = [
    {
      name: "Andrés Mendoza",
      role: "Apicultor Profesional",
      comment: "El equipamiento de Apicultura Elite es de otro nivel. La durabilidad de los trajes y la calidad de la miel es excepcional.",
      rating: 5
    },
    {
      name: "Carla Espinoza",
      role: "Distribuidora de Miel",
      comment: "La pureza de su cosecha 2026 es simplemente perfecta. Mis clientes están encantados con el sabor multifloral.",
      rating: 5
    },
    {
      name: "Roberto Sanchez",
      role: "Aficionado",
      comment: "Excelente asesoría para quienes estamos empezando. Los ahumadores son muy fáciles de usar y muy seguros.",
      rating: 5
    }
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-[#FFB900]/30 selection:text-black font-sans scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FFB900]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-100/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
          <div className="absolute inset-0 opacity-[0.02] grayscale bg-[url('https://www.transparenttextures.com/patterns/honeycomb.png')]"></div>
        </div>

        <div className="z-10 text-center space-y-10 px-4 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#FFB900]/30 bg-[#FFB900]/10 backdrop-blur-sm animate-fade-in-up shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFB900]"></span>
            </span>
            <span className="text-xs font-bold text-[#b8860b] tracking-widest uppercase">Cosecha 2026 Disponible</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none text-zinc-900 uppercase">
              APICULTURA
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFB900] to-[#E6A600] drop-shadow-sm">ELITE</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 max-w-3xl mx-auto leading-relaxed font-light">
              Miel pura y equipamiento profesional en Huancayo. Innovación apícola con estándares internacionales de calidad.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a
              href="#catalogo"
              className="group px-10 py-5 bg-[#FFB900] text-black font-black rounded-2xl shadow-[0_10px_30px_-10px_rgba(255,185,0,0.5)] transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
            >
              EXPLORAR CATÁLOGO <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://wa.me/51943677832"
              className="px-10 py-5 bg-white text-zinc-900 border border-zinc-200 rounded-2xl font-bold hover:bg-zinc-50 transition-all shadow-sm flex items-center gap-2 hover:border-zinc-300"
            >
              Contactar Experto
            </a>
          </div>
        </div>
      </section>

      {/* Features Overview for SEO */}
      <section className="py-20 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm border border-zinc-100">
              <ShieldCheck className="w-8 h-8 text-[#FFB900]" />
            </div>
            <h3 className="text-xl font-bold">100% Garantía de Pureza</h3>
            <p className="text-zinc-500">Nuestra miel es analizada en laboratorio para asegurar cero adulteración.</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm border border-zinc-100">
              <Truck className="w-8 h-8 text-[#FFB900]" />
            </div>
            <h3 className="text-xl font-bold">Envíos a Todo el Perú</h3>
            <p className="text-zinc-500">Llegamos a cada rincón del país con embalaje especializado y seguro.</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm border border-zinc-100">
              <Clock className="w-8 h-8 text-[#FFB900]" />
            </div>
            <h3 className="text-xl font-bold">Soporte Especializado</h3>
            <p className="text-zinc-500">Asesoramos tu proyecto apícola desde la elección del equipo hasta la cosecha.</p>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalogo" className="max-w-7xl mx-auto px-4 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-center md:text-left">
          <div className="space-y-2 w-full">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900">
              Nuestra <span className="text-[#FFB900]">Cosecha</span> & Equipos
            </h2>
            <div className="h-1.5 w-24 bg-[#FFB900] rounded-full mx-auto md:mx-0"></div>
            <p className="text-zinc-500 text-lg">Los mejores insumos para el apicultor moderno en Huancayo.</p>
          </div>
        </div>

        <CategoryFilter />

        {allProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {allProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                size={product.size}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-zinc-50 rounded-[3rem] border-2 border-zinc-100 border-dashed">
            <ShoppingBag className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
            <p className="text-zinc-500 text-2xl font-bold">Sin productos disponibles</p>
            <p className="text-zinc-400 mt-2">Estamos recolectando lo mejor para ti.</p>
          </div>
        )}
      </section>

      <section className="bg-zinc-50 py-32 rounded-[4rem] mx-4 mb-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 mb-20">
            Nuestros <span className="text-[#FFB900]">Clientes</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-zinc-100 space-y-6">
                <div className="flex justify-center gap-1 text-[#FFB900]">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-zinc-600 italic leading-relaxed text-lg text-center font-medium">"{t.comment}"</p>
                <div>
                  <h4 className="font-black text-zinc-900 uppercase tracking-tighter">{t.name}</h4>
                  <p className="text-[#b8860b] text-[10px] font-black uppercase tracking-[0.2em]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MapSection />
      <Footer />
    </main>
  );
}
