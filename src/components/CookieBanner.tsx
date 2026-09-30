"use client";

import { useTranslations } from "next-intl";

import { useEffect, useState } from "react";

const STORAGE_KEY = "kalyce_cookie_choice";

export default function CookieBanner() {
  const t = useTranslations("cookies");
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
      aria-label={t("aria")}
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-[60] liquid-glass rounded-2xl border border-white/15 p-5"
    >
      <p className="text-sm text-text-light leading-relaxed">
        {t("text")}{" "}
        <a
          href="/confidentialite"
          className="text-primary underline underline-offset-2 hover:text-primary-dark"
        >
          {t("link")}
        </a>
      </p>
      <div className="mt-4 flex gap-2 justify-end">
        <button
          onClick={decline}
          className="text-sm font-medium text-text-light hover:text-white px-3 py-2 rounded-full transition-colors"
        >
          {t("decline")}
        </button>
        <button
          onClick={accept}
          className="text-sm font-medium bg-white text-[#0B1220] px-4 py-2 rounded-full hover:bg-accent-light transition-colors"
        >
          {t("accept")}
        </button>
      </div>
    </div>
  );
}
