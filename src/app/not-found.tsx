import Link from "next/link";

export const metadata = {
  title: "Page introuvable",
  description: "La page demandée est introuvable.",
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center pt-28 pb-20">
      <div className="mx-auto max-w-xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
          Erreur 404
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-primary leading-tight">
          Page introuvable.
        </h1>
        <p className="mt-5 text-text-light text-base leading-relaxed">
          Le lien que vous avez suivi est peut-être ancien ou la page a été
          déplacée. Revenons ensemble sur les rails.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-primary-dark transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 border border-primary/20 text-primary text-sm font-medium px-6 py-3 rounded-full hover:bg-primary/5 transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
