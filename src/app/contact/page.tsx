import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Kalyce Consulting pour échanger sur vos enjeux stratégiques. Premier échange sans engagement, réponse sous 48 heures ouvrées.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Échangeons sur{" "}
            <span className="text-primary-light">votre prochain projet.</span>
          </>
        }
        description="Décrivez-nous votre contexte. Un consultant senior vous recontacte sous 48 heures ouvrées pour un premier échange de 30 minutes, sans engagement."
      />
      <ContactSection />
    </>
  );
}
