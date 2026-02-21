
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from '@/context/CartContext';
import CartSidebar from '@/components/CartSidebar';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://apiculturaelite.es'),
  title: {
    default: 'Apicultura Elite | Miel Pura y Equipamiento Apícola en Huancayo',
    template: '%s | Apicultura Elite',
  },
  description: 'Descubre Apicultura Elite en Huancayo. Ofrecemos miel 100% pura multifloral, trajes de protección, ahumadores y equipamiento profesional para apicultores. Cosecha 2026.',
  keywords: [
    'apicultura huancayo',
    'miel pura peru',
    'ahumadores apicolas',
    'trajes apicultor',
    'propoleo',
    'apicultura elite',
    'miel de abeja huancayo',
    'equipamento apicola peru',
    'comprar miel natural'
  ],
  authors: [{ name: 'Apicultura Elite' }],
  creator: 'Apicultura Elite',
  publisher: 'Apicultura Elite',
  alternates: {
    canonical: '/',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Apicultura Elite | Excelencia en Miel y Equipamiento',
    description: 'Productos de la colmena premium y equipamiento profesional en el corazón de Huancayo. Calidad garantizada.',
    url: 'https://apiculturaelite.es',
    siteName: 'Apicultura Elite',
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: 'https://apiculturaelite.es/logo-seo.png',
        width: 1200,
        height: 630,
        alt: 'Apicultura Elite Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apicultura Elite',
    description: 'Excelencia apícola en el centro del país. Miel pura y equipos de alta gama.',
    creator: '@apiculturaelite',
    images: ['https://apiculturaelite.es/logo-seo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://apiculturaelite.es" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-zinc-900`}
      >
        <CartProvider>
          {children}
          <CartSidebar />
          <WhatsAppButton />
          <Toaster position="top-center" richColors />
        </CartProvider>
      </body>
    </html>
  );
}
