import { contact, media } from "@/content/site";

export function Contact() {
  return (
    <footer className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="container contact-inner" data-reveal>
        <h2 id="contact-heading" className="contact-name">{contact.name}</h2>
        <p className="label contact-role">{contact.role}</p>
        <ul className="contact-links">
          {contact.links.map((link) => (
            <li key={link.label} className="contact-link">
              <span className="label">{link.label}</span>
              <a
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.display}
              </a>
            </li>
          ))}
        </ul>
        <div className="contact-logo">
          <img src={media.logo.src} width={media.logo.width} height={media.logo.height} alt={media.logo.alt} loading="lazy" decoding="async" />
        </div>
      </div>
    </footer>
  );
}
