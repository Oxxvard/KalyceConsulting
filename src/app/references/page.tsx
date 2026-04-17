import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import TestimonialsSection from "@/components/TestimonialsSection";
import HomeCta from "@/components/home/HomeCta";

export const metadata: Metadata = {
  title: "Références",
  description:
    "Études de cas et missions menées par Kalyce Consulting auprès de PME, ETI et grands groupes dans l'industrie, les services, la santé et le secteur public.",
  alternates: { canonical: "/references" },
};

const cases = [
  {
    sector: "Industrie · ETI",
    client: "Groupe industriel français",
    title: "Refonte de la stratégie de croissance internationale",
    context:
      "Acteur familial de 1 200 collaborateurs, dépendant à 70 % du marché domestique, en quête d'une trajectoire de croissance hors de France.",
    actions: [
      "Diagnostic stratégique et benchmark sectoriel sur 3 zones cibles",
      "Définition d'une trajectoire de croissance 5 ans (organique + M&A)",
      "Cadrage opérationnel des 3 premiers déploiements à l'international",
    ],
    results: [
      { value: "+18 %", label: "CA international en 24 mois" },
      { value: "3", label: "implantations réussies" },
      { value: "12", label: "mois de mission" },
    ],
    color: "bg-primary",
  },
  {
    sector: "Distribution · réseau",
    client: "Réseau de franchises",
    title: "Restructuration organisationnelle et performance opérationnelle",
    context:
      "Réseau de 280 points de vente confronté à une érosion de marge et à des processus opérationnels devenus illisibles après dix ans de croissance.",
    actions: [
      "Cartographie de la chaîne de valeur et des processus critiques",
      "Refonte du modèle opérationnel et de la gouvernance siège / réseau",
      "Programme de réduction de coûts maîtrisé sur 18 mois",
    ],
    results: [
      { value: "−18 %", label: "coûts indirects" },
      { value: "+4 pts", label: "marge opérationnelle" },
      { value: "92 %", label: "adhésion managers" },
    ],
    color: "bg-primary-dark",
  },
  {
    sector: "Numérique · scale-up",
    client: "Scale-up B2B SaaS",
    title: "Conduite du changement en hyper-croissance",
    context:
      "Passage de 80 à 350 collaborateurs en 18 mois, perte de cohésion et tensions entre la culture historique et les nouveaux arrivants.",
    actions: [
      "Diagnostic culturel approfondi et entretiens avec 60 collaborateurs",
      "Refonte des rituels managériaux et de la gouvernance produit",
      "Formation de 40 managers à la conduite du changement",
    ],
    results: [
      { value: "+22 pts", label: "engagement collaborateurs" },
      { value: "−35 %", label: "turnover" },
      { value: "9 mois", label: "durée du programme" },
    ],
    color: "bg-secondary",
  },
  {
    sector: "Santé · établissement",
    client: "Groupe hospitalier privé",
    title: "Plan de transformation managériale",
    context:
      "Tensions chroniques entre directions médicales et administratives, plan de retour à l'équilibre financier en parallèle.",
    actions: [
      "Médiation et alignement du comité exécutif",
      "Coaching individuel des 8 directeurs d'établissement",
      "Refonte des instances de pilotage et des indicateurs",
    ],
    results: [
      { value: "Équilibre", label: "atteint en 14 mois" },
      { value: "100 %", label: "équipe dirigeante stabilisée" },
      { value: "18 mois", label: "d'accompagnement" },
    ],
    color: "bg-primary-light",
  },
  {
    sector: "Secteur public",
    client: "Collectivité territoriale",
    title: "Modernisation organisationnelle d'une direction de 600 agents",
    context:
      "Cloisonnement entre directions, charge de travail mal répartie, transformation numérique en panne.",
    actions: [
      "Diagnostic organisationnel et cartographie des activités",
      "Nouvelle organisation matricielle alignée sur les missions de service public",
      "Plan d'accompagnement RH co-construit avec les partenaires sociaux",
    ],
    results: [
      { value: "−25 %", label: "délais de traitement" },
      { value: "0", label: "conflit social" },
      { value: "8 mois", label: "de cadrage" },
    ],
    color: "bg-primary",
  },
  {
    sector: "Énergie · ETI",
    client: "Acteur des énergies renouvelables",
    title: "Plan stratégique 2030 et préparation à la levée de fonds",
    context:
      "Forte croissance, marché en transformation rapide, besoin de structurer l'ambition pour convaincre les investisseurs.",
    actions: [
      "Définition de la vision stratégique 2030 et des piliers de valeur",
      "Modélisation financière et business case investisseurs",
      "Préparation des supports comité d'investissement et roadshow",
    ],
    results: [
      { value: "Série C", label: "bouclée en 6 mois" },
      { value: "× 3", label: "valorisation pré-money" },
      { value: "Top 10", label: "fonds européens convaincus" },
    ],
    color: "bg-primary-dark",
  },
];

const sectorsServed = [
  "Industrie",
  "Distribution & retail",
  "Santé",
  "Énergie",
  "Secteur public",
  "Tech & numérique",
  "Services B2B",
  "Finance & assurance",
];

export default function ReferencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Références"
        title={
          <>
            Des transformations menées au plus près{" "}
            <span className="text-primary-light">de la réalité.</span>
          </>
        }
        description="Quelques exemples de missions récentes, anonymisées par respect de la confidentialité que nous devons à nos clients."
      />

      {/* Sectors */}
      <section className="py-12 lg:py-16 bg-bg border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <FadeIn>
            <p className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-5">
              Secteurs accompagnés
            </p>
            <div className="flex flex-wrap gap-2.5">
              {sectorsServed.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full bg-bg-mauve text-primary text-sm font-medium border border-border"
                >
                  {s}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20 lg:py-28 bg-bg" aria-label="Études de cas">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-10">
          {cases.map((c, i) => (
            <FadeIn
              key={c.title}
              delay={i * 60}
              as="article"
              className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl border border-border overflow-hidden"
            >
              <div
                className={`${c.color} text-white p-8 lg:p-10 lg:col-span-4 flex flex-col justify-between min-h-[280px]`}
              >
                <span className="text-xs font-medium bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 self-start">
                  {c.sector}
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60 font-semibold mb-2">
                    Client
                  </p>
                  <p className="font-display text-xl font-semibold">
                    {c.client}
                  </p>
                </div>
              </div>

              <div className="p-8 lg:p-10 lg:col-span-8">
                <h3 className="font-display text-xl md:text-2xl font-bold text-primary mb-4">
                  {c.title}
                </h3>

                <p className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-2">
                  Contexte
                </p>
                <p className="text-text-light text-sm leading-relaxed mb-5">
                  {c.context}
                </p>

                <p className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-2">
                  Notre intervention
                </p>
                <ul className="space-y-1.5 mb-6">
                  {c.actions.map((a) => (
                    <li
                      key={a}
                      className="flex items-start gap-2.5 text-sm text-text"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-3 gap-4 pt-5 border-t border-border">
                  {c.results.map((r) => (
                    <div key={r.label}>
                      <p className="font-display text-2xl font-bold text-primary">
                        {r.value}
                      </p>
                      <p className="text-text-muted text-xs leading-tight mt-1">
                        {r.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-14">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-primary-dark transition-colors"
          >
            Discuter de votre projet
          </Link>
        </FadeIn>
      </section>

      <TestimonialsSection />
      <HomeCta />
    </>
  );
}
