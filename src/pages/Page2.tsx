import React from 'react';

const Page2: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <section>
        <h1 className="text-4xl font-bold mb-6">Project #2 | Instructions</h1>
        <article className="text-lg leading-relaxed text-gray-800">
          <p className="mb-4">
            For this project, I created a document of detailed instructions aimed at developers with a basic understanding of JavaScript and React. The purpose of the document was to guide users through the process of creating a Firebase-backed pantry tracker application using React. The document needed to be visually appealing and meticulously designed to ensure clarity and balance throughout.
          </p>
          <p className="mb-4">
            To begin, I focused on structuring the document in a way that would make it easy to follow. I selected a clean, consistent design with minimal whitespace and incorporated headers, subheaders, and bullet points for clarity. I ensured that every step included both written instructions and visual aids, such as screenshots, to guide users effectively through the process. Screenshots illustrated key actions, such as cloning the GitHub repository, installing project dependencies, and configuring Firebase.
          </p>
          <p className="mb-4">
            I divided the instructions into logical steps, starting with setting up the necessary tools (like a GitHub account, Node.js, and Firebase), and then proceeding to technical tasks such as configuring Firebase Authentication and Firestore Database. Each step was designed to minimize ambiguity and ensure the audience could complete the process with ease.
          </p>
          <p className="mb-4">
            This project emphasized the importance of understanding the audience’s perspective, as I tailored the content for developers who might be new to Firebase or React. The experience taught me to balance technical accuracy with simplicity and reinforced the value of visual aids in instructional design. By completing this project, I developed a better appreciation for how to create professional, user-focused documentation that is both functional and visually engaging.
          </p>
        </article>
      </section>

      {/* Google Drive Embed Section */}
      <section className="mt-10">
        <iframe
          src="https://drive.google.com/file/d/1-SdMVeXf-98yk4LsXriagH0B6rNtgx3-/preview"
          width="100%"
          height="800px"
          title="Instruction Document PDF"
          className="border rounded-md"
        ></iframe>
      </section>
    </div>
  );
};

export default Page2;
