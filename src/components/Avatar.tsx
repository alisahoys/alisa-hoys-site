import Image from "next/image";
import { profile } from "@/data/profile";

const sizes = {
  sm: "h-8 w-8",
  md: "h-9 w-9",
  lg: "h-10 w-10",
  xl: "h-20 w-20 sm:h-24 sm:w-24",
};

/** Round portrait with an optional rose-gold gradient ring. */
export function Avatar({
  size = "md",
  ring = false,
  className = "",
  priority = false,
}: {
  size?: keyof typeof sizes;
  ring?: boolean;
  className?: string;
  priority?: boolean;
}) {
  return (
    <span
      className={`relative inline-block shrink-0 overflow-hidden rounded-full ${sizes[size]} ${
        ring
          ? "p-[3px] bg-[conic-gradient(from_180deg,var(--rose),var(--mauve),var(--gold),var(--rose))]"
          : ""
      } ${className}`}
    >
      <Image
        src="/alisa.jpg"
        alt={profile.name}
        width={200}
        height={200}
        priority={priority}
        className="h-full w-full rounded-full object-cover"
      />
    </span>
  );
}
