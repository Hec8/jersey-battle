import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maillot Mbappé vs Lamine Yamal 2025 | Comparatif Numéro 10 | Jersey Battle",
  description: "Découvrez notre comparatif exclusif des maillots de Kylian Mbappé (Real Madrid) et Lamine Yamal (FC Barcelone) portant tous deux le numéro 10. Analyses détaillées, prix, avis et guide d'achat complet.",
  keywords: "maillot Mbappé 2025, maillot Lamine Yamal numéro 10, acheter maillot foot enfant, acheter maillot foot adulte, Real Madrid, FC Barcelone, jersey comparison, maillot football authentique",
  authors: [{ name: "Jersey Battle Team" }],
  creator: "Jersey Battle",
  publisher: "Jersey Battle",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jersey-battle.com'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/fr',
      'en-US': '/en',
      'es-ES': '/es',
    },
  },
  openGraph: {
    title: 'Maillot Mbappé vs Lamine Yamal 2025 | Comparatif Numéro 10',
    description: 'Comparatif exclusif des maillots de football les plus emblématiques de 2025 : Mbappé au Real Madrid vs Lamine Yamal au FC Barcelone.',
    url: 'https://jersey-battle.com',
    siteName: 'Jersey Battle',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maillot Mbappé Real Madrid vs Maillot Lamine Yamal Barcelona',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maillot Mbappé vs Lamine Yamal 2025 | Comparatif Numéro 10',
    description: 'Comparatif exclusif des maillots de football les plus emblématiques de 2025',
    images: ['/twitter-image.jpg'],
    creator: '@jerseybattle',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  icons: {
    icon: '/favicon.svg',
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#1e40af',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Jersey Battle",
              "url": "https://jersey-battle.com",
              "description": "Comparatif de maillots de football Mbappé vs Lamine Yamal",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://jersey-battle.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
