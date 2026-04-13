import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Logo + tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="brightness-0 invert opacity-90 inline-block">
              <Logo height={36} />
            </div>
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xs">
              Cabinet de conseil en management accompagnant les entreprises dans
              leur transformation stratégique et organisationnelle.
            </p>
          </div>

          {/* Column 2: Discover */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-5">
              Découvrir
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#a-propos"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#references"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Références
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social with icons */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-5">
              Social
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2.5 text-white/60 hover:text-white transition-colors"
                >
                  {/* LinkedIn icon */}
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2.5 text-white/60 hover:text-white transition-colors"
                >
                  {/* X (Twitter) icon */}
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Info / Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-5">
              Informations
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/mentions-legales"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="/mentions-legales#cgv"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  CGV
                </a>
              </li>
              <li>
                <a
                  href="/mentions-legales#confidentialite"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/10" />

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © 2026 Kalyce Consulting. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            {/* Social icons in footer bar */}
            <a
              href="#"
              className="text-white/30 hover:text-white/60 transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-white/60 transition-colors"
              aria-label="X (Twitter)"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
