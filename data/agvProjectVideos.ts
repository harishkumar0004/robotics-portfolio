export type AgvProjectVideo = {
  id: string;
  src: string;
  title: string;
};

export const agvProjectVideos: AgvProjectVideo[] = [
  {
    id: "introduction",
    title: "AGV Introduction",
    src: "/videos/agv/agv-introduction.mp4",
  },
  {
    id: "line-following",
    title: "Line Following & Drift Reduction",
    src: "/videos/agv/agv-line-following-drift-reduction.mp4",
  },
  {
    id: "all-direction-control",
    title: "All-Direction Control",
    src: "/videos/agv/agv-all-direction-control.mp4",
  },
  {
    // Review this workplace footage for confidentiality before public deployment.
    id: "workplace-prototyping",
    title: "AGV Prototyping in Workplace",
    src: "/videos/agv/agv-workplace-prototyping.mp4",
  },
  {
    id: "hmi-face-sensing",
    title: "AGV HMI & Face Sensing",
    src: "/videos/agv/agv-hmi-face-sensing.mp4",
  },
];
