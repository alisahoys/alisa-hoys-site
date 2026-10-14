"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp, RotateCcw, X } from "lucide-react";
import { profile } from "@/data/profile";
import { SUGGESTED_QUESTIONS } from "@/lib/twin";
import { RichText } from "./RichText";
import { Avatar } from "./Avatar";

type Message = { role: "user" | "assistant"; content: string };

export const TWIN_OPEN_EVENT = "twin:open";

/** Call from anywhere on the page to open the chat panel. */
export function openTwin() {
  window.dispatchEvent(new CustomEvent(TWIN_OPEN_EVENT));
}

const GREETING = `Hi, I'm ${profile.firstName}'s digital twin. Ask me anything about her work, background or what she's looking for next.`;

export function Twin() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(TWIN_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(TWIN_OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, busy]);

  const send = useCallback(
    async (text: string) => {
      const content = text.trim();
      if (!content || busy) return;
      setError(null);
      setInput("");

      const history: Message[] = [...messages, { role: "user", content }];
      setMessages([...history, { role: "assistant", content: "" }]);
      setBusy(true);

      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: history }),
          signal: controller.signal,
        });
        if (!res.ok || !res.body) {
          const j = await res.json().catch(() => null);
          throw new Error(j?.error ?? "Something went wrong.");
        }
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          setMessages((prev) => {
            const next = prev.slice();
            const last = next[next.length - 1];
            next[next.length - 1] = { ...last, content: last.content + chunk };
            return next;
          });
        }
      } catch (e) {
        if ((e as Error).name !== "AbortError") {
          setError((e as Error).message);
          setMessages((prev) => prev.slice(0, -1));
        }
      } finally {
        setBusy(false);
        abortRef.current = null;
      }
    },
    [busy, messages],
  );

  const reset = () => {
    abortRef.current?.abort();
    setMessages([]);
    setError(null);
    setBusy(false);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  return (
    <>
      {/* Launcher */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="launcher"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setOpen(true)}
            className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-plum py-2.5 pl-2.5 pr-5 text-sm font-semibold text-ivory shadow-[0_20px_50px_-20px_rgba(42,26,46,0.7)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-rose-deep sm:bottom-7 sm:right-7"
            aria-label="Chat with Alisa's digital twin"
          >
            <span className="relative">
              <span className="absolute inset-0 animate-ping rounded-full bg-rose/40" />
              <Avatar size="md" ring className="relative" />
            </span>
            Ask my digital twin
          </motion.button>
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            role="dialog"
            aria-label="Chat with Alisa's digital twin"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-3 bottom-3 z-50 flex max-h-[85vh] flex-col overflow-hidden rounded-[1.75rem] border border-white/70 bg-ivory shadow-[0_40px_80px_-30px_rgba(42,26,46,0.5)] sm:inset-x-auto sm:bottom-7 sm:right-7 sm:h-[620px] sm:w-[400px]"
          >
            {/* Header */}
            <div className="relative overflow-hidden bg-plum px-5 py-4 text-ivory">
              <div
                aria-hidden
                className="absolute -right-10 -top-12 h-36 w-36 rounded-full bg-[conic-gradient(from_90deg,var(--rose),var(--mauve),var(--gold),var(--rose))] opacity-60 blur-2xl"
              />
              <div className="relative flex items-center gap-3">
                <Avatar size="lg" ring />
                <div className="min-w-0 flex-1">
                  <p className="font-display text-lg leading-tight">
                    {profile.firstName}&apos;s digital twin
                  </p>
                  <p className="flex items-center gap-1.5 text-[0.7rem] text-ivory/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    AI · trained on Alisa&apos;s profile
                  </p>
                </div>
                <button
                  onClick={reset}
                  aria-label="Start over"
                  title="Start over"
                  className="grid h-9 w-9 place-items-center rounded-full text-ivory/70 transition hover:bg-white/10 hover:text-ivory"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  className="grid h-9 w-9 place-items-center rounded-full text-ivory/70 transition hover:bg-white/10 hover:text-ivory"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-4 overflow-y-auto px-4 py-5 [scrollbar-width:thin]"
            >
              <Bubble role="assistant">{GREETING}</Bubble>

              {messages.length === 0 && (
                <div className="flex flex-wrap gap-2 pl-10">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="rounded-full border border-rose/30 bg-white/70 px-3 py-1.5 text-left text-xs font-medium text-rose-deep transition hover:border-rose hover:bg-white"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {messages.map((m, i) => (
                <Bubble
                  key={i}
                  role={m.role}
                  pending={busy && i === messages.length - 1 && m.content === ""}
                >
                  {m.role === "assistant" ? <RichText text={m.content} /> : m.content}
                </Bubble>
              ))}

              {error && (
                <p className="rounded-2xl border border-rose/30 bg-blush/50 px-4 py-3 text-xs text-rose-deep">
                  {error}
                </p>
              )}
            </div>

            {/* Composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="border-t border-line bg-white/60 p-3"
            >
              <div className="flex items-end gap-2 rounded-2xl border border-line bg-white px-3 py-2 focus-within:border-rose/50">
                <textarea
                  ref={inputRef}
                  rows={1}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Ask about my experience, stack, or availability…"
                  className="max-h-32 min-h-[2.25rem] flex-1 resize-none bg-transparent py-1.5 text-sm text-plum outline-none placeholder:text-muted/70"
                />
                <button
                  type="submit"
                  disabled={busy || !input.trim()}
                  aria-label="Send"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-plum text-ivory transition hover:bg-rose-deep disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowUp className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-center text-[0.65rem] text-muted">
                AI responses may be imperfect. For anything important, email{" "}
                <a href={`mailto:${profile.email}`} className="underline">
                  {profile.email}
                </a>
                .
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Bubble({
  role,
  children,
  pending,
}: {
  role: "user" | "assistant";
  children: React.ReactNode;
  pending?: boolean;
}) {
  const isUser = role === "user";
  return (
    <div className={`flex items-end gap-2 ${isUser ? "justify-end" : ""}`}>
      {!isUser && <Avatar size="sm" />}
      <div
        className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser ? "whitespace-pre-wrap" : ""
        } ${
          isUser
            ? "rounded-br-md bg-plum text-ivory"
            : "rounded-bl-md border border-line bg-white text-plum-soft"
        }`}
      >
        {pending ? <TypingDots /> : children}
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <span className="flex items-center gap-1 py-1" aria-label="Thinking">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-rose"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.18 }}
        />
      ))}
    </span>
  );
}
