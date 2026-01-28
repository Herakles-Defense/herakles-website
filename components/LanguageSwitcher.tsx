"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState('de');
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLang);

  const handleLanguageChange = (newLang: string) => {
    setCurrentLang(newLang);
    setIsOpen(false);
    // TODO: Implement actual language switching when translations are ready
    console.log(`Sprache gewechselt zu: ${newLang}`);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white-primary/10 hover:bg-white-primary/20 transition-all duration-300 border border-white-primary/20 text-white-primary"
        aria-label="Sprache wechseln"
        aria-expanded={isOpen}
      >
        <Globe size={18} className="text-orange-primary" />
        <span className="text-sm font-medium">{currentLanguage?.code.toUpperCase()}</span>
        <motion.svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 bg-black-secondary/95 backdrop-blur-md rounded-lg shadow-xl border border-white-primary/20 overflow-hidden z-50"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-white-primary/10 transition-all duration-200 text-white-primary ${
                    currentLang === lang.code ? 'bg-white-primary/5 border-l-2 border-orange-primary' : ''
                  }`}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="text-sm font-medium">{lang.name}</span>
                  {currentLang === lang.code && (
                    <span className="ml-auto text-orange-primary font-bold">✓</span>
                  )}
                </button>
              ))}
              <div className="px-4 py-2 border-t border-white-primary/10 bg-black-primary/50">
                <p className="text-xs text-white-secondary">
                  Übersetzungen folgen bald
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
