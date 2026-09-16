import type { ReactNode } from "react";

type SectionProps = {
  children?: ReactNode;
  id: string;
  title: string;
};

export function Section({ children, id, title }: SectionProps) {
  return (
    <section className="border-t border-slate-200" id={id}>
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-[2rem]">{title}</h2>
        {children}
      </div>
    </section>
  );
}
