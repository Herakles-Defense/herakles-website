import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MissionPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/mission-hero.png"
              alt="Mission Hero"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90" />
          </div>
          <div className="relative z-10 container-custom px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Unsere Mission
            </h1>
            <p className="text-xl md:text-2xl text-neutral/90 max-w-3xl mx-auto">
              Die Bedrohung durch FPV-Drohnen neutralisieren, bevor sie zum globalen Standardwerkzeug asymmetrischer Kriegsführung wird.
            </p>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Die Herausforderung
            </h2>
            <div className="space-y-6 text-lg text-neutral/80">
              <p>
                Während derzeit FPV-Drohnen überwiegend von der Ukraine als erfolgreiches neues Kampfmittel eingesetzt werden, <strong className="text-accent">schaut die Welt zu und lernt</strong>.
              </p>
              <p>
                Die technischen Hürden sind niedrig. Die Komponenten sind kommerziell verfügbar. Die Wirksamkeit ist bewiesen.
              </p>
              <p className="text-xl font-semibold text-accent">
                Es ist unausweichlich, dass zukünftige nichtstaatliche Akteure, Terrorgruppen und hybride Gegner dieses Konzept übernehmen werden.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="section-padding bg-primary">
          <div className="container-custom">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              Unser Ansatz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-accent">Dezentral</h3>
                <p className="text-neutral/80">
                  Herakles ist das erste dezentrale System für Infanterie OHNE schweres Gerät. Schutz für Schützengräben, FOBs und Convoys ohne Panzerung.
                </p>
              </div>
              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-accent">Kosteneffizient</h3>
                <p className="text-neutral/80">
                  Intelligente, opferbare Masse zu einem Bruchteil der Kosten. Kein teurer Sprengkopf, nur kinetische Energie.
                </p>
              </div>
              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-accent">Autonom</h3>
                <p className="text-neutral/80">
                  KI-gestütztes Tracking und autonomer Abfang. Human-on-the-Loop für ethische Kontrolle, aber vollständig autonom nach Start.
                </p>
              </div>
              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-accent">EW-Resistent</h3>
                <p className="text-neutral/80">
                  Keine Funkverbindung zum Boden nach Launch erforderlich. Widerstandsfähig gegen elektronische Gegenmaßnahmen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              Marktopportunität
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-neutral/80">
              <p>
                Der Counter-UAS-Markt wächst von <strong className="text-accent">$6,64 Mrd. (2025)</strong> auf <strong className="text-accent">$20,31 Mrd. (2030)</strong> – ein CAGR von 25,1%.
              </p>
              <p>
                Deutschland allein investiert <strong className="text-accent">$12 Mrd. USD</strong> in Drohnentechnologie bis 2030.
              </p>
              <p>
                Die Bundeswehr hat bereits einen Vertrag über <strong className="text-accent">mehrere 100 Mio. EUR</strong> mit Tytan Technologies (Oktober 2025) abgeschlossen.
              </p>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="section-padding bg-gradient-to-b from-primary to-secondary">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Unsere Vision
            </h2>
            <p className="text-xl text-neutral/80 max-w-3xl mx-auto mb-8">
              Eine schnelle und effektive Antwort auf die FPV-Bedrohung, bevor das Konzept auf globaler Ebene zu einem Standardwerkzeug asymmetrischer Kriegsführung wird.
            </p>
            <Link href="/contact" className="btn-primary">
              Teil der Lösung werden
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}