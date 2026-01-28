import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-primary">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-secondary">
                Technologie
              </h1>
              <p className="text-xl md:text-2xl text-secondary/80 leading-relaxed">
                Intelligente, opferbare Masse gegen tödliche Bedrohungen –<br />
                zu einem Bruchteil der Kosten etablierter Systeme.
              </p>
            </div>
          </div>
        </section>

        {/* Why Conventional Systems Fail */}
        <section className="section-padding bg-neutral/30">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-12 text-secondary text-center">
                Warum konventionelle Systeme versagen
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-2xl font-bold mb-4 text-secondary">Jammer & EW-Systeme</h3>
                  <p className="text-secondary/70">
                    Elektronische Kriegsführung kann Funksignale stören – aber FPV-Drohnen können auch manuell
                    (analog über Video-Downlink) gesteuert werden. Sobald der Pilot das Ziel visuell hat, hilft Jamming nicht mehr.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-2xl font-bold mb-4 text-secondary">Laserwaffen</h3>
                  <p className="text-secondary/70">
                    Theoretisch effektiv, praktisch Millionen-Investitionen. Schwere Systeme, nur für stationäre Basen geeignet.
                    Mobile Infanterie? Keine Chance.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-2xl font-bold mb-4 text-secondary">Klassische Flak / Geschütze</h3>
                  <p className="text-secondary/70">
                    Gegen große, langsame Drohnen? Vielleicht. Gegen 15cm-Ziele bei 110 km/h in 10m Höhe? Aussichtslos.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-2xl font-bold mb-4 text-secondary">Raketenabwehr (Stinger, etc.)</h3>
                  <p className="text-secondary/70">
                    Ein Stinger kostet 40.000 USD. Für eine 400-Euro-Drohne. Und selbst wenn: Zu langsam für schnelle, agile FPV-Targets.
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-red-50 border-2 border-red-500 p-8 rounded-lg">
                <p className="text-xl font-bold text-red-700 mb-4">
                  Das Ergebnis?
                </p>
                <p className="text-lg text-secondary">
                  Soldaten sterben, weil keine praktikable Lösung existiert.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Herakles: Rethought from Ground Up */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-secondary text-center">
                Herakles: Von Grund auf neu gedacht
              </h2>
              <p className="text-xl text-center text-secondary/80 mb-12 max-w-3xl mx-auto">
                Wir haben nicht versucht, bestehende Systeme anzupassen.<br />
                Wir haben gefragt: <span className="font-bold text-accent">Was braucht man wirklich, um FPV-Drohnen zu stoppen?</span>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-accent p-6 rounded-lg">
                  <div className="text-accent text-3xl font-bold mb-3">→</div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Früherkennung</h3>
                  <p className="text-secondary/70">
                    Bedrohung detektieren, bevor sie nah ist
                  </p>
                </div>

                <div className="bg-white border-2 border-accent p-6 rounded-lg">
                  <div className="text-accent text-3xl font-bold mb-3">→</div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Geschwindigkeit</h3>
                  <p className="text-secondary/70">
                    Schnell genug, um FPV-Drohnen einzuholen
                  </p>
                </div>

                <div className="bg-white border-2 border-accent p-6 rounded-lg">
                  <div className="text-accent text-3xl font-bold mb-3">→</div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Autonomie</h3>
                  <p className="text-secondary/70">
                    Keine Funkverbindung (EW-Risiko)
                  </p>
                </div>

                <div className="bg-white border-2 border-accent p-6 rounded-lg">
                  <div className="text-accent text-3xl font-bold mb-3">→</div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Kosteneffizienz</h3>
                  <p className="text-secondary/70">
                    Opferbare Masse, kein teurer Sprengkopf
                  </p>
                </div>

                <div className="bg-white border-2 border-accent p-6 rounded-lg">
                  <div className="text-accent text-3xl font-bold mb-3">→</div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Mobilität</h3>
                  <p className="text-secondary/70">
                    Leicht genug für Infanterie ohne schweres Gerät
                  </p>
                </div>

                <div className="bg-white border-2 border-accent p-6 rounded-lg">
                  <div className="text-accent text-3xl font-bold mb-3">→</div>
                  <h3 className="text-xl font-bold text-secondary mb-2">EW-Resistent</h3>
                  <p className="text-secondary/70">
                    Funktioniert auch bei Störung
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three-Stage Defense Concept */}
        <section className="section-padding bg-gradient-to-b from-white to-neutral/30">
          <div className="container-custom">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-secondary text-center">
              Dreistufiges Abwehrkonzept
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-accent text-5xl font-bold mb-4">1</div>
                <h3 className="text-2xl font-bold mb-4 text-secondary">Früherkennung</h3>
                <p className="text-secondary/70 leading-relaxed">
                  KI-gestützte akustische und visuelle Sensorik detektiert feindliche FPV-Drohnen bereits aus großer Entfernung (500m+).
                  Das System analysiert charakteristische akustische Signaturen und visuelle Muster in Echtzeit.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-accent text-5xl font-bold mb-4">2</div>
                <h3 className="text-2xl font-bold mb-4 text-secondary">Richtungsbestimmung</h3>
                <p className="text-secondary/70 leading-relaxed">
                  Nach Detektion zeigt das System die ungefähre Richtung der Bedrohung.
                  Operator trifft die finale Entscheidung und gibt Startfreigabe per Knopfdruck.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-accent text-5xl font-bold mb-4">3</div>
                <h3 className="text-2xl font-bold mb-4 text-secondary">Autonomer Abfang</h3>
                <p className="text-secondary/70 leading-relaxed">
                  Nach dem Launch operiert der Interceptor vollständig autonom. Edge-AI übernimmt visuelles Tracking,
                  Verfolgung und Abfang-Manöver. Keine Funkverbindung erforderlich.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Diagram */}
        <section className="section-padding bg-neutral/20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-secondary text-center">
                So funktioniert es
              </h2>

              {/* Tactical Diagram */}
              <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-accent">
                <div className="relative w-full mb-6">
                  <Image
                    src="/images/tactical-diagram.png"
                    alt="Taktisches Abfang-Diagramm"
                    width={1600}
                    height={900}
                    className="rounded-lg w-full h-auto"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-secondary mb-3">Ablauf der Verteidigung</h3>
                  <p className="text-secondary/70 leading-relaxed">
                    <span className="font-semibold text-accent">1.</span> Feindliche FPV-Kamikaze-Drohne nähert sich mit 100+ km/h<br />
                    <span className="font-semibold text-accent">2.</span> Herakles detektiert und alarmiert<br />
                    <span className="font-semibold text-accent">3.</span> Operator gibt Freigabe<br />
                    <span className="font-semibold text-accent">4.</span> Interceptor startet und verfolgt autonom<br />
                    <span className="font-semibold text-accent">5.</span> Kinetische Kollision neutralisiert Bedrohung<br />
                    <span className="font-semibold text-accent">6.</span> Soldat ist geschützt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hit-to-Kill Principle */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary">
                    Hit-to-Kill Prinzip
                  </h2>
                  <p className="text-lg text-secondary/80 mb-6 leading-relaxed">
                    Der Herakles Interceptor trägt keinen Sprengkopf. Stattdessen neutralisiert er Ziele
                    durch kinetische Energie bei direkter Kollision.
                  </p>

                  <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg space-y-3">
                    <div className="flex items-baseline gap-3">
                      <span className="text-accent font-bold text-lg">→</span>
                      <span className="text-secondary/80">
                        Kinetische Energie bei 120 km/h: <span className="font-bold text-accent">ca. 444 Joule</span>
                      </span>
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-accent font-bold text-lg">→</span>
                      <span className="text-secondary/80">
                        Frontale Kollision (230 km/h relativ): <span className="font-bold text-accent">ca. 1.640 Joule</span>
                      </span>
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-accent font-bold text-lg">→</span>
                      <span className="text-secondary/80">
                        Mehr als ausreichend für Zerstörung von Propellern und Struktur
                      </span>
                    </div>
                  </div>

                  <p className="mt-6 text-lg font-semibold text-secondary">
                    Kein teurer Sprengkopf. Keine Kollateralschäden. <span className="text-accent">Reine Physik.</span>
                  </p>
                </div>

                <div>
                  <Image
                    src="/images/interceptor-action.png"
                    alt="Interceptor in Action"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="section-padding bg-secondary text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              Technische Spezifikationen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur p-8 rounded-lg text-center">
                <h4 className="text-accent font-bold mb-3 text-lg">Geschwindigkeit</h4>
                <p className="text-3xl font-bold">120-160 km/h</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-8 rounded-lg text-center">
                <h4 className="text-accent font-bold mb-3 text-lg">Flugzeit</h4>
                <p className="text-3xl font-bold">4+ Minuten</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-8 rounded-lg text-center">
                <h4 className="text-accent font-bold mb-3 text-lg">Latenz</h4>
                <p className="text-3xl font-bold">&lt; 50 ms</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-8 rounded-lg text-center">
                <h4 className="text-accent font-bold mb-3 text-lg">KI-Tracking</h4>
                <p className="text-3xl font-bold">Edge-AI</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-b from-white to-neutral/30">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary">
              Mehr erfahren?
            </h2>
            <p className="text-xl text-secondary/80 max-w-2xl mx-auto mb-8">
              Kontaktieren Sie uns für detaillierte technische Informationen.
            </p>
            <Link href="/mission" className="btn-primary mr-4">
              Unsere Mission
            </Link>
            <Link href="/contact" className="btn-secondary">
              Kontakt aufnehmen
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
