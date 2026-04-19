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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
      style={{ padding: "1.25rem 1.5rem 0" }}
    >
      <nav
        className="relative mx-auto flex max-w-7xl items-center liquid-glass rounded-xl px-5 py-2.5 transition-all duration-300"
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
            className={`block w-6 h-[2px] bg-white transition-all duration-200 ${
              mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] mt-[5px] bg-white transition-all duration-200 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] mt-[5px] bg-white transition-all duration-200 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0 brightness-0 invert transition-all duration-300"
        >
          <Logo height={34} />
        </Link>

        {/* Desktop links — centered */}
        <ul className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm transition-colors duration-200 ${
                    active
                      ? "text-white font-medium"
                      : "text-white/70 hover:text-white"
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
            className="text-sm font-medium px-5 py-2 rounded-lg bg-white text-[#1a0e2d] hover:bg-gray-100 transition-all duration-200"
          >
            Démarrer un projet
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 liquid-glass rounded-b-xl mx-0 mt-1 ${
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
                  className={`block py-3 font-medium text-sm transition-colors border-b border-white/10 last:border-0 ${
                    active ? "text-white" : "text-white/70"
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
              className="block w-full text-center text-sm font-medium px-5 py-3 rounded-lg bg-white text-[#1a0e2d]"
            >
              Démarrer un projet
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
