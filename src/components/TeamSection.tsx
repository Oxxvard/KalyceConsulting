import { useTranslations } from "next-intl";
import Image from "next/image";
import FadeIn from "./FadeIn";

/**
 * Les trois associés du cabinet.
 *
 * ⚠️ INCOMPLET — les noms sont réels, il manque pour chacun le parcours
 * (`bio`), le LinkedIn et le portrait. Déposez les photos dans
 * public/images/equipe/ (carré, 800×800 minimum) et renseignez `photo`.
 *
 * Tant que `photo` est vide, la carte affiche les initiales sur un fond
 * dégradé — une absence assumée plutôt qu'une image manquante.
 */

export type Member = {
  name: string;
  bio: string;
  /** Chemin dans /public, ex. "/images/equipe/prenom-nom.webp" */
  photo?: string;
  linkedin?: string;
};

const team: Member[] = [
  {
    name: "Florian Vial",
    // ⚠️ À RÉDIGER : deux lignes de parcours réel. Laissé vide volontairement,
    //    inventer le passé d'une personne nommée n'est pas une option.
    bio: "",
    // linkedin: "https://www.linkedin.com/in/…",
  },
  {
    name: "Florian Buzzo",
    bio: "",
  },
  {
    name: "Anthony Armand",
    bio: "",
  },
];

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

const teamJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kalyce Consulting",
  url: "https://www.kalyceconsulting.fr",
  employee: team.map((m) => ({
    "@type": "Person",
    name: m.name,
    jobTitle: "Associé",
    ...(m.linkedin ? { sameAs: [m.linkedin] } : {}),
  })),
};

export default function TeamSection() {
  const t = useTranslations("aboutPage");

  return (
    <section
      className="py-20 lg:py-28 bg-bg-mauve relative overflow-hidden"
      aria-label="Équipe"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamJsonLd) }}
      />

      <div
        aria-hidden="true"
        className="absolute -top-32 -right-20 w-[480px] h-[480px] rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-20 w-[480px] h-[480px] rounded-full bg-accent/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn className="max-w-2xl mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-white/15 text-white px-4 py-1.5 rounded-full mb-6">
            {t("teamEyebrow")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {t("teamTitle")}{" "}
            <em className="text-primary not-italic font-semibold italic">
              {t("teamTitleEm")}
            </em>
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
          {t("teamText")}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <FadeIn key={m.name} delay={i * 90}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden flex flex-col">
                <div className="relative aspect-square w-full bg-gradient-to-br from-bg-soft to-bg-dark">
                  {m.photo ? (
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 flex items-center justify-center font-display text-6xl text-primary/70"
                    >
                      {initials(m.name)}
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col gap-2 flex-1">
                  <h3 className="font-display text-lg text-white">{m.name}</h3>
                  {m.bio ? (
                    <p className="text-white/70 text-sm leading-relaxed flex-1">
                      {m.bio}
                    </p>
                  ) : (
                    <p className="flex-1" />
                  )}
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-primary transition-colors mt-1 py-1"
                    >
                      LinkedIn
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
