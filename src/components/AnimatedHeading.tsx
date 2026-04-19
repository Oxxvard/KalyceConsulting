"use client";

import { useState, useEffect, type ReactNode } from "react";

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
        const words = line.text.split(" ");
        const wordNodes: ReactNode[] = [];
        words.forEach((word, wi) => {
          const chars = [...word];
          const charSpans = chars.map((ch, ci) => {
            const delay = globalIndex * charDelay;
            globalIndex++;
            return (
              <span
                key={`${li}-${wi}-${ci}`}
                className="inline-block"
                style={{
                  opacity: ready ? 1 : 0,
                  transform: ready ? "translateX(0)" : "translateX(-18px)",
                  transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`,
                }}
              >
                {ch}
              </span>
            );
          });
          wordNodes.push(
            <span
              key={`${li}-w${wi}`}
              className="inline-block"
              style={{ whiteSpace: "nowrap" }}
            >
              {charSpans}
            </span>,
          );
          if (wi < words.length - 1) {
            const delay = globalIndex * charDelay;
            globalIndex++;
            wordNodes.push(
              <span
                key={`${li}-s${wi}`}
                className="inline-block"
                style={{
                  opacity: ready ? 1 : 0,
                  transition: `opacity 500ms ease ${delay}ms`,
                  whiteSpace: "pre",
                }}
              >
                {"\u00A0"}
              </span>,
            );
          }
        });

        return (
          <span key={li} className={`block ${line.className || ""}`}>
            {wordNodes}
          </span>
        );
      })}
    </h1>
  );
}
