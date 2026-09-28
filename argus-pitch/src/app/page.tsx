import { About } from "@/components/About";
import { Applications } from "@/components/Applications";
import { CameraQuality } from "@/components/CameraQuality";
import { Contact } from "@/components/Contact";
import { Demo } from "@/components/Demo";
import { Hero } from "@/components/Hero";
import { EventsShowcase, TrackingShowcase } from "@/components/Screenshots";
import { Technology } from "@/components/Technology";

/** Order follows the final revision brief. */
export default function Page() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Demo />
        <TrackingShowcase />
        <EventsShowcase />
        <Applications />
        <CameraQuality />
        <Technology />
      </main>
      <Contact />
    </>
  );
}
