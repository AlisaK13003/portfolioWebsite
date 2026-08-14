import { ButterflyButton } from "./Butterfly";
import { FooterWell } from "./FooterWell";

export function Footer() {
  return (
    <footer className="site-footer" aria-label="Portfolio footer">
      <ButterflyButton className="decor-butterfly decor-butterfly-footer-house" />
      <FooterWell />
      <p>
        Made with matcha and love <span aria-hidden="true">♥</span>
        <br />
        Alisa&apos;s Portfolio
      </p>
    </footer>
  );
}
