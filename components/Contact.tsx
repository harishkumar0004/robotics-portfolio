import { Section } from "@/components/Section";
import { contactLinks } from "@/data/contactLinks";

type ContactLink = {
  href: string;
  label: string;
  external?: boolean;
};

export function Contact() {
  const configuredLinks: ContactLink[] = [
    contactLinks.email && { href: `mailto:${contactLinks.email}`, label: "Email" },
    contactLinks.linkedin && { href: contactLinks.linkedin, label: "LinkedIn", external: true },
    contactLinks.github && { href: contactLinks.github, label: "GitHub", external: true },
    contactLinks.resumeAvailable && { href: contactLinks.resume, label: "Resume" },
  ].filter((link): link is ContactLink => Boolean(link));

  return (
    <Section id="contact" title="Let&apos;s Connect">
      <div className="surface-card mt-8 grid gap-8 bg-slate-50 p-6 sm:p-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <p className="max-w-xl text-lg leading-8 text-slate-700">
          If you&apos;re working on robotics, autonomous systems, or related engineering problems, I&apos;d be happy to connect.
        </p>
        <nav aria-label="Contact and professional links">
          <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-1">
            {configuredLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="flex min-h-11 items-center justify-between rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 outline-none transition-colors hover:border-slate-400 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                  href={link.href}
                  {...(link.external ? { rel: "noopener noreferrer", target: "_blank" } : {})}
                >
                  <span>{link.label}</span>
                  {link.external && <span aria-hidden="true">↗</span>}
                  {link.external && <span className="sr-only"> (opens in a new tab)</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Section>
  );
}
