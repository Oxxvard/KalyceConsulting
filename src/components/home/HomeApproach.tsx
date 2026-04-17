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
    <section className="py-20 lg:py-28 bg-bg-mauve" aria-label="Notre approche">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn className="max-w-2xl mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-white px-4 py-1.5 rounded-full mb-6">
            Notre approche
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Trois principes qui guident{" "}
            <span className="text-primary-light">chacune de nos missions.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <FadeIn
              key={p.label}
              delay={i * 100}
              className="bg-white rounded-2xl p-8 border border-border"
            >
              <div className="font-display text-4xl font-bold text-accent/40 mb-4">
                {p.label}
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-3">
                {p.title}
              </h3>
              <p className="text-text-light text-sm leading-relaxed">{p.text}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12">
          <Link
            href="/methodologie"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark group"
          >
            Découvrir notre méthodologie
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
