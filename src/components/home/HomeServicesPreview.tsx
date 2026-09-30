import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import FadeIn from "../FadeIn";

const services = ["s1","s2","s3","s4"] as const;

export default function HomeServicesPreview() {
  const t = useTranslations("services");

  return (
    <section
      className="py-20 lg:py-28 bg-bg kh-warm"
      aria-label="Aperçu des services"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-ink px-4 py-1.5 rounded-full mb-6">
              {t("eyebrow")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {t("title")}{" "}
              <em className="text-primary not-italic font-semibold italic">
              {t("titleEm")}
              </em>
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-medium text-white hover:text-primary inline-flex items-center gap-2 group"
          >
            {t("link")}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((key, i) => (
            <FadeIn key={key} delay={i * 80}>
              <Link
                href="/services"
                className="block liquid-glass rounded-2xl p-7 border border-white/10 hover:bg-[rgba(50,25,85,0.5)] transition-all h-full group"
              >
                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  {t(`${key}t`)}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {t(`${key}d`)}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-5 text-xs font-medium text-accent">
                  En savoir plus <span>→</span>
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
