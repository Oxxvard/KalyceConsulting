"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-bg-cream" aria-label="Contact">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-white px-4 py-1.5 rounded-full mb-6">
            Contact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Parlons de votre{" "}
            <span className="text-primary-light">prochain projet.</span>
          </h2>
          <p className="mt-4 text-text-light text-lg">
            Échangeons sans engagement sur vos enjeux stratégiques.
          </p>
        </div>

        {/* Form card */}
        <div
          id="devis"
          className="mx-auto max-w-2xl bg-white rounded-3xl shadow-lg shadow-primary/5 border border-gray-100 p-8 md:p-12"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="nom"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Nom complet
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  className="w-full bg-bg border border-gray-200 rounded-xl px-4 py-3 text-text text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-bg border border-gray-200 rounded-xl px-4 py-3 text-text text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="jean@entreprise.fr"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="sujet"
                className="block text-sm font-medium text-text mb-2"
              >
                Sujet
              </label>
              <input
                type="text"
                id="sujet"
                name="sujet"
                className="w-full bg-bg border border-gray-200 rounded-xl px-4 py-3 text-text text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                placeholder="Stratégie, transformation, coaching..."
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-text mb-2"
              >
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full bg-bg border border-gray-200 rounded-xl px-4 py-3 text-text text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                placeholder="Décrivez votre projet, vos enjeux et vos attentes..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-medium text-sm px-6 py-3.5 rounded-xl hover:bg-primary-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Envoyer ma demande
            </button>

            <p className="text-center text-text-muted text-xs">
              Nous vous répondons sous 48h. Vos données restent confidentielles.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
