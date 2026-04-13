export default function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative min-h-[90vh] flex flex-col justify-center bg-bg pt-24 pb-20 lg:pt-28 lg:pb-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8 w-full">
        {/* Main heading */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary leading-[1.05] tracking-tight max-w-4xl">
          Chaque décision
          <br />
          <span className="text-primary-light">façonne votre avenir.</span>
        </h1>

        {/* CTA row */}
        <div className="mt-10 flex items-center gap-4">
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-primary-dark transition-colors"
          >
            Nos services
          </a>
          <a
            href="#devis"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            aria-label="Demander un devis"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="8" y1="2" x2="8" y2="14" />
              <line x1="2" y1="8" x2="14" y2="8" />
            </svg>
          </a>
        </div>

        {/* Subtitle */}
        <div className="mt-16 flex items-start gap-3 max-w-lg">
          <svg
            className="w-5 h-5 mt-0.5 text-accent flex-shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M5 3l10 7-10 7V3z" />
          </svg>
          <p className="text-sm text-text-light leading-relaxed">
            Cabinet de conseil en management, nous accompagnons les dirigeants
            et leurs équipes dans la stratégie d&apos;entreprise, la conduite du
            changement et l&apos;optimisation organisationnelle.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent-light/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
