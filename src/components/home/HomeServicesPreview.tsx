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
    <section className="py-20 lg:py-28 bg-bg-soft" aria-label="Aperçu des services">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-white px-4 py-1.5 rounded-full mb-6">
              Nos expertises
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Quatre métiers,{" "}
              <span className="text-primary-light">une seule exigence.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-medium text-primary hover:text-primary-dark inline-flex items-center gap-2 group"
          >
            Voir tous les services
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 80}>
              <Link
                href="/services"
                className="block bg-white rounded-2xl p-7 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all h-full"
              >
                <h3 className="font-display text-xl font-semibold text-primary mb-2">
                  {s.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {s.description}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-5 text-xs font-medium text-accent">
                  En savoir plus
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
