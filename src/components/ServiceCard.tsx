import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
      <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold text-primary mb-3">
        {title}
      </h3>
      <p className="text-text-light leading-relaxed">{description}</p>
    </article>
  );
}
