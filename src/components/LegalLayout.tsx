import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import type { ReactNode } from "react";

interface LegalLayoutProps {
  title: string;
  intro?: string;
  updatedAt?: string;
  children: ReactNode;
}

export default function LegalLayout({
  title,
  intro,
  updatedAt,
  children,
}: LegalLayoutProps) {
  const t = useTranslations("pages");
  const locale = useLocale();
  // Les documents juridiques ne sont pas traduits : on le dit au lecteur
  // plutôt que de le laisser devant du français sans explication.
  const foreign = locale !== routing.defaultLocale;

  return (
    <div className="pt-28 pb-20 lg:pt-32 lg:pb-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        {foreign && (
          <p
            lang="en"
            className="mb-6 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-text-light"
          >
            {t("legalNotice")}
          </p>
        )}
        <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
          {title}
        </h1>
        {updatedAt && (
          <p className="text-xs uppercase tracking-wider text-text-muted mb-6">
            {t("updatedAt")} : {updatedAt}
          </p>
        )}
        {intro && (
          <p className="text-text-light text-base leading-relaxed mb-10">
            {intro}
          </p>
        )}
        <div className="prose-legal space-y-10 text-text-light leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
