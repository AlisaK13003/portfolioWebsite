import { useEffect, useState } from "react";

type UseTypewriterOptions = {
  deleteDelay?: number;
  holdDelay?: number;
  initialDelay?: number;
  restartDelay?: number;
  text: string;
  typeDelay?: number;
};

export function useTypewriter({
  deleteDelay = 70,
  holdDelay = 5000,
  initialDelay = 900,
  restartDelay = 280,
  text,
  typeDelay = 125,
}: UseTypewriterOptions) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let characterIndex = 0;
    let isDeleting = false;
    let timer = 0;

    const typeNextCharacter = () => {
      setTypedText(text.slice(0, characterIndex));

      if (!isDeleting && characterIndex < text.length) {
        characterIndex += 1;
        timer = window.setTimeout(typeNextCharacter, typeDelay);
        return;
      }

      if (!isDeleting && characterIndex === text.length) {
        isDeleting = true;
        timer = window.setTimeout(typeNextCharacter, holdDelay);
        return;
      }

      if (isDeleting && characterIndex > 0) {
        characterIndex -= 1;
        timer = window.setTimeout(typeNextCharacter, deleteDelay);
        return;
      }

      isDeleting = false;
      timer = window.setTimeout(typeNextCharacter, restartDelay);
    };

    timer = window.setTimeout(typeNextCharacter, initialDelay);

    return () => window.clearTimeout(timer);
  }, [deleteDelay, holdDelay, initialDelay, restartDelay, text, typeDelay]);

  return typedText;
}
