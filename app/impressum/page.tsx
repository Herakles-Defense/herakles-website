import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Impressum</h1>

            <div className="space-y-6 text-neutral/80">
              <div>
                <h2 className="text-2xl font-bold text-neutral mb-4">Angaben gemäß § 5 TMG</h2>
                <p>
                  Hive Guard UG (haftungsbeschränkt)<br />
                  Rosenbuschstr. 2<br />
                  80538 München<br />
                  Deutschland
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral mb-4">Vertreten durch</h2>
                <p>
                  Geschäftsführer: Bryan Gundrum und Luca Hemmerle
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral mb-4">Kontakt</h2>
                <p>
                  E-Mail: info@herakles-defense.com<br />
                  Telefon: 0171 1061038
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral mb-4">Haftungsausschluss</h2>
                <h3 className="text-xl font-bold text-neutral mb-2">Haftung für Inhalte</h3>
                <p className="mb-4">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                </p>

                <h3 className="text-xl font-bold text-neutral mb-2">Haftung für Links</h3>
                <p>
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
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