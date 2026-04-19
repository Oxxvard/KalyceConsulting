import Link from "next/link";
import FadeIn from "../FadeIn";

const references = [
  {
    name: "Groupe industriel",
    sector: "Industrie · ETI",
    description:
      "Refonte de la stratégie de croissance et accompagnement à l'international sur trois zones géographiques.",
  },
  {
    name: "Réseau de franchises",
    sector: "Distribution",
    description:
      "Restructuration organisationnelle et optimisation des processus opérationnels (–18 % de coûts indirects).",
  },
  {
    name: "Scale-up tech",
    sector: "Numérique",
    description:
      "Conduite du changement lors d'une phase d'hyper-croissance : 80 → 350 collaborateurs en 18 mois.",
  },
];

export default function HomeReferencesPreview() {
  return (
    <section
      className="py-20 lg:py-28 bg-bg-light"
      aria-label="Aperçu références"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-white px-4 py-1.5 rounded-full mb-6">
              Références
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight">
              Des transformations{" "}
              <em className="text-primary-dark not-italic font-semibold italic">
                qui durent.
              </em>
            </h2>
          </div>
          <Link
            href="/references"
            className="text-sm font-medium text-primary-dark hover:text-primary inline-flex items-center gap-2 group"
          >
            Voir toutes les références
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {references.map((r, i) => (
            <FadeIn
              key={r.name}
              delay={i * 100}
              as="article"
              className="bg-bg-mauve rounded-2xl p-7 text-white flex flex-col min-h-[280px]"
            >
              <span className="text-xs font-medium bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 self-start">
                {r.sector}
              </span>
              <div className="mt-auto">
                <h3 className="font-display text-xl font-semibold mb-2">
                  {r.name}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  {r.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
