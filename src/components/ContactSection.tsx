"use client";

import { useState } from "react";

const sectors = [
  "Industrie",
  "Services B2B",
  "Santé",
  "Secteur public",
  "Énergie & utilities",
  "Retail & distribution",
  "Finance & assurance",
  "Tech & numérique",
  "Autre",
];

const budgets = [
  "Moins de 25 000 €",
  "25 000 € – 75 000 €",
  "75 000 € – 200 000 €",
  "Plus de 200 000 €",
  "Je ne sais pas encore",
];

const services = [
  "Stratégie d'entreprise",
  "Conduite du changement",
  "Organisation & performance",
  "Accompagnement dirigeants",
  "Diagnostic exploratoire",
  "Autre / à définir",
];

const timelines = [
  "Immédiat (< 1 mois)",
  "Court terme (1 – 3 mois)",
  "Moyen terme (3 – 6 mois)",
  "Long terme (> 6 mois)",
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-bg" aria-label="Contact">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
          {/* Left column - intro + info */}
          <aside>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-white px-4 py-1.5 rounded-full mb-6">
              Contact
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Parlons de votre{" "}
              <em className="text-primary not-italic font-semibold italic">
                prochain projet.
              </em>
            </h2>
            <p className="mt-5 text-text-light text-base leading-relaxed">
              Échangeons sans engagement sur vos enjeux stratégiques. Notre
              équipe vous répond sous 48 heures ouvrées.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-text-muted font-semibold">
                    Email
                  </p>
                  <a
                    href="mailto:contact@kalyceconsulting.fr"
                    className="text-white hover:text-primary transition-colors text-sm font-medium"
                  >
                    contact@kalyceconsulting.fr
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-text-muted font-semibold">
                    Téléphone
                  </p>
                  <a
                    href="tel:+33100000000"
                    className="text-white hover:text-primary transition-colors text-sm font-medium"
                  >
                    +33 1 00 00 00 00
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-text-muted font-semibold">
                    Adresse
                  </p>
                  <p className="text-white text-sm font-medium">Paris, France</p>
                </div>
              </li>
            </ul>

            <div className="mt-10 liquid-glass rounded-2xl border border-white/10 p-5">
              <p className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-1">
                Confidentialité
              </p>
              <p className="text-text-light text-sm leading-relaxed">
                Vos données restent strictement confidentielles et ne sont
                jamais transmises à des tiers.
              </p>
            </div>
          </aside>

          {/* Right column - form card */}
          <div
            id="devis"
            className="liquid-glass rounded-3xl border border-white/10 p-8 md:p-10"
          >
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Merci pour votre message
                </h3>
                <p className="text-text-light text-sm">
                  Nous reviendrons vers vous sous 48 heures ouvrées.
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field id="prenom" label="Prénom" required>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      required
                      className={inputClass}
                      placeholder="Marie"
                    />
                  </Field>
                  <Field id="nom" label="Nom" required>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required
                      className={inputClass}
                      placeholder="Dupont"
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field id="email" label="Email professionnel" required>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={inputClass}
                      placeholder="marie@entreprise.fr"
                    />
                  </Field>
                  <Field id="telephone" label="Téléphone">
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      className={inputClass}
                      placeholder="06 12 34 56 78"
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field id="entreprise" label="Entreprise" required>
                    <input
                      type="text"
                      id="entreprise"
                      name="entreprise"
                      required
                      className={inputClass}
                      placeholder="Nom de votre société"
                    />
                  </Field>
                  <Field id="poste" label="Fonction">
                    <input
                      type="text"
                      id="poste"
                      name="poste"
                      className={inputClass}
                      placeholder="Directeur Général"
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field id="secteur" label="Secteur d'activité">
                    <select id="secteur" name="secteur" className={inputClass}>
                      <option value="">Sélectionner…</option>
                      {sectors.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field id="taille" label="Taille de l'entreprise">
                    <select id="taille" name="taille" className={inputClass}>
                      <option value="">Sélectionner…</option>
                      <option>1 – 49 collaborateurs</option>
                      <option>50 – 249 collaborateurs</option>
                      <option>250 – 999 collaborateurs</option>
                      <option>1 000 – 5 000 collaborateurs</option>
                      <option>Plus de 5 000 collaborateurs</option>
                    </select>
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field id="service" label="Service souhaité" required>
                    <select
                      id="service"
                      name="service"
                      required
                      className={inputClass}
                    >
                      <option value="">Sélectionner…</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field id="echeance" label="Échéance">
                    <select id="echeance" name="echeance" className={inputClass}>
                      <option value="">Sélectionner…</option>
                      {timelines.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field id="budget" label="Budget estimé">
                  <select id="budget" name="budget" className={inputClass}>
                    <option value="">Sélectionner…</option>
                    {budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field id="message" label="Décrivez votre projet" required>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Contexte, enjeux, objectifs, contraintes…"
                  />
                </Field>

                <label className="flex items-start gap-3 text-xs text-text-light">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 w-4 h-4 accent-primary"
                  />
                  <span>
                    J&apos;accepte que mes données soient traitées dans le cadre
                    de ma demande, conformément à la{" "}
                    <a
                      href="/confidentialite"
                      className="text-primary underline underline-offset-2"
                    >
                      politique de confidentialité
                    </a>
                    .
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full bg-white text-[#1a0e2d] font-medium text-sm px-6 py-4 rounded-full hover:bg-accent-light transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Envoyer ma demande
                </button>

                <p className="text-center text-text-muted text-xs">
                  Réponse sous 48 heures ouvrées · Premier échange sans
                  engagement
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-white mb-2"
      >
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}
