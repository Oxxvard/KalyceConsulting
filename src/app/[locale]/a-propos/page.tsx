import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import HomeCta from "@/components/home/HomeCta";
import TeamSection from "@/components/TeamSection";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

/**
 * Titre et description par langue, et liens hreflang vers les autres
 * versions : sans cela, /de/a-propos se présentait à Google avec un titre
 * et une description en français.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const nav = await getTranslations({ locale, namespace: "nav" });
  const tp = await getTranslations({ locale, namespace: "pages" });
  const path = "/a-propos";
  const url = (l: string) =>
    l === routing.defaultLocale
      ? `https://www.kalyceconsulting.fr${path}`
      : `https://www.kalyceconsulting.fr/${l}${path}`;

  return {
    title: nav("about"),
    description: tp("aboutMD"),
    alternates: {
      canonical: url(locale),
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, url(l)])),
        "x-default": url(routing.defaultLocale),
      },
    },
  };
}


const values = ["v1", "v2", "v3", "v4", "v5", "v6"] as const;


// Cabinet récemment créé : pas d'historique à afficher. Ces valeurs décrivent
// l'offre et les engagements, et sont toutes vérifiables ailleurs sur le site
// (pages Services, Méthodologie, FAQ).
const figures = [
  { value: "4", key: "f1" },
  { value: "4", key: "f2" },
  { value: "3 sem.", key: "f3" },
  { value: "24 h", key: "f4" },
] as const;


export default function AboutPage() {
  const nav = useTranslations("nav");
  const tp = useTranslations("pages");
  const ab = useTranslations("aboutPage");

  return (
    <>
      <BreadcrumbJsonLd name="À propos" href="/a-propos" />
      <PageHero
        eyebrow={nav("about")}
        title={tp("aboutT")}
        titleEm={tp("aboutEm")}
        description={tp("aproposD")}
      />

      {/* Manifesto — DARK */}
      <section className="py-20 lg:py-28 bg-bg" aria-label="Manifeste">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <FadeIn className="space-y-6 text-text-light text-lg leading-relaxed">
            <p>{ab("m1")}</p>
            <p>{ab("m2")}</p>
            <p>{ab("m3")}</p>
          </FadeIn>
        </div>
      </section>

      {/* Figures — LIGHT contrast */}
      <section className="py-16 lg:py-20 bg-bg-light" aria-label="Chiffres clés">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {figures.map((f, i) => (
              <FadeIn
                key={ab(f.key)}
                delay={i * 80}
                className="bg-white rounded-2xl p-7 border border-border-light text-center"
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-primary-dark">
                  {f.value}
                </p>
                <p className="mt-2 text-ink-light text-xs uppercase tracking-wider font-semibold">
                  {ab(f.key)}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values — DARK with glass */}
      <section className="py-20 lg:py-28 bg-bg-soft" aria-label="Valeurs">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <FadeIn className="max-w-2xl mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-ink px-4 py-1.5 rounded-full mb-6">
              {ab("valuesTitle")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {ab("valuesH")}{" "}
              <em className="text-primary not-italic font-semibold italic">
                {ab("valuesHEm")}
              </em>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((key, i) => (
              <FadeIn
                key={key}
                delay={i * 60}
                className="liquid-glass rounded-2xl p-7 border border-white/10"
              >
                <h3 className="font-display text-lg font-semibold text-white mb-3">
                  {ab(`${key}t`)}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {ab(`${key}x`)}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team brief — DARK mauve */}
      <TeamSection />

      <HomeCta />
    </>
  );
}
