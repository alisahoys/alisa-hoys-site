import Image from "next/image";
import { ArrowUpRight, Lock, Sparkles } from "lucide-react";

// lucide dropped brand icons, so the GitHub mark is inlined
function Github({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}
import { profile, projects } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const accents = {
  rose: "from-rose/70 via-blush to-white",
  mauve: "from-mauve/70 via-lilac to-white",
  gold: "from-gold/70 via-cream to-white",
};

const linkBase =
  "group/link inline-flex items-center gap-1.5 text-xs font-semibold transition-colors";

export function Portfolio() {
  return (
    <section id="portfolio" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            title={
              <>
                Selected{" "}
                <em className="font-display-wonky text-gradient not-italic">
                  work
                </em>
                .
              </>
            }
            description="Things I've shipped, from side projects with a personality to the production systems I work on every day."
          />
          <Reveal delay={0.2}>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-5 py-3 text-sm font-semibold text-plum backdrop-blur transition-all duration-500 hover:border-rose/50 hover:bg-white"
            >
              <Github className="h-4 w-4" />
              More on GitHub
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => {
            const primary = p.live ?? p.repo;
            const Cover = primary ? "a" : "div";
            return (
              <Reveal key={p.title} delay={i * 0.1}>
                <article className="card group flex h-full flex-col overflow-hidden rounded-[1.75rem]">
                  {/* Cover */}
                  <Cover
                    {...(primary
                      ? { href: primary, target: "_blank", rel: "noopener noreferrer", "aria-label": `Open ${p.title}` }
                      : {})}
                    className={`relative block aspect-[4/3] overflow-hidden bg-gradient-to-br ${accents[p.accent]}`}
                  >
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={`${p.title} screenshot`}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <>
                        <div
                          aria-hidden
                          className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_1px_1px,rgba(42,26,46,0.12)_1px,transparent_0)] [background-size:18px_18px]"
                        />
                        <span className="font-display absolute left-6 top-6 text-6xl italic leading-none text-plum/70 transition-transform duration-700 group-hover:-translate-y-1 group-hover:rotate-[-4deg]">
                          0{i + 1}
                        </span>
                      </>
                    )}

                    <span className="absolute bottom-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-white/85 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-plum-soft backdrop-blur">
                      {p.live ? (
                        <>
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          </span>
                          Live
                        </>
                      ) : p.repo ? (
                        <>
                          <Github className="h-3 w-3" /> Open source
                        </>
                      ) : p.status === "private" ? (
                        <>
                          <Lock className="h-3 w-3" /> Proprietary
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-3 w-3" /> Case study soon
                        </>
                      )}
                    </span>
                  </Cover>

                  <div className="flex flex-1 flex-col p-7">
                    <p className="eyebrow">{p.kind}</p>
                    <h3 className="font-display mt-3 text-2xl text-plum">
                      {primary ? (
                        <a
                          href={primary}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline"
                        >
                          {p.title}
                        </a>
                      ) : (
                        p.title
                      )}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-plum-soft">
                      {p.description}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-full bg-cream px-2.5 py-1 text-[0.7rem] font-semibold text-plum-soft"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>

                    {(p.live || p.repo) && (
                      <div className="mt-6 flex items-center gap-5 border-t border-line pt-5">
                        {p.live && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${linkBase} text-rose-deep hover:text-plum`}
                          >
                            Visit site
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                          </a>
                        )}
                        {p.repo && (
                          <a
                            href={p.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${linkBase} text-plum-soft hover:text-plum`}
                          >
                            <Github className="h-3.5 w-3.5" />
                            Source
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
