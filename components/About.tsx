import Image from "next/image";

import { Section } from "@/components/Section";

const focusAreas = [
  "Robotics Software",
  "AGV/AMR",
  "Navigation",
  "Localization",
  "Perception",
  "Motion Control",
  "Embedded Robotics",
  "Real-Robot Testing",
];

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="mt-8 grid items-center gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div className="mx-auto w-full max-w-[18rem] lg:mx-0">
          <div className="surface-card interactive-card overflow-hidden bg-slate-100 p-2">
            <Image
              alt="Harish Kumar, Robotics Software Engineer"
              className="aspect-[3/4] w-full rounded-md object-cover"
              height={896}
              sizes="(min-width: 1024px) 18rem, 70vw"
              src="/images/profile/harish-kumar-profile.png"
              width={672}
            />
          </div>
        </div>

        <div className="max-w-2xl">
          <p className="text-lg leading-8 text-slate-700">
            I am a Robotics Software Engineer with hands-on experience working on AGV/AMR systems and real-world
            robotic platforms. My work sits between the software that makes a robot move and the practical work of
            getting that software to behave reliably on a physical system.
          </p>
          <p className="mt-5 leading-7 text-slate-600">
            I work with autonomous navigation, localization, path planning, motion control, sensor integration,
            embedded communication, Linux-based debugging, and real-robot testing. Python and C++ are my main tools,
            alongside hands-on work with Raspberry Pi, ESP32, LiDAR, IMU, cameras, encoders, and motor controllers.
          </p>
          <p className="mt-5 leading-7 text-slate-600">
            I enjoy tracing problems across software, sensors, and hardware—then testing, analysing, and debugging
            them on the robot itself. I am continuing to deepen my work in robotics software, autonomous systems,
            perception, navigation, motion planning and control, and real-world robot development.
          </p>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Focus Areas</h3>
            <ul aria-label="Robotics focus areas" className="mt-4 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <li
                  className="technical-tag rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                  key={area}
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
