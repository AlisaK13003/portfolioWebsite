export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const sectionIds = ["home", "projects", "experience", "about", "contact"] as const;

export type SectionId = (typeof sectionIds)[number];

export function isSectionId(value: string): value is SectionId {
  return (sectionIds as readonly string[]).includes(value);
}
