import Link from "next/link";
import FadeIn from "../FadeIn";

const pillars = [
  {
    label: "01",
    title: "Indépendance",
    text: "Aucune commission, aucun produit à vendre. Notre seul intérêt : la réussite de votre transformation.",
  },
  {
    label: "02",
    title: "Profondeur",
    text: "Des consultants seniors, anciens dirigeants ou experts sectoriels. Pas de pyramide, du fond.",
  },
  {
    label: "03",
    title: "Engagement",
    text: "Des contrats clairs, un cadrage rigoureux, et une présence aux côtés de vos équipes jusqu'à l'impact.",
  },
];

export default function HomeApproach() {
  return (
    <section
      className="py-20 lg:py-28 bg-bg-light"
      aria-label="Notre approche"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn className="max-w-2xl mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-white px-4 py-1.5 rounded-full mb-6">
            Notre approche
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight">
            Trois principes qui guident{" "}
            <em className="text-primary-dark not-italic font-semibold italic">
              chacune de nos missions.
            </em>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <FadeIn
              key={p.label}
              delay={i * 100}
              className="bg-white rounded-2xl p-8 border border-border-light"
            >
              <div className="font-display text-4xl font-bold text-accent/40 mb-4">
                {p.label}
              </div>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                {p.title}
              </h3>
              <p className="text-ink-light text-sm leading-relaxed">
                {p.text}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12">
          <Link
            href="/methodologie"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-dark hover:text-primary group"
          >
            Découvrir notre méthodologie
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
