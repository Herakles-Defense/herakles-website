import Link from "next/link";
import { Mail, Building2, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black-secondary border-t border-white-primary/10" role="contentinfo" aria-label="Site Footer">
      <div className="container-custom py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-orange-primary font-bold text-lg mb-4">Herakles</h3>
            <p className="text-white-secondary text-sm leading-relaxed">
              Tactical Counter-UAS Defense System
            </p>
            <p className="text-gray-500 text-xs mt-3">
              Built for the Threats Others Cannot Solve
            </p>
          </div>

          {/* Links */}
          <nav aria-labelledby="footer-navigation-heading">
            <h4 id="footer-navigation-heading" className="text-white-primary font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-white-secondary hover:text-orange-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-orange-primary transition-all duration-300" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/technology"
                  className="text-white-secondary hover:text-orange-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-orange-primary transition-all duration-300" />
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/mission"
                  className="text-white-secondary hover:text-orange-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-orange-primary transition-all duration-300" />
                  Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white-secondary hover:text-orange-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-orange-primary transition-all duration-300" />
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-labelledby="footer-legal-heading">
            <h4 id="footer-legal-heading" className="text-white-primary font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/impressum"
                  className="text-white-secondary hover:text-orange-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-orange-primary transition-all duration-300" />
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-white-secondary hover:text-orange-primary transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-orange-primary transition-all duration-300" />
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div aria-labelledby="footer-contact-heading">
            <h4 id="footer-contact-heading" className="text-white-primary font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white-secondary">
                <Mail size={16} className="text-orange-primary" aria-hidden="true" />
                <a
                  href="mailto:info@hiveguard.com"
                  className="hover:text-orange-primary transition-colors"
                  aria-label="Email an info@hiveguard.com senden"
                >
                  info@hiveguard.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-white-secondary">
                <Building2 size={16} className="text-orange-primary mt-0.5" />
                <span>Hive Guard UG<br />(haftungsbeschränkt)</span>
              </li>
              <li className="flex items-center gap-2 text-gray-500 text-xs">
                <MapPin size={14} className="text-orange-primary" />
                München, Germany
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white-primary/10 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Herakles Defense. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
