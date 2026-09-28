import { technology } from "@/content/site";

import { SectionIntro } from "./SectionIntro";

export function Technology() {
  return (
    <section className="section" id="technology" aria-labelledby="technology-heading">
      <div className="container">
        <SectionIntro id="technology" heading={technology.heading} />
        <dl className="stack" data-reveal>
          {technology.stack.map((entry) => (
            <div key={entry.layer} className="stack-item">
              <dt className="label stack-layer">{entry.layer}</dt>
              <dd className="stack-tools">
                {/* Each tool stays whole and keeps its separator: lines may break only between tools,
                    and a separator never starts a line. */}
                {entry.tools.split(" · ").map((tool, index, all) => (
                  <span key={tool}>
                    <span className="nowrap">
                      {tool}
                      {index < all.length - 1 ? <span className="stack-sep" aria-hidden="true">{" ·"}</span> : null}
                    </span>
                    {index < all.length - 1 ? " " : null}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
        <p className="body-copy tech-explanation" data-reveal>{technology.explanation}</p>
        <ol className="pipeline" aria-label="Pipeline" data-reveal>
          {technology.pipeline.map((step, index) => (
            <li key={step} className="pipeline-step">
              {index > 0 ? <span className="pipeline-arrow" aria-hidden="true">→</span> : null}
              {step}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
