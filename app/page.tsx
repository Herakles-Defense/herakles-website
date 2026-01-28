import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24">
        <div className="container-custom px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Tagline */}
            <p className="text-accent font-semibold mb-6 text-lg tracking-wide">
              Built for the Threats Others Cannot Solve
            </p>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-secondary">
              FPV-Kamikaze-Drohnen sind die größte Bedrohung<br className="hidden md:block" />
              <span className="text-accent"> moderner Kriegsführung.</span>
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-secondary">
              Wir haben die Antwort.
            </h2>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl mb-12 text-secondary/80 max-w-4xl mx-auto leading-relaxed">
              Eine FPV-Drohne kostet 300 Euro und kann einen Panzer zerstören und viele Leben beenden.<br />
              <span className="font-semibold text-accent">Unser Interceptor kostet einen Bruchteil dessen, was er schützt.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/technology" className="btn-primary">
                Technologie entdecken
              </Link>
              <Link href="/mission" className="btn-secondary">
                Unsere Mission
              </Link>
            </div>

            {/* Hero Image */}
            <div className="relative w-full max-w-4xl mx-auto">
              <Image
                src="/images/interceptor-product.png"
                alt="Herakles Interceptor"
                width={1200}
                height={675}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section-padding bg-neutral/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-secondary">
              Die Realität
            </h2>
            <p className="text-2xl font-bold text-accent mb-6">
              FPV-Drohnen töten täglich Soldaten.<br />
              Sie dominieren moderne Schlachtfelder.
            </p>
            <p className="text-lg text-secondary/80 leading-relaxed">
              Counter-UAS-Systeme sind zu schwer, zu teuer, zu langsam.
              Herakles ist das erste System, das speziell für mobile Infanterie entwickelt wurde.
            </p>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-secondary text-center">
              Die Fakten
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white border-2 border-accent p-8 rounded-lg text-center">
                <div className="text-accent text-5xl font-bold mb-3">42%</div>
                <div className="text-secondary/70 text-lg">
                  aller Fahrzeugverluste in der Ukraine: FPV-Kamikaze-Drohnen
                </div>
              </div>
              <div className="bg-white border-2 border-accent p-8 rounded-lg text-center">
                <div className="text-accent text-5xl font-bold mb-3">300-700€</div>
                <div className="text-secondary/70 text-lg">
                  pro Drohne
                </div>
              </div>
              <div className="bg-white border-2 border-accent p-8 rounded-lg text-center">
                <div className="text-accent text-5xl font-bold mb-3">100+ km/h</div>
                <div className="text-secondary/70 text-lg">
                  Angriffsgeschwindigkeit
                </div>
              </div>
            </div>

            <div className="bg-neutral/50 p-8 rounded-lg">
              <p className="text-lg text-secondary/80 mb-4 leading-relaxed">
                <span className="font-semibold">Bestehende Systeme?</span> Zu schwer, zu teuer, zu langsam.
                Jammer funktionieren nur begrenzt. Lasersysteme sind Millionen-Investitionen.
                Klassische Flak trifft keine 15cm-Targets bei 110 km/h.
              </p>
              <p className="text-xl font-bold text-accent">
                Soldaten sterben, weil es keine praktikable Lösung gab.<br />
                Bis jetzt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-gradient-to-b from-white to-neutral/30">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-secondary">
            Die Lösung: <span className="text-accent">Herakles Interceptor</span>
          </h2>
          <p className="text-xl text-center text-secondary/70 mb-12 max-w-3xl mx-auto">
            Das erste dezentrale Anti-FPV-System für mobile Infanterie.<br />
            Entwickelt für die härtesten Einsatzszenarien.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <Image
                src="/images/interceptor-action.png"
                alt="Herakles Interceptor in Action"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>

            {/* Features */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Autonom</h3>
                  <p className="text-secondary/70">
                    KI-gestütztes Tracking und Abfangen – keine Funkverbindung nötig nach Launch
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Kosteneffizient</h3>
                  <p className="text-secondary/70">
                    Bruchteil der Kosten etablierter Systeme, kein teurer Sprengkopf
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Dezentral</h3>
                  <p className="text-secondary/70">
                    Schutz für Schützengräben, FOBs, Konvois – ohne schweres Gerät
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Schnell</h3>
                  <p className="text-secondary/70">
                    Hit-to-Kill-Prinzip mit kinetischer Energie bei frontaler Kollision
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <Link href="/technology" className="btn-primary inline-block">
                  Mehr zur Technologie
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center">
            <p className="text-lg text-secondary/80 leading-relaxed">
              <span className="font-semibold text-secondary">Kein Sprengkopf.</span> Keine Funkverbindung nach Launch. Keine teuren Raketen.<br />
              <span className="text-accent font-bold text-xl">Nur intelligente, opferbare Masse.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Wir stehen am Anfang einer neuen Ära<br />
            asymmetrischer Bedrohungen
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
            FPV-Drohnen werden sich global verbreiten. Terrorgruppen, nichtstaatliche Akteure,
            hybride Gegner – sie alle beobachten und lernen.<br />
            <span className="font-bold text-accent">Herakles ist die Antwort, bevor es zu spät ist.</span>
          </p>
          <Link href="/mission" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block text-lg">
            Unsere Mission
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
