import { events, media, tracking } from "@/content/site";

import { Showcase } from "./Showcase";
import { LightboxImage } from "./LightboxImage";

export function TrackingShowcase() {
  return (
    <Showcase
      id="tracking"
      heading={tracking.heading}
      paragraphs={tracking.paragraphs}
      technical={tracking.technical}
      media={
        <figure className="shot-panel shot-panel-tracking">
          <img
            src={media.debugShot.src}
            width={media.debugShot.width}
            height={media.debugShot.height}
            alt={tracking.alt}
            loading="lazy"
            decoding="async"
          />
        </figure>
      }
    />
  );
}

/**
 * The event log is a very wide capture. It fits the presentation grid at full width and can be
 * opened in a focused lightbox when the visitor wants to inspect the UI details.
 */
export function EventsShowcase() {
  return (
    <Showcase
      id="events"
      reverse
      heading={events.heading}
      paragraphs={events.paragraphs}
      technical={events.technical}
      media={
        <figure className="shot-panel shot-panel-events">
          <LightboxImage
            src={media.eventsShot.src}
            width={media.eventsShot.width}
            height={media.eventsShot.height}
            alt={events.alt}
          />
        </figure>
      }
    />
  );
}
