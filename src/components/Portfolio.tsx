import { ArrowUpRight, Lock } from "lucide-react";
import { profile, projects } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const accents = {
  rose: "from-rose/70 via-blush to-white",
  mauve: "from-mauve/70 via-lilac to-white",
  gold: "from-gold/70 via-cream to-white",
};

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
            description="Case studies are being written up. The full portfolio will live here soon; in the meantime, here is what I've been building."
          />
          <Reveal delay={0.2}>
            <a
              href={profile.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-5 py-3 text-sm font-semibold text-plum backdrop-blur transition-all duration-500 hover:border-rose/50 hover:bg-white"
            >
              View full portfolio
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => {
            const Wrapper = p.href ? "a" : "div";
            return (
              <Reveal key={p.title} delay={i * 0.1}>
                <Wrapper
                  {...(p.href
                    ? { href: p.href, target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="card group flex h-full flex-col overflow-hidden rounded-[1.75rem]"
                >
                  {/* Cover */}
                  <div
                    className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${accents[p.accent]}`}
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_1px_1px,rgba(42,26,46,0.12)_1px,transparent_0)] [background-size:18px_18px]"
                    />
                    <span className="font-display absolute left-6 top-6 text-6xl italic leading-none text-plum/70 transition-transform duration-700 group-hover:-translate-y-1 group-hover:rotate-[-4deg]">
                      0{i + 1}
                    </span>
                    <span className="absolute bottom-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-plum-soft backdrop-blur">
                      {p.href ? (
                        <>
                          Open <ArrowUpRight className="h-3 w-3" />
                        </>
                      ) : (
                        <>
                          <Lock className="h-3 w-3" /> Coming soon
                        </>
                      )}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <p className="eyebrow">{p.kind}</p>
                    <h3 className="font-display mt-3 text-2xl text-plum">
                      {p.title}
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
                  </div>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
