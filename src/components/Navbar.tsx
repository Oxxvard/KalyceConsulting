"use client";

import { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#a-propos" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8 h-16"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <a href="#accueil" className="flex-shrink-0">
          <Logo height={42} />
        </a>

        {/* Desktop navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-text hover:text-primary font-medium text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href="#devis" variant="primary">
            Demander un devis
          </Button>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-md hover:bg-bg-dark transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span
            className={`block w-5 h-0.5 bg-text transition-all duration-200 ${
              mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-text mt-1 transition-all duration-200 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-text mt-1 transition-all duration-200 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-gray-100 bg-white"
        >
          <ul className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-text hover:text-primary hover:bg-bg-dark font-medium text-sm transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button
                href="#devis"
                variant="primary"
                className="w-full text-center"
              >
                Demander un devis
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
