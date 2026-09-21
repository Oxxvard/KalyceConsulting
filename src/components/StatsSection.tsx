import FadeIn from "./FadeIn";

/**
 * Cabinet récemment créé : aucune statistique d'historique ici.
 *
 * Cette section affichait « 150+ missions réalisées », « 50+ clients
 * accompagnés » et « 15 années d'expertise » — trois chiffres faux. Ils sont
 * remplacés par des engagements de service, vérifiables et tenables dès la
 * première mission. Ces valeurs reprennent celles déjà annoncées ailleurs sur
 * le site (formulaire du hero et FAQ) : à ajuster si elles changent.
 */

const commitments = [
  { value: "24 h", label: "Réponse à votre demande", detail: "jours ouvrés" },
  { value: "3 sem.", label: "Diagnostic initial", detail: "cadrage des enjeux" },
  { value: "3 à 12", label: "Mois par mission", detail: "selon la complexité" },
];

export default function StatsSection() {
  return (
    <section className="py-20 lg:py-28 bg-bg-soft">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn className="mb-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-ink px-4 py-1.5 rounded-full">
            Nos engagements
          </span>
        </FadeIn>

        <FadeIn className="max-w-2xl mb-14">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Un cabinet jeune, des{" "}
            <em className="text-primary not-italic font-semibold italic">
              engagements clairs
            </em>{" "}
            dès le premier échange.
          </h2>
          <p className="mt-6 text-text-light text-lg leading-relaxed">
            Nous démarrons. Plutôt qu&apos;un palmarès, nous préférons annoncer
            ce sur quoi vous pouvez nous tenir : des délais tenus, un cadrage
            rapide et des effets mesurés avec vous.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {commitments.map((item, i) => (
            <FadeIn key={item.label} delay={i * 100}>
              <div className="liquid-glass rounded-2xl p-8 border border-white/10">
                <p className="font-display text-5xl md:text-6xl font-bold text-white">
                  {item.value}
                </p>
                <p className="mt-3 text-text-light text-sm font-medium uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="mt-1 text-text-muted text-sm">{item.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
