import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Plus_Jakarta_Sans } from "next/font/google";
import { routing, type Locale } from "@/i18n/routing";
import "../globals.css";

// Linéale géométrique unique, dans l'esprit du modèle de référence :
// titres très serrés et gras, texte courant dans la même famille.
// Auto-hébergée par Next, donc sans requête bloquante.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const siteUrl = "https://www.kalyceconsulting.fr";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/** Une URL par langue : le français à la racine, les autres préfixées. */
function urlFor(locale: string, path = "") {
  return locale === routing.defaultLocale
    ? `${siteUrl}${path}`
    : `${siteUrl}/${locale}${path}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t("title"),
      template: `%s | Kalyce Consulting`,
    },
    description: t("description"),
    authors: [{ name: "Kalyce Consulting" }],
    creator: "Kalyce Consulting",
    publisher: "Kalyce Consulting",
    alternates: {
      canonical: urlFor(locale),
      languages: {
        ...Object.fromEntries(
          routing.locales.map((l) => [l, urlFor(l)])
        ),
        "x-default": urlFor(routing.defaultLocale),
      },
    },
    openGraph: {
      type: "website",
      locale,
      url: urlFor(locale),
      siteName: "Kalyce Consulting",
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: t("ogAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "business",
  };
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kalyce Consulting",
  description:
    "Cabinet de conseil en management : stratégie d'entreprise, conduite du changement, performance organisationnelle.",
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  image: `${siteUrl}/og-image.jpg`,
  email: "contact@kalyceconsulting.fr",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Provence-Alpes-Côte d'Azur",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "Place", name: "Côte d'Azur" },
    { "@type": "AdministrativeArea", name: "Alpes-Maritimes" },
    { "@type": "Country", name: "France" },
  ],
  serviceType: [
    "Conseil en stratégie",
    "Conduite du changement",
    "Organisation et performance",
    "Accompagnement de dirigeants",
  ],
  sameAs: [],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale as Locale);
  const nav = await getTranslations({ locale, namespace: "nav" });

  return (
    <html lang={locale} className={`${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body
        className="font-body text-text bg-bg antialiased"
        suppressHydrationWarning
      >
        <div className="bg-ambient" aria-hidden="true" />
        <NextIntlClientProvider>
        <div className="relative z-[1]">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:bg-primary focus:text-ink focus:px-4 focus:py-2 focus:rounded-md"
          >
            {nav("skip")}
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <CookieBanner />
        </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
