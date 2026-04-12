import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Logo + tagline */}
          <div>
            <div className="brightness-0 invert opacity-90 inline-block">
              <Logo height={36} />
            </div>
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              Cabinet de conseil en management accompagnant les entreprises dans
              leur transformation stratégique et organisationnelle.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <a
                  href="#accueil"
                  className="hover:text-white transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#a-propos"
                  className="hover:text-white transition-colors"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="font-semibold mb-4">Informations légales</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <a
                  href="/mentions-legales"
                  className="hover:text-white transition-colors"
                >
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="/mentions-legales#cgv"
                  className="hover:text-white transition-colors"
                >
                  Conditions générales de vente
                </a>
              </li>
              <li>
                <a
                  href="/mentions-legales#confidentialite"
                  className="hover:text-white transition-colors"
                >
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20" />

        <p className="mt-8 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Kalyce Consulting. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
