import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import WhatsAppButton from '@/components/WhatsAppButton';
import GoogleTagManager from '@/components/GoogleTagManager';
import { generateOrganizationSchema } from '@/lib/schema';

export const metadata: Metadata = {
  metadataBase: new URL('https://electricistasbarcelona.com'),
  title: {
    default: 'Electricista en Barcelona 24 h | Urgencias y Presupuesto Gratis',
    template: '%s | Electricistas Barcelona'
  },
  description: 'Electricistas autorizados en Barcelona y área metropolitana. Atención de urgencias 24 horas en menos de 60 min, boletines CIE, cuadros y reformas. Llama al 657 144 186.',
  keywords: [
    'electricista barcelona',
    'electricista barcelona 24 horas',
    'electricista urgente barcelona',
    'boletin electrico barcelona',
    'instalaciones electricas barcelona',
    'cuadro electrico barcelona'
  ],
  authors: [{ name: 'Electricistas Barcelona' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
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
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://electricistasbarcelona.com',
    siteName: 'Electricistas Barcelona',
    title: 'Electricista en Barcelona 24 h | Urgencias e Instalaciones',
    description: 'Servicio urgente 24 horas de electricistas autorizados en Barcelona. Atención en menos de 60 min sin sorpresas en la factura. 📱 657 144 186.',
    images: [
      {
        url: '/images/hero_electrician.jpg',
        width: 1200,
        height: 675,
        alt: 'Electricista Autorizado en Barcelona',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electricista en Barcelona 24 h | Urgencias y Presupuesto',
    description: 'Instalaciones y urgencias eléctricas 24h en Barcelona y alrededores. Teléfono: 657 144 186.',
    images: ['/images/hero_electrician.jpg'],
  },
  alternates: {
    canonical: 'https://electricistasbarcelona.com',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 flex flex-col min-h-screen">
        <GoogleTagManager />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyMobileBar />
        <WhatsAppButton />
      </body>
    </html>
  );
}
