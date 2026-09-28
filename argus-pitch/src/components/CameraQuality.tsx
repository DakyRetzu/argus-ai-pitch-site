import { cameraQuality } from "@/content/site";
import { keepCompoundsTogether } from "./Nowrap";

/** A technical note: bordered, quiet, same weight as the rest of the page. */
export function CameraQuality() {
  return (
    <section className="section section-compact" id="camera-quality" aria-labelledby="camera-quality-heading">
      <div className="container">
        <div className="note" data-reveal>
          <h2 id="camera-quality-heading" className="section-title section-title-sm">{keepCompoundsTogether(cameraQuality.heading)}</h2>
          {cameraQuality.paragraphs.map((p) => (
            <p key={p} className="body-copy">{p}</p>
          ))}
          <p className="label note-factors">{cameraQuality.factors}</p>
        </div>
      </div>
    </section>
  );
}
