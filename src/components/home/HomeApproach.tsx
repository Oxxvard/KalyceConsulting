import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import FadeIn from "../FadeIn";

const pillars = [
  { label: "01", key: "p1" },
  { label: "02", key: "p2" },
  { label: "03", key: "p3" },
] as const;

export default function HomeApproach() {
  const t = useTranslations("home");

  return (
    <section
      className="py-20 lg:py-28 bg-bg-light kh-warm kh-warm-light"
      aria-label="Notre approche"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn className="max-w-2xl mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-ink px-4 py-1.5 rounded-full mb-6">
            {t("approachEyebrow")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight">
            {t("approachTitle")}{" "}
            <em className="text-primary-dark not-italic font-semibold italic">
              {t("approachTitleEm")}
            </em>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <FadeIn
              key={p.label}
              delay={i * 100}
              className="bg-white rounded-2xl p-8 border border-border-light"
            >
              <div className="font-display text-4xl font-bold text-accent/40 mb-4">
                {p.label}
              </div>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                {t(`${p.key}Title`)}
              </h3>
              <p className="text-ink-light text-sm leading-relaxed">
                {t(`${p.key}Text`)}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12">
          <Link
            href="/methodologie"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-dark hover:text-primary group"
          >
            {t("approachLink")}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
