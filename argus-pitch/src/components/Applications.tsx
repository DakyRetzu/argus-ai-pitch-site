import { applications } from "@/content/site";

import { SectionIntro } from "./SectionIntro";

export function Applications() {
  return (
    <section className="section" id="applications" aria-labelledby="applications-heading">
      <div className="container">
        <SectionIntro id="applications" heading={applications.heading}>
          <p className="body-copy">{applications.intro}</p>
        </SectionIntro>
        <ul className="columns" data-reveal>
          {applications.areas.map((area) => (
            <li key={area.name} className="column">
              <h3 className="column-title">{area.name}</h3>
              <p className="column-text">{area.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
