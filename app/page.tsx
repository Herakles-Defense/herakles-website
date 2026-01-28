'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, TrendingUp, DollarSign, Zap, CheckCircle, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import GradientBorderCard from "@/components/GradientBorderCard";
import MinimalLineCard from "@/components/MinimalLineCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-black-primary">
      <Header />

      {/* Hero Section - Modernized */}
      <section className="relative min-h-screen flex items-center justify-center pt-24">
        {/* Gradient Overlay Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black-primary via-black-secondary to-black-primary" />

        <div className="relative container-custom px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Tagline - Animated */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-orange-primary font-semibold mb-6 text-lg tracking-wide uppercase"
            >
              Built for the Threats Others Cannot Solve
            </motion.p>

            {/* Main Headline - Animated */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white-primary"
            >
              FPV-Kamikaze-Drohnen sind die größte Bedrohung<br className="hidden md:block" />
              <span className="gradient-text"> moderner Kriegsführung.</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold mb-12 text-white-primary"
            >
              Wir haben die Antwort.
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl mb-12 text-white-secondary max-w-4xl mx-auto leading-relaxed"
            >
              Eine FPV-Drohne kostet 300 Euro und kann einen Panzer zerstören und viele Leben beenden.<br />
              <span className="font-semibold text-orange-primary">Unser Interceptor kostet einen Bruchteil dessen, was er schützt.</span>
            </motion.p>

            {/* CTA Buttons - Animated */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Button variant="primary" size="lg" icon={ArrowRight} href="/technology">
                Technologie entdecken
              </Button>
              <Button variant="secondary" size="lg" icon={PlayCircle} href="/mission">
                Unsere Mission
              </Button>
            </motion.div>

            {/* Hero Image - Animated */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="relative w-full max-w-4xl mx-auto"
            >
              <Image
                src="/images/interceptor-product.png"
                alt="Herakles Interceptor"
                width={1200}
                height={675}
                className="rounded-xl shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-orange-primary" />
        </motion.div>
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

      {/* Facts Section - With New Cards */}
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

      {/* Solution Section - With MinimalLineCards */}
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
            className="text-xl text-center text-white-secondary mb-12 max-w-3xl mx-auto"
          >
            Das erste dezentrale Anti-FPV-System für mobile Infanterie.<br />
            Entwickelt für die härtesten Einsatzszenarien.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <Image
                src="/images/interceptor-action.png"
                alt="Herakles Interceptor in Action"
                width={800}
                height={600}
                className="rounded-xl shadow-2xl"
              />
            </motion.div>

            {/* Features - Using MinimalLineCards */}
            <motion.div
              className="order-1 lg:order-2 space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12 }
                }
              }}
            >
              <motion.div variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>
                <MinimalLineCard
                  icon={CheckCircle}
                  title="Autonom"
                  description="KI-gestütztes Tracking und Abfangen – keine Funkverbindung nötig nach Launch"
                />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>
                <MinimalLineCard
                  icon={CheckCircle}
                  title="Kosteneffizient"
                  description="Bruchteil der Kosten etablierter Systeme, kein teurer Sprengkopf"
                />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>
                <MinimalLineCard
                  icon={CheckCircle}
                  title="Dezentral"
                  description="Schutz für Schützengräben, FOBs, Konvois – ohne schweres Gerät"
                />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>
                <MinimalLineCard
                  icon={CheckCircle}
                  title="Schnell"
                  description="Hit-to-Kill-Prinzip mit kinetischer Energie bei frontaler Kollision"
                />
              </motion.div>

              <motion.div
                className="pt-6"
                variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
              >
                <Button variant="primary" size="md" icon={ArrowRight} href="/technology">
                  Mehr zur Technologie
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-white-secondary leading-relaxed">
              <span className="font-semibold text-white-primary">Kein Sprengkopf.</span> Keine Funkverbindung nach Launch. Keine teuren Raketen.<br />
              <span className="gradient-text font-bold text-xl">Nur intelligente, opferbare Masse.</span>
            </p>
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
