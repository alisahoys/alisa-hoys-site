import Image from "next/image";
import { ArrowUpRight, Download, Gamepad2, Play as PlayIcon } from "lucide-react";
import { games, profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function ItchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M3.13 1.34C2.09 1.96.03 4.32 0 4.94v1.03c0 1.3 1.22 2.44 2.33 2.44 1.33 0 2.44-1.1 2.44-2.41 0 1.31 1.07 2.41 2.4 2.41s2.37-1.1 2.37-2.41c0 1.31 1.14 2.41 2.47 2.41h.02c1.33 0 2.47-1.1 2.47-2.41 0 1.31 1.04 2.41 2.37 2.41s2.4-1.1 2.4-2.41c0 1.31 1.11 2.41 2.44 2.41C22.78 8.41 24 7.27 24 5.97V4.94c-.03-.62-2.09-2.98-3.13-3.6-3.23-.11-5.47-.13-8.87-.13-3.4 0-8.04.05-8.87.13zm6.3 6.9a2.73 2.73 0 0 1-.47.6 2.75 2.75 0 0 1-1.97.82 2.75 2.75 0 0 1-1.97-.82 2.5 2.5 0 0 1-.44-.57 2.74 2.74 0 0 1-.45.57 2.75 2.75 0 0 1-1.97.82c-.12 0-.24 0-.36-.03-.17 1.68-.24 3.29-.24 4.45v.03c0 2.1-.02 7.28 3.78 8.06 1.11.19 2.21.19 3.75.19h3.9c1.54 0 2.64 0 3.75-.19 3.8-.78 3.78-5.96 3.78-8.06v-.03c0-1.16-.07-2.77-.24-4.45-.12.03-.24.03-.36.03a2.75 2.75 0 0 1-1.97-.82 2.74 2.74 0 0 1-.45-.57 2.5 2.5 0 0 1-.44.57 2.75 2.75 0 0 1-1.97.82 2.75 2.75 0 0 1-1.97-.82 2.73 2.73 0 0 1-.47-.6 2.7 2.7 0 0 1-.46.6 2.75 2.75 0 0 1-1.97.82h-.1a2.75 2.75 0 0 1-1.97-.82 2.7 2.7 0 0 1-.46-.6zm-2.5 3.6c.8 0 1.5 0 2.37.96.69-.07 1.4-.1 2.1-.1h.1c.7 0 1.41.03 2.1.1.87-.96 1.57-.96 2.37-.96.38 0 1.88 0 2.93 2.95l1.13 4.04c.83 3-.27 3.07-1.64 3.08-2.04-.08-3.17-1.56-3.17-3.04-1.13.19-2.44.28-3.76.28h-.02c-1.32 0-2.63-.09-3.76-.28 0 1.48-1.13 2.96-3.17 3.04-1.37-.01-2.47-.08-1.64-3.08l1.13-4.04c1.05-2.95 2.55-2.95 2.93-2.95z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
    </svg>
  );
}

export function Play() {
  return (
    <section id="play" className="relative scroll-mt-24 py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="blob blob-a right-[-10%] top-[10%] h-[26rem] w-[26rem] bg-lilac opacity-70" />
        <div className="blob blob-b left-[-12%] bottom-[-10%] h-[24rem] w-[24rem] bg-blush opacity-70" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Playground"
            title={
              <>
                Games I{" "}
                <em className="font-display-wonky text-gradient not-italic">
                  built
                </em>{" "}
                for fun.
              </>
            }
            description="Prototypes and jam games from my M.Des in Computer Games at Shenkar, published as Nerdess on itch.io. Two of them run right in the browser."
          />
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-3">
              <a
                href={profile.itch}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-5 py-3 text-sm font-semibold text-plum backdrop-blur transition-all duration-500 hover:border-rose/50 hover:bg-white"
              >
                <ItchIcon className="h-4 w-4 text-rose" />
                itch.io
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-5 py-3 text-sm font-semibold text-plum backdrop-blur transition-all duration-500 hover:border-rose/50 hover:bg-white"
              >
                <YoutubeIcon className="h-4 w-4 text-rose" />
                YouTube
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.1}>
              <a
                href={g.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex h-full flex-col overflow-hidden rounded-[1.75rem]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-plum">
                  <Image
                    src={g.image}
                    alt={`${g.title} cover art`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/85 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-plum-soft backdrop-blur">
                    {g.browser ? (
                      <>
                        <PlayIcon className="h-3 w-3 fill-current" /> Play in browser
                      </>
                    ) : (
                      <>
                        <Download className="h-3 w-3" /> Windows
                      </>
                    )}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display flex items-center justify-between gap-3 text-xl text-plum">
                    {g.title}
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-rose opacity-0 transition-all duration-500 group-hover:opacity-100" />
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-plum-soft">
                    {g.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {g.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-cream px-2.5 py-1 text-[0.7rem] font-semibold text-plum-soft"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </Reveal>
          ))}

          {/* YouTube tile completes the grid */}
          <Reveal delay={0.2}>
            <a
              href={profile.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="card group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] bg-plum! p-6 text-ivory"
            >
              <div
                aria-hidden
                className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[conic-gradient(from_90deg,var(--rose),var(--mauve),var(--gold),var(--rose))] opacity-60 blur-2xl transition-transform duration-700 group-hover:scale-125"
              />
              <div className="relative flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blush/80">
                <Gamepad2 className="h-4 w-4" /> Off the clock
              </div>
              <div className="relative mt-10">
                <YoutubeIcon className="h-8 w-8 text-rose" />
                <p className="font-display mt-4 text-2xl leading-tight">
                  {profile.gamerTag} on YouTube
                </p>
                <p className="mt-2 text-sm text-ivory/70">
                  Playing cozy games. Come say hi.
                </p>
              </div>
              <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ivory">
                Watch the channel
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
