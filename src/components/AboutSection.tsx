export default function AboutSection() {
  return (
    <section id="a-propos" className="py-20 lg:py-28 bg-bg">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column - main text */}
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-white px-4 py-1.5 rounded-full mb-8">
              À propos
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Un cabinet à taille humaine,{" "}
              <span className="text-primary-light">
                des ambitions sans limites.
              </span>
            </h2>
            <p className="mt-6 text-text-light text-lg leading-relaxed">
              Kalyce Consulting réunit une équipe de consultants expérimentés,
              anciens dirigeants et experts sectoriels. Notre approche combine
              rigueur méthodologique et pragmatisme pour des résultats concrets.
            </p>
          </div>

          {/* Right column - values */}
          <div className="space-y-8 lg:pt-16">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-5 h-5 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 2L13 8l6 1-4.5 4 1 6-5.5-3-5.5 3 1-6L1 9l6-1z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-primary mb-1">
                  Excellence
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Chaque mission est pilotée par des consultants seniors avec
                  plus de 10 ans d&apos;expérience dans leur domaine de
                  spécialité.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-5 h-5 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M13 7H7v6h6V7z" />
                  <path
                    fillRule="evenodd"
                    d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-primary mb-1">
                  Pragmatisme
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Nous privilégions des solutions opérationnelles et actionnables
                  plutôt que des rapports théoriques qui restent dans un tiroir.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-5 h-5 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zm8 0a3 3 0 11-6 0 3 3 0 016 0zm-4.07 11c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-primary mb-1">
                  Engagement
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Nous nous engageons aux côtés de nos clients sur la durée,
                  avec une relation de confiance fondée sur la transparence et
                  les résultats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
