"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    // Enable analytics
    if (typeof window !== "undefined" && (window as any).va) {
      (window as any).va("event", "cookie_consent_accepted");
    }
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-t border-accent/20 p-4 md:p-6">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-neutral/90 text-sm md:text-base">
            Wir verwenden Cookies und Analytics, um die Website-Nutzung zu analysieren und unsere Dienste zu verbessern.
            Durch die weitere Nutzung stimmen Sie der Verwendung zu.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={declineCookies}
            className="px-6 py-2 border border-neutral/30 text-neutral hover:bg-neutral/10 rounded-lg transition-colors text-sm"
          >
            Ablehnen
          </button>
          <button
            onClick={acceptCookies}
            className="btn-primary text-sm"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}