import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site Kalyce Consulting : éditeur, hébergeur, propriété intellectuelle.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <LegalLayout
      title="Mentions légales"
      intro="Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN), les utilisateurs du site sont informés de l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi."
      updatedAt="17 avril 2026"
    >
      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          1. Éditeur du site
        </h2>
        <div className="space-y-1">
          <p><strong className="text-text">Kalyce Consulting</strong></p>
          <p>Forme juridique : [SAS / SARL / EURL]</p>
          <p>Capital social : [Montant] €</p>
          <p>Siège social : [Adresse complète]</p>
          <p>SIRET : [Numéro à 14 chiffres]</p>
          <p>RCS : [Ville et numéro]</p>
          <p>N° TVA intracommunautaire : [FR XX XXXXXXXXX]</p>
          <p>Directeur de la publication : [Nom et prénom]</p>
          <p>
            Contact :{" "}
            <a
              href="mailto:contact@kalyceconsulting.fr"
              className="text-primary hover:underline"
            >
              contact@kalyceconsulting.fr
            </a>
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          2. Hébergeur
        </h2>
        <div className="space-y-1">
          <p>[Nom de l&apos;hébergeur]</p>
          <p>[Adresse postale]</p>
          <p>[Téléphone]</p>
          <p>[Site web]</p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          3. Propriété intellectuelle
        </h2>
        <p>
          L&apos;ensemble des éléments du site (textes, graphismes, logos,
          icônes, images, marques, photographies) est la propriété exclusive de
          Kalyce Consulting ou de ses partenaires, et protégé par les lois
          françaises et internationales relatives à la propriété
          intellectuelle. Toute reproduction, représentation, modification,
          publication, transmission ou adaptation, totale ou partielle, par
          quelque procédé que ce soit, est interdite sans l&apos;autorisation
          écrite préalable de Kalyce Consulting.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          4. Responsabilité
        </h2>
        <p>
          Kalyce Consulting s&apos;efforce de fournir sur le site des
          informations aussi précises que possible. Toutefois, elle ne saurait
          être tenue responsable des omissions, inexactitudes ou carences dans
          la mise à jour, qu&apos;elles soient de son fait ou du fait de tiers
          partenaires qui lui fournissent ces informations.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          5. Liens hypertextes
        </h2>
        <p>
          Le site peut contenir des liens hypertextes vers d&apos;autres sites
          internet. Kalyce Consulting n&apos;exerce aucun contrôle sur ces
          sites et décline toute responsabilité quant à leur contenu.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          6. Droit applicable
        </h2>
        <p>
          Le présent site et les présentes mentions légales sont régis par le
          droit français. Tout litige relatif à leur interprétation ou à leur
          exécution relève de la compétence exclusive des tribunaux français.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          7. Médiation de la consommation
        </h2>
        <p>
          Conformément à l&apos;article L.612-1 du Code de la consommation,
          nous proposons un dispositif de médiation de la consommation. Les
          coordonnées du médiateur seront communiquées sur demande écrite.
        </p>
      </section>
    </LegalLayout>
  );
}
