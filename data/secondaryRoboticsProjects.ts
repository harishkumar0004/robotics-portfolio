export type SecondaryRoboticsProject = {
  contribution: string;
  id: string;
  overview: string;
  technologies: string[];
  title: string;
  videoShowcaseLink?: boolean;
};

export const secondaryRoboticsProjects: SecondaryRoboticsProject[] = [
  {
    id: "agv-hmi",
    title: "AGV HMI",
    overview:
      "A human-machine interface for monitoring and interacting with the AGV system, including robot state, operational controls, and system information.",
    contribution: "Detailed contribution notes can be added as the project documentation is prepared.",
    technologies: ["Robotics", "HMI"],
    videoShowcaseLink: true,
  },
  {
    id: "cafe-service-robot",
    title: "Autonomous Café Service Robot",
    overview:
      "Explored autonomous service-robot concepts involving mobile robot behavior and service workflow.",
    contribution:
      "Further robotics software and system-integration detail will be documented as the project material is prepared.",
    technologies: ["Autonomous Service Robotics", "Mobile Robot Behavior", "System Integration"],
  },
  {
    id: "six-axis-robotic-arm",
    title: "Six-Axis Robotic Arm",
    overview:
      "Explored six-axis robotic arm concepts involving forward and inverse kinematics, workspace, singularity concepts, and cycloidal gear design.",
    contribution:
      "This entry presents engineering and design concepts; implementation status and further project detail can be documented later.",
    technologies: ["Kinematics", "Workspace", "Singularity Concepts", "Cycloidal Gear Design"],
  },
];
