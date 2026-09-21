/**
 * Fil d'Ariane structuré (schema.org BreadcrumbList).
 *
 * Google s'en sert pour remplacer l'URL brute par un chemin lisible dans les
 * résultats de recherche. « Accueil » est ajouté automatiquement en tête.
 */

const siteUrl = "https://www.kalyceconsulting.fr";

type Crumb = { name: string; href: string };

export default function BreadcrumbJsonLd({ name, href }: Crumb) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { name: "Accueil", href: "/" },
      { name, href },
    ].map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${siteUrl}${crumb.href === "/" ? "" : crumb.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
