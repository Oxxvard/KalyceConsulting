/**
 * Verrouillage logo Kalyce repris du design « Kalyce Hero.dc.html » :
 * monogramme K détouré du logo carré + wordmark.
 *
 * Le monogramme est servi en PNG détouré (kalyce-mark.png, généré depuis le
 * JPG d'origine). Le design découpait le JPG dans une fenêtre et masquait son
 * fond crème avec `mix-blend-mode: screen` — ce qui ne tient que sur le fond
 * exact du hero et laissait un carré visible ailleurs, par exemple en pied de
 * page. Le PNG transparent se pose sur n'importe quel fond.
 */

import Image from "next/image";

const GOLD = "#C8A272";

// Valeurs de référence du design, à l'échelle 1
const BASE = {
  markW: 44,
  markH: 41,
  gap: 12,
  wordmark: 16,
  tagline: 9,
};

type KalyceLockupProps = {
  /** 1 = taille de la nav. 1.4 environ pour un pied de page. */
  scale?: number;
  /** Masque « KALYCE / CONSULTING » et ne garde que le monogramme. */
  markOnly?: boolean;
};

export default function KalyceLockup({
  scale = 1,
  markOnly = false,
}: KalyceLockupProps) {
  const s = (v: number) => v * scale;

  return (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        gap: s(BASE.gap),
        flex: "none",
      }}
    >
      <Image
        src="/kalyce-mark.png"
        alt=""
        width={Math.round(s(BASE.markW))}
        height={Math.round(s(BASE.markH))}
        priority
        className="kh-logo-mark"
        style={{ display: "block", flex: "none" }}
      />

      {!markOnly && (
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            gap: s(4),
            lineHeight: 1,
          }}
        >
          <span
            style={{
              fontSize: s(BASE.wordmark),
              fontWeight: 600,
              letterSpacing: "0.2em",
              color: "#F3EEE5",
            }}
          >
            KALYCE
          </span>
          <span
            style={{
              fontSize: s(BASE.tagline),
              fontWeight: 400,
              letterSpacing: "0.32em",
              color: GOLD,
              textTransform: "uppercase",
            }}
          >
            Consulting
          </span>
        </span>
      )}
    </span>
  );
}
