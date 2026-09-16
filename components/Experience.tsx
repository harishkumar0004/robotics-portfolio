import { Section } from "@/components/Section";

export function Experience() {
  return (
    <Section id="experience" title="Professional Experience">
      <ol className="relative mt-10 space-y-8 border-l border-slate-200 pl-6 md:ml-4 md:pl-10">
        <li className="relative">
          <span aria-hidden="true" className="absolute -left-[31px] top-7 size-3 rounded-full border-2 border-white bg-slate-900 md:-left-[45px]" />
          <article className="interactive-card rounded-lg border border-slate-300 bg-slate-50 p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-500">Lambda Robotics</p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-950">Software Engineer</h3>
              </div>
              <div className="shrink-0 sm:text-right">
                <p className="text-sm font-semibold text-slate-700">
                  <time dateTime="2026-03">Mar 2026</time> – Present
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Current role</p>
              </div>
            </div>

            <p className="mt-6 max-w-3xl leading-7 text-slate-700">
              I work on AGV/AMR robotic systems and real-world robot development, spanning the robotics software stack
              from autonomous navigation and localization through path planning, motion control, sensor integration,
              embedded communication, and real-robot testing.
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              The work includes Python and C++ development on Linux, robot diagnostics and debugging, and integration
              with Raspberry Pi, ESP32, LiDAR, IMU, cameras, encoders, motor controllers, UART, I2C, GPIO, and
              system services with systemd.
            </p>
          </article>
        </li>

        <li className="relative">
          <span aria-hidden="true" className="absolute -left-[31px] top-7 size-3 rounded-full border-2 border-white bg-slate-400 md:-left-[45px]" />
          <article className="interactive-card rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-500">Lambda Robotics</p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">Robotics Software Engineer Intern</h3>
              </div>
              <p className="shrink-0 text-sm font-semibold text-slate-600 sm:text-right">
                <time dateTime="2025-09">Sep 2025</time> – <time dateTime="2026-02">Feb 2026</time>
              </p>
            </div>

            <p className="mt-6 max-w-3xl leading-7 text-slate-600">
              Gained hands-on exposure to robotics prototypes and autonomous robotics development, with work across
              embedded systems, electronics and sensors, motors and controllers, and computer vision.
            </p>
          </article>
        </li>
      </ol>
    </Section>
  );
}
