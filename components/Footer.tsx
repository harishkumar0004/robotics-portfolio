import { contactLinks } from "@/data/contactLinks";

export function Footer() {
  return (
    <footer className="border-t border-slate-200" id="footer">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Harish Kumar · Robotics Software Engineer</p>
        <nav aria-label="Footer professional links">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            <li>
              <a
                className="font-medium text-slate-600 underline decoration-slate-300 underline-offset-4 outline-none hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                href={`mailto:${contactLinks.email}`}
              >
                Email
              </a>
            </li>
            <li>
              <a
                className="font-medium text-slate-600 underline decoration-slate-300 underline-offset-4 outline-none hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                href={contactLinks.linkedin}
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="font-medium text-slate-600 underline decoration-slate-300 underline-offset-4 outline-none hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                href={contactLinks.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            {contactLinks.resumeAvailable && (
              <li>
                <a
                  className="font-medium text-slate-600 underline decoration-slate-300 underline-offset-4 outline-none hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                  download
                  href={contactLinks.resume}
                >
                  Resume
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
