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
  title: "Herakles Defense - Tactical Counter-UAS System",
  description: "FPV-Kamikaze-Drohnen sind die größte Bedrohung moderner Kriegsführung. Wir haben die Antwort.",
  keywords: "Counter-UAS, Anti-Drone, FPV Defense, Interceptor, Military Technology, Defense",
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
