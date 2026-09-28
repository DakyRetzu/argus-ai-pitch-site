import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed } from "next/font/google";

import { hero } from "@/content/site";

import "./globals.css";

// Same type family as the ARGUS interface itself. next/font downloads the files at build time
// and serves them from this site: no runtime requests to a font CDN.
const plex = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});
const plexCondensed = IBM_Plex_Sans_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  variable: "--font-plex-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: `ARGUS AI | ${hero.label.charAt(0)}${hero.label.slice(1).toLowerCase()}`,
  description: hero.primary,
  openGraph: {
    title: "ARGUS AI",
    description: hero.primary,
    images: [{ url: "/media/argus-demo-poster.jpg", width: 1836, height: 838 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

/**
 * Section-entry reveal without React: marks <html> as JS-capable, then fades [data-reveal]
 * elements in once as they enter the viewport. If this never runs, nothing is ever hidden.
 */
const revealScript = `(function(){var d=document.documentElement;
if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
d.classList.add('reveal-on');
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px',threshold:0.08});
function go(){document.querySelectorAll('[data-reveal]').forEach(function(el){io.observe(el);});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
setTimeout(function(){document.querySelectorAll('[data-reveal]').forEach(function(el){el.classList.add('is-in');});},4000);
})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plex.variable} ${plexCondensed.variable}`}>
      <body>
        {children}
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
      </body>
    </html>
  );
}
