import FadeIn from "./FadeIn";

const testimonials = [
  {
    quote:
      "Kalyce nous a accompagnés dans une transformation délicate. Leur approche rigoureuse et leur capacité d'écoute ont fait la différence auprès de nos équipes.",
    author: "Directrice Générale",
    role: "Groupe industriel · 1 200 collaborateurs",
  },
  {
    quote:
      "Une équipe qui challenge avec finesse. Nous avons redéfini notre stratégie avec une clarté qu'on n'avait pas atteinte depuis dix ans.",
    author: "Président",
    role: "ETI des services B2B",
  },
  {
    quote:
      "Ce qui distingue Kalyce, c'est la mise en œuvre. Ils ne livrent pas un slide : ils restent jusqu'à ce que les résultats soient là.",
    author: "Directeur Opérations",
    role: "Secteur santé",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="temoignages"
      className="py-20 lg:py-28 bg-bg-cream"
      aria-label="Témoignages clients"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-white px-4 py-1.5 rounded-full mb-6">
            Témoignages
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Ce que nos clients{" "}
            <span className="text-primary-light">en disent.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn
              as="article"
              key={t.author + i}
              delay={i * 120}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm shadow-primary/5 flex flex-col"
            >
              <svg
                className="w-8 h-8 text-accent mb-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7.17 6A5.17 5.17 0 002 11.17v6.66h6.66v-6.66H5.17C5.17 9.41 6.59 8 8.34 8V6H7.17zm9 0A5.17 5.17 0 0011 11.17v6.66h6.66v-6.66h-3.49c0-1.76 1.42-3.17 3.17-3.17V6h-1.17z" />
              </svg>
              <blockquote className="text-text text-base leading-relaxed flex-1">
                {t.quote}
              </blockquote>
              <footer className="mt-6 pt-5 border-t border-gray-100">
                <p className="font-semibold text-primary text-sm">{t.author}</p>
                <p className="text-text-light text-xs mt-0.5">{t.role}</p>
              </footer>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
