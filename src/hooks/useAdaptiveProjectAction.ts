import type { MouseEvent } from "react";
import type { ProjectAction } from "../data/projects";

function getAdaptiveDownloadHref(action: ProjectAction) {
  if (!action.adaptiveDownload || typeof navigator === "undefined") {
    return action.href;
  }

  const userAgent = navigator.userAgent || navigator.vendor || "";
  const isAndroid = /Android/i.test(userAgent);
  const isIos =
    /iPad|iPhone|iPod/.test(userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  if (isAndroid) {
    return action.adaptiveDownload.androidHref;
  }

  if (isIos) {
    return action.adaptiveDownload.iosHref;
  }

  return action.adaptiveDownload.desktopHref;
}

export function useAdaptiveProjectAction(action: ProjectAction) {
  return (event: MouseEvent<HTMLAnchorElement>) => {
    if (!action.adaptiveDownload) {
      return;
    }

    event.currentTarget.href = getAdaptiveDownloadHref(action);
  };
}
