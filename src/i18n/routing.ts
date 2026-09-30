import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

/**
 * Langues servies.
 *
 * Le français reste la langue par défaut et n'est pas préfixé : kalyceconsulting.fr
 * continue de répondre en français, les autres langues vivent sous /en, /it, /es, /de.
 *
 * Le choix des langues suit l'implantation : l'anglais pour les affaires
 * internationales, l'italien parce que la frontière est à 40 km de Nice,
 * l'espagnol, et l'allemand pour la clientèle germanophone très présente
 * sur la Riviera et autour de Monaco.
 */
export const routing = defineRouting({
  locales: ["fr", "en", "it", "es", "de"],
  defaultLocale: "fr",
  localePrefix: "as-needed",
  /**
   * Pas de redirection selon la langue du navigateur.
   *
   * Activée par défaut, elle envoyait un visiteur français sur /en et aurait
   * redirigé les robots d'indexation — qui explorent surtout depuis les
   * États-Unis — vers la version anglaise. La racine reste donc française,
   * et la langue se choisit explicitement dans la nav.
   */
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  it: "Italiano",
  es: "Español",
  de: "Deutsch",
};

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
