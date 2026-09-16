import { Section } from "@/components/Section";

export function Education() {
  return (
    <Section id="education" title="Education">
      <p className="mt-3 max-w-2xl leading-7 text-slate-600">
        Academic foundation in artificial intelligence, data science, and engineering.
      </p>

      <article className="interactive-card mt-8 rounded-lg border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-slate-950">
              B.Tech / Bachelor of Technology in Artificial Intelligence and Data Science
            </h3>
            <p className="mt-2 text-base font-medium text-slate-700">
              Dr. Mahalingam College of Engineering and Technology
            </p>
          </div>
          <dl className="grid shrink-0 grid-cols-2 gap-x-6 gap-y-1 text-sm sm:text-right">
            <div>
              <dt className="font-semibold text-slate-500">Duration</dt>
              <dd className="mt-1 font-medium text-slate-800">
                <time dateTime="2022">2022</time> – <time dateTime="2026">2026</time>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-500">CGPA</dt>
              <dd className="mt-1 font-medium text-slate-800">8.14 / 10</dd>
            </div>
          </dl>
        </div>
      </article>
    </Section>
  );
}
