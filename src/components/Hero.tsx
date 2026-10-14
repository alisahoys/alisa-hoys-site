"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";

const ease = [0.16, 1, 0.3, 1] as const;

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 30, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1, delay, ease },
});

const floatingChips = [
  { label: "Python", x: "-8%", y: "6%", delay: 0 },
  { label: "Scrapy", x: "70%", y: "-4%", delay: 0.6 },
  { label: "RabbitMQ", x: "78%", y: "62%", delay: 1.2 },
  { label: "Docker", x: "-12%", y: "70%", delay: 1.8 },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-36 pb-20 sm:pt-44 md:pb-28"
    >
      {/* Aurora background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob blob-a left-[-10%] top-[-10%] h-[36rem] w-[36rem] bg-blush opacity-90" />
        <div className="blob blob-b right-[-12%] top-[10%] h-[32rem] w-[32rem] bg-lilac opacity-90" />
        <div className="blob blob-a bottom-[-30%] left-[30%] h-[30rem] w-[30rem] bg-gold/40" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.6),transparent)]" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        {/* Copy */}
        <div>
          <motion.div {...fade(0.05)} className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-3 py-1.5 text-xs font-semibold tracking-wide text-plum-soft backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-rose" />
              </span>
              {profile.role} @ {profile.company}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
              <MapPin className="h-3.5 w-3.5" /> {profile.location}
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.15)}
            className="font-display mt-8 text-[2.9rem] leading-[1.02] tracking-tight text-plum sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          >
            Engineering{" "}
            <em className="font-display-wonky text-gradient not-italic">
              elegant
            </em>{" "}
            systems for{" "}
            <span className="whitespace-nowrap">messy data.</span>
          </motion.h1>

          <motion.p
            {...fade(0.3)}
            className="mt-7 max-w-xl text-lg leading-relaxed text-plum-soft sm:text-xl"
          >
            I&apos;m {profile.name}, a software developer building resilient
            scraping pipelines and distributed services, with Python, Scrapy,
            RabbitMQ and Docker, and a creative background that keeps the
            craft human.
          </motion.p>

          <motion.div {...fade(0.45)} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#journey"
              className="group inline-flex items-center gap-2 rounded-full bg-plum px-6 py-3.5 text-sm font-semibold text-ivory shadow-[0_20px_40px_-20px_rgba(42,26,46,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-rose-deep"
            >
              Explore my journey
              <ArrowDown className="h-4 w-4 transition-transform duration-500 group-hover:translate-y-0.5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/50 px-6 py-3.5 text-sm font-semibold text-plum backdrop-blur transition-all duration-500 hover:border-rose/50 hover:bg-white"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.dl
            {...fade(0.6)}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8"
          >
            {[
              { k: "6", v: "Languages spoken" },
              { k: "2", v: "Degrees, art & code" },
              { k: "∞", v: "Curiosity" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl text-plum sm:text-4xl">{s.k}</dt>
                <dd className="mt-1 text-xs font-medium tracking-wide text-muted">{s.v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Signature card */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="glass relative overflow-hidden rounded-[2rem] p-7 sm:p-8">
            <div
              aria-hidden
              className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[conic-gradient(from_180deg,var(--rose),var(--mauve),var(--gold),var(--rose))] opacity-70 blur-2xl"
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl italic text-plum">A.</span>
                <Sparkles className="h-5 w-5 text-rose" />
              </div>
              <p className="eyebrow mt-8">Currently</p>
              <p className="font-display mt-2 text-2xl leading-snug text-plum">
                {profile.role} at {profile.company}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Building and maintaining web scraping workflows across
                distributed systems.
              </p>
              <div className="hairline my-6" />
              <p className="eyebrow">Core stack</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {["Python", "Scrapy", "RabbitMQ", "MySQL", "Docker", "Linux"].map(
                  (t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line bg-white/70 px-3 py-1 text-xs font-semibold text-plum-soft"
                    >
                      {t}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* Floating chips around the card */}
          {floatingChips.map((c) => (
            <motion.span
              key={c.label}
              aria-hidden
              className="font-display absolute hidden rounded-full border border-rose/30 bg-white/80 px-4 py-2 text-sm italic text-rose-deep shadow-[0_12px_30px_-16px_rgba(200,98,125,0.6)] backdrop-blur lg:block"
              style={{ left: c.x, top: c.y }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                delay: c.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {c.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
