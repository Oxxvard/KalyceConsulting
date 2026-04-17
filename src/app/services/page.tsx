import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import HomeCta from "@/components/home/HomeCta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Conseil en stratégie d'entreprise, conduite du changement, performance organisationnelle et accompagnement des dirigeants.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    title: "Stratégie d'entreprise",
    summary:
      "Construire une vision claire, prioriser les chantiers et aligner toute l'organisation sur une trajectoire de croissance.",
    items: [
      "Diagnostic stratégique et analyse concurrentielle",
      "Définition de la vision et du plan stratégique 3-5 ans",
      "Stratégies de croissance organique et externe (M&A)",
      "Diversification, internationalisation, partenariats",
      "Réflexion sur le business model et la proposition de valeur",
    ],
    color: "from-primary to-primary-light",
  },
  {
    title: "Conduite du changement",
    summary:
      "Embarquer les équipes, ancrer les nouveaux comportements et faire de la transformation une dynamique durable.",
    items: [
      "Cadrage des grands programmes de transformation",
      "Plan de communication et d'embarquement",
      "Diagnostic culturel et leviers d'évolution",
      "Formation des managers et acculturation des équipes",
      "Pilotage de l'impact et mesure de l'adhésion",
    ],
    color: "from-primary-dark to-primary",
  },
  {
    title: "Organisation & Performance",
    summary:
      "Aligner la structure, les processus et la gouvernance sur les ambitions stratégiques pour gagner en agilité et en efficacité.",
    items: [
      "Refonte du modèle opérationnel (TOM)",
      "Optimisation des processus et chaîne de valeur",
      "Gouvernance, instances de pilotage, rôles et responsabilités",
      "Performance opérationnelle et excellence d'exécution",
      "Programmes de réduction de coûts maîtrisés",
    ],
    color: "from-secondary to-primary-light",
  },
  {
    title: "Accompagnement dirigeants",
    summary:
      "Un sparring partner exigeant et bienveillant pour les décideurs sur leurs sujets sensibles.",
    items: [
      "Coaching individuel de dirigeants et de comités exécutifs",
      "Accompagnement à la prise de poste",
      "Préparation de décisions stratégiques structurantes",
      "Animation de séminaires de codir / comex",
      "Médiation et alignement d'équipes dirigeantes",
    ],
    color: "from-primary-light to-secondary",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Quatre métiers,{" "}
            <span className="text-primary-light">
              une exigence partagée.
            </span>
          </>
        }
        description="Nos missions s'organisent autour de quatre expertises complémentaires. Toutes répondent à la même promesse : une approche rigoureuse, un transfert de savoir-faire et un impact mesurable."
      />

      <section className="py-20 lg:py-24 bg-bg">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-16 lg:space-y-20">
          {services.map((s, i) => (
            <FadeIn key={s.title}>
              <article
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${
                  i % 2 === 1 ? "lg:[&>:first-child]:order-2" : ""
                }`}
              >
                <div
                  className={`lg:col-span-5 rounded-2xl p-8 lg:p-10 text-white bg-gradient-to-br ${s.color} relative overflow-hidden min-h-[260px] flex flex-col justify-end`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute -top-12 -right-10 w-48 h-48 rounded-full bg-white/10 blur-2xl"
                  />
                  <span className="relative font-display text-6xl font-bold opacity-30">
                    0{i + 1}
                  </span>
                  <h2 className="relative font-display text-2xl md:text-3xl font-bold mt-4">
                    {s.title}
                  </h2>
                </div>

                <div className="lg:col-span-7">
                  <p className="text-text text-lg leading-relaxed mb-6">
                    {s.summary}
                  </p>
                  <ul className="space-y-3">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-text-light text-sm"
                      >
                        <svg
                          className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-7 text-sm font-medium text-primary hover:text-primary-dark group"
                  >
                    Échanger sur un projet
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
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <HomeCta />
    </>
  );
}
