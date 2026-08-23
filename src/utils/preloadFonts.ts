const fontStylesheetSelector = 'link[href*="fonts.googleapis.com"][rel="stylesheet"]';
const portfolioFontFaces = [
  '400 1em "Pixelify Sans"',
  '500 1em "Pixelify Sans"',
  '600 1em "Pixelify Sans"',
];

function waitForFontStylesheet() {
  const fontLink = document.querySelector<HTMLLinkElement>(fontStylesheetSelector);

  if (!fontLink || fontLink.sheet) {
    return Promise.resolve();
  }

  return new Promise<void>((resolve) => {
    const finish = () => resolve();
    const timeout = window.setTimeout(finish, 4000);

    fontLink.addEventListener(
      "load",
      () => {
        window.clearTimeout(timeout);
        finish();
      },
      { once: true },
    );
    fontLink.addEventListener(
      "error",
      () => {
        window.clearTimeout(timeout);
        finish();
      },
      { once: true },
    );
  });
}

export async function preloadPortfolioFonts() {
  if (!("fonts" in document)) {
    return;
  }

  await waitForFontStylesheet();
  await Promise.all(portfolioFontFaces.map((fontFace) => document.fonts.load(fontFace)));
}
