import type { ReactNode } from "react";

/**
 * Browsers may break a line after a hyphen ("real- / world"). Wrap hyphenated compounds so they
 * stay on one line; the text itself is unchanged.
 */
export function keepCompoundsTogether(text: string): ReactNode[] {
  return text.split(/(\S+-\S+)/).map((part, index) =>
    index % 2 === 1 ? (
      <span key={index} className="nowrap">{part}</span>
    ) : (
      part
    ),
  );
}
