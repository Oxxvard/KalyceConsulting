import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description:
    "Conditions générales de vente de Kalyce Consulting : prestations de conseil, tarifs, modalités d'exécution.",
  alternates: { canonical: "/cgv" },
};

export default function CgvPage() {
  return (
    <LegalLayout
      title="Conditions générales de vente"
      intro="Les présentes conditions générales de vente (CGV) s'appliquent à toutes les prestations de conseil fournies par Kalyce Consulting à ses clients professionnels. Toute commande implique l'acceptation sans réserve des présentes CGV."
      updatedAt="17 avril 2026"
    >
      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          Article 1 — Objet
        </h2>
        <p>
          Les présentes CGV régissent les relations contractuelles entre
          Kalyce Consulting (ci-après « le Prestataire ») et tout client
          professionnel (ci-après « le Client ») dans le cadre de missions de
          conseil en management, stratégie, conduite du changement et
          performance organisationnelle.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          Article 2 — Prestations
        </h2>
        <p>
          Les prestations sont définies précisément dans une proposition
          commerciale (« la Proposition ») remise au Client, comportant le
          périmètre, les livrables, le planning et les modalités financières.
          La Proposition signée tient lieu de contrat.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          Article 3 — Commande et formation du contrat
        </h2>
        <p>
          Le contrat est réputé formé à compter de la réception par le
          Prestataire de la Proposition signée par le Client, accompagnée le
          cas échéant de l&apos;acompte prévu.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          Article 4 — Tarifs
        </h2>
        <p>
          Les tarifs sont exprimés en euros hors taxes. Ils sont détaillés dans
          la Proposition et peuvent prendre la forme d&apos;un forfait, d&apos;une
          régie plafonnée ou d&apos;un taux journalier moyen. La TVA applicable
          est ajoutée au taux en vigueur.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          Article 5 — Modalités de paiement
        </h2>
        <p>
          Sauf stipulation contraire, les factures sont payables à 30 jours
          date de facture, par virement bancaire. Un acompte de 30 % peut être
          demandé à la signature. Tout retard de paiement entraîne de plein
          droit l&apos;application de pénalités égales à trois fois le taux
          d&apos;intérêt légal, ainsi qu&apos;une indemnité forfaitaire de
          recouvrement de 40 € (art. L.441-10 du Code de commerce).
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          Article 6 — Obligations des parties
        </h2>
        <p>
          Le Prestataire s&apos;engage à exécuter ses missions avec diligence et
          conformément aux règles de l&apos;art. Il est soumis à une obligation
          de moyens. Le Client s&apos;engage à fournir les informations et
          accès nécessaires au bon déroulement de la mission, ainsi qu&apos;à
          désigner un interlocuteur référent.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          Article 7 — Confidentialité
        </h2>
        <p>
          Les parties s&apos;engagent à une stricte confidentialité sur toutes
          les informations échangées dans le cadre de la mission, pendant
          toute sa durée et pour une période de 5 ans à compter de sa fin.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          Article 8 — Propriété intellectuelle
        </h2>
        <p>
          Les méthodologies, outils et savoir-faire utilisés par le Prestataire
          restent sa propriété exclusive. Les livrables spécifiques réalisés
          pour le Client lui sont cédés à paiement intégral, hors éléments
          préexistants et outils du Prestataire.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          Article 9 — Responsabilité
        </h2>
        <p>
          La responsabilité du Prestataire, pour tout dommage direct et prouvé,
          est expressément limitée au montant des honoraires perçus au titre
          de la mission concernée. Le Prestataire ne saurait être tenu
          responsable des dommages indirects (perte de chiffre d&apos;affaires,
          de clientèle, d&apos;image).
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          Article 10 — Résiliation
        </h2>
        <p>
          En cas de manquement grave de l&apos;une des parties à ses
          obligations, non régularisé dans un délai de 30 jours suivant mise
          en demeure par lettre recommandée avec accusé de réception, l&apos;autre
          partie pourra résilier le contrat de plein droit. Les prestations
          déjà réalisées resteront dues.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          Article 11 — Force majeure
        </h2>
        <p>
          Aucune partie ne pourra être tenue responsable d&apos;un manquement
          résultant d&apos;un cas de force majeure au sens de l&apos;article
          1218 du Code civil.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          Article 12 — Droit applicable et juridiction compétente
        </h2>
        <p>
          Les présentes CGV sont régies par le droit français. À défaut
          d&apos;accord amiable, tout litige relèvera de la compétence
          exclusive des tribunaux du ressort du siège social du Prestataire.
        </p>
      </section>
    </LegalLayout>
  );
}
