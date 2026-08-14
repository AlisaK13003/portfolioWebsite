import { useEffect, useState } from "react";

type SectionIdGuard<SectionId extends string> = (value: string) => value is SectionId;

function currentSectionFromHash<SectionId extends string>(
  defaultSection: SectionId,
  isSectionId: SectionIdGuard<SectionId>,
) {
  const id = window.location.hash.slice(1);
  return isSectionId(id) ? id : defaultSection;
}

export function useActiveSection<SectionId extends string>(
  sectionIds: readonly SectionId[],
  defaultSection: SectionId,
  isSectionId: SectionIdGuard<SectionId>,
) {
  const [activeSection, setActiveSection] = useState<SectionId>(defaultSection);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      return;
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id && isSectionId(visibleEntry.target.id)) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.2, 0.5, 0.8],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isSectionId, sectionIds]);

  useEffect(() => {
    const handleHashChange = () => setActiveSection(currentSectionFromHash(defaultSection, isSectionId));

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [defaultSection, isSectionId]);

  return { activeSection, setActiveSection };
}
