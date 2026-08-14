export function HeroArt() {
  return (
    <div className="hero-art" data-node-id="246:40">
      <picture>
        <source srcSet="assets/islandGirl.webp" type="image/webp" />
        <img
          src="assets/islandGirl.png"
          alt="Pixel-art girl sitting on a floating grassy island with a koi fish."
          width="582"
          height="581"
          decoding="async"
          fetchPriority="high"
        />
      </picture>
    </div>
  );
}
