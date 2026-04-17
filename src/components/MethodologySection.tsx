import FadeIn from "./FadeIn";

const steps = [
  {
    number: "01",
    title: "Diagnostic",
    description:
      "Immersion dans votre organisation, entretiens clés et analyse des enjeux stratégiques, opérationnels et humains.",
  },
  {
    number: "02",
    title: "Stratégie",
    description:
      "Co-construction d'une feuille de route claire, priorisée et alignée avec vos objectifs de croissance et de performance.",
  },
  {
    number: "03",
    title: "Mise en œuvre",
    description:
      "Pilotage des chantiers aux côtés de vos équipes, avec une approche pragmatique centrée sur les résultats concrets.",
  },
  {
    number: "04",
    title: "Ancrage",
    description:
      "Transfert de compétences, formation des équipes et dispositif de suivi pour pérenniser la transformation.",
  },
];

export default function MethodologySection() {
  return (
    <section
      id="methodologie"
      className="py-20 lg:py-28 bg-bg-mauve"
      aria-label="Notre méthodologie"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn className="max-w-2xl mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-white px-4 py-1.5 rounded-full mb-6">
            Méthodologie
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Une démarche structurée,{" "}
            <span className="text-primary-light">des résultats durables.</span>
          </h2>
          <p className="mt-4 text-text-light text-lg">
            Quatre étapes éprouvées pour transformer vos enjeux en trajectoires
            de succès.
          </p>
        </FadeIn>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <FadeIn
              as="li"
              key={step.number}
              delay={i * 100}
              className="relative bg-white rounded-2xl p-7 border border-gray-100 shadow-sm shadow-primary/5 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="font-display text-5xl font-bold text-accent/30 leading-none mb-4">
                {step.number}
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                {step.description}
              </p>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
