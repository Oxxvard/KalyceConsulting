"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="text-sm text-primary font-medium bg-bg-mauve border border-border rounded-md px-4 py-3">
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
        className="flex-1 border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
      />
      <button
        type="submit"
        className="bg-primary text-white text-sm font-medium px-7 py-3 hover:bg-primary-dark transition-colors"
      >
        S&apos;inscrire
      </button>
    </form>
  );
}
