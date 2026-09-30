import { useTranslations } from "next-intl";
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

const commitments = ["1","2","3"] as const;

export default function StatsSection() {
  const t = useTranslations("commitments");

  return (
    <section className="py-20 lg:py-28 bg-bg-soft kh-warm">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn className="mb-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-ink px-4 py-1.5 rounded-full">
            {t("eyebrow")}
          </span>
        </FadeIn>

        <FadeIn className="max-w-2xl mb-14">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {t("title")}{" "}
            <em className="text-primary not-italic font-semibold italic">
              {t("titleEm")}
            </em>{" "}
            {t("titleEnd")}
          </h2>
          <p className="mt-6 text-text-light text-lg leading-relaxed">
            {t("text")}</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {commitments.map((n, i) => (
            <FadeIn key={n} delay={i * 100}>
              <div className="liquid-glass rounded-2xl p-8 border border-white/10">
                <p className="font-display text-5xl md:text-6xl font-bold text-white">
                  {t(`v${n}`)}
                </p>
                <p className="mt-3 text-text-light text-sm font-medium uppercase tracking-wider">
                  {t(`l${n}`)}
                </p>
                <p className="mt-1 text-text-muted text-sm">{t(`d${n}`)}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
