interface LogoProps {
  className?: string;
  height?: number;
}

export default function Logo({ className = "", height = 50 }: LogoProps) {
  return (
    <img
      src="/KalyceLogo.svg"
      alt="Kalyce Consulting"
      height={height}
      className={`h-[${height}px] w-auto ${className}`}
      style={{ height: `${height}px`, width: "auto" }}
    />
  );
}
