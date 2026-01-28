'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { Radio, Zap, Shield, Rocket, Eye, Gauge, Brain, DollarSign, Users, ShieldCheck, ArrowRight, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import MinimalLineCard from "@/components/MinimalLineCard";
import GradientBorderCard from "@/components/GradientBorderCard";
import CountUp from "@/components/CountUp";

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-black-primary">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white-primary">
                Technologie
              </h1>
              <p className="text-xl md:text-2xl text-white-secondary leading-relaxed">
                Intelligente, opferbare Masse gegen tödliche Bedrohungen –<br />
                zu einem Bruchteil der Kosten etablierter Systeme.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Conventional Systems Fail */}
        <section className="section-padding bg-black-secondary">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-12 text-white-primary text-center"
              >
                Warum konventionelle Systeme versagen
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <MinimalLineCard
                  icon={Radio}
                  title="Jammer & EW-Systeme"
                  description="Elektronische Kriegsführung kann Funksignale stören – aber FPV-Drohnen können auch manuell (analog über Video-Downlink) gesteuert werden. Sobald der Pilot das Ziel visuell hat, hilft Jamming nicht mehr."
                  iconColor="text-red-500"
                />
                <MinimalLineCard
                  icon={Zap}
                  title="Laserwaffen"
                  description="Theoretisch effektiv, praktisch Millionen-Investitionen. Schwere Systeme, nur für stationäre Basen geeignet. Mobile Infanterie? Keine Chance."
                  iconColor="text-red-500"
                />
                <MinimalLineCard
                  icon={Shield}
                  title="Klassische Flak / Geschütze"
                  description="Gegen große, langsame Drohnen? Vielleicht. Gegen 15cm-Ziele bei 110 km/h in 10m Höhe? Aussichtslos."
                  iconColor="text-red-500"
                />
                <MinimalLineCard
                  icon={Rocket}
                  title="Raketenabwehr (Stinger, etc.)"
                  description="Ein Stinger kostet 40.000 USD. Für eine 400-Euro-Drohne. Und selbst wenn: Zu langsam für schnelle, agile FPV-Targets."
                  iconColor="text-red-500"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 glass-card border-2 border-red-500"
              >
                <p className="text-xl font-bold text-red-500 mb-4">
                  Das Ergebnis?
                </p>
                <p className="text-lg text-white-primary">
                  Soldaten sterben, weil keine praktikable Lösung existiert.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Herakles: Rethought from Ground Up */}
        <section className="section-padding bg-black-primary">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-8 text-white-primary text-center"
              >
                Herakles: Von Grund auf neu gedacht
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-center text-white-secondary mb-12 max-w-3xl mx-auto"
              >
                Wir haben nicht versucht, bestehende Systeme anzupassen.<br />
                Wir haben gefragt: <span className="font-bold text-orange-primary">Was braucht man wirklich, um FPV-Drohnen zu stoppen?</span>
              </motion.p>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                  }
                }}
              >
                <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                  <GradientBorderCard
                    icon={Eye}
                    title="Früherkennung"
                    description="Bedrohung detektieren, bevor sie nah ist"
                  />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                  <GradientBorderCard
                    icon={Gauge}
                    title="Geschwindigkeit"
                    description="Schnell genug, um FPV-Drohnen einzuholen"
                  />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                  <GradientBorderCard
                    icon={Brain}
                    title="Autonomie"
                    description="Keine Funkverbindung (EW-Risiko)"
                  />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                  <GradientBorderCard
                    icon={DollarSign}
                    title="Kosteneffizienz"
                    description="Opferbare Masse, kein teurer Sprengkopf"
                  />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                  <GradientBorderCard
                    icon={Users}
                    title="Mobilität"
                    description="Leicht genug für Infanterie ohne schweres Gerät"
                  />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                  <GradientBorderCard
                    icon={ShieldCheck}
                    title="EW-Resistent"
                    description="Funktioniert auch bei Störung"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Three-Stage Defense Concept */}
        <section className="section-padding bg-gradient-to-b from-black-secondary to-black-primary">
          <div className="container-custom">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-12 text-white-primary text-center"
            >
              Dreistufiges Abwehrkonzept
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }
                }
              }}
            >
              <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } } }}>
                <GlassmorphismCard
                  title="Früherkennung"
                  description="KI-gestützte akustische und visuelle Sensorik detektiert feindliche FPV-Drohnen bereits aus großer Entfernung (500m+). Das System analysiert charakteristische akustische Signaturen und visuelle Muster in Echtzeit."
                >
                  <div className="text-orange-primary text-5xl font-bold mb-4">1</div>
                </GlassmorphismCard>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } } }}>
                <GlassmorphismCard
                  title="Richtungsbestimmung"
                  description="Nach Detektion zeigt das System die ungefähre Richtung der Bedrohung. Operator trifft die finale Entscheidung und gibt Startfreigabe per Knopfdruck."
                >
                  <div className="text-orange-primary text-5xl font-bold mb-4">2</div>
                </GlassmorphismCard>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } } }}>
                <GlassmorphismCard
                  title="Autonomer Abfang"
                  description="Nach dem Launch operiert der Interceptor vollständig autonom. Edge-AI übernimmt visuelles Tracking, Verfolgung und Abfang-Manöver. Keine Funkverbindung erforderlich."
                >
                  <div className="text-orange-primary text-5xl font-bold mb-4">3</div>
                </GlassmorphismCard>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Visual Diagram */}
        <section className="section-padding bg-black-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-8 text-white-primary text-center"
              >
                So funktioniert es
              </motion.h2>

              {/* Tactical Diagram */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card border-2 border-orange-primary"
              >
                <div className="relative w-full mb-6 image-container">
                  <Image
                    src="/images/tactical-diagram.webp"
                    alt="Taktisches Abfang-Diagramm"
                    width={1600}
                    height={900}
                    className="rounded-lg w-full h-auto image-zoom"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwMCIgaGVpZ2h0PSI5MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFhMWExYSIvPjwvc3ZnPg=="
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-white-primary mb-3">Ablauf der Verteidigung</h3>
                  <p className="text-white-secondary leading-relaxed">
                    <span className="font-semibold text-orange-primary">1.</span> Feindliche FPV-Kamikaze-Drohne nähert sich mit 100+ km/h<br />
                    <span className="font-semibold text-orange-primary">2.</span> Herakles detektiert und alarmiert<br />
                    <span className="font-semibold text-orange-primary">3.</span> Operator gibt Freigabe<br />
                    <span className="font-semibold text-orange-primary">4.</span> Interceptor startet und verfolgt autonom<br />
                    <span className="font-semibold text-orange-primary">5.</span> Kinetische Kollision neutralisiert Bedrohung<br />
                    <span className="font-semibold text-orange-primary">6.</span> Soldat ist geschützt
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hit-to-Kill Principle */}
        <section className="section-padding bg-black-primary">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white-primary">
                    Hit-to-Kill Prinzip
                  </h2>
                  <p className="text-lg text-white-secondary mb-6 leading-relaxed">
                    Der Herakles Interceptor trägt keinen Sprengkopf. Stattdessen neutralisiert er Ziele
                    durch kinetische Energie bei direkter Kollision.
                  </p>

                  <div className="glass-card border-l-4 border-orange-primary space-y-3">
                    <div className="flex items-baseline gap-3">
                      <span className="text-orange-primary font-bold text-lg">→</span>
                      <span className="text-white-secondary">
                        Kinetische Energie bei 120 km/h: <span className="font-bold text-orange-primary">ca. 444 Joule</span>
                      </span>
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-orange-primary font-bold text-lg">→</span>
                      <span className="text-white-secondary">
                        Frontale Kollision (230 km/h relativ): <span className="font-bold text-orange-primary">ca. 1.640 Joule</span>
                      </span>
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-orange-primary font-bold text-lg">→</span>
                      <span className="text-white-secondary">
                        Mehr als ausreichend für Zerstörung von Propellern und Struktur
                      </span>
                    </div>
                  </div>

                  <p className="mt-6 text-lg font-semibold text-white-primary">
                    Kein teurer Sprengkopf. Keine Kollateralschäden. <span className="text-orange-primary">Reine Physik.</span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="image-container"
                >
                  <Image
                    src="/images/interceptor-action.webp"
                    alt="Interceptor in Action"
                    width={800}
                    height={600}
                    className="rounded-xl shadow-2xl image-zoom"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWExYTFhIi8+PC9zdmc+"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="section-padding bg-black-secondary">
          <div className="container-custom">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-12 text-center text-white-primary"
            >
              Technische Spezifikationen
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              <motion.div
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="glass-card text-center"
              >
                <h4 className="text-orange-primary font-bold mb-3 text-lg font-mono">Geschwindigkeit</h4>
                <p className="text-3xl font-bold text-white-primary font-mono">
                  <CountUp end={120} duration={2} className="font-mono" />-<CountUp end={160} duration={2.2} className="font-mono" /> km/h
                </p>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="glass-card text-center"
              >
                <h4 className="text-orange-primary font-bold mb-3 text-lg font-mono">Flugzeit</h4>
                <p className="text-3xl font-bold text-white-primary font-mono">
                  <CountUp end={4} duration={1.5} suffix="+ Minuten" className="font-mono" />
                </p>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="glass-card text-center"
              >
                <h4 className="text-orange-primary font-bold mb-3 text-lg font-mono">Latenz</h4>
                <p className="text-3xl font-bold text-white-primary font-mono">
                  <CountUp end={50} duration={1.8} prefix="< " suffix=" ms" className="font-mono" />
                </p>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="glass-card text-center"
              >
                <h4 className="text-orange-primary font-bold mb-3 text-lg font-mono">KI-Tracking</h4>
                <p className="text-3xl font-bold text-white-primary font-mono">Edge-AI</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-b from-black-primary to-black-secondary">
          <div className="container-custom text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6 text-white-primary"
            >
              Mehr erfahren?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white-secondary max-w-2xl mx-auto mb-8"
            >
              Kontaktieren Sie uns für detaillierte technische Informationen.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="primary" size="lg" icon={ArrowRight} href="/mission">
                Unsere Mission
              </Button>
              <Button variant="secondary" size="lg" icon={Mail} href="/contact">
                Kontakt aufnehmen
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
