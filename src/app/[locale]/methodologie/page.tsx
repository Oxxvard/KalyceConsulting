import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import HomeCta from "@/components/home/HomeCta";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

/**
 * Titre et description par langue, et liens hreflang vers les autres
 * versions : sans cela, /de/methodologie se présentait à Google avec un titre
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
  const path = "/methodologie";
  const url = (l: string) =>
    l === routing.defaultLocale
      ? `https://www.kalyceconsulting.fr${path}`
      : `https://www.kalyceconsulting.fr/${l}${path}`;

  return {
    title: nav("method"),
    description: tp("methodMD"),
    alternates: {
      canonical: url(locale),
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, url(l)])),
        "x-default": url(routing.defaultLocale),
      },
    },
  };
}


const steps = ["1", "2", "3", "4"] as const;
const DELIVERABLES = ["a", "b", "c"] as const;


const principles = ["1", "2", "3", "4", "5", "6"] as const;


export default function MethodologiePage() {
  const nav = useTranslations("nav");
  const tp = useTranslations("pages");
  const m = useTranslations("methodPage");

  return (
    <>
      <BreadcrumbJsonLd name="Méthodologie" href="/methodologie" />
      <PageHero
        eyebrow={nav("method")}
        title={tp("methodT")}
        titleEm={tp("methodEm")}
        description={tp("methodologieD")}
      />

      {/* Steps timeline — DARK */}
      <section className="py-20 lg:py-28 bg-bg" aria-label="Étapes">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <FadeIn className="max-w-2xl mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-ink px-4 py-1.5 rounded-full mb-6">
              {m("stepsEyebrow")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
              {m("stepsH")}{" "}
              <em className="text-primary not-italic font-semibold italic">
                {m("stepsHEm")}
              </em>
            </h2>
          </FadeIn>

          <ol className="space-y-6">
            {steps.map((n, i) => (
              <FadeIn
                key={n}
                delay={i * 80}
                as="li"
                className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-10 liquid-glass rounded-2xl border border-white/10 p-7 md:p-9"
              >
                <div className="flex md:flex-col items-center md:items-start gap-3">
                  <span className="font-display text-5xl font-bold text-accent/50 leading-none">
                    {`0${n}`}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-text-muted font-semibold">
                    {m(`sd${n}`)}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white mb-2">
                    {m(`st${n}`)}
                  </h3>
                  <p className="text-text-light text-base leading-relaxed mb-5">
                    {m(`sx${n}`)}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-3">
                    Livrables
                  </p>
                  <ul className="space-y-2">
                    {DELIVERABLES.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2.5 text-sm text-text-light"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                        <span>{m(`sl${n}${d}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      {/* Principles — LIGHT contrast */}
      <section
        className="py-20 lg:py-28 bg-bg-light"
        aria-label="Principes"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <FadeIn className="max-w-2xl mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-ink px-4 py-1.5 rounded-full mb-6">
              Principes
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight">
              Six principes que{" "}
              <em className="text-primary-dark not-italic font-semibold italic">
                nous ne négocions pas.
              </em>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((n, i) => (
              <FadeIn
                key={n}
                delay={i * 60}
                className="bg-white rounded-2xl p-7 border border-border-light"
              >
                <h3 className="font-display text-lg font-semibold text-ink mb-2">
                  {m(`pt${n}`)}
                </h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  {m(`px${n}`)}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <HomeCta />
    </>
  );
}
