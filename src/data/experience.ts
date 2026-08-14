export type ExperienceItem = {
  company: string;
  role: string;
  dates: string;
  points: string[];
  tags: string[];
};

export const experienceItems: ExperienceItem[] = [
  {
    company: "Innovation 4 3veryone, LLC",
    role: "UI/UX Lead, PM & Partner",
    dates: "Jan. 2025 - Present",
    points: [
      "Led product design, frontend architecture, and priorities for MyLoops through launch",
      "Built responsive React, Next.js, and Firebase components to speed up implementation",
    ],
    tags: ["UI/UX", "React", "Product"],
  },
  {
    company: "SimBlocks, LLC",
    role: "Software Engineering Intern",
    dates: "Jan. 2025 - May 2025",
    points: [
      "Refactored Windows-specific libraries into cross-platform CMake projects",
      "Automated Linux setup and validation scripts to improve engineer onboarding",
    ],
    tags: ["CMake", "Linux", "Shell"],
  },
  {
    company: "UCF Arboretum",
    role: "Website & Teams Intern",
    dates: "Jan. 2025 - May 2025",
    points: [
      "Improved internal Microsoft Power Apps and automated approval workflows",
      "Created Figma prototypes and helped clarify requirements with stakeholders",
    ],
    tags: ["Power Apps", "Figma", "UX"],
  },
  {
    company: "theCoderSchool",
    role: "Coding Instructor",
    dates: "Sep. 2023 - Apr. 2024",
    points: [
      "Mentored students ages 6-17 in game development and programming logic",
      "Used project-based lessons and coaching to build confidence and creativity",
    ],
    tags: ["Teaching", "Game Dev", "Mentoring"],
  },
  {
    company: "USF CSE",
    role: "ML Research Assistant",
    dates: "Jun. 2023 - Aug. 2023",
    points: [
      "Benchmarked GPU-based algorithms with GAIVI and Slurm workflows",
      "Analyzed AI experiments with Python, TensorFlow, NumPy, and Pandas",
    ],
    tags: ["Python", "TensorFlow", "Slurm"],
  },
];
