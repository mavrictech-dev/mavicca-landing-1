function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
      <path d="M14.2 8.2V6.7c0-.8.5-1.2 1.3-1.2h1.8V2.4c-.3 0-1.5-.1-2.8-.1-2.8 0-4.6 1.7-4.6 4.8v1.1H6.8v3.5h3.1v10h4.1v-10h3.1l.5-3.5h-3.4Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.3 8.8 8.8 0 0 1-3.8-.9L3 20l1.4-4.4A8.2 8.2 0 0 1 3 11.5 8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5Z" />
      <path d="M8.8 8.5c.2 4 2.7 6.4 6.6 6.9" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
      <path d="M6.4 8.8H2.9v12.1h3.5V8.8ZM4.7 3A2.1 2.1 0 1 0 4.6 7 2.1 2.1 0 0 0 4.7 3Zm16.4 10.9c0-3.4-1.8-5.4-4.6-5.4-2 0-3.1 1.1-3.6 2V8.8H9.4v12.1h3.5v-6.5c0-1.7.9-2.7 2.3-2.7 1.3 0 2.1.9 2.1 2.7v6.5h3.8v-7Z" />
    </svg>
  );
}

function GmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", Icon: LinkedinIcon },
  { label: "Facebook", href: "https://www.facebook.com/", Icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/", Icon: InstagramIcon },
  { label: "WhatsApp", href: "https://wa.me/51995688777", Icon: WhatsAppIcon },
  { label: "Gmail", href: "mailto:info@mavicca.com.pe", Icon: GmailIcon },
] as const;

export function SocialLinks() {
  return (
    <nav aria-label="Redes sociales">
      <ul className="flex items-center justify-center gap-7 sm:gap-9">
        {socialLinks.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="inline-flex rounded-full p-1 text-current transition duration-300 hover:-translate-y-0.5 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9ed87a] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fbfdf8]"
            >
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
