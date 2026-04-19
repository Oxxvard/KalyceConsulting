import Link from "next/link";
import FadeIn from "../FadeIn";

const services = [
  {
    title: "Stratégie d'entreprise",
    description:
      "Vision, plan stratégique, diversification, croissance externe. Nous structurons vos choix de long terme.",
  },
  {
    title: "Conduite du changement",
    description:
      "Accompagnement managérial et culturel pour ancrer les transformations et embarquer les équipes.",
  },
  {
    title: "Organisation & Performance",
    description:
      "Modèle opérationnel, processus, gouvernance : aligner la structure sur l'ambition.",
  },
  {
    title: "Accompagnement dirigeants",
    description:
      "Coaching, sparring intellectuel et appui aux comités exécutifs sur leurs sujets sensibles.",
  },
];

export default function HomeServicesPreview() {
  return (
    <section
      className="py-20 lg:py-28 bg-bg"
      aria-label="Aperçu des services"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-white px-4 py-1.5 rounded-full mb-6">
              Nos expertises
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Quatre métiers,{" "}
              <em className="text-primary not-italic font-semibold italic">
                une seule exigence.
              </em>
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-medium text-white hover:text-primary inline-flex items-center gap-2 group"
          >
            Voir tous les services
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 80}>
              <Link
                href="/services"
                className="block liquid-glass rounded-2xl p-7 border border-white/10 hover:bg-[rgba(50,25,85,0.5)] transition-all h-full group"
              >
                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {s.description}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-5 text-xs font-medium text-accent">
                  En savoir plus <span>→</span>
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
