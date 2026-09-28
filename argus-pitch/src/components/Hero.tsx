import { hero, media } from "@/content/site";

export function Hero() {
  return (
    <header className="hero">
      <div className="container hero-inner">
        <h1 className="hero-logo">
          {/* Supplied logo, unmodified. Its black ground blends into the page with mix-blend-mode: lighten. */}
          <img src={media.logo.src} width={media.logo.width} height={media.logo.height} alt={media.logo.alt} fetchPriority="high" />
        </h1>
        <p className="label hero-label">{hero.label}</p>
        <p className="hero-primary">{hero.primary}</p>
        <p className="hero-secondary">{hero.secondary}</p>
        <p className="label hero-capabilities">{hero.capabilities}</p>
        <div className="actions">
          <a className="button button-primary" href="#about">{hero.primaryCta}</a>
          <a className="button button-secondary" href="#demo">{hero.secondaryCta}</a>
        </div>
      </div>
    </header>
  );
}
