import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FaqSection from "@/components/FaqSection";
import HomeCta from "@/components/home/HomeCta";
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Réponses aux questions fréquentes sur les missions de Kalyce Consulting : déroulement, tarifs, secteurs, confidentialité.",
  alternates: { canonical: "/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Tout ce que vous voulez{" "}
            <span className="text-primary-light">savoir.</span>
          </>
        }
        description="Les questions que nos clients nous posent le plus souvent. Si la vôtre n'y figure pas, écrivez-nous."
      />
      <FaqSection />
      <HomeCta />
    </>
  );
}
