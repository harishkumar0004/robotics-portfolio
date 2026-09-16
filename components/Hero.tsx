import Image from "next/image";

import { contactLinks } from "@/data/contactLinks";

const socialProfiles = [
  { label: "LinkedIn", url: contactLinks.linkedin },
  { label: "GitHub", url: contactLinks.github },
];

export function Hero() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20" id="top">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Robotics Software Engineer
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
          Harish Kumar
        </h1>
        <p className="mt-6 max-w-xl text-xl font-medium leading-8 text-slate-800 sm:text-2xl">
          Building and testing software for real-world autonomous robotic systems.
        </p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          Python <span aria-hidden="true">·</span> C++ <span aria-hidden="true">·</span> ROS2{" "}
          <span aria-hidden="true">·</span> AGV/AMR <span aria-hidden="true">·</span> Navigation{" "}
          <span aria-hidden="true">·</span> Localization <span aria-hidden="true">·</span> Perception{" "}
          <span aria-hidden="true">·</span> Motion Control <span aria-hidden="true">·</span> Embedded Robotics
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white outline-none transition-colors hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            href="#projects"
          >
            View My Work
          </a>
          {contactLinks.resumeAvailable ? (
            <a
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 outline-none transition-colors hover:border-slate-400 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
              download
              href={contactLinks.resume}
            >
              Download Resume
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex min-h-11 cursor-not-allowed items-center justify-center rounded-md border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-400"
              title="Resume will be available soon"
            >
              Download Resume
            </span>
          )}
        </div>

        <div aria-label="Professional profiles" className="mt-8 flex items-center gap-4 text-sm">
          {socialProfiles.map((profile) =>
            profile.url ? (
              <a
                className="font-medium text-slate-600 underline decoration-slate-300 underline-offset-4 outline-none transition-colors hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                href={profile.url}
                key={profile.label}
                rel="noreferrer"
                target="_blank"
              >
                {profile.label}
              </a>
            ) : (
              <span className="font-medium text-slate-400" key={profile.label} title={`${profile.label} URL pending`}>
                {profile.label}
              </span>
            ),
          )}
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-md lg:max-w-none">
        <div className="interactive-card relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm">
          <Image
            alt="Automated guided vehicle prototype"
            className="object-cover"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 100vw"
            src="/images/agv/agv-base-01.jpeg"
          />
        </div>
        <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-md border border-slate-200 bg-white p-2 pr-4 shadow-sm sm:-left-6">
          <Image
            alt="Harish Kumar"
            className="size-14 rounded object-cover"
            height={112}
            src="/images/profile/harish-kumar-profile.png"
            width={84}
          />
          <div>
            <p className="text-sm font-semibold text-slate-900">Harish Kumar</p>
            <p className="text-xs text-slate-500">Robotics Software Engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
