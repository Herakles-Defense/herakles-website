import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TechnologyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-b from-primary to-secondary">
          <div className="container-custom">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
              Technologie
            </h1>
            <p className="text-xl text-neutral/80 max-w-3xl mx-auto text-center mb-12">
              Intelligente, opferbare Masse gegen gefährliche Bedrohungen – zu einem Bruchteil der Kosten etablierter Systeme.
            </p>
            <div className="max-w-4xl mx-auto">
              <Image
                src="/images/technology-diagram.png"
                alt="Technology Overview"
                width={1600}
                height={900}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* System Architecture */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              Dreistufiges Abwehrkonzept
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-primary p-8 rounded-lg">
                <div className="text-accent text-4xl font-bold mb-4">1</div>
                <h3 className="text-2xl font-bold mb-4">Früherkennung</h3>
                <p className="text-neutral/80">
                  KI-gestützte akustische und visuelle Früherkennung erkennt feindliche Drohnen bereits aus großer Entfernung (500m+).
                </p>
              </div>
              <div className="bg-primary p-8 rounded-lg">
                <div className="text-accent text-4xl font-bold mb-4">2</div>
                <h3 className="text-2xl font-bold mb-4">Richtungsbestimmung</h3>
                <p className="text-neutral/80">
                  Initiale Richtungsbestimmung und sofortige Alarmierung. Operator gibt Startfreigabe per Knopfdruck (Human-on-the-Loop).
                </p>
              </div>
              <div className="bg-primary p-8 rounded-lg">
                <div className="text-accent text-4xl font-bold mb-4">3</div>
                <h3 className="text-2xl font-bold mb-4">Autonomer Abfang</h3>
                <p className="text-neutral/80">
                  Nach dem Start operiert der Interceptor vollständig autonom. Visuelles KI-Tracking und kinematische Neutralisation durch Kollision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hit-to-Kill */}
        <section className="section-padding bg-primary">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Hit-to-Kill Prinzip
                </h2>
                <p className="text-lg text-neutral/80 mb-6">
                  Der Herakles Interceptor arbeitet nach dem Hit-to-Kill-Prinzip und trägt keinen Sprengkopf.
                </p>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="text-accent mr-3">→</span>
                    <span>Kinetische Energie bei 120 km/h: <strong className="text-accent">ca. 444 Joule</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">→</span>
                    <span>Frontale Kollision (230 km/h relativ): <strong className="text-accent">ca. 1.640 Joule</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">→</span>
                    <span>Mehr als ausreichend für Zerstörung von Propellern und Struktur</span>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/images/interceptor-action.png"
                  alt="Interceptor in Action"
                  width={1600}
                  height={900}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              Technische Spezifikationen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-primary p-6 rounded-lg">
                <h4 className="text-accent font-bold mb-2">Geschwindigkeit</h4>
                <p className="text-2xl font-bold">120-160 km/h</p>
              </div>
              <div className="bg-primary p-6 rounded-lg">
                <h4 className="text-accent font-bold mb-2">Flugzeit</h4>
                <p className="text-2xl font-bold">4+ Minuten</p>
              </div>
              <div className="bg-primary p-6 rounded-lg">
                <h4 className="text-accent font-bold mb-2">Latenz</h4>
                <p className="text-2xl font-bold">&lt; 50 ms</p>
              </div>
              <div className="bg-primary p-6 rounded-lg">
                <h4 className="text-accent font-bold mb-2">KI-Tracking</h4>
                <p className="text-2xl font-bold">Edge-AI</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-b from-secondary to-primary">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Mehr erfahren?
            </h2>
            <p className="text-xl text-neutral/80 max-w-2xl mx-auto mb-8">
              Kontaktieren Sie uns für detaillierte technische Informationen.
            </p>
            <Link href="/contact" className="btn-primary">
              Kontakt aufnehmen
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}