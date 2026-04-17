import Link from "next/link";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-b from-bg-mauve via-bg-soft to-bg overflow-hidden">
      {/* Decorative violet glow */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-20 w-[480px] h-[480px] rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute top-20 -left-32 w-[420px] h-[420px] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <nav aria-label="Fil d'Ariane" className="text-xs text-text-light mb-5">
          <Link href="/" className="hover:text-primary transition-colors">
            Accueil
          </Link>
          <span className="mx-2 text-text-muted">/</span>
          <span className="text-primary font-medium">{eyebrow}</span>
        </nav>

        <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-white px-4 py-1.5 rounded-full mb-5">
          {eyebrow}
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.05] tracking-tight max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-text-light text-lg leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
