import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            FPV-Drohnen sind die <span className="text-accent">größte Bedrohung</span><br />
            moderner Kriegsführung
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neutral/90 max-w-3xl mx-auto">
            Wir haben die Antwort.
          </p>
          <p className="text-lg mb-12 text-neutral/80 max-w-2xl mx-auto">
            Eine FPV-Drohne kostet 300 Euro und kann einen Panzer zerstören.<br />
            Unser Interceptor kostet einen Bruchteil dessen, was er schützt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/technology" className="btn-primary">
              Technologie entdecken
            </Link>
            <Link href="/mission" className="btn-secondary">
              Unsere Mission
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-neutral/50 text-sm mb-2">Scroll</span>
            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              Das Problem
            </h2>
            <div className="space-y-6 text-lg text-neutral/80">
              <p>
                FPV-Drohnen haben sich in den letzten drei Jahren zum <span className="text-accent font-semibold">dominierenden taktischen Kampfmittel</span> asymmetrischer Konflikte entwickelt.
              </p>
              <p>
                Der Ukrainekonflikt zeigt dies eindrucksvoll: Improvisierte FPV-Kamikazedrohnen verursachen <span className="text-accent font-semibold">über 42% aller verifizierten Fahrzeugverluste</span>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-primary p-6 rounded-lg">
                  <div className="text-accent text-4xl font-bold mb-2">300-700€</div>
                  <div className="text-neutral/70">Kosten pro Drohne</div>
                </div>
                <div className="bg-primary p-6 rounded-lg">
                  <div className="text-accent text-4xl font-bold mb-2">42%</div>
                  <div className="text-neutral/70">Fahrzeugverluste</div>
                </div>
                <div className="bg-primary p-6 rounded-lg">
                  <div className="text-accent text-4xl font-bold mb-2">100+ km/h</div>
                  <div className="text-neutral/70">Angriffsgeschwindigkeit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Die Lösung: <span className="text-accent">Herakles Interceptor</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/interceptor-product.png"
                alt="Herakles Interceptor"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Autonomer Abfang-Interceptor</h3>
              <p className="text-lg text-neutral/80">
                Das Herakles-System ist ein reaktives Drohnen-Abwehrsystem, speziell für die Neutralisierung feindlicher FPV-Kamikazedrohnen entwickelt.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span><strong>Hit-to-Kill Prinzip:</strong> Kinetische Neutralisation ohne Sprengkopf</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span><strong>KI-gestützt:</strong> Autonomes Tracking und Abfangen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span><strong>Kosteneffizient:</strong> Bruchteil der Kosten etablierter Systeme</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span><strong>Dezentral:</strong> Für mobile Infanterie ohne schweres Gerät</span>
                </li>
              </ul>
              <Link href="/technology" className="btn-primary inline-block mt-6">
                Mehr zur Technologie
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Der Markt
          </h2>
          <p className="text-xl text-neutral/80 max-w-3xl mx-auto mb-12">
            Der Counter-UAS-Markt wächst rasant. Deutschland allein investiert 12 Mrd. USD in Drohnentechnologie bis 2030.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-primary p-8 rounded-lg">
              <div className="text-accent text-5xl font-bold mb-4">$20,31 Mrd</div>
              <div className="text-xl mb-2">Marktgröße 2030</div>
              <div className="text-neutral/70">CAGR 25,1%</div>
            </div>
            <div className="bg-primary p-8 rounded-lg">
              <div className="text-accent text-5xl font-bold mb-4">$12 Mrd</div>
              <div className="text-xl mb-2">Deutschland bis 2030</div>
              <div className="text-neutral/70">Drohnentechnologie</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-primary to-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Bereit für die Zukunft der Verteidigung?
          </h2>
          <p className="text-xl text-neutral/80 max-w-2xl mx-auto mb-8">
            Erfahren Sie mehr über unsere Technologie und wie wir die Bedrohung durch FPV-Drohnen neutralisieren.
          </p>
          <Link href="/contact" className="btn-primary">
            Kontakt aufnehmen
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}