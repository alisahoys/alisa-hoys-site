import { Globe2, GraduationCap, Layers3, Wand2 } from "lucide-react";
import { profile, education } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About me"
          title={
            <>
              Systems thinker,{" "}
              <em className="font-display-wonky text-gradient not-italic">
                storyteller
              </em>{" "}
              at heart.
            </>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Narrative */}
          <Reveal className="lg:col-span-7">
            <div className="card flex h-full flex-col rounded-[2rem] p-8 sm:p-10">
              <p className="font-display text-3xl leading-tight text-plum sm:text-4xl">
                Hi, I&apos;m {profile.firstName}.
              </p>
              <div className="mt-6 space-y-5 text-[1.05rem] leading-relaxed text-plum-soft">
                {profile.about.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <ul className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { k: "Reliability first", v: "Pipelines that survive the real web." },
                  { k: "Readable code", v: "Written for the next person, not just the machine." },
                  { k: "Human craft", v: "Technical depth with a storyteller's clarity." },
                ].map((p) => (
                  <li
                    key={p.k}
                    className="rounded-2xl border border-line bg-cream/60 p-4"
                  >
                    <p className="font-display text-lg text-plum">{p.k}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{p.v}</p>
                  </li>
                ))}
              </ul>
              <div className="hairline mt-auto mb-6 pt-8" />
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
                <span className="inline-flex items-center gap-2 text-muted">
                  <Layers3 className="h-4 w-4 text-rose" />
                  Top skills
                </span>
                {profile.topSkills.map((s) => (
                  <span key={s} className="font-semibold text-plum">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Bento column */}
          <div className="grid gap-6 lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="card relative overflow-hidden rounded-[2rem] bg-plum! p-8 text-ivory">
                <div
                  aria-hidden
                  className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[conic-gradient(from_90deg,var(--rose),var(--mauve),var(--gold),var(--rose))] opacity-60 blur-2xl"
                />
                <div className="relative">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blush/80">
                    <Globe2 className="h-4 w-4" /> Languages
                  </div>
                  <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
                    {profile.languages.map((l) => (
                      <li key={l.name}>
                        <p className="font-display text-xl">{l.name}</p>
                        <p className="text-xs text-ivory/60">{l.level}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="card rounded-[2rem] p-8">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-deep">
                  <GraduationCap className="h-4 w-4" /> Education
                </div>
                <ul className="mt-5 space-y-4">
                  {education.map((e) => (
                    <li key={e.school} className="flex gap-4">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <div>
                        <p className="font-semibold text-plum">{e.degree}</p>
                        <p className="text-sm text-muted">
                          {e.school} · {e.period}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="card flex items-center gap-4 rounded-[2rem] bg-blush/60 p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-rose shadow-sm">
                  <Wand2 className="h-5 w-5" />
                </span>
                <p className="text-sm leading-relaxed text-plum-soft">
                  From film sets to VR research to message queues, the
                  through-line is the same: make complicated things feel
                  effortless.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
