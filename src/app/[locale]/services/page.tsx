import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import HomeCta from "@/components/home/HomeCta";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

/**
 * Titre et description par langue, et liens hreflang vers les autres
 * versions : sans cela, /de/services se présentait à Google avec un titre
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
  const path = "/services";
  const url = (l: string) =>
    l === routing.defaultLocale
      ? `https://www.kalyceconsulting.fr${path}`
      : `https://www.kalyceconsulting.fr/${l}${path}`;

  return {
    title: nav("services"),
    description: tp("servicesMD"),
    alternates: {
      canonical: url(locale),
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, url(l)])),
        "x-default": url(routing.defaultLocale),
      },
    },
  };
}


const services = ["s1", "s2", "s3", "s4"] as const;
const ITEMS = ["i1", "i2", "i3", "i4", "i5"] as const;

export default function ServicesPage() {
  const nav = useTranslations("nav");
  const sp = useTranslations("servicesPage");
  const tp = useTranslations("pages");

  return (
    <>
      <BreadcrumbJsonLd name="Services" href="/services" />
      <PageHero
        eyebrow={nav("services")}
        title={tp("servicesT")}
        titleEm={tp("servicesEm")}
        description={tp("servicesD")}
      />

      <section className="py-20 lg:py-24 bg-bg">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-16 lg:space-y-20">
          {services.map((key, i) => (
            <FadeIn key={key}>
              <article
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${
                  i % 2 === 1 ? "lg:[&>:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-5 liquid-glass rounded-2xl p-8 lg:p-10 text-white border border-white/10 relative overflow-hidden min-h-[260px] flex flex-col justify-end">
                  <div
                    aria-hidden="true"
                    className="absolute -top-12 -right-10 w-48 h-48 rounded-full bg-primary/20 blur-2xl"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-16 -left-10 w-48 h-48 rounded-full bg-accent/15 blur-2xl"
                  />
                  <span className="relative font-display text-6xl font-bold text-primary/40">
                    0{i + 1}
                  </span>
                  <h2 className="relative font-display text-2xl md:text-3xl font-bold mt-4">
                    {sp(`${key}t`)}
                  </h2>
                </div>

                <div className="lg:col-span-7">
                  <p className="text-text-light text-lg leading-relaxed mb-6">
                    {sp(`${key}s`)}
                  </p>
                  <ul className="space-y-3">
                    {ITEMS.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-3 text-text-light text-sm"
                      >
                        <svg
                          className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{sp(`${key}${it}`)}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-7 text-sm font-medium text-primary hover:text-primary-light group"
                  >
                    Échanger sur un projet
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <HomeCta />
    </>
  );
}
