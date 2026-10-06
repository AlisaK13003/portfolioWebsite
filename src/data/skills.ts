export type SkillCategory = {
  id: "backend" | "frontend" | "design" | "development";
  label: string;
  spriteFrame: number;
  skills: readonly string[];
};

// Frames run left to right: off-white, yellow, pink, mint.
export const skillCategories: readonly SkillCategory[] = [
  {
    id: "backend",
    label: "Backend",
    spriteFrame: 3,
    skills: ["Node.js", "Express", "Supabase", "Firebase", "MongoDB", "PostgreSQL", "FastAPI", "REST APIs"],
  },
  {
    id: "frontend",
    label: "Frontend",
    spriteFrame: 1,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind", "React Native", "SvelteKit", "HTML/CSS"],
  },
  {
    id: "design",
    label: "Design",
    spriteFrame: 2,
    skills: ["Figma", "UI Design", "UX Design", "Prototyping", "Wireframing", "Design Systems", "User Flows"],
  },
  {
    id: "development",
    label: "Development",
    spriteFrame: 0,
    skills: ["Git/GitHub", "Python", "C++", "C#", "Godot", "Unity", "Linux", "CMake"],
  },
];
