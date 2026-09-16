"use client";

import { useState } from "react";

const navigationItems = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

type NavigationLinksProps = {
  onNavigate?: () => void;
};

function NavigationLinks({ onNavigate }: NavigationLinksProps) {
  return (
    <ul className="flex items-center gap-1 md:gap-2">
      {navigationItems.map((item) => (
        <li key={item.href}>
          <a
            className="block rounded-md px-3 py-2 text-sm font-medium text-slate-600 outline-none transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            href={item.href}
            onClick={onNavigate}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-[0_1px_0_rgb(15_23_42/0.03)]">
      <nav
        aria-label="Primary navigation"
        className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <a
          className="rounded-md text-base font-semibold tracking-tight text-slate-950 outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          href="#top"
          onClick={closeMenu}
        >
          Harish Kumar
        </a>

        <div className="hidden md:block">
          <NavigationLinks />
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex size-10 items-center justify-center rounded-md border border-slate-300 text-slate-700 outline-none transition-colors hover:border-slate-400 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 md:hidden"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          {isMenuOpen ? (
            <svg
              aria-hidden="true"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>

        {isMenuOpen && (
          <div
            className="absolute inset-x-0 top-full border-b border-slate-200 bg-white px-6 py-3 shadow-sm md:hidden"
            id="mobile-navigation"
          >
            <NavigationLinks onNavigate={closeMenu} />
          </div>
        )}
      </nav>
    </header>
  );
}
