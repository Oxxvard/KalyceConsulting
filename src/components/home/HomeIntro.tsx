import { useTranslations } from "next-intl";
import FadeIn from "../FadeIn";

export default function HomeIntro() {
  const t = useTranslations("home");

  return (
    <section className="py-20 lg:py-28 bg-bg-soft kh-warm" aria-label="Présentation">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <FadeIn className="lg:col-span-5">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-ink px-4 py-1.5 rounded-full mb-6">
              {t("introEyebrow")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {t("introTitle")}{" "}
              <em className="text-primary not-italic font-semibold italic">
                {t("introTitleEm")}
              </em>
            </h2>
          </FadeIn>

          <FadeIn
            delay={120}
            className="lg:col-span-7 space-y-5 text-text-light text-base lg:text-lg leading-relaxed"
          >
            <p>{t("introP1")}</p>
            <p>{t("introP2")}</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
