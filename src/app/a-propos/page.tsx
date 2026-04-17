import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import HomeCta from "@/components/home/HomeCta";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Kalyce Consulting est un cabinet de conseil en management indépendant. Notre histoire, nos convictions et l'équipe qui accompagne les dirigeants.",
  alternates: { canonical: "/a-propos" },
};

const values = [
  {
    title: "Excellence",
    text: "Chaque mission est pilotée par un partner senior, accompagné de consultants confirmés. Pas de modèle pyramidal : du fond, du temps, de l'attention.",
  },
  {
    title: "Pragmatisme",
    text: "Une recommandation n'a de valeur que si elle est applicable. Nous testons, ajustons, livrons des dispositifs qui fonctionnent dans la vraie vie.",
  },
  {
    title: "Engagement",
    text: "Nous restons aux côtés de nos clients jusqu'à l'impact. Notre rémunération est transparente et nos engagements écrits, pas implicites.",
  },
  {
    title: "Indépendance",
    text: "Nous ne vendons aucun produit, ne touchons aucune commission. Notre seul intérêt est la réussite de la mission qui nous est confiée.",
  },
  {
    title: "Confidentialité",
    text: "Nos clients nous confient leurs sujets les plus sensibles. La discrétion n'est pas une option, c'est une condition d'exercice.",
  },
  {
    title: "Curiosité",
    text: "Nous lisons, nous nous formons, nous échangeons. Les meilleures réponses viennent rarement d'un seul cadre intellectuel.",
  },
];

const figures = [
  { value: "15", label: "années d'expertise" },
  { value: "150+", label: "missions menées" },
  { value: "50+", label: "clients accompagnés" },
  { value: "12", label: "secteurs couverts" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title={
          <>
            Un cabinet à taille humaine,{" "}
            <span className="text-primary-light">
              des ambitions sans limites.
            </span>
          </>
        }
        description="Kalyce Consulting réunit des consultants seniors, anciens dirigeants et experts sectoriels, qui partagent une même conviction : la qualité d'une décision se mesure à ses effets."
      />

      {/* Manifesto */}
      <section className="py-20 lg:py-28 bg-bg" aria-label="Manifeste">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <FadeIn className="space-y-6 text-text text-lg leading-relaxed">
            <p>
              Kalyce Consulting est un cabinet de conseil en management
              indépendant, fondé sur une intuition simple : les transformations
              qui durent ne se décrètent pas, elles s&apos;ancrent.
            </p>
            <p>
              Nous accompagnons des comités exécutifs et des directions
              générales sur leurs sujets les plus structurants : choix
              stratégiques, refontes organisationnelles, conduite du
              changement, performance opérationnelle. Notre intervention se
              veut exigeante sur le fond et bienveillante dans la forme.
            </p>
            <p>
              Nous croyons à la valeur du temps long, du dialogue franc et de
              la responsabilité partagée. Nos missions ne se mesurent pas au
              poids des slides livrés, mais à la qualité des décisions
              prises et à leur traduction concrète.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Figures */}
      <section className="py-16 lg:py-20 bg-bg-soft" aria-label="Chiffres clés">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {figures.map((f, i) => (
              <FadeIn
                key={f.label}
                delay={i * 80}
                className="bg-white rounded-2xl p-7 border border-border text-center"
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-primary">
                  {f.value}
                </p>
                <p className="mt-2 text-text-light text-xs uppercase tracking-wider font-semibold">
                  {f.label}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-bg" aria-label="Valeurs">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <FadeIn className="max-w-2xl mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-white px-4 py-1.5 rounded-full mb-6">
              Nos valeurs
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Six convictions{" "}
              <span className="text-primary-light">qui nous guident.</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <FadeIn
                key={v.title}
                delay={i * 60}
                className="bg-bg-soft rounded-2xl p-7 border border-border"
              >
                <h3 className="font-display text-lg font-semibold text-primary mb-3">
                  {v.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {v.text}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team brief */}
      <section className="py-20 lg:py-28 bg-bg-mauve" aria-label="Équipe">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-white px-4 py-1.5 rounded-full mb-6">
              Équipe
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
              Des consultants seniors,{" "}
              <span className="text-primary-light">d&apos;abord opérationnels.</span>
            </h2>
            <p className="text-text-light text-lg leading-relaxed">
              Notre équipe combine d&apos;anciens dirigeants, des consultants
              issus de cabinets internationaux et des experts sectoriels.
              Ce qui nous rassemble : un parcours opérationnel solide, et le
              refus du jargon pour le jargon.
            </p>
          </FadeIn>
        </div>
      </section>

      <HomeCta />
    </>
  );
}
