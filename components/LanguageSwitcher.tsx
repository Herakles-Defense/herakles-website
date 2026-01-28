"use client";

import { useState } from 'react';

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
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors border border-accent/20"
        aria-label="Sprache wechseln"
      >
        <span className="text-xl">{currentLanguage?.flag}</span>
        <span className="text-sm font-medium">{currentLanguage?.code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-40 bg-secondary rounded-lg shadow-lg border border-accent/20 overflow-hidden z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-primary transition-colors ${
                  currentLang === lang.code ? 'bg-primary/50' : ''
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="text-sm">{lang.name}</span>
                {currentLang === lang.code && (
                  <span className="ml-auto text-accent">✓</span>
                )}
              </button>
            ))}
            <div className="px-4 py-2 border-t border-accent/10">
              <p className="text-xs text-neutral/60">
                Übersetzungen folgen bald
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
