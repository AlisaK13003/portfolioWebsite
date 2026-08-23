import { useEffect, useState, type ReactNode } from "react";
import { preloadAssets } from "../data/preloadAssets";
import { preloadPortfolioFonts } from "../utils/preloadFonts";
import { preloadImages } from "../utils/preloadImages";

type StartupGateProps = {
  children: ReactNode;
};

const loaderExitDuration = 850;
const minimumLoaderDuration = 700;
const preloadTaskCount = preloadAssets.length + 1;

export function StartupGate({ children }: StartupGateProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const [progress, setProgress] = useState({ loaded: 0, total: preloadTaskCount });

  useEffect(() => {
    let isMounted = true;
    const startedAt = performance.now();
    let readyTimer = 0;
    let exitTimer = 0;
    let loadedImages = 0;
    let loadedFontTasks = 0;

    const syncProgress = () => {
      if (isMounted) {
        setProgress({ loaded: loadedImages + loadedFontTasks, total: preloadTaskCount });
      }
    };

    const imagePreload = preloadImages(preloadAssets, {
      onProgress: (nextProgress) => {
        loadedImages = nextProgress.loaded;
        syncProgress();
      },
    });
    const fontPreload = preloadPortfolioFonts().then(() => {
      loadedFontTasks = 1;
      syncProgress();
    });

    void Promise.all([imagePreload, fontPreload]).then(() => {
      if (!isMounted) {
        return;
      }

      const elapsed = performance.now() - startedAt;
      const remainingDelay = Math.max(0, minimumLoaderDuration - elapsed);

      readyTimer = window.setTimeout(() => {
        if (!isMounted) {
          return;
        }

        setProgress({ loaded: preloadTaskCount, total: preloadTaskCount });
        setIsExiting(true);

        exitTimer = window.setTimeout(() => {
          if (isMounted) {
            setIsLoaderVisible(false);
          }
        }, loaderExitDuration);
      }, remainingDelay);
    });

    return () => {
      isMounted = false;
      window.clearTimeout(readyTimer);
      window.clearTimeout(exitTimer);
    };
  }, []);

  const percent = progress.total ? Math.round((progress.loaded / progress.total) * 100) : 0;
  const loaderMessage = percent >= 100 ? "Ready!" : "Loading portfolio...";

  return (
    <>
      {isExiting ? <div className="startup-content">{children}</div> : null}
      {isLoaderVisible ? (
        <main
          className={`startup-loader${isExiting ? " is-exiting" : ""}`}
          aria-label="Loading portfolio assets"
          aria-hidden={isExiting ? "true" : undefined}
        >
          <div className="startup-loader-panel">
            <span className="startup-loader-butterfly" aria-hidden="true" />
            <p>{loaderMessage}</p>
            <div className="startup-loader-track" aria-hidden="true">
              <div style={{ width: `${percent}%` }} />
            </div>
            <span>{percent}%</span>
          </div>
        </main>
      ) : null}
    </>
  );
}
