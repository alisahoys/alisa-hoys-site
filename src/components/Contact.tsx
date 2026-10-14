import { ArrowUpRight, Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-4 pb-6 pt-12 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-plum px-7 py-20 text-ivory sm:px-12 md:px-20 md:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="blob blob-a left-[-10%] top-[-30%] h-[28rem] w-[28rem] bg-rose/50" />
          <div className="blob blob-b right-[-10%] bottom-[-40%] h-[30rem] w-[30rem] bg-mauve/50" />
          <div className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:22px_22px]" />
        </div>

        <div className="relative grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow text-blush/80!">Let&apos;s talk</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-4 text-4xl leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Let&apos;s build something{" "}
                <em className="font-display-wonky not-italic text-gold">
                  remarkable
                </em>
                .
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/70 sm:text-lg">
                Open to interesting engineering problems, collaborations and
                good conversations. The fastest way to reach me is email.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center justify-between rounded-2xl bg-ivory px-5 py-4 text-plum transition-all duration-500 hover:-translate-y-0.5 hover:bg-white"
              >
                <span className="flex items-center gap-3 text-sm font-semibold">
                  <Mail className="h-4 w-4 text-rose" />
                  {profile.email}
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-ivory/15 bg-white/5 px-5 py-4 backdrop-blur transition-all duration-500 hover:-translate-y-0.5 hover:bg-white/10"
              >
                <span className="text-sm font-semibold">LinkedIn</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-ivory/15 bg-white/5 px-5 py-4 backdrop-blur transition-all duration-500 hover:-translate-y-0.5 hover:bg-white/10"
              >
                <span className="text-sm font-semibold">Download CV</span>
                <Download className="h-4 w-4 transition-transform duration-500 group-hover:translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="relative mt-16 flex flex-col gap-3 border-t border-ivory/10 pt-6 text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {profile.name}. Crafted with care in {profile.location}.
          </p>
          <p className="font-display text-sm italic text-ivory/60">
            Clear structure. Thoughtful naming. Reliable outputs.
          </p>
        </div>
      </div>
    </section>
  );
}
