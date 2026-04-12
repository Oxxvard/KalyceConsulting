import Button from "./Button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="accueil"
      className="min-h-[80vh] flex items-center bg-bg py-16 lg:py-0"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text column */}
        <div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Accélérez votre transformation
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-light max-w-lg leading-relaxed">
            Kalyce Consulting accompagne les dirigeants et leurs équipes dans la
            conduite du changement, la stratégie d&apos;entreprise et
            l&apos;optimisation de leur organisation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#services" variant="primary">
              Découvrir nos services
            </Button>
            <Button href="#devis" variant="outline">
              Demander un devis
            </Button>
          </div>
        </div>

        {/* Image placeholder column */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/hero-placeholder.svg"
            alt="Illustration stratégie et conseil en management"
            width={600}
            height={500}
            className="w-full max-w-md lg:max-w-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
