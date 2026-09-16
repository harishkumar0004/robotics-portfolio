import { secondaryRoboticsProjects } from "@/data/secondaryRoboticsProjects";

export function SecondaryRoboticsProjects() {
  return (
    <section aria-labelledby="other-projects-heading" className="mt-20 border-t border-slate-200 pt-12">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Supporting work</p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950" id="other-projects-heading">
        Other Robotics Projects
      </h3>
      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        Additional work across robotics software, human-machine interfaces, autonomous mobile robots, and robotic-arm
        engineering concepts.
      </p>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {secondaryRoboticsProjects.map((project) => (
          <article className="surface-card interactive-card flex flex-col p-6" key={project.id}>
            <h4 className="text-xl font-semibold tracking-tight text-slate-950">{project.title}</h4>

            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-sm font-semibold text-slate-900">Overview</dt>
                <dd className="mt-2 leading-7 text-slate-600">{project.overview}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-900">My Contribution</dt>
                <dd className="mt-2 leading-7 text-slate-600">{project.contribution}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-900">Technologies</dt>
                <dd>
                  <ul className="mt-3 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                    {project.technologies.map((technology) => (
                      <li className="technical-tag rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700" key={technology}>
                        {technology}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>

            {project.videoShowcaseLink && (
              <a
                className="mt-6 w-fit text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 outline-none hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                href="#project-videos-heading"
              >
                See AGV HMI &amp; Face Sensing in the project video showcase.
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
