import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

            <div className="space-y-6 text-neutral/80">
              <div>
                <h2 className="text-2xl font-bold text-neutral mb-4">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-xl font-bold text-neutral mb-2">Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral mb-4">2. Datenerfassung auf dieser Website</h2>
                <h3 className="text-xl font-bold text-neutral mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                <p className="mb-4">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                </p>

                <h3 className="text-xl font-bold text-neutral mb-2">Wie erfassen wir Ihre Daten?</h3>
                <p>
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                <h3 className="text-xl font-bold text-neutral mb-2">Datenschutz</h3>
                <p>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral mb-4">4. Kontakt</h2>
                <p>
                  Wenn Sie Fragen zum Datenschutz haben, kontaktieren Sie uns bitte unter:<br />
                  E-Mail: info@herakles-defense.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}