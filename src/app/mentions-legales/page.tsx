import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Kalyce Consulting",
  description: "Mentions légales, conditions générales de vente et politique de confidentialité de Kalyce Consulting.",
};

export default function MentionsLegales() {
  return (
    <div className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        {/* Mentions légales */}
        <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8">
          Mentions légales
        </h1>

        <section className="mb-12">
          <h2 className="font-display text-xl font-semibold text-primary mb-4">
            Éditeur du site
          </h2>
          <div className="text-text-light leading-relaxed space-y-2">
            <p>
              <strong className="text-text">Kalyce Consulting</strong>
            </p>
            <p>[Forme juridique]</p>
            <p>Capital social : [Montant] €</p>
            <p>Siège social : [Adresse complète]</p>
            <p>SIRET : [Numéro SIRET]</p>
            <p>RCS : [Ville et numéro]</p>
            <p>Numéro TVA intracommunautaire : [Numéro]</p>
            <p>Directeur de la publication : [Nom du responsable]</p>
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

        <section className="mb-12">
          <h2 className="font-display text-xl font-semibold text-primary mb-4">
            Hébergement
          </h2>
          <div className="text-text-light leading-relaxed space-y-2">
            <p>[Nom de l&apos;hébergeur]</p>
            <p>[Adresse de l&apos;hébergeur]</p>
            <p>[Téléphone de l&apos;hébergeur]</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-xl font-semibold text-primary mb-4">
            Propriété intellectuelle
          </h2>
          <p className="text-text-light leading-relaxed">
            L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos,
            marques) est protégé par le droit de la propriété intellectuelle.
            Toute reproduction, représentation, modification, publication ou
            adaptation de tout ou partie des éléments du site est interdite, sauf
            autorisation écrite préalable de Kalyce Consulting.
          </p>
        </section>

        {/* CGV */}
        <hr className="border-gray-200 my-12" />

        <section id="cgv" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-8">
            Conditions générales de vente
          </h2>

          <div className="space-y-6 text-text-light leading-relaxed">
            <div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">
                Article 1 – Objet
              </h3>
              <p>
                Les présentes conditions générales de vente régissent les
                relations contractuelles entre Kalyce Consulting et ses clients
                dans le cadre de prestations de conseil en management.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">
                Article 2 – Prestations
              </h3>
              <p>
                [Décrire les prestations proposées : conseil en stratégie,
                accompagnement au changement, coaching dirigeants, etc.]
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">
                Article 3 – Tarifs et modalités de paiement
              </h3>
              <p>
                [Préciser les conditions tarifaires, les modalités de facturation
                et les délais de paiement.]
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">
                Article 4 – Responsabilité
              </h3>
              <p>
                [Définir les limites de responsabilité de Kalyce Consulting dans
                le cadre de ses prestations.]
              </p>
            </div>
          </div>
        </section>

        {/* Politique de confidentialité */}
        <hr className="border-gray-200 my-12" />

        <section id="confidentialite" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-8">
            Politique de confidentialité
          </h2>

          <div className="space-y-6 text-text-light leading-relaxed">
            <div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">
                Collecte des données
              </h3>
              <p>
                Kalyce Consulting collecte les données personnelles de ses
                utilisateurs uniquement dans le cadre de demandes de contact ou
                de devis. Ces données incluent : nom, prénom, adresse e-mail,
                numéro de téléphone et toute information communiquée
                volontairement.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">
                Utilisation des données
              </h3>
              <p>
                Les données collectées sont utilisées exclusivement pour
                répondre à vos demandes et améliorer nos services. Elles ne sont
                en aucun cas cédées à des tiers sans votre consentement
                explicite.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">
                Droits des utilisateurs
              </h3>
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD), vous disposez d&apos;un droit d&apos;accès, de
                rectification, de suppression et de portabilité de vos données.
                Pour exercer ces droits, contactez-nous à{" "}
                <a
                  href="mailto:contact@kalyceconsulting.fr"
                  className="text-primary hover:underline"
                >
                  contact@kalyceconsulting.fr
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">
                Cookies
              </h3>
              <p>
                Ce site peut utiliser des cookies à des fins de mesure
                d&apos;audience. Vous pouvez configurer votre navigateur pour
                refuser les cookies.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
