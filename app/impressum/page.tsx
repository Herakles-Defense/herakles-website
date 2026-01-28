"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Building2, Mail, Phone, FileText, AlertTriangle, Link as LinkIcon, Copyright } from "lucide-react";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-black-primary">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-black-primary to-black-secondary">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-primary/10 mb-6">
                <FileText size={40} className="text-orange-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white-primary">
                Impressum
              </h1>
              <p className="text-lg text-white-secondary">
                Angaben gemäß § 5 TMG
              </p>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card space-y-10 text-white-secondary"
            >
              {/* Company Info */}
              <section>
                <div className="flex items-start gap-4 mb-6">
                  <Building2 className="text-orange-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h2 className="text-2xl font-bold text-white-primary mb-4">
                      Angaben gemäß § 5 TMG
                    </h2>
                    <div className="bg-black-secondary/50 p-6 rounded-lg border border-white-primary/10">
                      <p className="font-semibold text-white-primary mb-2">Herakles UG (haftungsbeschränkt)</p>
                      <p className="leading-relaxed">
                        Rosenbuschstr. 2<br />
                        80538 München<br />
                        Deutschland
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-orange-primary mb-3">Vertreten durch</h3>
                  <p className="leading-relaxed pl-8 border-l-2 border-white-primary/10">
                    Geschäftsführer: Bryan Gundrum und Luca Hemmerle
                  </p>
                </div>
              </section>

              {/* Contact Info */}
              <section>
                <h2 className="text-2xl font-bold text-white-primary mb-6">Kontakt</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-black-secondary/50 border border-white-primary/10">
                    <Mail className="text-orange-primary flex-shrink-0" size={20} />
                    <div>
                      <p className="text-sm text-white-secondary/70 mb-1">E-Mail</p>
                      <a href="mailto:info@herakles-defense.com" className="text-white-primary hover:text-orange-primary transition-colors">
                        info@herakles-defense.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-black-secondary/50 border border-white-primary/10">
                    <Phone className="text-orange-primary flex-shrink-0" size={20} />
                    <div>
                      <p className="text-sm text-white-secondary/70 mb-1">Telefon</p>
                      <a href="tel:+4917110610 38" className="text-white-primary hover:text-orange-primary transition-colors">
                        +49 171 1061038
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Disclaimer Section */}
              <section>
                <div className="flex items-start gap-4 mb-6">
                  <AlertTriangle className="text-orange-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h2 className="text-2xl font-bold text-white-primary mb-6">
                      Disclaimer – Rechtliche Hinweise
                    </h2>

                    {/* §1 Warnhinweis */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-orange-primary mb-3">
                        § 1 Warnhinweis zu Inhalten
                      </h3>
                      <p className="leading-relaxed mb-4">
                        Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der bereitgestellten kostenlosen und frei zugänglichen journalistischen Ratgeber und Nachrichten.
                      </p>
                      <p className="leading-relaxed">
                        Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Allein durch den Aufruf der kostenlosen und frei zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des Anbieters.
                      </p>
                    </div>

                    {/* §2 Externe Links */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-3">
                        <LinkIcon className="text-orange-primary" size={20} />
                        <h3 className="text-xl font-semibold text-orange-primary">
                          § 2 Externe Links
                        </h3>
                      </div>
                      <p className="leading-relaxed mb-4">
                        Diese Website enthält Verknüpfungen zu Websites Dritter ("externe Links"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich.
                      </p>
                      <p className="leading-relaxed mb-4">
                        Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht.
                      </p>
                      <p className="leading-relaxed">
                        Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.
                      </p>
                    </div>

                    {/* §3 Urheber- und Leistungsschutzrechte */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-3">
                        <Copyright className="text-orange-primary" size={20} />
                        <h3 className="text-xl font-semibold text-orange-primary">
                          § 3 Urheber- und Leistungsschutzrechte
                        </h3>
                      </div>
                      <p className="leading-relaxed mb-4">
                        Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers.
                      </p>
                      <p className="leading-relaxed mb-4">
                        Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet.
                      </p>
                      <p className="leading-relaxed mb-4">
                        Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.
                      </p>
                      <p className="leading-relaxed">
                        Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.
                      </p>
                    </div>

                    {/* §4 Besondere Nutzungsbedingungen */}
                    <div>
                      <h3 className="text-xl font-semibold text-orange-primary mb-3">
                        § 4 Besondere Nutzungsbedingungen
                      </h3>
                      <p className="leading-relaxed">
                        Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Paragraphen abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <div className="bg-gradient-to-r from-orange-primary/10 to-transparent p-6 rounded-lg border-l-4 border-orange-primary">
                <h3 className="text-lg font-semibold text-white-primary mb-2">
                  Fragen zum Impressum?
                </h3>
                <p className="text-white-secondary leading-relaxed">
                  Bei Fragen zum Impressum kontaktieren Sie uns bitte unter:{" "}
                  <a href="mailto:info@herakles-defense.com" className="text-orange-primary hover:text-orange-hover transition-colors">
                    info@herakles-defense.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
