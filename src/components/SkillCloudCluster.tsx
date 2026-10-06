import type { CSSProperties } from "react";
import type { SkillCategory } from "../data/skills";

type SkillCloudClusterProps = {
  category: SkillCategory;
};

function CategoryCloud({ category }: SkillCloudClusterProps) {
  // The 256 × 41 sheet has four 64 × 41 frames. Percentage positions
  // align the first and last frames with the edges of the crop.
  const spriteStyle: CSSProperties = {
    backgroundPosition: `${(category.spriteFrame / 3) * 100}% center`,
  };

  return (
    <h3 className="skill-category-cloud" data-category={category.id} style={spriteStyle}>
      <span>{category.label}</span>
    </h3>
  );
}

export function SkillCloudCluster({ category }: SkillCloudClusterProps) {
  return (
    <div className="skill-cloud-cluster">
      <CategoryCloud category={category} />
      <ul className="skill-cloud-list" aria-label={`${category.label} skills`}>
        {category.skills.map((skill) => (
          <li className="skill-pill-cloud" key={skill}>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
