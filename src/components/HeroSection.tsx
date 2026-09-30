"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

/**
 * Hero cinématique, repris de la structure du modèle Nixtio
 * (« Landing Page Design for Lodge Booking ») :
 *
 *   — fond vidéo plein cadre,
 *   — grand titre à gauche dont la ligne médiane est en gris translucide,
 *   — accroche et ancrage géographique en bas à gauche,
 *   — carte de réservation en verre dépoli à droite, grille de champs 2×2,
 *     ligne de méta, bouton pleine largeur.
 *
 * La carte de réservation devient une carte de qualification : dates et
 * voyageurs cèdent la place à l'enjeu, la taille d'entreprise et l'email.
 * La palette reste celle du logo — encre et or — là où le modèle est froid.
 */

export default function HeroSection() {
  const t = useTranslations("hero");
  const f = useTranslations("form");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  /**
   * `autoplay muted playsinline` suffit en théorie, mais certains
   * navigateurs refusent quand même de démarrer (onglet en arrière-plan,
   * économie d'énergie, réglages stricts). On relance donc à l'affichage,
   * puis à la première interaction si la promesse a été rejetée.
   */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let stopped = false;
    const reveal = () => setVideoReady(true);

    const attempt = () => {
      if (stopped) return;
      video.play().then(reveal).catch(() => {});
    };

    // On révèle dès qu'une image est décodée, même si la lecture est refusée :
    // mieux vaut une image fixe nette qu'un fond vide.
    if (video.readyState >= 2) reveal();
    video.addEventListener("loadeddata", reveal);
    video.addEventListener("playing", reveal);

    // Les politiques de lecture automatique varient (onglet masqué, économie
    // d'énergie, réglages stricts). On réessaie donc tant que c'est en pause,
    // et on s'arrête net dès que ça tourne.
    const onPlaying = () => {
      stopped = true;
      clearInterval(timer);
      detach();
    };
    const events = ["pointerdown", "keydown", "touchstart", "scroll"] as const;
    const detach = () => {
      events.forEach((e) => window.removeEventListener(e, attempt));
      document.removeEventListener("visibilitychange", onVisible);
    };
    const onVisible = () => {
      if (document.visibilityState === "visible") attempt();
    };

    events.forEach((e) =>
      window.addEventListener(e, attempt, { passive: true })
    );
    document.addEventListener("visibilitychange", onVisible);
    video.addEventListener("playing", onPlaying);

    const timer = setInterval(() => {
      if (video.paused) attempt();
    }, 1000);

    attempt();

    return () => {
      stopped = true;
      clearInterval(timer);
      detach();
      video.removeEventListener("loadeddata", reveal);
      video.removeEventListener("playing", reveal);
      video.removeEventListener("playing", onPlaying);
    };
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Pas encore relié à un backend.
    e.preventDefault();
  }

  return (
    <section id="accueil" className="kh-hero">
      <video
        ref={videoRef}
        className="kh-hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        style={{ opacity: videoReady ? 1 : 0 }}
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      <div aria-hidden="true" className="kh-scrim-v" />
      <div aria-hidden="true" className="kh-scrim-h" />
      <div aria-hidden="true" className="kh-glow" />

      <div className="kh-hero-inner">
        <div className="kh-hero-left">
          <h1 className="kh-hero-title">
            <span className="kh-rise">{t("line1")}</span>
            <span className="kh-rise kh-rise-2 kh-muted">{t("line2")}</span>
            <span className="kh-rise kh-rise-3 kh-gold">{t("line3")}</span>
          </h1>

          <p className="kh-hero-lede kh-lede">{t("lede")}</p>

          <p className="kh-hero-place">
            <span aria-hidden="true" className="kh-rule" />
            {t("location")}
          </p>
        </div>

        {/* Carte de qualification */}
        <form onSubmit={handleSubmit} className="kh-card">
          <p className="kh-card-title">{f("title")}</p>

          <div className="kh-card-grid">
            <div className="kh-seg">
              <label htmlFor="enjeu" className="kh-seg-label">
                {f("challenge")}
              </label>
              <div className="kh-seg-control">
                <select id="enjeu" name="enjeu" className="kh-select" required>
                  <option value="">{f("choose")}</option>
                  <option>{f("c1")}</option>
                  <option>{f("c2")}</option>
                  <option>{f("c3")}</option>
                  <option>{f("c4")}</option>
                </select>
                <span aria-hidden="true" className="kh-chevron">
                  ▾
                </span>
              </div>
            </div>

            <div className="kh-seg">
              <label htmlFor="taille" className="kh-seg-label">
                {f("size")}
              </label>
              <div className="kh-seg-control">
                <select id="taille" name="taille" className="kh-select">
                  <option value="">{f("choose")}</option>
                  <option>{f("s1")}</option>
                  <option>{f("s2")}</option>
                  <option>{f("s3")}</option>
                  <option>{f("s4")}</option>
                </select>
                <span aria-hidden="true" className="kh-chevron">
                  ▾
                </span>
              </div>
            </div>

            <div className="kh-seg kh-seg-wide">
              <label htmlFor="email" className="kh-seg-label">
                {f("email")}
              </label>
              <div className="kh-seg-control">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={f("emailPlaceholder")}
                  className="kh-input"
                />
              </div>
            </div>
          </div>

          <div className="kh-card-meta">
            <span className="kh-card-price">
              30 min<span className="kh-card-unit"> / sans engagement</span>
            </span>
            <span className="kh-card-side">{f("reply")}</span>
          </div>

          <button type="submit" className="kh-card-cta">
            {f("submit")}
          </button>
        </form>
      </div>
    </section>
  );
}
