import { heroIntro } from "../data/hero";
import { ButterflyButton } from "./Butterfly";
import { HeroActions } from "./HeroActions";
import { HeroArt } from "./HeroArt";
import { HeroTypewriter } from "./HeroTypewriter";

export function Hero() {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <ButterflyButton className="decor-butterfly decor-butterfly-hero-ne" />
      <div className="hero-copy" data-node-id="19:58">
        <div className="hero-heading-group">
          <h1 id="hero-title">Hi, I&apos;m Alisa.</h1>
          <p className="hero-role-prefix">I am a...</p>
          <HeroTypewriter />
        </div>

        <p className="hero-intro">{heroIntro}</p>

        <HeroActions />
      </div>

      <HeroArt />
    </section>
  );
}
