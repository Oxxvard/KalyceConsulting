import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  className?: string;
  ariaLabel?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={combinedClassName}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
