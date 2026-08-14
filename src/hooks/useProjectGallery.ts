import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Project } from "../data/projects";

const fallbackImage = "assets/island.png";
const imageInterval = 2600;

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const image = new Image();

    image.onload = async () => {
      if (image.decode) {
        try {
          await image.decode();
        } catch {
          // Loading succeeded; a decode rejection should not block the gallery.
        }
      }

      resolve();
    };
    image.onerror = () => resolve();
    image.src = src;
  });
}

export function useProjectGallery(project: Project) {
  const images = useMemo(
    () => (project.images.length ? project.images : [fallbackImage]),
    [project.images],
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeLayer, setActiveLayer] = useState(0);
  const [layerImages, setLayerImages] = useState<[string, string]>([images[0], images[0]]);
  const timer = useRef<number | null>(null);
  const activeImageIndexRef = useRef(0);
  const activeLayerRef = useRef(0);

  const stopCarousel = useCallback(() => {
    if (timer.current) {
      window.clearInterval(timer.current);
      timer.current = null;
    }
  }, []);

  const showImage = useCallback(
    async (index: number, force = false) => {
      if (!images.length) {
        return;
      }

      const nextIndex = (index + images.length) % images.length;
      const nextSrc = images[nextIndex];
      const nextLayer = force ? activeLayerRef.current : (activeLayerRef.current + 1) % 2;

      await preloadImage(nextSrc);
      setLayerImages((currentImages) => {
        const nextImages = [...currentImages] as [string, string];
        nextImages[nextLayer] = nextSrc;
        return nextImages;
      });
      activeImageIndexRef.current = nextIndex;
      setActiveImageIndex(nextIndex);
      window.requestAnimationFrame(() => {
        activeLayerRef.current = nextLayer;
        setActiveLayer(nextLayer);
      });
    },
    [images],
  );

  const startCarousel = useCallback(() => {
    stopCarousel();

    if (images.length <= 1) {
      return;
    }

    timer.current = window.setInterval(() => {
      void showImage(activeImageIndexRef.current + 1);
    }, imageInterval);
  }, [images.length, showImage, stopCarousel]);

  const showManualImage = useCallback(
    (index: number) => {
      void showImage(index);
      startCarousel();
    },
    [showImage, startCarousel],
  );

  useEffect(() => {
    const firstImage = images[0] ?? fallbackImage;

    activeImageIndexRef.current = 0;
    activeLayerRef.current = 0;
    setActiveImageIndex(0);
    setActiveLayer(0);
    setLayerImages([firstImage, firstImage]);
    images.forEach((src) => void preloadImage(src));
    void showImage(0, true);
    startCarousel();

    return stopCarousel;
  }, [images, project.id, showImage, startCarousel, stopCarousel]);

  return {
    activeImageIndex,
    activeLayer,
    images,
    layerImages,
    showManualImage,
  };
}
