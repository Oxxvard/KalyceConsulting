"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { faqs } from "@/lib/faqs";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-bg"
      aria-label="Questions fréquentes"
    >
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <FadeIn className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-accent text-white px-4 py-1.5 rounded-full mb-6">
            Questions fréquentes
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Tout ce que vous voulez{" "}
            <em className="text-primary not-italic font-semibold italic">
              savoir.
            </em>
          </h2>
        </FadeIn>

        <dl className="space-y-3">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <FadeIn
                key={item.q}
                delay={i * 40}
                className="liquid-glass rounded-2xl border border-white/10 overflow-hidden"
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-white/5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                  >
                    <span className="font-medium text-white text-base">
                      {item.q}
                    </span>
                    <svg
                      className={`w-5 h-5 flex-shrink-0 text-accent transition-transform duration-300 ${
                        open ? "rotate-45" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </dt>
                <dd
                  id={`faq-panel-${i}`}
                  hidden={!open}
                  className="px-6 pb-5 text-text-light text-sm leading-relaxed"
                >
                  {item.a}
                </dd>
              </FadeIn>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
