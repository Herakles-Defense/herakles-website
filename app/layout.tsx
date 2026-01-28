import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, JetBrains_Mono } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

// Configure Inter Variable Font with all weights
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Configure JetBrains Mono for technical specs
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://herakles-website.vercel.app'),
  title: {
    default: "Herakles Defense - Tactical Counter-UAS System",
    template: "%s | Herakles Defense"
  },
  description: "FPV-Kamikaze-Drohnen sind die größte Bedrohung moderner Kriegsführung. Herakles ist das erste dezentrale Anti-FPV-System für mobile Infanterie. Autonom. Kosteneffizient. Einsatzbereit.",
  keywords: ["Counter-UAS", "Anti-Drone", "FPV Defense", "Interceptor", "Military Technology", "Defense System", "Autonomous Drone Defense", "Tactical Defense", "Infantry Protection", "Kamikaze Drone Protection"],
  authors: [{ name: "Hive Guard UG" }],
  creator: "Hive Guard UG",
  publisher: "Herakles Defense",
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
    locale: 'de_DE',
    url: 'https://herakles-website.vercel.app',
    siteName: 'Herakles Defense',
    title: 'Herakles Defense - Tactical Counter-UAS System',
    description: 'Das erste dezentrale Anti-FPV-System für mobile Infanterie. Autonom. Kosteneffizient. Einsatzbereit.',
    images: [
      {
        url: '/images/interceptor-product.webp',
        width: 1200,
        height: 675,
        alt: 'Herakles Interceptor - Tactical Counter-UAS System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Herakles Defense - Tactical Counter-UAS System',
    description: 'Das erste dezentrale Anti-FPV-System für mobile Infanterie. Autonom. Kosteneffizient. Einsatzbereit.',
    images: ['/images/interceptor-product.webp'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    // google: 'your-google-verification-code', // Add when available
    // yandex: 'your-yandex-verification-code', // Add when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={inter.className}>
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
