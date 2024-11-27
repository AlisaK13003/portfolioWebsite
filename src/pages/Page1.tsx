import React from 'react';

const Page1: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <section>
        <h1 className="text-4xl font-bold mb-6">Project #1 | Job Materials</h1>
        <article className="text-lg leading-relaxed text-gray-800">
          <p className="mb-4">
            For this assignment, I had to create professional job materials, including a resume, cover letter, and mini-interview video, tailored for a specific internship application. The primary objective was to prepare a complete application package showcasing my education, experience, and skills. These materials were intended to highlight my qualifications and distinguish me from other applicants.
          </p>
          <p className="mb-4">
            Revisions were critical to refining these materials. For my resume, I adjusted the educational background section by removing unnecessary details and ensuring clarity. In the cover letter, I corrected grammar errors, improved sentence structure for readability, and added a paragraph emphasizing my relevant experiences and qualifications. These changes made the documents more professional and impactful.
          </p>
        </article>
      </section>

      {/* Google Drive Embed Section */}
      <section className="mt-10">
        <iframe
          src="https://drive.google.com/file/d/1K_rNoRYVU3f935aiqjkNZQagTvubGUc4/preview"
          width="100%"
          height="800px"
          title="Job Materials PDF"
          className="border rounded-md"
        ></iframe>
      </section>
    </div>
  );
};

export default Page1;
