import { About } from "./components/About";
import { ButterflyButton } from "./components/Butterfly";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectModal } from "./components/ProjectModal";
import { Projects } from "./components/Projects";
import { projects } from "./data/projects";
import { useProjectSelection } from "./hooks/useProjectSelection";

export default function App() {
  const {
    activeProjectIndex,
    changeModalProject,
    closeProject,
    openProject,
    selectedProject,
    setActiveProjectIndex,
  } = useProjectSelection(projects);

  return (
    <>
      <Header />
      <ButterflyButton />
      <main className="site-main">
        <Hero />
        <Projects
          activeIndex={activeProjectIndex}
          onActiveIndexChange={setActiveProjectIndex}
          onOpenProject={openProject}
        />
        <Experience />
        <About />
        <Contact />
        <Footer />
        <ProjectModal project={selectedProject} onClose={closeProject} onProjectChange={changeModalProject} />
      </main>
    </>
  );
}
