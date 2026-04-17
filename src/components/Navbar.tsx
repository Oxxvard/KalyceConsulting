"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Méthodologie", href: "/methodologie" },
  { label: "Références", href: "/references" },
  { label: "À propos", href: "/a-propos" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Transparent + white text only at top of homepage (dark hero bg)
  const isTransparent = atTop && isHome;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setAtTop(currentScrollY < 10);
      setVisible(currentScrollY < 10 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-sm border-b border-border/40"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center px-6 lg:px-8 h-20"
        aria-label="Navigation principale"
      >
        {/* Hamburger - mobile */}
        <button
          className="lg:hidden flex flex-col items-center justify-center w-10 h-10 mr-4"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span
            className={`block w-6 h-[2px] transition-all duration-200 ${
              isTransparent ? "bg-white" : "bg-text"
            } ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] mt-[5px] transition-all duration-200 ${
              isTransparent ? "bg-white" : "bg-text"
            } ${mobileMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] mt-[5px] transition-all duration-200 ${
              isTransparent ? "bg-white" : "bg-text"
            } ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>

        {/* Logo */}
        <Link
          href="/"
          className={`flex-shrink-0 transition-all duration-300 ${
            isTransparent ? "brightness-0 invert" : ""
          }`}
        >
          <Logo height={42} />
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden lg:flex items-center gap-7 ml-12">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative font-medium text-sm transition-colors duration-200 ${
                    isTransparent
                      ? active
                        ? "text-white after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-white"
                        : "text-white/70 hover:text-white"
                      : active
                        ? "text-primary after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-primary"
                        : "text-text/70 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block ml-auto">
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition-colors ${
              isTransparent
                ? "bg-white text-primary hover:bg-accent-light"
                : "bg-primary text-white hover:bg-primary-dark"
            }`}
          >
            Démarrer un projet
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-md ${
          mobileMenuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-3 font-medium text-sm transition-colors border-b border-border/50 last:border-0 ${
                    active ? "text-primary" : "text-text hover:text-primary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-primary text-white text-sm font-medium px-5 py-3 rounded-full"
            >
              Démarrer un projet
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
