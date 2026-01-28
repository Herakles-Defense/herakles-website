import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="de">
      <body>
        {children}
      </body>
    </html>
  );
}
