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

          {/* Column 3: Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-5">
              Social
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Twitter
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
          <p className="text-white/30 text-xs">
            Conseil en management &amp; stratégie
          </p>
        </div>
      </div>
    </footer>
  );
}
