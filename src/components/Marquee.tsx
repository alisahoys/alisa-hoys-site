import { profile } from "@/data/profile";

export function Marquee() {
  const items = [...profile.stack, ...profile.stack];
  return (
    <div className="marquee relative overflow-hidden border-y border-line bg-white/40 py-5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ivory to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ivory to-transparent"
      />
      <ul className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <li
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-sm font-semibold tracking-[0.18em] text-plum-soft uppercase"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-rose" />
          </li>
        ))}
      </ul>
    </div>
  );
}
