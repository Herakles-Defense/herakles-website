"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, FileText, AlertCircle } from "lucide-react";

export default function DatenschutzPage() {
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
                <Shield size={40} className="text-orange-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white-primary">
                Datenschutz­erklärung
              </h1>
              <p className="text-lg text-white-secondary">
                Informationen zur Verarbeitung Ihrer personenbezogenen Daten
              </p>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card space-y-12 text-white-secondary"
            >
              {/* Section 1 */}
              <section>
                <div className="flex items-start gap-4 mb-6">
                  <Eye className="text-orange-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h2 className="text-2xl font-bold text-white-primary mb-4">
                      1. Datenschutz auf einen Blick
                    </h2>
                    <h3 className="text-xl font-semibold text-orange-primary mb-3">
                      Allgemeine Hinweise
                    </h3>
                    <p className="leading-relaxed mb-4">
                      Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-orange-primary mb-3">
                  Datenerfassung auf dieser Website
                </h3>

                <div className="space-y-6 pl-8 border-l-2 border-white-primary/10">
                  <div>
                    <h4 className="font-semibold text-white-primary mb-2">
                      Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                    </h4>
                    <p className="leading-relaxed">
                      Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white-primary mb-2">
                      Wie erfassen wir Ihre Daten?
                    </h4>
                    <p className="leading-relaxed mb-3">
                      Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                    </p>
                    <p className="leading-relaxed">
                      Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white-primary mb-2">
                      Wofür nutzen wir Ihre Daten?
                    </h4>
                    <p className="leading-relaxed">
                      Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white-primary mb-2">
                      Welche Rechte haben Sie bezüglich Ihrer Daten?
                    </h4>
                    <p className="leading-relaxed">
                      Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-orange-primary mb-3 mt-6">
                  Analyse-Tools und Tools von Dritt­anbietern
                </h3>
                <p className="leading-relaxed pl-8 border-l-2 border-white-primary/10">
                  Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen. Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <div className="flex items-start gap-4 mb-6">
                  <Lock className="text-orange-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h2 className="text-2xl font-bold text-white-primary mb-4">
                      2. Hosting
                    </h2>
                    <h3 className="text-xl font-semibold text-orange-primary mb-3">
                      Externes Hosting
                    </h3>
                    <p className="leading-relaxed mb-4">
                      Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                    </p>
                    <p className="leading-relaxed mb-4">
                      Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                    </p>
                    <p className="leading-relaxed mb-4">
                      Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
                    </p>
                    <div className="bg-black-secondary/50 p-4 rounded-lg border border-white-primary/10 mb-4">
                      <p className="font-semibold text-white-primary mb-2">Wir setzen folgenden Hoster ein:</p>
                      <p>Vercel Inc.<br />
                      440 N Barranca Ave #4133<br />
                      Covina, CA 91723<br />
                      USA</p>
                    </div>
                    <h4 className="font-semibold text-white-primary mb-2">Auftragsverarbeitung</h4>
                    <p className="leading-relaxed">
                      Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <div className="flex items-start gap-4 mb-6">
                  <FileText className="text-orange-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h2 className="text-2xl font-bold text-white-primary mb-4">
                      3. Allgemeine Hinweise und Pflicht­informationen
                    </h2>

                    <h3 className="text-xl font-semibold text-orange-primary mb-3">Datenschutz</h3>
                    <p className="leading-relaxed mb-4">
                      Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                    </p>
                    <p className="leading-relaxed mb-4">
                      Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                    </p>
                    <p className="leading-relaxed mb-6">
                      Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                    </p>

                    <h3 className="text-xl font-semibold text-orange-primary mb-3">Hinweis zur verantwortlichen Stelle</h3>
                    <p className="leading-relaxed mb-3">
                      Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                    </p>
                    <div className="bg-black-secondary/50 p-4 rounded-lg border border-white-primary/10 mb-6">
                      <p>
                        Luca Hemmerle<br />
                        Friesenstraße 9<br />
                        81825 München<br />
                        Deutschland
                      </p>
                      <p className="mt-3">
                        Telefon: +49 171 1061038<br />
                        E-Mail: info@hiveguard.com
                      </p>
                    </div>
                    <p className="leading-relaxed mb-6 text-sm">
                      Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                    </p>

                    <h3 className="text-xl font-semibold text-orange-primary mb-3">Speicherdauer</h3>
                    <p className="leading-relaxed mb-6">
                      Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                    </p>

                    <h3 className="text-xl font-semibold text-orange-primary mb-3">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
                    <p className="leading-relaxed mb-6">
                      Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.
                    </p>

                    <h3 className="text-xl font-semibold text-orange-primary mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                    <p className="leading-relaxed mb-6">
                      Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                    </p>

                    <h3 className="text-xl font-semibold text-orange-primary mb-3">Beschwerde­recht bei der zuständigen Aufsichts­behörde</h3>
                    <p className="leading-relaxed mb-6">
                      Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                    </p>

                    <h3 className="text-xl font-semibold text-orange-primary mb-3">Recht auf Daten­übertrag­barkeit</h3>
                    <p className="leading-relaxed mb-6">
                      Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
                    </p>

                    <h3 className="text-xl font-semibold text-orange-primary mb-3">Auskunft, Berichtigung und Löschung</h3>
                    <p className="leading-relaxed mb-6">
                      Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
                    </p>

                    <h3 className="text-xl font-semibold text-orange-primary mb-3">Recht auf Einschränkung der Verarbeitung</h3>
                    <p className="leading-relaxed mb-4">
                      Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6 leading-relaxed">
                      <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                      <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                      <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-orange-primary mb-3">SSL- bzw. TLS-Verschlüsselung</h3>
                    <p className="leading-relaxed mb-4">
                      Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                    </p>
                    <p className="leading-relaxed mb-6">
                      Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                    </p>

                    <h3 className="text-xl font-semibold text-orange-primary mb-3">Widerspruch gegen Werbe-E-Mails</h3>
                    <p className="leading-relaxed">
                      Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <div className="flex items-start gap-4 mb-6">
                  <AlertCircle className="text-orange-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h2 className="text-2xl font-bold text-white-primary mb-4">
                      4. Datenerfassung auf dieser Website
                    </h2>

                    <h3 className="text-xl font-semibold text-orange-primary mb-3">Cookies</h3>
                    <p className="leading-relaxed mb-4">
                      Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
                    </p>
                    <p className="leading-relaxed mb-4">
                      Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
                    </p>
                    <p className="leading-relaxed mb-6">
                      Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen oder zur Optimierung der Website erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste.
                    </p>

                    <h3 className="text-xl font-semibold text-orange-primary mb-3">Kontaktformular</h3>
                    <p className="leading-relaxed mb-4">
                      Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                    <p className="leading-relaxed mb-6">
                      Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
                    </p>

                    <h3 className="text-xl font-semibold text-orange-primary mb-3">Anfrage per E-Mail, Telefon oder Telefax</h3>
                    <p className="leading-relaxed mb-4">
                      Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                    <p className="leading-relaxed">
                      Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <div className="bg-gradient-to-r from-orange-primary/10 to-transparent p-6 rounded-lg border-l-4 border-orange-primary">
                <h3 className="text-lg font-semibold text-white-primary mb-2">
                  Fragen zum Datenschutz?
                </h3>
                <p className="text-white-secondary leading-relaxed">
                  Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:{" "}
                  <a href="mailto:info@hiveguard.com" className="text-orange-primary hover:text-orange-hover transition-colors">
                    info@hiveguard.com
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
