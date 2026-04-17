import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et de protection des données personnelles de Kalyce Consulting, conforme au RGPD.",
  alternates: { canonical: "/confidentialite" },
};

export default function ConfidentialitePage() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      intro="Kalyce Consulting accorde la plus grande importance à la protection des données personnelles. Cette politique décrit comment nous collectons, utilisons et protégeons vos données conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés."
      updatedAt="17 avril 2026"
    >
      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          1. Responsable du traitement
        </h2>
        <p>
          Le responsable du traitement des données personnelles est Kalyce
          Consulting, dont le siège social est précisé dans les{" "}
          <a
            href="/mentions-legales"
            className="text-primary hover:underline"
          >
            mentions légales
          </a>
          . Pour toute question relative à cette politique, contactez-nous à{" "}
          <a
            href="mailto:contact@kalyceconsulting.fr"
            className="text-primary hover:underline"
          >
            contact@kalyceconsulting.fr
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          2. Données collectées
        </h2>
        <p>
          Nous collectons les données personnelles strictement nécessaires aux
          finalités ci-après :
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            <strong className="text-text">Formulaire de contact</strong> : nom,
            prénom, adresse e-mail, sujet, contenu du message.
          </li>
          <li>
            <strong className="text-text">Correspondance professionnelle</strong>{" "}
            : coordonnées communiquées dans le cadre de nos échanges.
          </li>
          <li>
            <strong className="text-text">Données techniques</strong> : adresse
            IP anonymisée, type de navigateur, pages consultées (mesure
            d&apos;audience uniquement).
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          3. Finalités et bases légales
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Répondre à vos demandes de contact ou de devis —{" "}
            <em>base : mesures précontractuelles</em>.
          </li>
          <li>
            Exécution des missions confiées —{" "}
            <em>base : exécution d&apos;un contrat</em>.
          </li>
          <li>
            Respect de nos obligations comptables et légales —{" "}
            <em>base : obligation légale</em>.
          </li>
          <li>
            Amélioration du site et mesure d&apos;audience —{" "}
            <em>base : intérêt légitime</em>.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          4. Durée de conservation
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Demandes de contact non abouties : 3 ans.</li>
          <li>Données clients actifs : durée de la relation contractuelle + 5 ans.</li>
          <li>Données comptables : 10 ans (obligation légale).</li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          5. Destinataires des données
        </h2>
        <p>
          Vos données sont destinées aux collaborateurs de Kalyce Consulting
          habilités à les traiter, ainsi qu&apos;à nos sous-traitants techniques
          (hébergeur, prestataire e-mail) soumis à des obligations strictes de
          confidentialité. Aucune donnée n&apos;est cédée ni vendue à des tiers.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          6. Vos droits
        </h2>
        <p>
          Conformément au RGPD, vous disposez des droits suivants sur vos
          données personnelles :
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Droit d&apos;accès, de rectification et d&apos;effacement</li>
          <li>Droit à la limitation et à la portabilité</li>
          <li>Droit d&apos;opposition pour motifs légitimes</li>
          <li>
            Droit de définir des directives post-mortem sur le sort de vos
            données
          </li>
          <li>
            Droit d&apos;introduire une réclamation auprès de la CNIL
            (www.cnil.fr)
          </li>
        </ul>
        <p className="mt-3">
          Pour exercer ces droits, contactez-nous à{" "}
          <a
            href="mailto:contact@kalyceconsulting.fr"
            className="text-primary hover:underline"
          >
            contact@kalyceconsulting.fr
          </a>
          . Une réponse vous sera apportée sous 30 jours maximum.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          7. Cookies
        </h2>
        <p>
          Le site n&apos;utilise que des cookies strictement nécessaires à son
          fonctionnement (mémorisation de vos préférences, sécurité). Aucun
          cookie de traçage publicitaire n&apos;est déposé. Vous pouvez à tout
          moment effacer les cookies depuis les paramètres de votre navigateur.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-primary mb-3">
          8. Sécurité
        </h2>
        <p>
          Nous mettons en œuvre des mesures techniques et organisationnelles
          appropriées pour protéger vos données contre toute perte, utilisation
          détournée, accès non autorisé, divulgation, altération ou
          destruction : chiffrement TLS, contrôle d&apos;accès, sauvegardes
          régulières.
        </p>
      </section>
    </LegalLayout>
  );
}
