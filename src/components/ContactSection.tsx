"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-primary" aria-label="Contact">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-white/15 text-white px-4 py-1.5 rounded-full mb-8">
              Contact
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Parlons de votre{" "}
              <span className="text-accent-light">prochain projet.</span>
            </h2>
            <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-lg">
              Vous avez un enjeu stratégique, un besoin de transformation ou une
              question ? Prenez contact avec notre équipe pour un échange sans
              engagement.
            </p>
          </div>

          {/* Right - contact card */}
          <div
            id="devis"
            className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8 lg:p-10"
          >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="nom"
                    className="block text-sm font-medium text-white/80 mb-1.5"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/80 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent"
                    placeholder="votre@email.fr"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="sujet"
                  className="block text-sm font-medium text-white/80 mb-1.5"
                >
                  Sujet
                </label>
                <input
                  type="text"
                  id="sujet"
                  name="sujet"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent"
                  placeholder="Votre besoin en quelques mots"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/80 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent resize-none"
                  placeholder="Décrivez votre projet ou vos enjeux..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-white font-medium text-sm px-6 py-3 rounded-full hover:bg-accent/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
