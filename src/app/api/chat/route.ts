import { buildSystemPrompt, TWIN_MODELS } from "@/lib/twin";

type ChatMessage = { role: "user" | "assistant"; content: string };

const MAX_MESSAGES = 16;
const MAX_CHARS = 2000;

function sanitize(input: unknown): ChatMessage[] | null {
  if (!Array.isArray(input) || input.length === 0) return null;
  const out: ChatMessage[] = [];
  for (const m of input.slice(-MAX_MESSAGES)) {
    if (
      !m ||
      (m.role !== "user" && m.role !== "assistant") ||
      typeof m.content !== "string"
    ) {
      return null;
    }
    const content = m.content.trim().slice(0, MAX_CHARS);
    if (content) out.push({ role: m.role, content });
  }
  return out.length && out[out.length - 1].role === "user" ? out : null;
}

export async function POST(req: Request) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "OPENROUTER_API_KEY is not configured." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }
  const messages = sanitize((body as { messages?: unknown })?.messages);
  if (!messages) {
    return Response.json({ error: "Invalid messages." }, { status: 400 });
  }

  const upstream = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": req.headers.get("origin") ?? "http://localhost:3000",
      "X-Title": "Alisa Hoys - Digital Twin",
    },
    body: JSON.stringify({
      model: TWIN_MODELS[0],
      models: TWIN_MODELS,
      stream: true,
      max_tokens: 600,
      temperature: 0.7,
      messages: [{ role: "system", content: buildSystemPrompt() }, ...messages],
    }),
  });

  if (!upstream.ok || !upstream.body) {
    const detail = await upstream.text().catch(() => "");
    console.error("OpenRouter error", upstream.status, detail.slice(0, 500));
    return Response.json(
      { error: "The digital twin is unavailable right now. Please try again in a moment." },
      { status: 502 },
    );
  }

  // Translate OpenRouter's SSE stream into a plain text stream of tokens.
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let buffer = "";

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const reader = upstream.body!.getReader();
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          let nl: number;
          while ((nl = buffer.indexOf("\n")) !== -1) {
            const line = buffer.slice(0, nl).trim();
            buffer = buffer.slice(nl + 1);
            if (!line.startsWith("data:")) continue; // comments / keep-alives
            const data = line.slice(5).trim();
            if (data === "[DONE]") continue;
            try {
              const json = JSON.parse(data);
              const token: string | undefined = json.choices?.[0]?.delta?.content;
              if (token) controller.enqueue(encoder.encode(token));
              if (json.error) {
                controller.enqueue(
                  encoder.encode("\n\n[Sorry, the model returned an error. Please try again.]"),
                );
              }
            } catch {
              // partial / malformed line: ignore
            }
          }
        }
      } finally {
        controller.close();
      }
    },
    cancel() {
      upstream.body?.cancel().catch(() => {});
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Accel-Buffering": "no",
    },
  });
}
