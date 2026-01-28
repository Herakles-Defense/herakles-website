"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Cpu, Target, Mail, Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import Button from "./Button";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/technology", label: "Technology", icon: Cpu },
  { href: "/mission", label: "Mission", icon: Target },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" role="banner">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-black-primary/80 backdrop-blur-md border-b border-white-primary/10" style={{ WebkitBackdropFilter: 'blur(12px)' }} />

      <nav className="relative container-custom flex items-center justify-between py-4 px-4" role="navigation" aria-label="Main Navigation">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 relative z-10 group" aria-label="Herakles Defense Homepage">
          <div className="relative p-2 rounded-lg bg-gradient-to-br from-white-primary/5 to-transparent backdrop-blur-sm border border-white-primary/10 transition-all duration-300 group-hover:border-orange-primary/40 shadow-lg shadow-orange-primary/20 group-hover:shadow-xl group-hover:shadow-orange-primary/40">
            <Image
              src="/images/herakles-logo.png"
              alt="Herakles Defense Logo"
              width={280}
              height={77}
              className="h-16 md:h-20 w-auto transition-all duration-300 group-hover:scale-105"
              priority
              style={{ objectFit: 'cover', objectPosition: 'center', transform: 'scale(1.6)' }}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-2 px-4 py-2 rounded-lg text-white-primary hover:text-orange-primary transition-all duration-300 hover:bg-white-primary/5"
            >
              <item.icon size={18} className="transition-transform group-hover:translate-x-1" />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}

          <div className="ml-2">
            <LanguageSwitcher />
          </div>

          <div className="ml-2">
            <Button variant="primary" size="md" icon={Mail} href="/contact">
              Contact
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white-primary p-2 rounded-lg hover:bg-white-primary/10 transition-colors relative z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            role="navigation"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black-secondary/95 backdrop-blur-md border-t border-white-primary/10"
          >
            <div className="flex flex-col space-y-2 py-4 px-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-white-primary hover:text-orange-primary hover:bg-white-primary/5 transition-all font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-2"
              >
                <LanguageSwitcher />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navItems.length + 1) * 0.1 }}
                className="pt-2"
              >
                <Button
                  variant="primary"
                  size="md"
                  icon={Mail}
                  href="/contact"
                  className="w-full justify-center"
                >
                  Contact
                </Button>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
