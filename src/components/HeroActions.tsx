import { heroActions } from "../data/hero";

export function HeroActions() {
  return (
    <div className="hero-actions">
      {heroActions.map((action) => {
        const isResume = Boolean(action.text);

        return (
          <a
            key={action.ariaLabel}
            className={action.className}
            href={action.href}
            target={isResume || action.href.startsWith("http") ? "_blank" : undefined}
            rel={isResume || action.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={action.ariaLabel}
          >
            {action.icon ? <img src={action.icon} alt="" /> : null}
            {action.text ? <span>{action.text}</span> : null}
          </a>
        );
      })}
    </div>
  );
}
