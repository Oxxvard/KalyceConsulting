import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import HomeCta from "@/components/home/HomeCta";

export const metadata: Metadata = {
  title: "Méthodologie",
  description:
    "Notre démarche en quatre étapes : diagnostic, stratégie, mise en œuvre et ancrage. Une méthodologie éprouvée qui combine rigueur et pragmatisme.",
  alternates: { canonical: "/methodologie" },
};

const steps = [
  {
    n: "01",
    title: "Diagnostic",
    duration: "2 à 4 semaines",
    description:
      "Immersion en profondeur dans votre organisation pour qualifier précisément les enjeux, identifier les leviers et écarter les fausses pistes.",
    deliverables: [
      "Cartographie des enjeux stratégiques, organisationnels et humains",
      "Analyse comparative des options stratégiques",
      "Synthèse exécutive et restitution au comité de direction",
    ],
  },
  {
    n: "02",
    title: "Stratégie",
    duration: "4 à 8 semaines",
    description:
      "Co-construction d'une feuille de route claire, priorisée et alignée avec vos objectifs. Nous structurons les choix, jamais à votre place.",
    deliverables: [
      "Plan stratégique pluri-annuel chiffré et phasé",
      "Business case et trajectoire de valeur",
      "Plan de transformation avec jalons et instances de pilotage",
    ],
  },
  {
    n: "03",
    title: "Mise en œuvre",
    duration: "3 à 12 mois",
    description:
      "Pilotage opérationnel des chantiers aux côtés de vos équipes. Notre rôle : faire avancer, débloquer, arbitrer, tenir le cap.",
    deliverables: [
      "PMO de programme et instances de pilotage",
      "Animation des chantiers et coordination transverse",
      "Reporting executive et alertes anticipées",
    ],
  },
  {
    n: "04",
    title: "Ancrage",
    duration: "Phase finale + suivi",
    description:
      "Transfert de compétences, formation des équipes et dispositif de suivi pour que la transformation tienne dans la durée, sans nous.",
    deliverables: [
      "Boîte à outils méthodologique pérenne",
      "Plan de montée en compétences interne",
      "Dispositif de mesure et revue post-mission",
    ],
  },
];

const principles = [
  {
    title: "Cadrage exigeant",
    text: "Pas de mission sans périmètre clair, livrables définis et critères de succès partagés. Cela évite 80 % des frictions.",
  },
  {
    title: "Faits avant opinions",
    text: "Nous nous appuyons sur la donnée, le terrain et les entretiens. Nos recommandations sont étayées, jamais idéologiques.",
  },
  {
    title: "Co-construction",
    text: "Vos équipes ne subissent pas la transformation : elles la portent. Nous travaillons avec elles, pas à leur place.",
  },
  {
    title: "Indépendance",
    text: "Aucun produit à vendre, aucune commission. Nos recommandations ne servent qu'un seul intérêt : le vôtre.",
  },
  {
    title: "Engagement résultat",
    text: "Nos contrats prévoient des jalons, des livrables et un dispositif de mesure d'impact. Nous nous engageons sur le résultat.",
  },
  {
    title: "Discrétion absolue",
    text: "Charte déontologique stricte, NDA systématique, gestion compartimentée des informations sensibles.",
  },
];

export default function MethodologiePage() {
  return (
    <>
      <PageHero
        eyebrow="Méthodologie"
        title={
          <>
            Une démarche structurée,{" "}
            <span className="text-primary-light">des résultats durables.</span>
          </>
        }
        description="Quatre étapes éprouvées, six principes intangibles. Notre méthodologie cherche moins à impressionner qu'à produire un impact réel et durable."
      />

      {/* Steps timeline */}
      <section className="py-20 lg:py-28 bg-bg" aria-label="Étapes">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <FadeIn className="max-w-2xl mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-white px-4 py-1.5 rounded-full mb-6">
              Démarche
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary leading-tight">
              Quatre étapes, du diagnostic à l&apos;ancrage.
            </h2>
          </FadeIn>

          <ol className="space-y-6">
            {steps.map((s, i) => (
              <FadeIn
                key={s.n}
                delay={i * 80}
                as="li"
                className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-10 bg-white rounded-2xl border border-border p-7 md:p-9"
              >
                <div className="flex md:flex-col items-center md:items-start gap-3">
                  <span className="font-display text-5xl font-bold text-accent/40 leading-none">
                    {s.n}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-text-muted font-semibold">
                    {s.duration}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-primary mb-2">
                    {s.title}
                  </h3>
                  <p className="text-text-light text-base leading-relaxed mb-5">
                    {s.description}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-3">
                    Livrables
                  </p>
                  <ul className="space-y-2">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2.5 text-sm text-text"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 lg:py-28 bg-bg-soft" aria-label="Principes">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <FadeIn className="max-w-2xl mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-white px-4 py-1.5 rounded-full mb-6">
              Principes
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Six principes que{" "}
              <span className="text-primary-light">nous ne négocions pas.</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <FadeIn
                key={p.title}
                delay={i * 60}
                className="bg-white rounded-2xl p-7 border border-border"
              >
                <h3 className="font-display text-lg font-semibold text-primary mb-2">
                  {p.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {p.text}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <HomeCta />
    </>
  );
}
