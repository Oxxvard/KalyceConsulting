"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

const navLinks = [
  { label: "Aperçu", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Références", href: "#references" },
  { label: "À propos", href: "#a-propos" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      } ${
        atTop
          ? "bg-transparent"
          : "bg-white/90 backdrop-blur-md shadow-sm"
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
              atTop ? "bg-primary" : "bg-text"
            } ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] mt-[5px] transition-all duration-200 ${
              atTop ? "bg-primary" : "bg-text"
            } ${mobileMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] mt-[5px] transition-all duration-200 ${
              atTop ? "bg-primary" : "bg-text"
            } ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>

        {/* Logo */}
        <a href="#accueil" className="flex-shrink-0">
          <Logo height={42} />
        </a>

        {/* Desktop navigation - centered */}
        <ul className="hidden lg:flex items-center gap-8 ml-12">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative font-medium text-sm transition-colors duration-200 ${
                  i === 0
                    ? "text-primary after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-primary"
                    : atTop
                      ? "text-text/70 hover:text-primary"
                      : "text-text/70 hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-80" : "max-h-0"
        } ${atTop ? "bg-white/95 backdrop-blur-md" : "bg-white/95"}`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-3 text-text hover:text-primary font-medium text-sm transition-colors border-b border-gray-100 last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
