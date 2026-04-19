"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "kalyce_cookie_choice";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const choice = window.localStorage.getItem(STORAGE_KEY);
      if (!choice) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {}
    setVisible(false);
  };

  const decline = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "declined");
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Bandeau cookies"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-[60] liquid-glass rounded-2xl border border-white/15 p-5"
    >
      <p className="text-sm text-text-light leading-relaxed">
        Nous n&apos;utilisons que des cookies strictement nécessaires au
        fonctionnement du site. Aucun cookie de traçage publicitaire.{" "}
        <a
          href="/confidentialite"
          className="text-primary underline underline-offset-2 hover:text-primary-dark"
        >
          En savoir plus
        </a>
      </p>
      <div className="mt-4 flex gap-2 justify-end">
        <button
          onClick={decline}
          className="text-sm font-medium text-text-light hover:text-white px-3 py-2 rounded-full transition-colors"
        >
          Refuser
        </button>
        <button
          onClick={accept}
          className="text-sm font-medium bg-white text-[#1a0e2d] px-4 py-2 rounded-full hover:bg-accent-light transition-colors"
        >
          J&apos;accepte
        </button>
      </div>
    </div>
  );
}
