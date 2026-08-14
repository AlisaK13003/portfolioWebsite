import type { ProjectCaseStudy } from "../data/projectCaseStudies";

type ProjectFactsProps = {
  facts: ProjectCaseStudy["facts"];
  title: string;
};

export function ProjectFacts({ facts, title }: ProjectFactsProps) {
  return (
    <dl className="project-modal-facts" aria-label={`${title} summary`}>
      {facts.map((fact) => (
        <div className="project-modal-fact" key={fact.label}>
          <dt>{fact.label}</dt>
          <dd>
            <ul className="project-modal-fact-tags" aria-label={`${fact.label} tags`}>
              {fact.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}
