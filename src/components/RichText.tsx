import { Fragment } from "react";

/**
 * Minimal markdown-ish renderer for chat replies: paragraphs, "-"/"•" bullet
 * lists, **bold**, `code` and bare URLs / emails. Anything else is shown as text.
 */
export function RichText({ text }: { text: string }) {
  const blocks = text.trim().split(/\n{2,}/);
  return (
    <>
      {blocks.map((block, bi) => {
        const lines = block.split("\n");
        const isList = lines.every((l) => /^\s*([-*•]|\d+[.)])\s+/.test(l));
        if (isList) {
          return (
            <ul key={bi} className="my-1 space-y-1 pl-4">
              {lines.map((l, li) => (
                <li key={li} className="list-disc marker:text-rose">
                  <Inline text={l.replace(/^\s*([-*•]|\d+[.)])\s+/, "")} />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={bi} className={bi > 0 ? "mt-2" : undefined}>
            {lines.map((l, li) => (
              <Fragment key={li}>
                {li > 0 && <br />}
                <Inline text={l} />
              </Fragment>
            ))}
          </p>
        );
      })}
    </>
  );
}

// Trailing punctuation is excluded from URLs/emails so "email me at x@y.com." links correctly.
const TOKEN =
  /(\*\*[^*]+\*\*|`[^`]+`|https?:\/\/[^\s)]*[^\s).,;:!?]|[\w.+-]+@[\w-]+(?:\.[\w-]+)*\.[A-Za-z]{2,})/g;

function Inline({ text }: { text: string }) {
  const parts = text.split(TOKEN);
  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-plum">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code key={i} className="rounded bg-cream px-1 py-0.5 text-[0.85em]">
              {part.slice(1, -1)}
            </code>
          );
        }
        if (/^https?:\/\//.test(part)) {
          return (
            <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="underline">
              {part.replace(/^https?:\/\/(www\.)?/, "")}
            </a>
          );
        }
        if (/^[\w.+-]+@[\w-]+(?:\.[\w-]+)*\.[A-Za-z]{2,}$/.test(part)) {
          return (
            <a key={i} href={`mailto:${part}`} className="underline">
              {part}
            </a>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
