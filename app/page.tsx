'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, TrendingUp, DollarSign, Zap, Target, Rocket, Shield, Clock, Radio, Eye, Cpu, Battery } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import GradientBorderCard from "@/components/GradientBorderCard";
import GlassmorphismCard from "@/components/GlassmorphismCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-black-primary">
      <Header />

      {/* Hero Section - 50/50 Split-Screen */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Vision Background on both sides */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/10 via-black-primary to-black-secondary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.15),transparent_50%)]" />

        <div className="relative w-full h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            {/* Left: Full-height Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative h-full min-h-[50vh] lg:min-h-screen"
            >
              <div className="absolute inset-0">
                <Image
                  src="/images/interceptor-action.webp"
                  alt="Herakles Interceptor in Action"
                  fill
                  className="object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFhMWExYSIvPjwvc3ZnPg=="
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black-primary/50 lg:to-black-primary/80" />
              </div>
            </motion.div>

            {/* Right: Text + Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex items-center justify-center p-8 lg:p-16"
            >
              {/* Grid Pattern only on text side */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'linear-gradient(rgba(255,107,53,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.3) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }} />

              <div className="relative max-w-2xl">
                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-orange-primary font-semibold mb-4 text-sm md:text-base tracking-wide uppercase"
                >
                  Built for the Threats Others Cannot Solve
                </motion.p>

                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white-primary"
                >
                  FPV-Kamikaze-Drohnen sind die größte Bedrohung
                  <span className="gradient-text"> moderner Kriegsführung.</span>
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-2xl md:text-3xl font-bold mb-8 text-white-primary"
                >
                  Wir haben die Antwort.
                </motion.h2>

                {/* Stats Grid - 2x2 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="grid grid-cols-2 gap-4 mb-8"
                >
                  <div className="glass-card p-4 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-orange-primary mb-1">120+ km/h</div>
                    <div className="text-xs md:text-sm text-white-secondary">Interceptor Speed</div>
                  </div>
                  <div className="glass-card p-4 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-orange-primary mb-1">&lt;4 min</div>
                    <div className="text-xs md:text-sm text-white-secondary">Reaction Time</div>
                  </div>
                  <div className="glass-card p-4 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-orange-primary mb-1">500+ m</div>
                    <div className="text-xs md:text-sm text-white-secondary">Detection Range</div>
                  </div>
                  <div className="glass-card p-4 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-orange-primary mb-1">&lt;50 ms</div>
                    <div className="text-xs md:text-sm text-white-secondary">Tracking Latency</div>
                  </div>
                </motion.div>

                {/* Subtext */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-base md:text-lg mb-8 text-white-secondary leading-relaxed"
                >
                  Eine FPV-Drohne kostet 300 Euro und kann einen Panzer zerstören und viele Leben beenden.<br />
                  <span className="font-semibold text-orange-primary">Unser Interceptor kostet einen Bruchteil dessen, was er schützt.</span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button variant="primary" size="lg" icon={ArrowRight} href="/technology">
                    Technologie entdecken
                  </Button>
                  <Button variant="secondary" size="lg" icon={PlayCircle} href="/mission">
                    Unsere Mission
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section-padding bg-black-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white-primary">
              Die Realität
            </h2>
            <p className="text-2xl font-bold text-orange-primary mb-6">
              FPV-Drohnen töten täglich Soldaten.<br />
              Sie dominieren moderne Schlachtfelder.
            </p>
            <p className="text-lg text-white-secondary leading-relaxed">
              Counter-UAS-Systeme sind zu schwer, zu teuer, zu langsam.
              Herakles ist das erste System, das speziell für mobile Infanterie entwickelt wurde.
            </p>
          </motion.div>

          {/* Diagonal Staggered Cards */}
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-12 text-white-primary text-center"
            >
              Die Fakten
            </motion.h2>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Card 1 - Top */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: -1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:mt-0"
              >
                <GradientBorderCard
                  icon={TrendingUp}
                  title="42%"
                  description="aller Fahrzeugverluste in der Ukraine: FPV-Kamikaze-Drohnen"
                  className="text-center transform transition-transform hover:rotate-0"
                />
              </motion.div>

              {/* Card 2 - Middle */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="md:mt-8"
              >
                <GradientBorderCard
                  icon={DollarSign}
                  title="300-700€"
                  description="pro Drohne"
                  className="text-center transform transition-transform hover:rotate-0"
                />
              </motion.div>

              {/* Card 3 - Bottom */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: -1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="md:mt-16"
              >
                <GradientBorderCard
                  icon={Zap}
                  title="100+ km/h"
                  description="Angriffsgeschwindigkeit"
                  className="text-center transform transition-transform hover:rotate-0"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass-card mt-12 max-w-4xl mx-auto"
            >
              <p className="text-lg text-white-secondary mb-4 leading-relaxed">
                <span className="font-semibold text-white-primary">Bestehende Systeme?</span> Zu schwer, zu teuer, zu langsam.
                Jammer funktionieren nur begrenzt. Lasersysteme sind Millionen-Investitionen.
                Klassische Flak trifft keine 15cm-Targets bei 110 km/h.
              </p>
              <p className="text-xl font-bold text-orange-primary">
                Soldaten sterben, weil es keine praktikable Lösung gab.<br />
                Bis jetzt.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section - Horizontal Scroll Cards + Large Image */}
      <section className="section-padding bg-gradient-to-b from-black-primary to-black-secondary">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-center text-white-primary"
          >
            Die Lösung: <span className="gradient-text">Herakles Interceptor</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center text-white-secondary mb-12 max-w-3xl mx-auto"
          >
            Das erste dezentrale Anti-FPV-System für mobile Infanterie.<br />
            Entwickelt für die härtesten Einsatzszenarien.
          </motion.p>

          {/* Horizontal Scroll Cards */}
          <div className="relative mb-16 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-4 md:px-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Card 1 */}
              <div className="min-w-[280px] md:min-w-[320px] snap-center">
                <GlassmorphismCard
                  icon={Target}
                  title="Autonom"
                  description="KI-gestütztes Tracking und Abfangen – keine Funkverbindung nötig nach Launch"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-primary/20 border-2 border-orange-primary flex items-center justify-center">
                    <span className="text-orange-primary font-bold text-lg">1</span>
                  </div>
                </GlassmorphismCard>
              </div>

              {/* Card 2 */}
              <div className="min-w-[280px] md:min-w-[320px] snap-center">
                <GlassmorphismCard
                  icon={DollarSign}
                  title="Kosteneffizient"
                  description="Bruchteil der Kosten etablierter Systeme, kein teurer Sprengkopf"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-primary/20 border-2 border-orange-primary flex items-center justify-center">
                    <span className="text-orange-primary font-bold text-lg">2</span>
                  </div>
                </GlassmorphismCard>
              </div>

              {/* Card 3 */}
              <div className="min-w-[280px] md:min-w-[320px] snap-center">
                <GlassmorphismCard
                  icon={Shield}
                  title="Dezentral"
                  description="Schutz für Schützengräben, FOBs, Konvois – ohne schweres Gerät"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-primary/20 border-2 border-orange-primary flex items-center justify-center">
                    <span className="text-orange-primary font-bold text-lg">3</span>
                  </div>
                </GlassmorphismCard>
              </div>

              {/* Card 4 */}
              <div className="min-w-[280px] md:min-w-[320px] snap-center">
                <GlassmorphismCard
                  icon={Rocket}
                  title="Schnell"
                  description="Hit-to-Kill-Prinzip mit kinetischer Energie bei frontaler Kollision"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-primary/20 border-2 border-orange-primary flex items-center justify-center">
                    <span className="text-orange-primary font-bold text-lg">4</span>
                  </div>
                </GlassmorphismCard>
              </div>
            </motion.div>

            {/* Scroll Hint */}
            <div className="text-center mt-4 md:hidden">
              <p className="text-sm text-white-secondary">← Swipe für mehr →</p>
            </div>
          </div>

          {/* Large Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto image-container"
          >
            <Image
              src="/images/interceptor-product.webp"
              alt="Herakles Interceptor"
              width={1200}
              height={900}
              className="rounded-xl shadow-2xl image-zoom"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI5MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFhMWExYSIvPjwvc3ZnPg=="
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-white-secondary leading-relaxed mb-6">
              <span className="font-semibold text-white-primary">Kein Sprengkopf.</span> Keine Funkverbindung nach Launch. Keine teuren Raketen.<br />
              <span className="gradient-text font-bold text-xl">Nur intelligente, opferbare Masse.</span>
            </p>
            <Button variant="primary" size="lg" icon={ArrowRight} href="/technology">
              Mehr zur Technologie
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Technical Advantages - Bento Grid */}
      <section className="section-padding bg-black-primary">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-12 text-white-primary text-center"
          >
            Technische Vorteile
          </motion.h2>

          {/* Bento Grid: 1 Large + 4 Small */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
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
            {/* Large Feature - spans 2 rows on md+ */}
            <motion.div
              variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } } }}
              className="md:row-span-2"
            >
              <GradientBorderCard
                icon={Eye}
                title="KI-Gestützte Erkennung"
                description="Modernste Computer Vision Algorithmen identifizieren und klassifizieren FPV-Drohnen in Echtzeit. Neuronale Netze trainiert auf tausenden Drohnen-Signaturen für präzise Zielerfassung auch bei hohen Geschwindigkeiten und schwierigen Lichtverhältnissen."
              />
            </motion.div>

            {/* Small Cards */}
            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
              <GradientBorderCard
                icon={Clock}
                title="Reaktionszeit"
                description="Unter 4 Minuten von Detektion bis zum Abfang"
              />
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
              <GradientBorderCard
                icon={Radio}
                title="EW-Resistent"
                description="Keine Funkverbindung nach Launch erforderlich"
              />
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
              <GradientBorderCard
                icon={Cpu}
                title="Edge Computing"
                description="Onboard-Verarbeitung für minimale Latenz"
              />
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
              <GradientBorderCard
                icon={Battery}
                title="Energieeffizient"
                description="Optimierter Stromverbrauch für Extended Operations"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding bg-black-secondary">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white-primary"
          >
            Wir stehen am Anfang einer neuen Ära<br />
            asymmetrischer Bedrohungen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto text-white-secondary leading-relaxed"
          >
            FPV-Drohnen werden sich global verbreiten. Terrorgruppen, nichtstaatliche Akteure,
            hybride Gegner – sie alle beobachten und lernen.<br />
            <span className="font-bold text-orange-primary">Herakles ist die Antwort, bevor es zu spät ist.</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button variant="primary" size="lg" icon={ArrowRight} href="/mission">
              Unsere Mission
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
