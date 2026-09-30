import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

interface PageHeroProps {
  eyebrow: string;
  /** Première partie du titre, en ivoire. */
  title: string;
  /** Seconde partie, mise en avant en doré. */
  titleEm?: string;
  description?: string;
}

export default function PageHero({
  eyebrow,
  title,
  titleEm,
  description,
}: PageHeroProps) {
  const t = useTranslations("pages");
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-bg-soft overflow-hidden">
      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-20 w-[480px] h-[480px] rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute top-20 -left-32 w-[420px] h-[420px] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <nav
          aria-label={t("breadcrumb")}
          className="text-xs text-text-light mb-5"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            {t("home")}
          </Link>
          <span className="mx-2 text-text-muted">/</span>
          <span className="text-primary font-medium">{eyebrow}</span>
        </nav>

        <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-ink px-4 py-1.5 rounded-full mb-5">
          {eyebrow}
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight max-w-3xl">
          {title}
          {titleEm && (
            <>
              {" "}
              <em className="text-primary not-italic font-semibold italic">
                {titleEm}
              </em>
            </>
          )}
        </h1>
        {description && (
          <p className="mt-6 text-text-light text-lg leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
