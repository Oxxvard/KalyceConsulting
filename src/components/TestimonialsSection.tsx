import { useTranslations } from "next-intl";
import FadeIn from "./FadeIn";

const testimonials = ["1","2","3"] as const;

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");

  return (
    <section
      id="temoignages"
      className="py-20 lg:py-28 bg-bg kh-warm"
      aria-label="Témoignages clients"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-ink px-4 py-1.5 rounded-full mb-6">
            {t("eyebrow")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {t("title")}{" "}
            <em className="text-primary not-italic font-semibold italic">
              {t("titleEm")}
            </em>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((n, i) => (
            <FadeIn
              as="article"
              key={n}
              delay={i * 120}
              className="liquid-glass rounded-2xl p-8 border border-white/10 flex flex-col"
            >
              <svg
                className="w-8 h-8 text-accent mb-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7.17 6A5.17 5.17 0 002 11.17v6.66h6.66v-6.66H5.17C5.17 9.41 6.59 8 8.34 8V6H7.17zm9 0A5.17 5.17 0 0011 11.17v6.66h6.66v-6.66h-3.49c0-1.76 1.42-3.17 3.17-3.17V6h-1.17z" />
              </svg>
              <blockquote className="text-text-light text-base leading-relaxed flex-1">
                {t(`q${n}`)}
              </blockquote>
              <footer className="mt-6 pt-5 border-t border-white/10">
                <p className="font-semibold text-white text-sm">{t(`a${n}`)}</p>
                <p className="text-text-muted text-xs mt-0.5">{t(`r${n}`)}</p>
              </footer>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
