const references = [
  {
    name: "Groupe Industriel",
    tags: ["Stratégie", "PME"],
    description:
      "Refonte complète de la stratégie de croissance et accompagnement à l'international.",
    color: "bg-primary",
  },
  {
    name: "Réseau de Franchises",
    tags: ["Organisation", "ETI"],
    description:
      "Restructuration organisationnelle et optimisation des processus opérationnels.",
    color: "bg-primary-dark",
  },
  {
    name: "Start-up Tech",
    tags: ["Changement", "Start-up"],
    description:
      "Conduite du changement lors d'une phase d'hyper-croissance et de scaling.",
    color: "bg-secondary",
  },
  {
    name: "Groupe Bancaire",
    tags: ["Leadership", "Grand Groupe"],
    description:
      "Programme de coaching dirigeants et transformation managériale.",
    color: "bg-primary-light",
  },
];

export default function ReferencesSection() {
  return (
    <section className="py-16 lg:py-20 bg-bg">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-8">
          <svg
            className="w-4 h-4 text-accent"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <polyline points="2 8 6 12 14 4" />
          </svg>
          <span className="text-sm font-medium text-text">
            Références
          </span>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {references.map((ref) => (
            <article
              key={ref.name}
              className={`${ref.color} rounded-2xl p-6 text-white flex flex-col justify-between min-h-[280px] group hover:scale-[1.02] transition-transform duration-200`}
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {ref.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div className="mt-auto">
                <h3 className="font-display text-lg font-semibold mb-2">
                  {ref.name}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {ref.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
