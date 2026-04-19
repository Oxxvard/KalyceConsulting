import FadeIn from "./FadeIn";

const stats = [
  { value: "150+", label: "Missions réalisées" },
  { value: "50+", label: "Clients accompagnés" },
  { value: "15", label: "Années d'expertise" },
];

export default function StatsSection() {
  return (
    <section className="py-20 lg:py-28 bg-bg-soft">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn className="mb-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-white px-4 py-1.5 rounded-full">
            En chiffres
          </span>
        </FadeIn>

        <FadeIn className="max-w-2xl mb-14">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Nous construisons des{" "}
            <em className="text-primary not-italic font-semibold italic">
              partenariats durables
            </em>{" "}
            avec des dirigeants ambitieux.
          </h2>
          <p className="mt-6 text-text-light text-lg leading-relaxed">
            Nos résultats parlent d&apos;eux-mêmes. Chaque mission est une
            opportunité de créer un impact mesurable et durable.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 100}>
              <div className="liquid-glass rounded-2xl p-8 border border-white/10">
                <p className="font-display text-5xl md:text-6xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="mt-3 text-text-light text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
