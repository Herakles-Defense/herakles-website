'use client'

import { motion } from "framer-motion";
import { Zap, DollarSign, Brain, Shield, ArrowRight, Mail, AlertTriangle, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import GradientBorderCard from "@/components/GradientBorderCard";
import TimelineItem from "@/components/TimelineItem";

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-black-primary">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding">
          <div className="container-custom text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white-primary"
            >
              Unsere Mission
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white-secondary max-w-3xl mx-auto leading-relaxed"
            >
              Die Bedrohung durch FPV-Drohnen neutralisieren,<br />
              bevor sie zum globalen Standard asymmetrischer Kriegsführung wird.
            </motion.p>
          </div>
        </section>

        {/* Die Bedrohung verstehen - Timeline */}
        <section className="section-padding bg-black-secondary">
          <div className="container-custom max-w-5xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-16 text-white-primary text-center"
            >
              Die Bedrohung verstehen
            </motion.h2>

            {/* Timeline Container */}
            <div className="space-y-0">
              <TimelineItem
                number="1"
                icon={AlertTriangle}
                title="Die Herausforderung"
                description={
                  <div className="space-y-4">
                    <p>
                      FPV-Kamikaze-Drohnen haben sich in den letzten drei Jahren zum <span className="text-orange-primary font-semibold">dominierenden taktischen Kampfmittel</span> asymmetrischer Konflikte entwickelt.
                      Der Ukrainekonflikt zeigt dies eindrucksvoll: Improvisierte FPV-Kamikazedrohnen verursachen über 42% aller verifizierten Fahrzeugverluste.
                    </p>
                    <div>
                      <p className="font-semibold text-white-primary mb-3">Die technischen Hürden sind niedrig:</p>
                      <ul className="list-none space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-primary font-bold">•</span>
                          <span>Komponenten kommerziell verfügbar (DJI, Tarot, etc.)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-primary font-bold">•</span>
                          <span>Kosten: 300-700 Euro pro Einheit</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-primary font-bold">•</span>
                          <span>Reichweite: 5-10 km (analog-video)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-primary font-bold">•</span>
                          <span>Geschwindigkeit: 100-120 km/h</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-primary font-bold">•</span>
                          <span>Einfache Bedienung: FPV-Piloten mit Gaming-Hintergrund</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                }
              />

              <TimelineItem
                number="2"
                icon={Target}
                title="Die Wirksamkeit ist bewiesen"
                description={
                  <ul className="list-none space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-primary font-bold">→</span>
                      <span>Tausende dokumentierte Treffer auf Panzer, Fahrzeuge, Personal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-primary font-bold">→</span>
                      <span>Kosten-Asymmetrie: 300€ Drohne zerstört 4-Mio-€-Panzer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-primary font-bold">→</span>
                      <span>Präzision: Piloten können spezifische Schwachstellen anvisieren</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-primary font-bold">→</span>
                      <span>Psychologische Wirkung: Ständige Bedrohung, keine sichere Zone</span>
                    </li>
                  </ul>
                }
              />

              <TimelineItem
                number="3"
                icon={Shield}
                title="Warum es nicht bei der Ukraine bleiben wird"
                description={
                  <div className="space-y-4">
                    <p>
                      Während derzeit FPV-Drohnen überwiegend in der Ukraine eingesetzt werden, beobachtet die Welt aufmerksam.
                      Die Taktik ist dokumentiert. Die Hardware ist verfügbar. Die Wirksamkeit ist bewiesen.
                    </p>
                    <div className="p-4 rounded-lg border-2 border-red-500 bg-red-500/10">
                      <p className="text-lg font-bold text-red-400">
                        Es ist unausweichlich, dass zukünftige nichtstaatliche Akteure, Terrorgruppen und hybride Gegner dieses Konzept übernehmen werden.
                        Die Frage ist nicht ob, sondern wann.
                      </p>
                    </div>
                  </div>
                }
                isLast={true}
              />
            </div>
          </div>
        </section>

        {/* Unsere Mission */}
        <section className="section-padding bg-gradient-to-b from-black-secondary to-black-primary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-6 text-white-primary"
              >
                Unsere Mission
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white-secondary leading-relaxed mb-12"
              >
                Eine schnelle und effektive Antwort auf die FPV-Bedrohung entwickeln und verfügbar machen,
                <span className="block mt-2 text-orange-primary font-bold text-2xl">bevor das Konzept auf globaler Ebene zu einem Standardwerkzeug asymmetrischer Kriegsführung wird.</span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg text-white-secondary"
              >
                Herakles ist das erste dezentrale Anti-FPV-System, das speziell für mobile Infanterie entwickelt wurde.<br />
                <span className="font-bold text-white-primary text-xl">Kosteneffizient. Autonom. Einsatzbereit.</span>
              </motion.p>
            </div>
          </div>
        </section>

        {/* Unser Ansatz - WITHOUT EMOJIS, with Icons */}
        <section className="section-padding bg-black-primary">
          <div className="container-custom">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-12 text-white-primary text-center"
            >
              Unser Ansatz
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                <GradientBorderCard
                  icon={Zap}
                  title="Dezentral"
                  description="Herakles ist das erste dezentrale System für Infanterie ohne schweres Gerät. Schutz für Schützengräben, FOBs und Konvois ohne Panzerung."
                />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                <GradientBorderCard
                  icon={DollarSign}
                  title="Kosteneffizient"
                  description="Intelligente, opferbare Masse zu einem Bruchteil der Kosten etablierter Systeme. Kein teurer Sprengkopf, nur kinetische Energie."
                />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                <GradientBorderCard
                  icon={Brain}
                  title="Autonom"
                  description="KI-gestütztes Tracking und autonomer Abfang. Operator gibt nur Startfreigabe, danach vollständig autonom."
                />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                <GradientBorderCard
                  icon={Shield}
                  title="EW-Resistent"
                  description="Keine Funkverbindung zum Boden nach Launch erforderlich. Widerstandsfähig gegen elektronische Gegenmaßnahmen."
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Vision - Fullwidth Hero Style */}
        <section className="relative section-padding-lg bg-black-primary overflow-hidden">
          {/* Gradient Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/10 via-black-primary to-black-secondary" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,53,0.15),transparent_50%)]" />

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(255,107,53,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />

          <div className="relative container-custom text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white-primary"
              >
                Unsere Vision
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card border-2 border-orange-primary/30 mb-8 backdrop-blur-xl"
              >
                <p className="text-2xl md:text-3xl text-white-primary leading-relaxed font-medium">
                  Eine Zukunft, in der Soldaten und zivile Infrastruktur wirksam vor FPV-Kamikaze-Drohnen geschützt sind.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-4xl font-bold mb-12"
              >
                <span className="gradient-text">Bevor diese Bedrohung zu einem globalen Standard wird.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button variant="primary" size="lg" icon={ArrowRight} href="/technology">
                  Unsere Technologie
                </Button>
                <Button variant="secondary" size="lg" icon={Mail} href="/contact">
                  Kontakt aufnehmen
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
