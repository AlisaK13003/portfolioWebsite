import { heroRoleTitle } from "../data/hero";
import { useTypewriter } from "../hooks/useTypewriter";

export function HeroTypewriter() {
  const typedRole = useTypewriter({ text: heroRoleTitle });

  return (
    <p className="typewriter-line" aria-live="polite">
      <span>{typedRole}</span>
      <span className="typewriter-cursor" aria-hidden="true" />
    </p>
  );
}
