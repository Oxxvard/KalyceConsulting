import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-20 lg:pt-28 lg:pb-28 overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        aria-hidden="true"
      />

      {/* Gradient overlay : darker bottom, soft top to harmonize with mauve site bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/65 to-primary-dark/85" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 w-full">
        {/* Main heading */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight max-w-4xl">
          Chaque décision
          <br />
          <span className="text-accent-light">façonne votre avenir.</span>
        </h1>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-white text-primary text-sm font-medium px-7 py-3.5 rounded-full hover:bg-accent-light transition-colors"
          >
            Nos services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/40 text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors"
          >
            Démarrer un projet
          </Link>
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
          <p className="text-sm text-white/80 leading-relaxed">
            Cabinet de conseil en management, nous accompagnons les dirigeants
            et leurs équipes dans la stratégie d&apos;entreprise, la conduite du
            changement et l&apos;optimisation organisationnelle.
          </p>
        </div>
      </div>
    </section>
  );
}
