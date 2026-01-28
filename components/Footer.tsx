import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-neutral/20">
      <div className="container-custom py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-accent font-bold text-lg mb-4">Herakles</h3>
            <p className="text-white/70 text-sm">
              Tactical Counter-UAS Defense System
            </p>
            <p className="text-white/50 text-xs mt-2">
              Built for the Threats Others Cannot Solve
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-white/70 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/technology" className="text-white/70 hover:text-accent transition-colors">Technologie</Link></li>
              <li><Link href="/mission" className="text-white/70 hover:text-accent transition-colors">Mission</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/impressum" className="text-white/70 hover:text-accent transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-white/70 hover:text-accent transition-colors">Datenschutz</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>info@hiveguard.com</li>
              <li>Hive Guard UG (haftungsbeschränkt)</li>
              <li className="text-white/50 text-xs mt-3">München, Deutschland</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Herakles Defense. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}