import type { ProjectCaseStudy } from "../data/projectCaseStudies";
import { RichText } from "./RichText";

type ProjectCaseStudyBodyProps = {
  sections: ProjectCaseStudy["sections"];
};

export function ProjectCaseStudyBody({ sections }: ProjectCaseStudyBodyProps) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.heading}>
          <h3>{section.heading}</h3>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph}>
              <RichText text={paragraph} />
            </p>
          ))}
          {section.list ? (
            <ul className="project-modal-list">
              {section.list.map((item) => (
                <li key={item}>
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </>
  );
}
