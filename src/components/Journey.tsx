import { experience } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Journey() {
  return (
    <section id="journey" className="relative scroll-mt-24 py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="blob blob-b left-[-15%] top-[30%] h-[28rem] w-[28rem] bg-lilac opacity-70" />
        <div className="blob blob-a right-[-10%] bottom-[0%] h-[26rem] w-[26rem] bg-blush opacity-70" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Career journey"
          title={
            <>
              A path from{" "}
              <em className="font-display-wonky text-gradient not-italic">
                frames
              </em>{" "}
              to pipelines.
            </>
          }
          description="Every chapter taught me something the next one needed: narrative from film, structure from games, and rigor from engineering."
        />

        <ol className="relative mt-16 md:mt-20">
          {/* Spine */}
          <div
            aria-hidden
            className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-rose via-mauve to-transparent md:left-1/2 md:-translate-x-1/2"
          />

          {experience.map((job, i) => {
            const left = i % 2 === 0;
            return (
              <li
                key={`${job.company}-${job.role}`}
                className="relative mb-12 pl-10 last:mb-0 md:mb-16 md:pl-0"
              >
                {/* Node */}
                <span
                  aria-hidden
                  className="absolute left-0 top-3 grid h-6 w-6 place-items-center md:left-1/2 md:-translate-x-1/2"
                >
                  <span className="absolute h-6 w-6 rounded-full bg-rose/20" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-rose ring-4 ring-ivory" />
                </span>

                <div className="md:grid md:grid-cols-2 md:gap-16">
                  {/* Year marker sits on the opposite side of the spine */}
                  {!left && (
                    <div className="hidden items-start justify-end md:flex">
                      <Reveal delay={0.15}>
                        <p className="font-display mt-2 text-7xl leading-none text-plum/10 select-none">
                          {job.start}
                        </p>
                      </Reveal>
                    </div>
                  )}

                  <Reveal delay={0.05}>
                    <article className="card rounded-[1.75rem] p-7 sm:p-8">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span
                          className={`rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] ${
                            job.chapter === "Engineering"
                              ? "bg-plum text-ivory"
                              : "bg-blush text-rose-deep"
                          }`}
                        >
                          {job.chapter}
                        </span>
                        <span className="text-xs font-semibold tracking-wide text-muted">
                          {job.period}
                        </span>
                      </div>
                      <h3 className="font-display mt-5 text-2xl leading-tight text-plum sm:text-[1.7rem]">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-rose-deep">
                        {job.company}
                        {job.location && (
                          <span className="text-muted"> · {job.location}</span>
                        )}
                      </p>
                      <ul className="mt-5 space-y-2.5 text-[0.95rem] leading-relaxed text-plum-soft">
                        {job.highlights.map((h) => (
                          <li key={h} className="flex gap-3">
                            <span className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-gold" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {job.tags.map((t) => (
                          <li
                            key={t}
                            className="rounded-full border border-line bg-white/70 px-2.5 py-1 text-[0.7rem] font-semibold text-plum-soft"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>

                  {left && (
                    <div className="hidden items-start justify-start md:flex">
                      <Reveal delay={0.15}>
                        <p className="font-display mt-2 text-7xl leading-none text-plum/10 select-none">
                          {job.start}
                        </p>
                      </Reveal>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
