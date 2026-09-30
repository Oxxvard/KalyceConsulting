"use client";

import { useTranslations } from "next-intl";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
  const t = useTranslations("newsletter");
  const f = useTranslations("footer");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        alreadySubscribed?: boolean;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error ?? t("error"));
        return;
      }

      setStatus("success");
      setMessage(
        data.alreadySubscribed
          ? t("already")
          : t("thanks"),
      );
      setEmail("");
    } catch {
      setStatus("error");
      setMessage(t("offline"));
    }
  };

  if (status === "success") {
    return (
      <p
        role="status"
        className="text-sm text-white font-medium bg-white/10 border border-white/15 rounded-full px-5 py-3"
      >
        {message}
      </p>
    );
  }

  return (
    <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubmit}>
      <label htmlFor="newsletter-email" className="sr-only">
        Adresse email
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
        placeholder={f("emailPlaceholder")}
        className="flex-1 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm px-5 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-white text-[#0B1220] text-sm font-medium px-7 py-3 hover:bg-accent-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? t("sending") : f("subscribe")}
      </button>
      {status === "error" && message && (
        <p
          role="alert"
          className="sm:basis-full text-xs text-accent-light mt-1"
        >
          {message}
        </p>
      )}
    </form>
  );
}
