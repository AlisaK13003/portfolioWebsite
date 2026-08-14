import type { Project } from "../data/projects";
import { useProjectGallery } from "../hooks/useProjectGallery";

type ProjectGalleryProps = {
  project: Project;
};

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const { activeImageIndex, activeLayer, images, layerImages, showManualImage } = useProjectGallery(project);

  return (
    <>
      <div
        className={[
          "project-modal-image",
          images.length > 1 ? "has-carousel" : "",
          project.imageFit === "contain" ? "is-contained" : "",
          project.imageFit === "soft-contain" ? "is-soft-contained" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <button
          className="project-modal-image-arrow project-modal-image-prev"
          type="button"
          aria-label="Previous image"
          onClick={() => showManualImage(activeImageIndex - 1)}
        >
          <img src="assets/arrow.png?v=20260807-arrow-update" alt="" />
        </button>
        {layerImages.map((src, index) => (
          <img
            key={index}
            className={index === activeLayer ? "is-active" : ""}
            src={src}
            alt={index === activeLayer ? `${project.title} project preview` : ""}
            loading="lazy"
            decoding="async"
            aria-hidden={index === activeLayer ? "false" : "true"}
          />
        ))}
        <button
          className="project-modal-image-arrow project-modal-image-next"
          type="button"
          aria-label="Next image"
          onClick={() => showManualImage(activeImageIndex + 1)}
        >
          <img src="assets/arrow.png?v=20260807-arrow-update" alt="" />
        </button>
      </div>
      <div className="project-modal-image-dots" aria-label="Project image carousel" hidden={images.length <= 1}>
        {images.map((_, index) => (
          <button
            key={`${project.id}-${index}`}
            type="button"
            aria-label={`Show ${project.title} image ${index + 1}`}
            aria-current={index === activeImageIndex ? "true" : undefined}
            onClick={() => showManualImage(index)}
          />
        ))}
      </div>
    </>
  );
}
