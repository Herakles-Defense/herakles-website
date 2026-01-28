'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, TrendingUp, DollarSign, Zap, Target, Rocket, Shield, Eye, Cpu, Battery, Radio, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import GradientBorderCard from "@/components/GradientBorderCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-black-primary">
      <Header />

      {/* Hero Section - 40/60 Editorial Split */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Vision Background only on text side */}
        <div className="absolute inset-0 lg:right-[60%] bg-gradient-to-br from-orange-primary/10 via-black-primary to-black-secondary" />
        <div className="absolute inset-0 lg:right-[60%] bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,53,0.15),transparent_50%)]" />

        <div className="relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] min-h-screen">
            {/* Left: Editorial Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative flex items-center justify-center p-8 lg:p-16 xl:p-24"
            >
              <div className="max-w-xl">
                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-orange-primary font-semibold mb-6 text-xs md:text-sm tracking-[0.2em] uppercase"
                >
                  Built for the Threats Others Cannot Solve
                </motion.p>

                {/* Large Editorial Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] text-white-primary"
                  style={{ fontWeight: 800 }}
                >
                  HERAKLES<br />
                  <span className="gradient-text">DEFENSE</span>
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-2xl md:text-3xl font-light mb-6 text-white-secondary leading-relaxed"
                >
                  Das erste dezentrale Anti-FPV-System für mobile Infanterie.
                </motion.h2>

                {/* Subheadline */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="text-base md:text-lg mb-10 text-white-secondary leading-relaxed"
                >
                  Eine FPV-Drohne kostet 300 Euro und kann einen Panzer zerstören.<br />
                  <span className="font-semibold text-orange-primary">Unser Interceptor kostet einen Bruchteil dessen, was er schützt.</span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
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

            {/* Right: Large Image Bleeding to Edge */}
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="relative h-[50vh] lg:h-screen"
            >
              <Image
                src="/images/interceptor-action.webp"
                alt="Herakles Interceptor in Action"
                fill
                className="object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFhMWExYSIvPjwvc3ZnPg=="
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black-primary/30" />
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

          {/* Overlapping Cards with Z-Index */}
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-16 text-white-primary text-center"
            >
              Die Fakten
            </motion.h2>

            <div className="relative h-[600px] md:h-[400px]">
              {/* Card 1 - Bottom Layer */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
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

              {/* Card 2 - Middle Layer */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="absolute top-[140px] md:top-[50px] left-[10%] md:left-[35%] w-[85%] md:w-[35%] z-20"
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

              {/* Card 3 - Top Layer */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute top-[280px] md:top-[100px] left-[5%] md:left-[55%] w-[90%] md:w-[35%] z-30"
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass-card mt-8 max-w-4xl mx-auto"
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

      {/* Solution Section - Large Numbers + Image/Text Split */}
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

      {/* Technical Advantages - Asymmetric Feature Showcase */}
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

          {/* Asymmetric Layout: 1 Large + 4 Small */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
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
            {/* Large Feature - spans 2 columns + includes image */}
            <motion.div
              variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } } }}
              className="md:col-span-2 lg:row-span-2"
            >
              <div className="glass-card h-full flex flex-col">
                <div className="relative h-64 mb-6 -mx-8 -mt-8 rounded-t-xl overflow-hidden">
                  <Image
                    src="/images/interceptor-product.webp"
                    alt="KI System"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-secondary to-transparent" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="text-orange-primary" size={40} />
                    <h3 className="text-2xl font-bold text-white-primary">KI-Gestützte Erkennung</h3>
                  </div>
                  <p className="text-base text-white-secondary leading-relaxed">
                    Modernste Computer Vision Algorithmen identifizieren und klassifizieren FPV-Drohnen in Echtzeit.
                    Neuronale Netze trainiert auf tausenden Drohnen-Signaturen für präzise Zielerfassung
                    auch bei hohen Geschwindigkeiten und schwierigen Lichtverhältnissen.
                  </p>
                </div>
              </div>
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
