import Link from "next/link";
import FadeIn from "../FadeIn";

export default function HomeCta() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-white relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-20 w-[480px] h-[480px] rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-20 w-[480px] h-[480px] rounded-full bg-primary-light/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn className="max-w-3xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-white/15 text-white px-4 py-1.5 rounded-full mb-6">
            Démarrons
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Une décision à structurer ?{" "}
            <span className="text-accent-light">Parlons-en.</span>
          </h2>
          <p className="mt-6 text-white/80 text-lg leading-relaxed max-w-2xl">
            Premier échange de 30 minutes, sans engagement, pour comprendre
            votre contexte et qualifier les pistes d&apos;accompagnement.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary text-sm font-medium px-7 py-3.5 rounded-full hover:bg-accent-light transition-colors"
            >
              Démarrer un projet
            </Link>
            <Link
              href="/methodologie"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors"
            >
              Voir notre méthodologie
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
