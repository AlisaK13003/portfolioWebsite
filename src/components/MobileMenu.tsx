import type { MouseEventHandler } from "react";
import { navItems } from "../data/navigation";
import type { SectionId } from "../data/navigation";

type MobileMenuProps = {
  activeSection: SectionId;
  onNavigate: (href: string) => MouseEventHandler<HTMLAnchorElement>;
};

export function MobileMenu({ activeSection, onNavigate }: MobileMenuProps) {
  return (
    <div className="mobile-menu" id="mobile-menu">
      <img className="sidebar-board" src="assets/sidebar.png" alt="" />
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
