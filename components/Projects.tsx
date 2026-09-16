import { AgvGallery } from "@/components/AgvGallery";
import { AgvVideoShowcase } from "@/components/AgvVideoShowcase";
import { SecondaryRoboticsProjects } from "@/components/SecondaryRoboticsProjects";
import { Section } from "@/components/Section";

const technologies = [
  "Python",
  "OpenCV",
  "AprilTags",
  "IMU",
  "Encoders",
  "A* Path Planning",
  "Differential-Drive",
  "Raspberry Pi",
  "Real-Robot Testing",
];

export function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <article className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
          AGV / AMR · Perception · Localization · Navigation · Motion Control
        </p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Vision &amp; IMU Based AGV</h3>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
          A differential-drive AGV prototype developed to validate vision-based localization, heading correction, and
          autonomous navigation on a real robot.
        </p>

        <AgvGallery />

        <div className="mt-16 border-t border-slate-200 pt-12">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-950">Project Information</h3>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <section>
              <h4 className="text-base font-semibold text-slate-900">Overview</h4>
              <p className="mt-3 leading-7 text-slate-600">
                This AGV prototype brings together vision-based localization, IMU heading information, encoder inputs,
                A* path planning, and differential-drive motion control for real-robot development.
              </p>
            </section>
            <section>
              <h4 className="text-base font-semibold text-slate-900">My Contribution</h4>
              <p className="mt-3 leading-7 text-slate-600">
                My work covered software and integration across vision-based localization, robot-state inputs, planning,
                motion control, and testing on the physical AGV.
              </p>
            </section>
            <section>
              <h4 className="text-base font-semibold text-slate-900">Technologies</h4>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Project technologies">
                {technologies.map((technology) => (
                  <li className="technical-tag rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700" key={technology}>
                    {technology}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h4 className="text-base font-semibold text-slate-900">Engineering Challenges</h4>
              <p className="mt-3 leading-7 text-slate-600">
                Specific engineering challenges and design trade-offs will be documented here as project detail is
                prepared.
              </p>
            </section>
            <section>
              <h4 className="text-base font-semibold text-slate-900">Testing</h4>
              <p className="mt-3 leading-7 text-slate-600">
                Real-robot testing was part of the prototype work. Test conditions and observations will be documented
                here as supporting project detail is prepared.
              </p>
            </section>
          </div>
        </div>

        <section aria-labelledby="architecture-heading" className="mt-16 border-t border-slate-200 pt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Conceptual flow</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950" id="architecture-heading">
            Project Architecture
          </h3>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            This visualization describes the project&apos;s conceptual information flow; it is not presented as a
            production architecture.
          </p>

          <div className="mt-8 max-w-4xl rounded-lg border border-slate-200 bg-slate-50 p-5 sm:p-8">
            <div className="grid gap-4 md:grid-cols-3">
              <ArchitectureCard detail="Localization / Position Correction" title="Camera / AprilTags" />
              <ArchitectureCard detail="Heading Information" title="IMU" />
              <ArchitectureCard detail="Motion / Odometry Information" title="Encoders" />
            </div>
            <FlowArrow />
            <ArchitectureCard detail="Localization + Robot State" title="State Estimation Input" />
            <FlowArrow />
            <div className="grid items-center gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
              <ArchitectureCard title="A* Path Planning" />
              <FlowConnector />
              <ArchitectureCard title="Motion Control" />
              <FlowConnector />
              <ArchitectureCard title="Motor Controller" />
            </div>
            <FlowArrow />
            <ArchitectureCard detail="Differential-Drive AGV" title="Robot Platform" />
          </div>
        </section>

        <AgvVideoShowcase />

        <SecondaryRoboticsProjects />
      </article>
    </Section>
  );
}

type ArchitectureCardProps = {
  detail?: string;
  title: string;
};

function ArchitectureCard({ detail, title }: ArchitectureCardProps) {
  return (
    <div className="interactive-card rounded-md border border-slate-200 bg-white px-4 py-4 text-center">
      <p className="font-semibold text-slate-900">{title}</p>
      {detail && <p className="mt-1 text-sm text-slate-600">{detail}</p>}
    </div>
  );
}

function FlowArrow() {
  return <p aria-hidden="true" className="py-3 text-center text-xl text-slate-400">↓</p>;
}

function FlowConnector() {
  return (
    <p aria-hidden="true" className="text-center text-xl text-slate-400">
      <span className="md:hidden">↓</span>
      <span className="hidden md:inline">→</span>
    </p>
  );
}
