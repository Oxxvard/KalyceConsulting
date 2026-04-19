import FadeIn from "../FadeIn";

export default function HomeIntro() {
  return (
    <section className="py-20 lg:py-28 bg-bg-soft" aria-label="Présentation">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <FadeIn className="lg:col-span-5">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-white px-4 py-1.5 rounded-full mb-6">
              Cabinet de conseil en management
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Transformer la complexité en{" "}
              <em className="text-primary not-italic font-semibold italic">
                trajectoires claires.
              </em>
            </h2>
          </FadeIn>

          <FadeIn
            delay={120}
            className="lg:col-span-7 space-y-5 text-text-light text-base lg:text-lg leading-relaxed"
          >
            <p>
              Kalyce Consulting accompagne les comités exécutifs et les
              directions générales sur leurs enjeux les plus structurants :
              définition de la stratégie, refonte organisationnelle, conduite
              du changement, performance opérationnelle.
            </p>
            <p>
              Notre conviction : la qualité d&apos;une décision se mesure à
              ses effets, pas à sa sophistication. Nous travaillons donc aux
              côtés de vos équipes, dans la durée, pour ancrer chaque
              transformation dans la réalité du terrain.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
