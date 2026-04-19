"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AnimatedHeading from "./AnimatedHeading";

export default function HeroSection() {
  const [fadeIn, setFadeIn] = useState(false);
  const [ctaFadeIn, setCtaFadeIn] = useState(false);
  const [pillFadeIn, setPillFadeIn] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFadeIn(true), 800);
    const t2 = setTimeout(() => setCtaFadeIn(true), 1200);
    const t3 = setTimeout(() => setPillFadeIn(true), 1400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <section
      id="accueil"
      className="relative h-dvh flex flex-col overflow-hidden"
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40 z-[1]" />

      {/* Bottom fade — transitions video into next section's slate #0b0f10 */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 bottom-0 h-[30%] z-[5] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,15,16,0) 0%, rgba(11,15,16,0.6) 55%, #0b0f10 100%)",
        }}
      />

      {/* Hero content — anchored to bottom like VEX design */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 lg:px-16 pb-12 lg:pb-16 pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-8 max-w-[1400px] mx-auto w-full">
          {/* Left — heading + subtitle + CTAs */}
          <div>
            <AnimatedHeading
              lines={[
                { text: "Chaque décision", className: "text-white" },
                {
                  text: "façonne votre avenir.",
                  className: "text-primary italic",
                },
              ]}
              className="text-[clamp(2.5rem,5.5vw,5rem)]"
            />

            <p
              className="text-white/75 text-base lg:text-lg leading-relaxed max-w-xl mb-6 transition-all duration-1000"
              style={{ opacity: fadeIn ? 1 : 0 }}
            >
              Cabinet de conseil en management, nous accompagnons les
              dirigeants et leurs équipes dans la stratégie d&apos;entreprise,
              la conduite du changement et l&apos;optimisation
              organisationnelle.
            </p>

            <div
              className="flex flex-wrap gap-3 transition-all duration-1000"
              style={{ opacity: ctaFadeIn ? 1 : 0 }}
            >
              <Link
                href="/services"
                className="bg-white text-black text-sm font-medium px-7 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Nos services
              </Link>
              <Link
                href="/contact"
                className="liquid-glass text-white text-sm font-medium px-7 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
              >
                Démarrer un projet
              </Link>
            </div>
          </div>

          {/* Right — glass pill (like VEX design) */}
          <div
            className="hidden lg:flex justify-end transition-all duration-1000"
            style={{ opacity: pillFadeIn ? 1 : 0 }}
          >
            <div className="liquid-glass rounded-xl px-6 py-4 border border-white/20 inline-block">
              <span className="text-white/90 text-lg lg:text-xl font-light tracking-[-0.02em]">
                Stratégie. Transformation. Performance.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-white/50 flex items-center gap-2 animate-floaty"
        aria-hidden="true"
      >
        Scroll ↓
      </div>
    </section>
  );
}
