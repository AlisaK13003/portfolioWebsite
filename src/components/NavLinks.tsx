import type { MouseEventHandler } from "react";
import { navItems } from "../data/navigation";
import type { SectionId } from "../data/navigation";

type NavLinksProps = {
  activeSection: SectionId;
  className: string;
  dataNodeId?: string;
  onNavigate: (href: string) => MouseEventHandler<HTMLAnchorElement>;
};

export function NavLinks({ activeSection, className, dataNodeId, onNavigate }: NavLinksProps) {
  return (
    <div className={className} data-node-id={dataNodeId}>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
          onClick={onNavigate(item.href)}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
