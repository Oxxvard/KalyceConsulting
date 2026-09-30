import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import PageHero from "@/components/PageHero";
import FaqSection from "@/components/FaqSection";
import HomeCta from "@/components/home/HomeCta";
import { faqKeys } from "@/lib/faqs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

/**
 * Titre et description par langue, et liens hreflang vers les autres
 * versions : sans cela, /de/faq se présentait à Google avec un titre
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
  const path = "/faq";
  const url = (l: string) =>
    l === routing.defaultLocale
      ? `https://www.kalyceconsulting.fr${path}`
      : `https://www.kalyceconsulting.fr/${l}${path}`;

  return {
    title: nav("faq"),
    description: tp("faqMD"),
    alternates: {
      canonical: url(locale),
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, url(l)])),
        "x-default": url(routing.defaultLocale),
      },
    },
  };
}




export default function FaqPage() {
  const nav = useTranslations("nav");
  const tp = useTranslations("pages");
  const tf = useTranslations("faqs");

  return (
    <>
      <BreadcrumbJsonLd name="FAQ" href="/faq" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqKeys.map((n) => ({
              "@type": "Question",
              name: tf(`q${n}`),
              acceptedAnswer: { "@type": "Answer", text: tf(`a${n}`) },
            })),
          }),
        }}
      />
      <PageHero
        eyebrow={nav("faq")}
        title={tp("faqT")}
        titleEm={tp("faqEm")}
        description={tp("faqD")}
      />
      <FaqSection />
      <HomeCta />
    </>
  );
}
