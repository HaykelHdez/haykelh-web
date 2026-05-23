import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://haykelh.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Haykel Hernandez — Ventas Conscientes, Liderazgo y Desarrollo Humano",
    template: "%s | Haykel Hernandez",
  },
  description:
    "Haykel Hernandez es emprendedor, autor y mentor especializado en ventas conscientes, identidad y liderazgo personal. Transforma tu forma de pensar, comunicarte y tomar acción.",
  keywords: [
    "Haykel Hernandez",
    "ventas conscientes",
    "desarrollo humano",
    "liderazgo personal",
    "mentor de ventas",
    "emprendedor",
    "identidad",
    "crecimiento personal",
    "espiritualidad y ventas",
  ],
  authors: [{ name: "Haykel Hernandez", url: siteUrl }],
  creator: "Haykel Hernandez",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Haykel Hernandez",
    title: "Haykel Hernandez — Ventas Conscientes, Liderazgo y Desarrollo Humano",
    description:
      "Emprendedor, autor y mentor especializado en ventas conscientes, identidad y liderazgo personal.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Haykel Hernandez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haykel Hernandez — Ventas Conscientes & Liderazgo",
    description:
      "Emprendedor, autor y mentor especializado en ventas conscientes, identidad y liderazgo personal.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "es-ES": siteUrl,
      "en-US": `${siteUrl}/en`,
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Haykel Hernandez",
  url: siteUrl,
  image: `${siteUrl}/haykel-hernandez.jpg`,
  description:
    "Emprendedor, autor y mentor especializado en ventas conscientes, identidad y liderazgo personal.",
  jobTitle: "Emprendedor, Autor y Mentor",
  knowsAbout: [
    "Ventas Conscientes",
    "Desarrollo Humano",
    "Liderazgo Personal",
    "Identidad",
    "Emprendimiento",
    "Espiritualidad aplicada a los negocios",
    "Comunicación persuasiva",
    "Mentoría de negocios",
  ],
  knowsLanguage: ["es", "en"],
  nationality: { "@type": "Country", name: "Venezuela" },
  sameAs: [
    "https://instagram.com/haykelh",
    "https://linkedin.com/in/haykelh",
    "https://tiktok.com/@haykelh",
    "https://youtube.com/@haykelh",
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": siteUrl,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Haykel Hernandez",
  description:
    "Sitio oficial de Haykel Hernandez — Ventas Conscientes, Liderazgo y Desarrollo Humano",
  publisher: { "@id": `${siteUrl}/#person` },
  inLanguage: ["es", "en"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="theme-color" content="#0A0A0A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
