type PreloadProgress = {
  loaded: number;
  total: number;
};

type PreloadImagesOptions = {
  onProgress?: (progress: PreloadProgress) => void;
};

function nextFrame() {
  return new Promise<void>((resolve) => window.requestAnimationFrame(() => resolve()));
}

async function preloadImage(src: string) {
  const image = new Image();
  image.decoding = "async";
  image.src = src;

  if (image.decode) {
    try {
      await image.decode();
      return;
    } catch {
      // Fall through to load/error events. Some browsers reject decode for valid cached images.
    }
  }

  if (image.complete) {
    return;
  }

  await new Promise<void>((resolve) => {
    image.onload = () => resolve();
    image.onerror = () => resolve();
  });
}

export async function preloadImages(sources: string[], { onProgress }: PreloadImagesOptions = {}) {
  const uniqueSources = [...new Set(sources)];
  let loaded = 0;

  onProgress?.({ loaded, total: uniqueSources.length });

  for (const src of uniqueSources) {
    await preloadImage(src);
    loaded += 1;
    onProgress?.({ loaded, total: uniqueSources.length });
    await nextFrame();
  }
}
