import React from 'react';

const Page3: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <section>
        <h1 className="text-4xl font-bold mb-6">Project #3 | Research Proposal</h1>
        <article className="text-lg leading-relaxed text-gray-800">
          <p className="mb-4">
            For this project, I collaborated with three other individuals to write a research proposal on evaluating the effectiveness of Project-Based Learning (PBL) in computer science education. The assignment required us to identify a specific issue, argue the need for a solution, and propose methods to collect data supporting our claims. We focused on the challenges of traditional teaching methods and how PBL could address them to enhance student outcomes.
          </p>
          <p className="mb-4">
            The main approach we took involved dividing responsibilities among team members to streamline the workload. Each member was assigned the task of finding at least three sources to be included in the literature review. These sources provided insights into the advantages and challenges of PBL compared to traditional methods. After summarizing our findings, we collaborated to develop the background and significance sections, ensuring cohesion. Together, we tackled the remaining sections, including methods, expected outcomes, and budgeting.
          </p>
          <p className="mb-4">
            Revisions played a critical role in refining the document. We addressed grammar errors, clarified arguments, and ensured proper citation formatting. The revisions also enhanced sections such as the budget and expected outcomes to provide greater clarity and alignment with our objectives. Through this iterative process, we improved the proposal’s overall quality and impact.
          </p>
          <p className="mb-4">
            This project taught me the importance of teamwork and effective communication when collaborating on a complex task. It highlighted the value of patience, as team dynamics can vary, requiring understanding and adaptability. Additionally, the experience reinforced the significance of clear delegation and individual accountability to achieve a cohesive final product. Ultimately, this assignment helped me develop skills in project management, research, and professional writing, preparing me for future collaborative endeavors.
          </p>
        </article>
      </section>

      {/* Google Drive Embed Section */}
      <section className="mt-10">
        <iframe
          src="https://drive.google.com/file/d/1OpRZuzX0oB4bAEcNOed7P7e0Cs5w2BDh/preview"
          width="100%"
          height="800px"
          title="Research Proposal PDF"
          className="border rounded-md"
        ></iframe>
      </section>
    </div>
  );
};

export default Page3;
