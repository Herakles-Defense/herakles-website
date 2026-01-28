import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-primary">
      <div className="container-custom py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-accent font-bold text-lg mb-4">Herakles</h3>
            <p className="text-neutral/70 text-sm">
              Tactical Counter-UAS Defense System
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-neutral font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-neutral/70 hover:text-accent">Home</Link></li>
              <li><Link href="/technology" className="text-neutral/70 hover:text-accent">Technologie</Link></li>
              <li><Link href="/mission" className="text-neutral/70 hover:text-accent">Mission</Link></li>
              <li><Link href="/about" className="text-neutral/70 hover:text-accent">Über uns</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-neutral font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/impressum" className="text-neutral/70 hover:text-accent">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-neutral/70 hover:text-accent">Datenschutz</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-neutral font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-neutral/70">
              <li>info@herakles-defense.com</li>
              <li>Hive Guard UG (haftungsbeschränkt)</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary text-center text-neutral/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Herakles Defense. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}