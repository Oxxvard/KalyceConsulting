"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { User } from "lucide-react";
import KalyceLockup from "./KalyceLockup";

/**
 * Nav reprise du design Claude « Kalyce Hero.dc.html » :
 * monogramme détouré + wordmark, pastille de liens en verre dépoli,
 * CTA doré. Les destinations restent celles de l'application.
 */

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Méthodologie", href: "/methodologie" },
  { label: "Références", href: "/references" },
  { label: "À propos", href: "/a-propos" },
  { label: "FAQ", href: "/faq" },
];

const INK = "#0B1220";
const GOLD = "#C8A272";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < 10 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Le menu mobile ouvert ne doit pas rester ouvert d'une page à l'autre
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
      style={{
        fontFamily: "var(--font-archivo), system-ui, sans-serif",
        animation: "k-fade-down .9s cubic-bezier(.22,1,.36,1) .05s both",
      }}
    >
      <nav
        aria-label="Navigation principale"
        style={{
          position: "relative",
          zIndex: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          padding: "20px clamp(16px,3.2vw,44px)",
        }}
      >
        {/* Logo — monogramme détouré + wordmark */}
        <Link
          href="/"
          aria-label="Kalyce Consulting — accueil"
          style={{ display: "flex", flex: "none" }}
        >
          <KalyceLockup />
        </Link>

        {/* Pastille de liens — desktop large */}
        <div
          className="kh-pill"
          style={{
            alignItems: "center",
            gap: 6,
            padding: "7px 10px",
            border: "1px solid rgba(237,231,220,.13)",
            borderRadius: 999,
            background: "rgba(237,231,220,.045)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="kh-navlink"
              data-active={isActive(link.href)}
              style={{ padding: "8px 16px", borderRadius: 999 }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/growth-os"
            className="kh-navlink"
            title="Accéder à mon espace"
            aria-label="Accéder à mon espace"
            style={{
              padding: "8px 12px",
              borderRadius: 999,
              display: "inline-flex",
            }}
          >
            <User size={16} strokeWidth={1.5} />
          </Link>
          <Link
            href="/contact"
            className="kh-cta"
            style={{
              padding: "8px 18px",
              borderRadius: 999,
              background: GOLD,
              color: INK,
              fontWeight: 600,
            }}
          >
            Contact
          </Link>
        </div>

        {/* Déclencheur mobile / tablette */}
        <button
          className="kh-burger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
            width: 44,
            height: 44,
            flex: "none",
            border: "1px solid rgba(237,231,220,.13)",
            borderRadius: 999,
            background: "rgba(237,231,220,.045)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              display: "block",
              width: 18,
              height: 1.5,
              background: "#EDE7DC",
              borderRadius: 2,
              transition: "transform .2s ease",
              transform: mobileMenuOpen
                ? "translateY(6.5px) rotate(45deg)"
                : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: 18,
              height: 1.5,
              background: "#EDE7DC",
              borderRadius: 2,
              transition: "opacity .2s ease",
              opacity: mobileMenuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: 18,
              height: 1.5,
              background: "#EDE7DC",
              borderRadius: 2,
              transition: "transform .2s ease",
              transform: mobileMenuOpen
                ? "translateY(-6.5px) rotate(-45deg)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* Panneau mobile — même matière que la pastille */}
      <div
        id="mobile-menu"
        className="kh-mobile-panel"
        style={{
          overflow: "hidden",
          margin: "0 clamp(16px,3.2vw,44px)",
          maxHeight: mobileMenuOpen ? 520 : 0,
          opacity: mobileMenuOpen ? 1 : 0,
          transition: "max-height .35s ease, opacity .25s ease",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            margin: 0,
            padding: 10,
            border: "1px solid rgba(237,231,220,.13)",
            borderRadius: 22,
            /* Opaque et non translucide : le titre du hero, très contrasté,
               transparaissait derrière le menu et le rendait illisible. */
            background: INK,
            boxShadow: "0 24px 60px rgba(4,8,16,.45)",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="kh-navlink"
                data-active={isActive(link.href)}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "13px 16px",
                  borderRadius: 14,
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginTop: 6,
            }}
          >
            <Link
              href="/growth-os"
              className="kh-navlink"
              onClick={() => setMobileMenuOpen(false)}
              title="Accéder à mon espace"
              aria-label="Accéder à mon espace"
              style={{
                display: "inline-flex",
                padding: "13px 15px",
                borderRadius: 14,
                border: "1px solid rgba(237,231,220,.13)",
              }}
            >
              <User size={16} strokeWidth={1.5} />
            </Link>
            <Link
              href="/contact"
              className="kh-cta"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                flex: 1,
                textAlign: "center",
                padding: "14px 18px",
                borderRadius: 14,
                background: GOLD,
                color: INK,
                fontWeight: 600,
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
