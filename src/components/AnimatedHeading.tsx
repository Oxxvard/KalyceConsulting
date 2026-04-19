"use client";

import { useState, useEffect } from "react";

interface AnimatedHeadingProps {
  lines: { text: string; className?: string }[];
  className?: string;
}

export default function AnimatedHeading({
  lines,
  className = "",
}: AnimatedHeadingProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 200);
    return () => clearTimeout(t);
  }, []);

  const charDelay = 25;
  let globalIndex = 0;

  return (
    <h1
      className={`font-display font-bold leading-[1.05] tracking-tight ${className}`}
    >
      {lines.map((line, li) => {
        const chars = [...line.text];
        const spans = chars.map((ch, ci) => {
          const delay = globalIndex * charDelay;
          globalIndex++;
          return (
            <span
              key={`${li}-${ci}`}
              className="inline-block"
              style={{
                opacity: ready ? 1 : 0,
                transform: ready ? "translateX(0)" : "translateX(-18px)",
                transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`,
                whiteSpace: "pre",
              }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          );
        });

        return (
          <span key={li} className={`block ${line.className || ""}`}>
            {spans}
          </span>
        );
      })}
    </h1>
  );
}
