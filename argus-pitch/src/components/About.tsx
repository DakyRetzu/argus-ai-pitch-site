import { about } from "@/content/site";

import { SectionIntro } from "./SectionIntro";

export function About() {
  return (
    <section className="section section-compact" id="about" aria-labelledby="about-heading">
      <div className="container">
        <SectionIntro id="about" heading={about.heading}>
          {about.paragraphs.map((p) => (
            <p key={p} className="body-copy">{p}</p>
          ))}
        </SectionIntro>
      </div>
    </section>
  );
}
