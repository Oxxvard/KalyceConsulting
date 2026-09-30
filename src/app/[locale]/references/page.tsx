import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import TestimonialsSection from "@/components/TestimonialsSection";
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


// Un cas = un numéro + son visuel ; tous les textes viennent du catalogue.
const cases = [
  { n: "1", image: "/images/secteurs/industrie.webp" },
  { n: "2", image: "/images/secteurs/distribution.webp" },
  { n: "3", image: "/images/secteurs/numerique.webp" },
  { n: "4", image: "/images/secteurs/sante.webp" },
  { n: "5", image: "/images/secteurs/public.webp" },
  { n: "6", image: "/images/secteurs/energie.webp" },
] as const;
const ACTIONS = ["a1", "a2", "a3"] as const;
const RESULTS = ["1", "2", "3"] as const;


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

      {/* Case studies — DARK with glass */}
      <section className="py-20 lg:py-28 bg-bg" aria-label="Études de cas">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-10">
          {cases.map((c, i) => (
            <FadeIn
              key={c.n}
              delay={i * 60}
              as="article"
              className="grid grid-cols-1 lg:grid-cols-12 liquid-glass rounded-3xl border border-white/10 overflow-hidden"
            >
              <div className="bg-bg-mauve text-white p-8 lg:p-10 lg:col-span-4 flex flex-col justify-between min-h-[280px] relative overflow-hidden">
                {/* Visuel d'ambiance du secteur — photo libre de droit (Pexels),
                    pas une image du client, d'où l'alt explicite. */}
                <Image
                  src={c.image}
                  alt={rp(`c${c.n}alt`)}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
                {/* Pas de voile plein cadre : la photo doit se voir. Seul un
                    dégradé bas porte la lisibilité du nom du client. */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-bg via-bg/70 to-transparent"
                />
                <span className="relative text-xs font-medium bg-bg/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/25 self-start shadow-lg">
                  {rp(`c${c.n}sec`)}
                </span>
                <div className="relative">
                  <p className="text-xs uppercase tracking-wider text-white/60 font-semibold mb-2">
                    {rp("client")}
                  </p>
                  <p className="font-display text-xl font-semibold">
                    {rp(`c${c.n}cli`)}
                  </p>
                </div>
              </div>

              <div className="p-8 lg:p-10 lg:col-span-8">
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-4">
                  {rp(`c${c.n}tit`)}
                </h3>

                <p className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-2">
                  {rp("context")}
                </p>
                <p className="text-text-light text-sm leading-relaxed mb-5">
                  {rp(`c${c.n}ctx`)}
                </p>

                <p className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-2">
                  {rp("intervention")}
                </p>
                <ul className="space-y-1.5 mb-6">
                  {ACTIONS.map((a) => (
                    <li
                      key={a}
                      className="flex items-start gap-2.5 text-sm text-text-light"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                      <span>{rp(`c${c.n}${a}`)}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-3 gap-4 pt-5 border-t border-white/10">
                  {RESULTS.map((r) => (
                    <div key={r}>
                      <p className="font-display text-2xl font-bold text-primary">
                        {rp(`c${c.n}rv${r}`)}
                      </p>
                      <p className="text-text-muted text-xs leading-tight mt-1">
                        {rp(`c${c.n}rl${r}`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-14">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0B1220] text-sm font-medium px-7 py-3.5 rounded-full hover:bg-accent-light transition-colors"
          >
            Discuter de votre projet
          </Link>
        </FadeIn>
      </section>

      <TestimonialsSection />
      <HomeCta />
    </>
  );
}
