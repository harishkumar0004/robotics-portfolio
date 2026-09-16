export type RoboticsStackCategory = {
  emphasis: "primary" | "secondary" | "supporting";
  skills: string[];
  title: string;
};

export const roboticsStack: RoboticsStackCategory[] = [
  {
    title: "Robotics Software",
    emphasis: "primary",
    skills: ["ROS 2", "AGV / AMR", "Differential-Drive Robotics", "Real-Robot Testing"],
  },
  {
    title: "Navigation & Autonomy",
    emphasis: "primary",
    skills: ["A* Path Planning", "Navigation", "Localization", "SLAM Integration"],
  },
  {
    title: "Perception & Localization",
    emphasis: "primary",
    skills: ["OpenCV", "YOLO", "AprilTags", "Camera-Based Perception"],
  },
  {
    title: "Motion & Control",
    emphasis: "secondary",
    skills: ["Heading Control", "Velocity Control", "Closed-Loop Control", "Predictive Braking", "Jerk-Limited Acceleration"],
  },
  {
    title: "Embedded & Hardware Integration",
    emphasis: "secondary",
    skills: ["Raspberry Pi", "ESP32", "LiDAR", "Camera / Depth Camera", "IMU", "Encoders", "Motor Controllers", "UART", "I2C", "GPIO"],
  },
  {
    title: "Programming & Systems",
    emphasis: "supporting",
    skills: ["Python", "C++", "C", "Linux", "Embedded Linux", "systemd", "Diagnostic Telemetry", "Sensor-Data Analysis", "Root-Cause Debugging"],
  },
  {
    title: "Robotic Manipulation Concepts",
    emphasis: "supporting",
    skills: ["Forward Kinematics", "Inverse Kinematics", "Workspace Analysis", "Singularity Concepts", "Cycloidal Gear Design"],
  },
  {
    title: "Tools & Development",
    emphasis: "supporting",
    skills: ["Git", "GitHub", "VS Code"],
  },
];
