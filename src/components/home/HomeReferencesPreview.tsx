import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import FadeIn from "../FadeIn";

const references = ["r1","r2","r3"] as const;

export default function HomeReferencesPreview() {
  const t = useTranslations("refs");

  return (
    <section
      className="py-20 lg:py-28 bg-bg-light"
      aria-label="Aperçu références"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-ink px-4 py-1.5 rounded-full mb-6">
            {t("eyebrow")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight">
              {t("title")}{" "}
              <em className="text-primary-dark not-italic font-semibold italic">
                {t("titleEm")}
              </em>
            </h2>
          </div>
          <Link
            href="/references"
            className="text-sm font-medium text-primary-dark hover:text-primary inline-flex items-center gap-2 group"
          >
            {t("link")}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {references.map((key, i) => (
            <FadeIn
              key={key}
              delay={i * 100}
              as="article"
              className="bg-bg-mauve rounded-2xl p-7 text-white flex flex-col min-h-[280px]"
            >
              <span className="text-xs font-medium bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 self-start">
                {t(`${key}s`)}
              </span>
              <div className="mt-auto">
                <h3 className="font-display text-xl font-semibold mb-2">
                  {t(`${key}n`)}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  {t(`${key}d`)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
