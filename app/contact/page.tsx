import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        <section className="section-padding bg-gradient-to-b from-primary to-secondary">
          <div className="container-custom max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
              Kontakt
            </h1>
            <div className="bg-secondary p-8 rounded-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-accent font-bold mb-2">E-Mail</h3>
                  <a href="mailto:info@herakles-defense.com" className="text-xl hover:text-accent transition-colors">
                    info@herakles-defense.com
                  </a>
                </div>
                <div>
                  <h3 className="text-accent font-bold mb-2">Unternehmen</h3>
                  <p className="text-neutral/80">
                    Hive Guard UG (haftungsbeschränkt)<br />
                    Rosenbuschstr. 2<br />
                    80538 München<br />
                    Deutschland
                  </p>
                </div>
                <div>
                  <h3 className="text-accent font-bold mb-2">Geschäftsführer</h3>
                  <p className="text-neutral/80">
                    Bryan Gundrum und Luca Hemmerle
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}