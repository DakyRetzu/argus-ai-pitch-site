import { demo } from "@/content/site";

import { DemoVideo } from "./DemoVideo";
import { SectionIntro } from "./SectionIntro";

export function Demo() {
  return (
    <section className="section" id="demo" aria-labelledby="demo-heading">
      <div className="container">
        <SectionIntro id="demo" heading={demo.heading} />
        <DemoVideo />
      </div>
    </section>
  );
}
