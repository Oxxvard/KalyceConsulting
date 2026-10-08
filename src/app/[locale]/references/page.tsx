import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import HomeCta from "@/components/home/HomeCta";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

/**
 * Titre et description par langue, et liens hreflang vers les autres
 * versions : sans cela, /de/references se présentait à Google avec un titre
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
  const path = "/references";
  const url = (l: string) =>
    l === routing.defaultLocale
      ? `https://www.kalyceconsulting.fr${path}`
      : `https://www.kalyceconsulting.fr/${l}${path}`;

  return {
    title: nav("references"),
    description: tp("refsMD"),
    alternates: {
      canonical: url(locale),
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, url(l)])),
        "x-default": url(routing.defaultLocale),
      },
    },
  };
}


const sectorsServed = ["sect1", "sect2", "sect3", "sect4", "sect5", "sect6", "sect7", "sect8"] as const;


export default function ReferencesPage() {
  const nav = useTranslations("nav");
  const tp = useTranslations("pages");
  const rp = useTranslations("refsPage");

  return (
    <>
      <BreadcrumbJsonLd name="Références" href="/references" />
      <PageHero
        eyebrow={nav("references")}
        title={tp("refsT")}
        titleEm={tp("refsEm")}
        description={tp("referencesD")}
      />

      {/* Sectors */}
      <section className="py-12 lg:py-16 bg-bg border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <FadeIn>
            <p className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-5">
              Secteurs accompagnés
            </p>
            <div className="flex flex-wrap gap-2.5">
              {sectorsServed.map((k) => (
                <span
                  key={k}
                  className="px-4 py-2 rounded-full bg-white/5 text-text-light text-sm font-medium border border-white/15"
                >
                  {rp(k)}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Comment se passe une mission — remplace les études de cas, que le
          cabinet ne peut pas encore produire. */}
      <section className="py-20 lg:py-28 bg-bg kh-warm" aria-label={rp("howT")}>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <FadeIn className="max-w-2xl mb-14">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {rp("newT")}{" "}
              <em className="text-primary not-italic font-semibold italic">
                {rp("newEm")}
              </em>
            </h2>
            <p className="mt-6 text-text-light text-lg leading-relaxed">
              {rp("newD")}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["1", "2", "3"].map((n, i) => (
              <FadeIn key={n} delay={i * 90}>
                <div className="h-full liquid-glass rounded-2xl p-8 border border-white/10">
                  <p className="font-display text-4xl font-bold text-primary/50 mb-4">
                    {`0${n}`}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-white mb-3">
                    {rp(`how${n}T`)}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed">
                    {rp(`how${n}X`)}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <HomeCta />
    </>
  );
}
