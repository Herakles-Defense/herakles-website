'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, TrendingUp, DollarSign, Zap, ChevronDown, Target, Rocket, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import GradientBorderCard from "@/components/GradientBorderCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-black-primary">
      <Header />

      {/* Hero Section - With Vision Background */}
      <section className="relative min-h-screen flex items-center justify-center pt-24">
        {/* Vision-Style Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/10 via-black-primary to-black-secondary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,53,0.15),transparent_50%)]" />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,107,53,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

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

            {/* Hero Image - Smaller */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="relative w-full max-w-3xl mx-auto image-container"
            >
              <Image
                src="/images/interceptor-product.webp"
                alt="Herakles Interceptor"
                width={1000}
                height={563}
                className="rounded-xl shadow-2xl image-zoom"
                priority
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI1NjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFhMWExYSIvPjwvc3ZnPg=="
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
            className="max-w-4xl mx-auto mb-20"
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

          {/* Overlapping Cards with Larger Spacing */}
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-16 text-white-primary text-center"
            >
              Die Fakten
            </motion.h2>

            <div className="relative h-[700px] md:h-[500px]">
              {/* Card 1 - Bottom Layer */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-0 left-[5%] md:left-[10%] w-[90%] md:w-[35%] z-10"
                whileHover={{ scale: 1.02, zIndex: 40 }}
              >
                <div className="glass-card shadow-2xl p-8 text-center">
                  <TrendingUp size={48} className="mx-auto mb-4 text-orange-primary" />
                  <h3 className="text-4xl md:text-5xl font-bold text-white-primary mb-3">42%</h3>
                  <p className="text-white-secondary">
                    aller Fahrzeugverluste in der Ukraine: FPV-Kamikaze-Drohnen
                  </p>
                </div>
              </motion.div>

              {/* Card 2 - Middle Layer - More Spacing */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="absolute top-[180px] md:top-[100px] left-[10%] md:left-[35%] w-[85%] md:w-[35%] z-20"
                whileHover={{ scale: 1.02, zIndex: 40 }}
              >
                <div className="glass-card shadow-2xl p-8 text-center">
                  <DollarSign size={48} className="mx-auto mb-4 text-orange-primary" />
                  <h3 className="text-4xl md:text-5xl font-bold text-white-primary mb-3">300-700€</h3>
                  <p className="text-white-secondary">
                    pro Drohne
                  </p>
                </div>
              </motion.div>

              {/* Card 3 - Top Layer - More Spacing */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="absolute top-[360px] md:top-[200px] left-[5%] md:left-[55%] w-[90%] md:w-[35%] z-30"
                whileHover={{ scale: 1.02, zIndex: 40 }}
              >
                <div className="glass-card shadow-2xl p-8 text-center">
                  <Zap size={48} className="mx-auto mb-4 text-orange-primary" />
                  <h3 className="text-4xl md:text-5xl font-bold text-white-primary mb-3">100+ km/h</h3>
                  <p className="text-white-secondary">
                    Angriffsgeschwindigkeit
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Concept 5 Style with Large Numbers */}
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
            className="text-xl text-center text-white-secondary mb-20 max-w-3xl mx-auto"
          >
            Das erste dezentrale Anti-FPV-System für mobile Infanterie.<br />
            Entwickelt für die härtesten Einsatzszenarien.
          </motion.p>

          <div className="max-w-6xl mx-auto space-y-24">
            {/* Step 01 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-4 md:-left-12 top-0 text-[120px] md:text-[180px] font-bold text-orange-primary/10 leading-none">
                01
              </div>
              <div className="relative grid grid-cols-1 md:grid-cols-[45%_55%] gap-8 items-center">
                <div className="image-container">
                  <Image
                    src="/images/interceptor-product.webp"
                    alt="Herakles Interceptor"
                    width={600}
                    height={600}
                    className="rounded-xl shadow-xl image-zoom"
                  />
                </div>
                <div className="glass-card">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="text-orange-primary" size={32} />
                    <h3 className="text-3xl font-bold text-white-primary">Autonom</h3>
                  </div>
                  <p className="text-lg text-white-secondary leading-relaxed">
                    KI-gestütztes Tracking und Abfangen – keine Funkverbindung nötig nach Launch.
                    Der Operator gibt nur die Startfreigabe, danach arbeitet das System vollständig autonom
                    und ist resistent gegen elektronische Gegenmaßnahmen.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 02 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -right-4 md:-right-12 top-0 text-[120px] md:text-[180px] font-bold text-orange-primary/10 leading-none">
                02
              </div>
              <div className="relative grid grid-cols-1 md:grid-cols-[55%_45%] gap-8 items-center">
                <div className="glass-card order-2 md:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <DollarSign className="text-orange-primary" size={32} />
                    <h3 className="text-3xl font-bold text-white-primary">Kosteneffizient</h3>
                  </div>
                  <p className="text-lg text-white-secondary leading-relaxed">
                    Bruchteil der Kosten etablierter Systeme. Kein teurer Sprengkopf, keine
                    komplexe Raketentechnik. Hit-to-Kill durch intelligente, opferbare Masse
                    zu einem Preis, der wirtschaftlichen Masseneinsatz ermöglicht.
                  </p>
                </div>
                <div className="image-container order-1 md:order-2">
                  <Image
                    src="/images/interceptor-action.webp"
                    alt="Cost Efficiency"
                    width={600}
                    height={600}
                    className="rounded-xl shadow-xl image-zoom"
                  />
                </div>
              </div>
            </motion.div>

            {/* Step 03 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-4 md:-left-12 top-0 text-[120px] md:text-[180px] font-bold text-orange-primary/10 leading-none">
                03
              </div>
              <div className="relative grid grid-cols-1 md:grid-cols-[45%_55%] gap-8 items-center">
                <div className="image-container">
                  <Image
                    src="/images/interceptor-product.webp"
                    alt="Decentralized System"
                    width={600}
                    height={600}
                    className="rounded-xl shadow-xl image-zoom"
                  />
                </div>
                <div className="glass-card">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="text-orange-primary" size={32} />
                    <h3 className="text-3xl font-bold text-white-primary">Dezentral</h3>
                  </div>
                  <p className="text-lg text-white-secondary leading-relaxed">
                    Schutz für Schützengräben, FOBs und Konvois – ohne schweres Gerät.
                    Das erste System speziell für mobile Infanterie. Schnelle Verlegung,
                    einfache Handhabung, maximaler Schutz dort, wo er am meisten gebraucht wird.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 04 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -right-4 md:-right-12 top-0 text-[120px] md:text-[180px] font-bold text-orange-primary/10 leading-none">
                04
              </div>
              <div className="relative grid grid-cols-1 md:grid-cols-[55%_45%] gap-8 items-center">
                <div className="glass-card order-2 md:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Rocket className="text-orange-primary" size={32} />
                    <h3 className="text-3xl font-bold text-white-primary">Schnell</h3>
                  </div>
                  <p className="text-lg text-white-secondary leading-relaxed">
                    Hit-to-Kill-Prinzip mit kinetischer Energie bei frontaler Kollision.
                    Geschwindigkeit über 120 km/h kombiniert mit präzisem Tracking ermöglicht
                    effektive Neutralisierung auch bei hochdynamischen Zielmanövern.
                  </p>
                </div>
                <div className="image-container order-1 md:order-2">
                  <Image
                    src="/images/interceptor-action.webp"
                    alt="Speed and Precision"
                    width={600}
                    height={600}
                    className="rounded-xl shadow-xl image-zoom"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 max-w-3xl mx-auto text-center"
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

      {/* Closing CTA - With Vision Background */}
      <section className="relative section-padding overflow-hidden">
        {/* Vision-Style Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/10 via-black-primary to-black-secondary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,53,0.15),transparent_50%)]" />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,107,53,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        <div className="relative container-custom text-center">
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
