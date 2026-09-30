import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

/**
 * Titre et description par langue, et liens hreflang vers les autres
 * versions : sans cela, /de/contact se présentait à Google avec un titre
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
  const path = "/contact";
  const url = (l: string) =>
    l === routing.defaultLocale
      ? `https://www.kalyceconsulting.fr${path}`
      : `https://www.kalyceconsulting.fr/${l}${path}`;

  return {
    title: nav("contact"),
    description: tp("contactMD"),
    alternates: {
      canonical: url(locale),
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, url(l)])),
        "x-default": url(routing.defaultLocale),
      },
    },
  };
}


export default function ContactPage() {
  const nav = useTranslations("nav");
  const tp = useTranslations("pages");

  return (
    <>
      <BreadcrumbJsonLd name="Contact" href="/contact" />
      <PageHero
        eyebrow={nav("contact")}
        title={tp("contactT")}
        titleEm={tp("contactEm")}
        description={tp("contactD")}
      />
      <ContactSection />
    </>
  );
}
