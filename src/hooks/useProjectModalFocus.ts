import { useEffect, type RefObject } from "react";

export function useProjectModalFocus(
  projectId: string | undefined,
  modalRef: RefObject<HTMLDivElement | null>,
  panelRef: RefObject<HTMLElement | null>,
  bodyRef: RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    if (!projectId) {
      return;
    }

    const resetModalScroll = () => {
      modalRef.current?.scrollTo({ top: 0, left: 0, behavior: "auto" });
      panelRef.current?.scrollTo({ top: 0, left: 0, behavior: "auto" });
      bodyRef.current?.scrollTo({ top: 0, left: 0, behavior: "auto" });
      panelRef.current?.focus({ preventScroll: true });
    };

    resetModalScroll();
    const frame = window.requestAnimationFrame(resetModalScroll);

    return () => window.cancelAnimationFrame(frame);
  }, [bodyRef, modalRef, panelRef, projectId]);
}
