import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative bg-bg pt-24 pb-0 lg:pt-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8 w-full">
        {/* Main heading */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary leading-[1.05] tracking-tight max-w-4xl">
          Chaque décision
          <br />
          <span className="text-primary-light">façonne votre avenir.</span>
        </h1>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-primary-dark transition-colors"
          >
            Nos services
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

      {/* Hero image - full width */}
      <div className="mt-16 lg:mt-20 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative w-full h-[240px] md:h-[340px] lg:h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="/images/hero-bg.jpg"
            alt="Vue aérienne d'une côte méditerranéenne"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent-light/30 rounded-full blur-3xl -z-10" />
    </section>
  );
}
