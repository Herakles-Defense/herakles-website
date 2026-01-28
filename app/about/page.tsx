import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        <section className="section-padding bg-gradient-to-b from-primary to-secondary">
          <div className="container-custom max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
              Über Herakles
            </h1>
            <div className="space-y-6 text-lg text-neutral/80">
              <p>
                Herakles ist ein Defense-Tech Startup, das sich auf die Entwicklung von Counter-UAS-Systemen spezialisiert hat.
              </p>
              <p>
                Unser Fokus liegt auf der Neutralisierung kleiner, improvisierter FPV-Kamikazedrohnen – der dominierenden taktischen Bedrohung moderner asymmetrischer Konflikte.
              </p>
              <p>
                Wir entwickeln das erste dezentrale, akustik-basierte Frühwarnsystem mit integrierter Interceptor-Lösung für Infanterie und mobile Einheiten ohne schweres Gerät.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Status
            </h2>
            <div className="space-y-4 text-lg text-neutral/80">
              <p>
                <strong className="text-accent">Aktuelle Phase:</strong> Konzeptphase mit technischem Deep Dive
              </p>
              <p>
                <strong className="text-accent">Fokus:</strong> Anti-FPV-Guerilla & Loitering Munition Defense
              </p>
              <p>
                <strong className="text-accent">Einsatzgebiet:</strong> Mobile Truppenabwehr im asymmetrischen Konflikt
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-secondary to-primary text-center">
          <div className="container-custom">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Interessiert?
            </h2>
            <p className="text-xl text-neutral/80 max-w-2xl mx-auto mb-8">
              Kontaktieren Sie uns für weitere Informationen über Herakles und unsere Technologie.
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