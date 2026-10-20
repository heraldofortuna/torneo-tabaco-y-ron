export type TeamLogoSize = "sm" | "lg";

const sizeClasses: Record<TeamLogoSize, string> = {
  sm: "h-5 w-auto max-w-[1.75rem] object-contain shrink-0",
  lg: "w-26 sm:w-32 h-auto max-w-[6.5rem] sm:max-w-[8rem] object-contain shrink-0",
};

interface TeamLogoProps {
  src: string;
  alt: string;
  size?: TeamLogoSize;
  className?: string;
}

const TeamLogo: React.FC<TeamLogoProps> = ({
  src,
  alt,
  size = "sm",
  className = "",
}) => (
  <img
    src={src}
    alt={alt}
    className={`${sizeClasses[size]} ${className}`.trim()}
    loading="lazy"
    decoding="async"
  />
);

export default TeamLogo;
