import type { ReactNode } from "react";
import { keepCompoundsTogether } from "./Nowrap";

/** Centered section heading with optional intro paragraphs. */
export function SectionIntro({ id, heading, children }: { id: string; heading: string; children?: ReactNode }) {
  return (
    <div className="intro" data-reveal>
      <h2 id={`${id}-heading`} className="section-title">{keepCompoundsTogether(heading)}</h2>
      {children}
    </div>
  );
}
