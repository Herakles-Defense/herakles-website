"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-neutral">
      <nav className="container-custom flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/herakles-logo.png"
            alt="Herakles Logo"
            width={180}
            height={50}
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-secondary hover:text-accent transition-colors font-medium">
            Home
          </Link>
          <Link href="/technology" className="text-secondary hover:text-accent transition-colors font-medium">
            Technologie
          </Link>
          <Link href="/mission" className="text-secondary hover:text-accent transition-colors font-medium">
            Mission
          </Link>
          <LanguageSwitcher />
          <Link href="/contact" className="btn-primary">
            Kontakt
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-secondary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary border-t border-neutral">
          <div className="flex flex-col space-y-4 py-4 px-4">
            <Link href="/" className="text-secondary hover:text-accent font-medium">Home</Link>
            <Link href="/technology" className="text-secondary hover:text-accent font-medium">Technologie</Link>
            <Link href="/mission" className="text-secondary hover:text-accent font-medium">Mission</Link>
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
            <Link href="/contact" className="btn-primary inline-block text-center">Kontakt</Link>
          </div>
        </div>
      )}
    </header>
  );
}