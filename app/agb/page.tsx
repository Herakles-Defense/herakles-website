"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FileCheck, Cookie, Shield, Link as LinkIcon, Scale, AlertTriangle, UserCheck, Ban } from "lucide-react";

export default function AGBPage() {
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
                <FileCheck size={40} className="text-orange-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white-primary">
                Allgemeine Geschäftsbedingungen
              </h1>
              <p className="text-lg text-white-secondary">
                Regeln und Bestimmungen für die Nutzung dieser Website
              </p>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card space-y-10 text-white-secondary"
            >
              {/* Introduction */}
              <section>
                <p className="leading-relaxed">
                  Diese Allgemeinen Geschäftsbedingungen enthalten die Regeln und Bestimmungen für die Nutzung der Website von Herakles Defense unter{" "}
                  <a href="https://herakles-defense.com" className="text-orange-primary hover:text-orange-hover transition-colors">
                    herakles-defense.com
                  </a>.
                </p>
                <div className="bg-orange-primary/10 p-4 rounded-lg mt-4 border-l-4 border-orange-primary">
                  <p className="leading-relaxed text-sm">
                    Wir gehen davon aus, dass Sie bei Zugriff auf die Website die Allgemeinen Geschäftsbedingungen in vollem Umfang akzeptieren. Bitte fahren Sie mit der Nutzung von Herakles Defense nicht fort, sofern Sie nicht mit allen auf dieser Seite aufgeführten Bedingungen einverstanden sind.
                  </p>
                </div>
              </section>

              {/* Section 1: Cookies */}
              <section>
                <div className="flex items-start gap-4 mb-6">
                  <Cookie className="text-orange-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h2 className="text-2xl font-bold text-white-primary mb-4">
                      1. Cookies
                    </h2>
                    <p className="leading-relaxed mb-4">
                      Die Website verwendet Cookies, um Ihr Online-Erlebnis zu personalisieren. Durch weiteren Zugriff auf Herakles Defense stimmen Sie der Verwendung von Cookies zu.
                    </p>
                    <p className="leading-relaxed mb-4">
                      Ein Cookie ist eine Textdatei, die von einem Webserver auf Ihrer Festplatte gespeichert wird. Cookies können keine Programme ausführen oder Viren auf Ihren Computer übertragen. Sie enthalten einen eindeutigen Identifikator und können nur von dem Webserver der Domain gelesen werden, die das Cookie bei Ihnen gespeichert hat.
                    </p>
                    <div className="bg-black-secondary/50 p-4 rounded-lg border border-white-primary/10 mb-4">
                      <h3 className="font-semibold text-white-primary mb-2">Verwendungszweck</h3>
                      <p className="leading-relaxed text-sm">
                        Wir verwenden Cookies zu unterschiedlichen Zwecken, unter anderem zur Analyse und für personalisierte Marketing-Mitteilungen mit dem Ziel, die Benutzerfreundlichkeit unserer Website zu verbessern.
                      </p>
                    </div>
                    <p className="leading-relaxed">
                      Sie haben die Möglichkeit, optionale Cookies abzulehnen. Einige Cookies sind jedoch für das einwandfreie und ordnungsgemäße Funktionieren unserer Website unbedingt notwendig. Solche technisch notwendigen Cookies müssen immer aktiviert werden und erfordern daher keiner Einwilligung. Beachten Sie bitte, dass Sie durch das Akzeptieren der erforderlichen Cookies auch Cookies von Drittanbietern akzeptieren, sofern Sie von Drittanbietern auf unserer Website bereitgestellte Dienste wie z. B. ein integriertes Videoanzeigefenster nutzen.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Lizenz */}
              <section>
                <div className="flex items-start gap-4 mb-6">
                  <Shield className="text-orange-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h2 className="text-2xl font-bold text-white-primary mb-4">
                      2. Lizenz
                    </h2>
                    <p className="leading-relaxed mb-4">
                      Sofern nicht anderweitig angegeben haben Herakles Defense und/oder seine Lizenzgeber die geistigen Eigentumsrechte für alle Materialien auf dieser Website. Alle Rechte am geistigen Eigentum sind vorbehalten. Sie können Seiten von Herakles Defense für Ihren eigenen persönlichen Gebrauch ansehen und/oder ausdrucken, vorbehaltlich der in diesen Allgemeinen Geschäftsbedingungen festgelegten Einschränkungen.
                    </p>

                    <div className="bg-black-secondary/50 p-5 rounded-lg border border-white-primary/10 mb-4">
                      <h3 className="font-semibold text-white-primary mb-3 flex items-center gap-2">
                        <Ban size={18} className="text-orange-primary" />
                        Folgendes ist untersagt:
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-primary mt-1">•</span>
                          <span>Veröffentlichung des Materials von Herakles Defense</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-primary mt-1">•</span>
                          <span>Verkauf, Vermietung oder Unterlizenzierung des Materials von Herakles Defense</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-primary mt-1">•</span>
                          <span>Reproduktion, Vervielfältigung oder Kopie des Materials von Herakles Defense</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-primary mt-1">•</span>
                          <span>Weiterverbreitung der Inhalte von Herakles Defense</span>
                        </li>
                      </ul>
                    </div>

                    <p className="leading-relaxed text-sm">
                      Diese Vereinbarung tritt mit dem heutigen Datum in Kraft.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Nutzerkommentare */}
              <section>
                <div className="flex items-start gap-4 mb-6">
                  <UserCheck className="text-orange-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h2 className="text-2xl font-bold text-white-primary mb-4">
                      3. Nutzerkommentare
                    </h2>
                    <p className="leading-relaxed mb-4">
                      In gewissen Bereichen dieser Website haben Nutzer die Möglichkeit, Kommentare zu Zwecken des Meinungs- und Informationsaustausches zu hinterlassen. Entsprechende Nutzerkommentare werden vor ihrer Veröffentlichung auf der Website von Herakles Defense nicht überprüft, gefiltert, bearbeitet oder verbreitet.
                    </p>
                    <p className="leading-relaxed mb-4">
                      Nutzerkommentare spiegeln ausschließlich die persönliche Meinung des jeweiligen Verfassers wider und entsprechen nicht den Ansichten und Überzeugungen von Herakles Defense, den rechtlichen Vertretern und/oder Vertriebspartnern. Sofern rechtlich nicht anders geregelt, übernimmt Herakles Defense keinerlei Haftung für Nutzerkommentare oder sich eventuell infolge der Erscheinung entsprechender Nutzerkommentare auf der Website ergebende Schadensansprüche und/oder Kosten.
                    </p>
                    <p className="leading-relaxed mb-4">
                      Herakles Defense behält sich das Recht vor, alle Kommentare zu überprüfen und eventuell zu entfernen, wenn jene als unangemessen, anstößig oder als Verstoß gegen die Allgemeinen Geschäftsbedingungen betrachtet werden können.
                    </p>

                    <div className="bg-black-secondary/50 p-5 rounded-lg border border-white-primary/10">
                      <h3 className="font-semibold text-white-primary mb-3">Hiermit versichern Sie uns und stimmen zu, dass:</h3>
                      <ul className="space-y-2 text-sm leading-relaxed">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-primary mt-1">✓</span>
                          <span>Sie über die notwendige Berechtigung, eventuell erforderliche Lizenzen und Einwilligungen verfügen, Kommentare auf unserer Website zu veröffentlichen</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-primary mt-1">✓</span>
                          <span>Ihre Kommentare keine Rechte an geistigem Eigentum oder anderweitige Eigentumsrechte wie Urheberrechte, Patente oder Markenrechte Dritter verletzen</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-primary mt-1">✓</span>
                          <span>Ihre Kommentare kein beleidigendes, verleumderisches, anstößiges, unangemessenes oder anderweitig rechtswidriges Material enthalten, welches eine Verletzung der Privatsphäre darstellt</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-primary mt-1">✓</span>
                          <span>Ihre Kommentare nicht dem Zweck dienen, geschäftliche, kundenorientierte, kommerzielle Aktivitäten oder rechtswidrige Handlungen zu bewerben oder zu fördern</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Verlinken */}
              <section>
                <div className="flex items-start gap-4 mb-6">
                  <LinkIcon className="text-orange-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h2 className="text-2xl font-bold text-white-primary mb-4">
                      4. Verlinken unserer Inhalte
                    </h2>
                    <p className="leading-relaxed mb-4">
                      Folgende Institutionen dürfen ohne vorherige schriftliche Zustimmung einen Link auf unsere Website erstellen:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6 leading-relaxed">
                      <li>Regierungsbehörden</li>
                      <li>Suchmaschinen</li>
                      <li>Nachrichtenagenturen</li>
                      <li>Online-Verzeichnisse dürfen in ihrer Auflistung einen den anderen dort gelisteten Unternehmen entsprechenden Link zu unserer Website erstellen</li>
                      <li>Akkreditierte Unternehmen. Ausgenommen sind werbende gemeinnützige Organisationen, Shops von Wohltätigkeitsorganisationen und Spendenorganisationen, die Geld für wohltätige Zwecke sammeln</li>
                    </ul>

                    <p className="leading-relaxed mb-4">
                      Diese Organisationen dürfen eine Verlinkung zu unserer Startseite, unseren Publikationen oder anderen Informationen der Website erstellen, sofern die Verlinkung:
                    </p>
                    <ol className="list-[lower-alpha] pl-6 space-y-2 mb-6 leading-relaxed">
                      <li>in keiner Weise irreführend ist</li>
                      <li>nicht irrtümlicherweise Förderung, Unterstützung oder Zustimmung in Bezug auf die verlinkenden Partei oder ihre Produkte und/oder Dienstleistungen andeutet</li>
                      <li>in den Kontext der zu verlinkenden Website passt</li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Section 5: Haftung für Inhalte */}
              <section>
                <div className="flex items-start gap-4 mb-6">
                  <AlertTriangle className="text-orange-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h2 className="text-2xl font-bold text-white-primary mb-4">
                      5. Haftung für Inhalte
                    </h2>
                    <p className="leading-relaxed mb-4">
                      Wir übernehmen keine Haftung für Inhalte, die auf Ihrer Website erscheinen. Sie erklären sich hiermit einverstanden, uns hinsichtlich aller auf Ihrer Website erhobenen Ansprüche schadlos zu halten. Auf keiner Website dürfen Links erscheinen, deren Inhalte als verleumderisch, obszön oder kriminell gewertet werden können oder gegen Rechte verstoßen, sie verletzen oder sonstige Verstöße und Verletzung von Rechten Dritter befürworten.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Rechtsvorbehalt */}
              <section>
                <div className="flex items-start gap-4 mb-6">
                  <Scale className="text-orange-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h2 className="text-2xl font-bold text-white-primary mb-4">
                      6. Rechtsvorbehalt
                    </h2>
                    <p className="leading-relaxed mb-4">
                      Wir behalten uns das Recht vor, jederzeit und nach eigenem Ermessen zu verlangen, dass Sie alle Links oder einen bestimmten Link zu unserer Website entfernen. Sie erklären sich damit einverstanden, einer solchen Aufforderung umgehend nachzukommen und alle Links zu unserer Website unverzüglich zu entfernen.
                    </p>
                    <p className="leading-relaxed">
                      Wir behalten uns außerdem das Recht vor, die Allgemeinen Geschäftsbedingungen und die Verlinkungsrichtlinien jederzeit ändern zu können. Wenn Sie weiterhin auf unsere Website verlinken, stimmen Sie den Verlinkungsrichtlinien in diesen Allgemeinen Geschäftsbedingungen zu. Indem Sie weiterhin auf unsere Website verlinken, erklären Sie sich damit einverstanden, an diese Verlinkungsbedingungen gebunden zu sein und sie einzuhalten.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: Entfernung von Links */}
              <section>
                <h2 className="text-2xl font-bold text-white-primary mb-4">
                  7. Entfernung von Links von unserer Website
                </h2>
                <p className="leading-relaxed mb-4">
                  Bitte kontaktieren Sie uns jederzeit, wenn Sie einen Link auf unserer Website oder eine verlinkte Website aus irgendeinem Grund als unangemessen betrachten. Anfragen zur Link-Entfernung werden von uns geprüft, wir sind jedoch nicht verpflichtet, ihnen nachzukommen oder auf Anfragen direkt zu antworten.
                </p>
                <p className="leading-relaxed">
                  Wir übernehmen keine Garantie weder für die Vollständigkeit oder Richtigkeit der Informationen auf dieser Website, noch dass die Website verfügbar bleibt und das Material auf der Website auf dem neuesten Stand gehalten wird.
                </p>
              </section>

              {/* Section 8: Haftungsausschluss */}
              <section>
                <h2 className="text-2xl font-bold text-white-primary mb-6">
                  8. Haftungsausschluss
                </h2>
                <p className="leading-relaxed mb-4">
                  Soweit dies nach geltendem Recht zulässig ist, schließen wir alle Zusicherungen, Gewährleistungen und Bedingungen im Zusammenhang mit unserer Website und der Nutzung dieser Website aus. Nichts in diesem Haftungsausschluss soll:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6 leading-relaxed">
                  <li>unsere oder Ihre Haftung für Tod oder Körperverletzung infolge von Fahrlässigkeit einschränken oder ausschließen</li>
                  <li>unsere oder Ihre Haftung für Betrug oder betrügerische Falschdarstellung einschränken oder ausschließen</li>
                  <li>unsere oder Ihre Haftung in einer Weise beschränken, die nach geltendem Recht nicht zulässig ist</li>
                  <li>irgendeine unserer oder Ihrer Haftungen ausschließen, die nach geltendem Recht nicht ausgeschlossen werden können</li>
                </ul>
                <p className="leading-relaxed text-sm">
                  Die in diesem Abschnitt und an anderer Stelle in diesem Haftungsausschluss dargelegten Haftungsbeschränkungen und -ausschlüsse: (a) unterliegen dem vorhergehenden Absatz und (b) gelten für alle Haftungen, die sich aus dem Haftungsausschluss oder in Bezug auf den Gegenstand dieses Haftungsausschlusses ergeben, einschließlich Haftungen aus Vertrag, unerlaubter Handlung und aufgrund der Verletzung gesetzlicher Pflichten.
                </p>
              </section>

              {/* Contact Section */}
              <div className="bg-gradient-to-r from-orange-primary/10 to-transparent p-6 rounded-lg border-l-4 border-orange-primary">
                <h3 className="text-lg font-semibold text-white-primary mb-2">
                  Fragen zu unseren AGBs?
                </h3>
                <p className="text-white-secondary leading-relaxed">
                  Sollten Sie Fragen zu unseren AGBs haben, kontaktieren Sie uns bitte unter:{" "}
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
