"use client";

import type { CSSProperties, FormEvent } from "react";
import Image from "next/image";

/**
 * Hero importé depuis Claude Design (« Kalyce Hero.dc.html »).
 *
 * Les props reprennent celles du fichier source (data-props) avec leurs
 * valeurs par défaut du design : showArc=true, showGrid=true, showScroll=false.
 * showPhoto passe à true — le design prévoyait le calque photo (Ken Burns +
 * voile dégradé) mais n'avait pas d'image à y mettre.
 *
 * La nav du fichier design n'est pas reprise ici : l'application rend déjà
 * un <Navbar /> global depuis app/layout.tsx.
 */

type HeroSectionProps = {
  /** Photo de fond (effet Ken Burns + voile sombre). Nécessite photoSrc. */
  showPhoto?: boolean;
  /** Source de la photo de fond — remplace l'<image-slot> de l'éditeur. */
  photoSrc?: string;
  /** Arcs tracés en fond. */
  showArc?: boolean;
  /** Trame quadrillée animée. */
  showGrid?: boolean;
  /** Indicateur « Découvrir le cabinet » en bas. */
  showScroll?: boolean;
};

const INK = "#0B1220";
const IVORY = "#EDE7DC";
const GOLD = "#C8A272";

const fieldStyle: CSSProperties = {
  width: "100%",
  padding: "13px 15px",
  border: "1px solid rgba(237,231,220,.14)",
  borderRadius: 12,
  background: "rgba(11,18,32,.55)",
  color: "#F3EEE5",
  fontFamily: "inherit",
  fontSize: 14,
  fontWeight: 300,
  outline: "none",
};

export default function HeroSection({
  showPhoto = true,
  photoSrc = "/images/nice/baie-des-anges.webp",
  showArc = true,
  showGrid = true,
  showScroll = false,
}: HeroSectionProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Le design ne câble aucun backend : le formulaire est inerte.
    e.preventDefault();
  }

  return (
    <section
      id="accueil"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        background: INK,
        color: IVORY,
        fontFamily: "var(--font-archivo), system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* ---------- Fonds lumineux ---------- */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {showPhoto && photoSrc && (
          <>
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.72,
                animation: "k-burns 26s ease-in-out infinite",
              }}
            >
              <Image
                src={photoSrc}
                alt=""
                fill
                priority
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Voile vertical, adouci par rapport au design pour que la baie
                reste lisible au lieu d'être réduite à une texture. */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg,rgba(11,18,32,.74) 0%,rgba(11,18,32,.48) 45%,rgba(11,18,32,.93) 100%)",
              }}
            />
            {/* Écran latéral : assombrit la colonne de texte, laisse la mer
                et la Promenade respirer à droite. */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg,rgba(11,18,32,.88) 0%,rgba(11,18,32,.55) 38%,rgba(11,18,32,.12) 70%,rgba(11,18,32,0) 100%)",
              }}
            />
          </>
        )}

        {/* Halo doré, haut */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "-38%",
            width: "min(120vw,1280px)",
            height: "120%",
            transform: "translateX(-50%)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(200,162,114,.26),rgba(200,162,114,.06) 45%,rgba(200,162,114,0) 70%)",
            filter: "blur(10px)",
            animation: "k-glow-a 24s ease-in-out infinite",
          }}
        />
        {/* Halo bleuté, bas gauche */}
        <div
          style={{
            position: "absolute",
            left: "-14%",
            bottom: "-40%",
            width: "70%",
            height: "90%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(86,116,168,.22),rgba(86,116,168,0) 68%)",
            filter: "blur(18px)",
            animation: "k-glow-b 30s ease-in-out infinite",
          }}
        />
        {/* Vignettage — allégé par rapport au design, qui n'avait pas de photo
            à préserver et pouvait se permettre des bords très sombres. */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: showPhoto
              ? "radial-gradient(ellipse 78% 70% at 50% 42%,rgba(11,18,32,0) 45%,rgba(7,12,21,.55) 100%)"
              : "radial-gradient(ellipse 70% 60% at 50% 42%,rgba(11,18,32,0) 40%,rgba(7,12,21,.85) 100%)",
          }}
        />
      </div>

      {/* ---------- Trame ---------- */}
      {showGrid && (
        <div
          aria-hidden="true"
          className="kh-grid"
          style={{ position: "absolute", inset: -110, pointerEvents: "none" }}
        />
      )}

      {/* ---------- Arcs ---------- */}
      {showArc && (
        <svg
          viewBox="0 0 900 900"
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: "min(150vw,1600px)",
            height: "auto",
            transform: "translate(-50%,-50%)",
            pointerEvents: "none",
          }}
        >
          <path
            d="M40 720 C 180 300, 520 90, 870 170"
            fill="none"
            stroke={GOLD}
            strokeWidth="1.1"
            strokeLinecap="round"
            opacity="0.45"
            style={{
              strokeDasharray: 1400,
              animation: "k-draw 2.6s cubic-bezier(.22,1,.36,1) .2s both",
            }}
          />
          <path
            d="M90 810 C 260 420, 560 230, 880 320"
            fill="none"
            stroke={IVORY}
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.12"
            style={{
              strokeDasharray: 1400,
              animation: "k-draw 3s cubic-bezier(.22,1,.36,1) .5s both",
            }}
          />
        </svg>
      )}

      {/* ---------- Contenu ---------- */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          flex: 1,
          minHeight: 0,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(330px,1fr))",
          alignItems: "center",
          gap: "clamp(32px,4.5vw,72px)",
          /* Le haut réserve la place du <Navbar /> global, qui est en
             position fixed et recouvrirait sinon le titre. */
          padding:
            "clamp(104px,13vh,140px) clamp(20px,4vw,64px) clamp(28px,4vh,52px)",
        }}
      >
        {/* Colonne gauche */}
        <div style={{ maxWidth: 640 }}>
          <h1
            style={{
              margin: 0,
              maxWidth: "15ch",
              fontWeight: 600,
              fontSize: "clamp(38px,5.6vw,82px)",
              lineHeight: 1,
              letterSpacing: "-0.032em",
              textTransform: "uppercase",
              color: "#F6F1E7",
            }}
          >
            <span
              style={{
                display: "block",
                overflow: "hidden",
                paddingBottom: "0.04em",
              }}
            >
              <span
                style={{
                  display: "block",
                  animation: "k-rise 1.1s cubic-bezier(.22,1,.36,1) .45s both",
                }}
              >
                Transformer
              </span>
            </span>
            <span
              style={{
                display: "block",
                overflow: "hidden",
                paddingBottom: "0.04em",
              }}
            >
              <span
                style={{
                  display: "block",
                  animation: "k-rise 1.1s cubic-bezier(.22,1,.36,1) .58s both",
                }}
              >
                la décision
              </span>
            </span>
            <span
              style={{
                display: "block",
                overflow: "hidden",
                paddingBottom: "0.06em",
              }}
            >
              <span
                style={{
                  display: "block",
                  color: "#D8B78A",
                  background:
                    "linear-gradient(100deg,#C8A272 0%,#C8A272 38%,#F5E2C4 50%,#C8A272 62%,#C8A272 100%)",
                  backgroundSize: "240% 100%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation:
                    "k-rise 1.1s cubic-bezier(.22,1,.36,1) .71s both, k-sheen 7s ease-in-out 2.2s infinite",
                }}
              >
                en résultat
              </span>
            </span>
          </h1>

          <p
            className="kh-lede"
            style={{
              margin: "clamp(22px,3vh,32px) 0 0",
              maxWidth: "54ch",
              fontSize: "clamp(14px,1.1vw,17px)",
              fontWeight: 300,
              lineHeight: 1.7,
              color: "#A8AEBC",
              animation: "k-fade 1.1s cubic-bezier(.22,1,.36,1) 1.05s both",
            }}
          >
            Kalyce Consulting accompagne les dirigeants de PME et d&apos;ETI sur
            leurs décisions structurantes : stratégie de croissance,
            organisation, pilotage de la performance. Une lecture claire, des
            arbitrages assumés, des effets mesurables.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginTop: "clamp(22px,3vh,34px)",
              animation: "k-fade 1.1s cubic-bezier(.22,1,.36,1) 1.25s both",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: "block",
                width: "clamp(28px,4vw,56px)",
                height: 1,
                background:
                  "linear-gradient(90deg,#C8A272,rgba(200,162,114,0))",
                transformOrigin: "left",
                animation: "k-rule 1s cubic-bezier(.22,1,.36,1) 1.3s both",
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 400,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#9AA0AE",
                whiteSpace: "nowrap",
              }}
            >
              Côte d&apos;Azur
            </span>
          </div>
        </div>

        {/* Colonne droite — formulaire de contact */}
        <form
          onSubmit={handleSubmit}
          className="kh-form"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            padding: "clamp(22px,2.4vw,32px)",
            border: "1px solid rgba(237,231,220,.12)",
            borderRadius: 22,
            background:
              "linear-gradient(160deg,rgba(237,231,220,.07),rgba(237,231,220,.025))",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            boxShadow: "0 30px 70px rgba(4,8,16,.45)",
            animation: "k-fade 1.1s cubic-bezier(.22,1,.36,1) .85s both",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span
              style={{
                fontSize: 17,
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: "#F3EEE5",
              }}
            >
              Parlons de votre situation
            </span>
            <span
              style={{
                fontSize: 13,
                fontWeight: 300,
                lineHeight: 1.55,
                color: "#9AA0AE",
              }}
            >
              Premier échange de 30 minutes, sans engagement. Réponse sous 24 h
              ouvrées.
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
              gap: 12,
            }}
          >
            <input
              className="kh-field"
              type="text"
              name="nom"
              placeholder="Nom"
              aria-label="Nom"
              style={fieldStyle}
            />
            <input
              className="kh-field"
              type="text"
              name="societe"
              placeholder="Société"
              aria-label="Société"
              style={fieldStyle}
            />
          </div>

          <input
            className="kh-field"
            type="email"
            name="email"
            placeholder="Email professionnel"
            aria-label="Email professionnel"
            style={fieldStyle}
          />

          <textarea
            className="kh-field"
            name="besoin"
            rows={3}
            placeholder="Votre enjeu en quelques lignes"
            aria-label="Votre enjeu en quelques lignes"
            style={{ ...fieldStyle, lineHeight: 1.55, resize: "none" }}
          />

          <button
            className="kh-submit"
            type="submit"
            style={{
              marginTop: 2,
              padding: "15px 20px",
              border: "none",
              borderRadius: 12,
              background: GOLD,
              color: INK,
              fontFamily: "inherit",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "background .25s ease",
            }}
          >
            Demander un échange
          </button>

          <span
            style={{
              fontSize: 11,
              fontWeight: 300,
              lineHeight: 1.5,
              color: "#7F8595",
              textAlign: "center",
            }}
          >
            Vos informations restent confidentielles.
          </span>
        </form>
      </div>

      {/* ---------- Indicateur de scroll ---------- */}
      {showScroll && (
        <div
          aria-hidden="true"
          style={{
            position: "relative",
            zIndex: 4,
            display: "flex",
            justifyContent: "center",
            padding: "30px 0",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
              animation: "k-fade 1.2s cubic-bezier(.22,1,.36,1) 1.6s both",
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#8E94A3",
              }}
            >
              Découvrir le cabinet
            </span>
            <span
              style={{
                display: "block",
                width: 1,
                height: 34,
                background: "linear-gradient(#C8A272,rgba(200,162,114,0))",
                animation: "k-bob 2.6s ease-in-out 2.4s infinite",
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
