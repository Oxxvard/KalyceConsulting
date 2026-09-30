"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname, routing, localeNames } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";

const INK = "#0B1220";
const GOLD = "#C8A272";

/**
 * Sélecteur de langue.
 *
 * `usePathname` de next-intl rend le chemin sans son préfixe de langue :
 * on peut donc rebasculer sur la même page dans une autre langue, et non
 * renvoyer l'utilisateur à l'accueil comme le font beaucoup de sites.
 */
export default function LanguageSwitcher({
  variant = "pill",
}: {
  variant?: "pill" | "panel";
}) {
  const locale = useLocale() as Locale;
  const t = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function switchTo(next: Locale) {
    setOpen(false);
    router.replace(pathname, { locale: next });
  }

  // Dans le panneau mobile : une simple rangée de codes, sans menu déroulant
  if (variant === "panel") {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {routing.locales.map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => switchTo(l)}
            aria-current={l === locale ? "true" : undefined}
            lang={l}
            style={{
              padding: "9px 13px",
              borderRadius: 12,
              border: "1px solid rgba(237,231,220,.13)",
              background: l === locale ? GOLD : "transparent",
              color: l === locale ? INK : "rgba(237,231,220,.72)",
              fontFamily: "inherit",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              cursor: "pointer",
            }}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        type="button"
        className="kh-navlink"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t("chooseLanguage")}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
          padding: "8px 13px",
          borderRadius: 999,
          border: "none",
          background: "transparent",
          fontFamily: "inherit",
          fontSize: "inherit",
          fontWeight: "inherit",
          letterSpacing: "inherit",
          textTransform: "inherit",
          cursor: "pointer",
        }}
      >
        {locale.toUpperCase()}
        <span
          aria-hidden="true"
          style={{
            fontSize: 8,
            transition: "transform .2s ease",
            transform: open ? "rotate(180deg)" : "none",
          }}
        >
          ▼
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t("language")}
          style={{
            position: "absolute",
            top: "calc(100% + 10px)",
            right: 0,
            zIndex: 20,
            listStyle: "none",
            margin: 0,
            padding: 6,
            minWidth: 150,
            border: "1px solid rgba(237,231,220,.13)",
            borderRadius: 16,
            background: INK,
            boxShadow: "0 24px 60px rgba(4,8,16,.5)",
            textTransform: "none",
            letterSpacing: "normal",
          }}
        >
          {routing.locales.map((l) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={l === locale}
                lang={l}
                onClick={() => switchTo(l)}
                className="kh-navlink"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 10,
                  border: "none",
                  background: "transparent",
                  fontFamily: "inherit",
                  fontSize: 13,
                  fontWeight: 400,
                  textAlign: "left",
                  cursor: "pointer",
                  color: l === locale ? GOLD : undefined,
                }}
              >
                {localeNames[l]}
                <span style={{ fontSize: 10, opacity: 0.6 }}>
                  {l.toUpperCase()}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
