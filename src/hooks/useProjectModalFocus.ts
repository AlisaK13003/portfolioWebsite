import { useEffect, type RefObject } from "react";

export function useProjectModalFocus(
  projectId: string | undefined,
  panelRef: RefObject<HTMLElement | null>,
  bodyRef: RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    if (!projectId) {
      return;
    }

    panelRef.current?.scrollTo({ top: 0 });
    bodyRef.current?.scrollTo({ top: 0 });
    window.requestAnimationFrame(() => panelRef.current?.focus());
  }, [bodyRef, panelRef, projectId]);
}
