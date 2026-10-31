import { site } from "@/site";
import { DESCRIPTOR_PATH, NAME_PATH } from "./paths";

interface LogoProps {
  className?: string;
}

/** The lockup as one fixed-size drawing, so it looks the same on every screen. */
const Logo = ({ className }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 236 38"
      width="236"
      height="38"
      role="img"
      aria-label={`${site.name}, ${site.descriptor}`}
      fill="currentColor"
      className={className}
    >
      <path d={NAME_PATH} />
      <path d={DESCRIPTOR_PATH} className="text-fg-muted" />
    </svg>
  );
};

export default Logo;
