"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="text-sm text-white font-medium bg-white/10 border border-white/15 rounded-full px-5 py-3">
        Merci pour votre inscription.
      </p>
    );
  }

  return (
    <form
      className="flex flex-col sm:flex-row gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Adresse email
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Adresse email"
        className="flex-1 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm px-5 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
      />
      <button
        type="submit"
        className="rounded-full bg-white text-[#1a0e2d] text-sm font-medium px-7 py-3 hover:bg-accent-light transition-colors"
      >
        S&apos;inscrire
      </button>
    </form>
  );
}
