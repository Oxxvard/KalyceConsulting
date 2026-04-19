import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const siteUrl = "https://www.kalyceconsulting.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kalyce Consulting | Conseil en Management & Stratégie",
    template: "%s | Kalyce Consulting",
  },
  description:
    "Cabinet de conseil en management. Nous accompagnons dirigeants et comités exécutifs dans la stratégie, la conduite du changement et la performance organisationnelle.",
  keywords: [
    "conseil en management",
    "cabinet de conseil",
    "stratégie d'entreprise",
    "conduite du changement",
    "transformation organisationnelle",
    "accompagnement dirigeants",
    "performance",
    "Kalyce Consulting",
  ],
  authors: [{ name: "Kalyce Consulting" }],
  creator: "Kalyce Consulting",
  publisher: "Kalyce Consulting",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Kalyce Consulting",
    title: "Kalyce Consulting | Conseil en Management & Stratégie",
    description:
      "Cabinet de conseil accompagnant dirigeants et comités exécutifs dans leur transformation stratégique.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalyce Consulting | Conseil en Management",
    description:
      "Cabinet de conseil en management : stratégie, transformation, performance.",
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
  icons: {
    icon: "/KalyceLogo.svg",
    apple: "/KalyceLogo.svg",
  },
  category: "business",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kalyce Consulting",
  description:
    "Cabinet de conseil en management : stratégie d'entreprise, conduite du changement, performance organisationnelle.",
  url: siteUrl,
  logo: `${siteUrl}/KalyceLogo.svg`,
  address: {
    "@type": "PostalAddress",
    addressCountry: "FR",
  },
  areaServed: "FR",
  serviceType: [
    "Conseil en stratégie",
    "Conduite du changement",
    "Organisation et performance",
    "Accompagnement de dirigeants",
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap"
          rel="stylesheet"
        />
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
        <div className="relative z-[1]">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
          >
            Aller au contenu principal
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
