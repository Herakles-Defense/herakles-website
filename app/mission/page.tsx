import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-primary">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-secondary">
              Unsere Mission
            </h1>
            <p className="text-xl md:text-2xl text-secondary/80 max-w-3xl mx-auto leading-relaxed">
              Die Bedrohung durch FPV-Drohnen neutralisieren,<br />
              bevor sie zum globalen Standard asymmetrischer Kriegsführung wird.
            </p>
          </div>
        </section>

        {/* Die Herausforderung */}
        <section className="section-padding bg-neutral/30">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-secondary">
              Die Herausforderung
            </h2>
            <div className="space-y-6 text-lg text-secondary/80 leading-relaxed">
              <p>
                FPV-Kamikaze-Drohnen haben sich in den letzten drei Jahren zum <span className="text-accent font-semibold">dominierenden taktischen Kampfmittel</span> asymmetrischer Konflikte entwickelt.
                Der Ukrainekonflikt zeigt dies eindrucksvoll: Improvisierte FPV-Kamikazedrohnen verursachen über 42% aller verifizierten Fahrzeugverluste.
              </p>
              <p>
                <span className="font-semibold text-secondary">Die technischen Hürden sind niedrig:</span>
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Komponenten kommerziell verfügbar (DJI, Tarot, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Kosten: 300-700 Euro pro Einheit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Reichweite: 5-10 km (analog-video)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Geschwindigkeit: 100-120 km/h</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Einfache Bedienung: FPV-Piloten mit Gaming-Hintergrund</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 bg-accent/10 border-l-4 border-accent p-6 rounded-lg">
              <p className="font-semibold text-secondary text-lg mb-3">Die Wirksamkeit ist bewiesen:</p>
              <ul className="list-none space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span className="text-secondary/80">Tausende dokumentierte Treffer auf Panzer, Fahrzeuge, Personal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span className="text-secondary/80">Kosten-Asymmetrie: 300€ Drohne zerstört 4-Mio-€-Panzer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span className="text-secondary/80">Präzision: Piloten können spezifische Schwachstellen anvisieren</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span className="text-secondary/80">Psychologische Wirkung: Ständige Bedrohung, keine sichere Zone</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Warum es nicht bei der Ukraine bleiben wird */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-secondary">
              Warum es nicht bei der Ukraine bleiben wird
            </h2>
            <div className="space-y-6 text-lg text-secondary/80 leading-relaxed">
              <p>
                Während derzeit FPV-Drohnen überwiegend in der Ukraine eingesetzt werden, beobachtet die Welt aufmerksam.
                Die Taktik ist dokumentiert. Die Hardware ist verfügbar. Die Wirksamkeit ist bewiesen.
              </p>
              <div className="bg-red-50 border-2 border-red-500 p-8 rounded-lg">
                <p className="text-xl font-bold text-red-700">
                  Es ist unausweichlich, dass zukünftige nichtstaatliche Akteure, Terrorgruppen und hybride Gegner dieses Konzept übernehmen werden.
                  Die Frage ist nicht ob, sondern wann.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Unsere Mission */}
        <section className="section-padding bg-gradient-to-b from-white to-neutral/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary">
                Unsere Mission
              </h2>
              <p className="text-xl text-secondary/80 leading-relaxed mb-12">
                Eine schnelle und effektive Antwort auf die FPV-Bedrohung entwickeln und verfügbar machen,
                <span className="block mt-2 text-accent font-bold text-2xl">bevor das Konzept auf globaler Ebene zu einem Standardwerkzeug asymmetrischer Kriegsführung wird.</span>
              </p>
              <p className="text-lg text-secondary/80">
                Herakles ist das erste dezentrale Anti-FPV-System, das speziell für mobile Infanterie entwickelt wurde.<br />
                <span className="font-bold text-secondary text-xl">Kosteneffizient. Autonom. Einsatzbereit.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Unser Ansatz */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-secondary text-center">
              Unser Ansatz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white border-2 border-accent p-8 rounded-lg">
                <div className="text-accent text-4xl font-bold mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4 text-secondary">Dezentral</h3>
                <p className="text-secondary/70 leading-relaxed">
                  Herakles ist das erste dezentrale System für Infanterie ohne schweres Gerät.
                  Schutz für Schützengräben, FOBs und Konvois ohne Panzerung.
                </p>
              </div>

              <div className="bg-white border-2 border-accent p-8 rounded-lg">
                <div className="text-accent text-4xl font-bold mb-4">💰</div>
                <h3 className="text-2xl font-bold mb-4 text-secondary">Kosteneffizient</h3>
                <p className="text-secondary/70 leading-relaxed">
                  Intelligente, opferbare Masse zu einem Bruchteil der Kosten etablierter Systeme.
                  Kein teurer Sprengkopf, nur kinetische Energie.
                </p>
              </div>

              <div className="bg-white border-2 border-accent p-8 rounded-lg">
                <div className="text-accent text-4xl font-bold mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-4 text-secondary">Autonom</h3>
                <p className="text-secondary/70 leading-relaxed">
                  KI-gestütztes Tracking und autonomer Abfang.
                  Operator gibt nur Startfreigabe, danach vollständig autonom.
                </p>
              </div>

              <div className="bg-white border-2 border-accent p-8 rounded-lg">
                <div className="text-accent text-4xl font-bold mb-4">🛡️</div>
                <h3 className="text-2xl font-bold mb-4 text-secondary">EW-Resistent</h3>
                <p className="text-secondary/70 leading-relaxed">
                  Keine Funkverbindung zum Boden nach Launch erforderlich.
                  Widerstandsfähig gegen elektronische Gegenmaßnahmen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="section-padding bg-secondary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Unsere Vision
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Eine Zukunft, in der Soldaten und zivile Infrastruktur wirksam vor FPV-Kamikaze-Drohnen geschützt sind.
            </p>
            <p className="text-2xl font-bold text-accent mb-8">
              Bevor diese Bedrohung zu einem globalen Standard wird.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/technology" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block">
                Unsere Technologie
              </Link>
              <Link href="/contact" className="bg-white text-secondary hover:bg-neutral/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block">
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
