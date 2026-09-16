import { Section } from "@/components/Section";
import { roboticsStack, type RoboticsStackCategory } from "@/data/roboticsStack";

const categoryGroups = {
  primary: roboticsStack.filter((category) => category.emphasis === "primary"),
  secondary: roboticsStack.filter((category) => category.emphasis === "secondary"),
  supporting: roboticsStack.filter((category) => category.emphasis === "supporting"),
};

export function RoboticsStack() {
  return (
    <Section id="skills" title="Robotics Stack">
      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        Tools and engineering areas I use across robotics software, autonomy, perception, control, and embedded integration.
      </p>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {categoryGroups.primary.map((category) => (
          <StackCategory category={category} emphasis="primary" key={category.title} />
        ))}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        {categoryGroups.secondary.map((category) => (
          <StackCategory category={category} emphasis="secondary" key={category.title} />
        ))}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-3">
        {categoryGroups.supporting.map((category) => (
          <StackCategory category={category} emphasis="supporting" key={category.title} />
        ))}
      </div>
    </Section>
  );
}

type StackCategoryProps = {
  category: RoboticsStackCategory;
  emphasis: RoboticsStackCategory["emphasis"];
};

function StackCategory({ category, emphasis }: StackCategoryProps) {
  const cardStyles = {
    primary: "border-slate-300 bg-slate-50",
    secondary: "border-slate-200 bg-white",
    supporting: "border-slate-200 bg-white",
  };

  return (
    <section className={`interactive-card rounded-lg border p-6 ${cardStyles[emphasis]}`}>
      <h3 className="text-lg font-semibold tracking-tight text-slate-950">{category.title}</h3>
      <ul aria-label={category.title} className="mt-5 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <li className="technical-tag rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
