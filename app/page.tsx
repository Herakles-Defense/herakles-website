'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, TrendingUp, DollarSign, Zap, CheckCircle, Target, Rocket, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import GradientBorderCard from "@/components/GradientBorderCard";
import GlassmorphismCard from "@/components/GlassmorphismCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-black-primary">
      <Header />

      {/* Hero Section - Asymmetric Grid with Vision Background */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        {/* Vision-Style Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/10 via-black-primary to-black-secondary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,53,0.15),transparent_50%)]" />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,107,53,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        <div className="relative container-custom px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center max-w-7xl mx-auto">
            {/* Left: Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="order-2 lg:order-1 image-container"
            >
              <Image
                src="/images/interceptor-action.webp"
                alt="Herakles Interceptor in Action"
                width={1200}
                height={800}
                className="rounded-xl shadow-2xl image-zoom"
                priority
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFhMWExYSIvPjwvc3ZnPg=="
              />
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="order-1 lg:order-2 glass-card"
            >
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
                className="text-2xl md:text-3xl font-bold mb-6 text-white-primary"
              >
                Wir haben die Antwort.
              </motion.h2>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-base md:text-lg mb-8 text-white-secondary leading-relaxed"
              >
                Eine FPV-Drohne kostet 300 Euro und kann einen Panzer zerstören und viele Leben beenden.<br />
                <span className="font-semibold text-orange-primary">Unser Interceptor kostet einen Bruchteil dessen, was er schützt.</span>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button variant="primary" size="lg" icon={ArrowRight} href="/technology">
                  Technologie entdecken
                </Button>
                <Button variant="secondary" size="lg" icon={PlayCircle} href="/mission">
                  Unsere Mission
                </Button>
              </motion.div>
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
            className="max-w-4xl mx-auto"
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
        </div>
      </section>

      {/* Facts Section - 3 Column Grid */}
      <section className="section-padding bg-black-primary">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-12 text-white-primary text-center"
            >
              Die Fakten
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
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
                  icon={TrendingUp}
                  title="42%"
                  description="aller Fahrzeugverluste in der Ukraine: FPV-Kamikaze-Drohnen"
                  className="text-center"
                />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                <GradientBorderCard
                  icon={DollarSign}
                  title="300-700€"
                  description="pro Drohne"
                  className="text-center"
                />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                <GradientBorderCard
                  icon={Zap}
                  title="100+ km/h"
                  description="Angriffsgeschwindigkeit"
                  className="text-center"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card"
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

      {/* Solution Section - Sticky Image + Vertical Timeline */}
      <section className="section-padding bg-gradient-to-b from-black-secondary to-black-primary">
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
            className="text-xl text-center text-white-secondary mb-16 max-w-3xl mx-auto"
          >
            Das erste dezentrale Anti-FPV-System für mobile Infanterie.<br />
            Entwickelt für die härtesten Einsatzszenarien.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-16 items-start max-w-6xl mx-auto">
            {/* Left: Sticky Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32 image-container"
            >
              <Image
                src="/images/interceptor-product.webp"
                alt="Herakles Interceptor"
                width={800}
                height={800}
                className="rounded-xl shadow-2xl image-zoom"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWExYTFhIi8+PC9zdmc+"
              />
            </motion.div>

            {/* Right: Vertical Timeline */}
            <div className="space-y-8 relative">
              {/* Vertical Orange Line */}
              <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-orange-primary via-orange-primary/50 to-transparent hidden md:block" />

              {/* Step 1: Autonom */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <GlassmorphismCard
                  icon={Target}
                  title="Autonom"
                  description="KI-gestütztes Tracking und Abfangen – keine Funkverbindung nötig nach Launch"
                  className="ml-0 md:ml-16"
                >
                  <div className="absolute left-0 top-4 w-12 h-12 rounded-full bg-orange-primary/20 border-4 border-orange-primary flex items-center justify-center hidden md:flex">
                    <span className="text-orange-primary font-bold text-lg">1</span>
                  </div>
                </GlassmorphismCard>
              </motion.div>

              {/* Step 2: Kosteneffizient */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <GlassmorphismCard
                  icon={DollarSign}
                  title="Kosteneffizient"
                  description="Bruchteil der Kosten etablierter Systeme, kein teurer Sprengkopf"
                  className="ml-0 md:ml-16"
                >
                  <div className="absolute left-0 top-4 w-12 h-12 rounded-full bg-orange-primary/20 border-4 border-orange-primary flex items-center justify-center hidden md:flex">
                    <span className="text-orange-primary font-bold text-lg">2</span>
                  </div>
                </GlassmorphismCard>
              </motion.div>

              {/* Step 3: Dezentral */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <GlassmorphismCard
                  icon={Shield}
                  title="Dezentral"
                  description="Schutz für Schützengräben, FOBs, Konvois – ohne schweres Gerät"
                  className="ml-0 md:ml-16"
                >
                  <div className="absolute left-0 top-4 w-12 h-12 rounded-full bg-orange-primary/20 border-4 border-orange-primary flex items-center justify-center hidden md:flex">
                    <span className="text-orange-primary font-bold text-lg">3</span>
                  </div>
                </GlassmorphismCard>
              </motion.div>

              {/* Step 4: Schnell */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <GlassmorphismCard
                  icon={Rocket}
                  title="Schnell"
                  description="Hit-to-Kill-Prinzip mit kinetischer Energie bei frontaler Kollision"
                  className="ml-0 md:ml-16"
                >
                  <div className="absolute left-0 top-4 w-12 h-12 rounded-full bg-orange-primary/20 border-4 border-orange-primary flex items-center justify-center hidden md:flex">
                    <span className="text-orange-primary font-bold text-lg">4</span>
                  </div>
                </GlassmorphismCard>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-3xl mx-auto text-center"
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
