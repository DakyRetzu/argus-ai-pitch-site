import type { ReactNode } from "react";
import { keepCompoundsTogether } from "./Nowrap";

/**
 * Screenshot + explanation, roughly 60/40. `reverse` puts the text first (40/60).
 * The media slot is supplied by the caller so each screenshot can be shown in the way
 * that keeps it readable.
 */
export function Showcase({
  id,
  heading,
  paragraphs,
  technical,
  media,
  reverse = false,
}: {
  id: string;
  heading: string;
  paragraphs: string[];
  technical: string;
  media: ReactNode;
  reverse?: boolean;
}) {
  return (
    <section className={`section showcase${reverse ? " showcase-reverse" : ""}`} id={id} aria-labelledby={`${id}-heading`}>
      <div className="container showcase-grid">
        <div className="showcase-media" data-reveal>{media}</div>
        <div className="showcase-text" data-reveal>
          <h2 id={`${id}-heading`} className="section-title section-title-sm">{keepCompoundsTogether(heading)}</h2>
          {paragraphs.map((p) => (
            <p key={p} className="body-copy">{p}</p>
          ))}
          <p className="label technical-line">{technical}</p>
        </div>
      </div>
    </section>
  );
}
