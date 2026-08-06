const header = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const menuBackdrop = document.querySelector("[data-menu-backdrop]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const navBoard = document.querySelector("[data-nav-board]");
const typewriterText = document.querySelector("[data-typewriter]");
const butterfly = document.querySelector("[data-butterfly]");
const projectCards = [...document.querySelectorAll("[data-project-card]")];
const projectPrev = document.querySelector("[data-project-prev]");
const projectNext = document.querySelector("[data-project-next]");
const projectDots = document.querySelector("[data-project-dots]");
const experienceCards = [...document.querySelectorAll("[data-experience-card]")];
const experiencePapers = [...document.querySelectorAll("[data-unfurled-src][data-rolled-src]")];
const experiencePrev = document.querySelector("[data-experience-prev]");
const experienceNext = document.querySelector("[data-experience-next]");
const aboutCards = [...document.querySelectorAll("[data-about-card]")];
const aboutPrev = document.querySelector("[data-about-prev]");
const aboutNext = document.querySelector("[data-about-next]");
const swingSigns = [...document.querySelectorAll("[data-swing-sign]")];
const navLinks = [...document.querySelectorAll('a[href^="#"]')];
const sectionIds = ["home", "projects", "experience", "about", "contact"];
const titles = ["Game Developer", "Software Engineer", "Project Manager", "UI/UX Designer"];
const butterflyFollowDuration = 3200;
const butterflyReturnDuration = 1400;

function setTheme(theme) {
  const isDark = theme === "dark";

  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle?.setAttribute("aria-pressed", String(isDark));
  themeToggle?.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode",
  );
  navBoard?.setAttribute("src", isDark ? "assets/navbarDark.png" : "assets/navbar.png");
  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
}

setTheme(localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light");

if (butterfly) {
  let butterflyOrigin = { x: 0, y: 0 };
  let butterflyPosition = { x: 0, y: 0 };
  let butterflyTarget = { x: 0, y: 0 };
  let lastButterflyPointerX = 0;
  let butterflyFrame = 0;
  let butterflyTimeout = 0;

  function setButterflyPosition(x, y) {
    butterfly.style.setProperty("--butterfly-x", `${x}px`);
    butterfly.style.setProperty("--butterfly-y", `${y}px`);
  }

  function setButterflyTarget(clientX, clientY) {
    const rect = butterfly.getBoundingClientRect();

    if (clientX > lastButterflyPointerX + 1) {
      butterfly.classList.add("is-facing-right");
      butterfly.classList.remove("is-facing-left");
    } else if (clientX < lastButterflyPointerX - 1) {
      butterfly.classList.add("is-facing-left");
      butterfly.classList.remove("is-facing-right");
    }

    lastButterflyPointerX = clientX;
    butterflyTarget = {
      x: clientX - rect.width / 2 - butterflyOrigin.x,
      y: clientY - rect.height / 2 - butterflyOrigin.y,
    };
  }

  function flyButterfly() {
    butterflyPosition = {
      x: butterflyPosition.x + (butterflyTarget.x - butterflyPosition.x) * 0.14,
      y: butterflyPosition.y + (butterflyTarget.y - butterflyPosition.y) * 0.14,
    };
    setButterflyPosition(butterflyPosition.x, butterflyPosition.y);
    butterflyFrame = window.requestAnimationFrame(flyButterfly);
  }

  function returnButterflyHome(startTime, startPosition) {
    const elapsed = performance.now() - startTime;
    const progress = Math.min(elapsed / butterflyReturnDuration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    const nextPosition = {
      x: startPosition.x * (1 - easedProgress),
      y: startPosition.y * (1 - easedProgress),
    };

    butterflyPosition = nextPosition;
    setButterflyPosition(nextPosition.x, nextPosition.y);

    if (progress < 1) {
      butterflyFrame = window.requestAnimationFrame(() =>
        returnButterflyHome(startTime, startPosition),
      );
      return;
    }

    butterflyPosition = { x: 0, y: 0 };
    setButterflyPosition(0, 0);
    butterfly.classList.remove("is-following", "is-facing-left", "is-facing-right");
  }

  function updateButterflyTarget(event) {
    if (butterfly.classList.contains("is-following")) {
      setButterflyTarget(event.clientX, event.clientY);
    }
  }

  window.addEventListener("pointermove", updateButterflyTarget);
  window.addEventListener("mousemove", updateButterflyTarget);

  butterfly.addEventListener("click", (event) => {
    const rect = butterfly.getBoundingClientRect();
    butterflyOrigin = {
      x: rect.left - butterflyPosition.x,
      y: rect.top - butterflyPosition.y,
    };
    lastButterflyPointerX = event.clientX;
    butterfly.classList.add("is-facing-right");
    butterfly.classList.remove("is-facing-left");
    setButterflyTarget(event.clientX, event.clientY);
    butterfly.classList.add("is-following");

    window.cancelAnimationFrame(butterflyFrame);
    flyButterfly();
    window.clearTimeout(butterflyTimeout);
    butterflyTimeout = window.setTimeout(() => {
      window.cancelAnimationFrame(butterflyFrame);
      const returnStartPosition = { ...butterflyPosition };

      if (returnStartPosition.x > 1) {
        butterfly.classList.add("is-facing-left");
        butterfly.classList.remove("is-facing-right");
      } else if (returnStartPosition.x < -1) {
        butterfly.classList.add("is-facing-right");
        butterfly.classList.remove("is-facing-left");
      }

      returnButterflyHome(performance.now(), returnStartPosition);
    }, butterflyFollowDuration);
  });
}

function setMenuOpen(isOpen) {
  header?.classList.toggle("is-open", isOpen);
  menuToggle?.setAttribute("aria-expanded", String(isOpen));
  menuToggle?.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
}

menuToggle?.addEventListener("click", () => {
  setMenuOpen(!header?.classList.contains("is-open"));
});

mobileMenu?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    setMenuOpen(false);
  }
});

menuBackdrop?.addEventListener("click", () => {
  setMenuOpen(false);
});

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

function setActiveSection(sectionId) {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${sectionId}`;

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function currentSectionFromHash() {
  const id = window.location.hash.slice(1);
  return sectionIds.includes(id) ? id : "home";
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const sectionId = link.getAttribute("href")?.slice(1);

    if (sectionIds.includes(sectionId)) {
      setActiveSection(sectionId);
    }
  });
});

if ("IntersectionObserver" in window) {
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry?.target.id) {
        setActiveSection(visibleEntry.target.id);
      }
    },
    {
      rootMargin: "-20% 0px -55% 0px",
      threshold: [0.2, 0.5, 0.8],
    },
  );

  sections.forEach((section) => observer.observe(section));
}

window.addEventListener("hashchange", () => {
  setActiveSection(currentSectionFromHash());
});

setActiveSection(currentSectionFromHash());

if (typewriterText) {
  let titleIndex = 0;
  let characterIndex = titles[titleIndex].length;
  let isDeleting = false;

  function typeNextTitle() {
    const currentTitle = titles[titleIndex];
    typewriterText.textContent = currentTitle.slice(0, characterIndex);

    if (!isDeleting && characterIndex < currentTitle.length) {
      characterIndex += 1;
      window.setTimeout(typeNextTitle, 85);
      return;
    }

    if (!isDeleting && characterIndex === currentTitle.length) {
      isDeleting = true;
      window.setTimeout(typeNextTitle, 1400);
      return;
    }

    if (isDeleting && characterIndex > 0) {
      characterIndex -= 1;
      window.setTimeout(typeNextTitle, 45);
      return;
    }

    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    window.setTimeout(typeNextTitle, 280);
  }

  window.setTimeout(typeNextTitle, 900);
}

if (projectCards.length > 0) {
  const dotButtons = projectCards.map((card, index) => {
    const button = document.createElement("button");
    button.className = "project-dot";
    button.type = "button";
    button.setAttribute("aria-label", `Show ${card.querySelector("h3")?.textContent ?? `project ${index + 1}`}`);
    button.addEventListener("click", () => {
      setActiveProject(index);
    });
    projectDots?.append(button);
    return button;
  });

  let activeProjectIndex = Math.max(
    0,
    projectCards.findIndex((card) => card.classList.contains("is-active")),
  );

  function setActiveProject(index) {
    activeProjectIndex = (index + projectCards.length) % projectCards.length;
    const previousProjectIndex =
      (activeProjectIndex - 1 + projectCards.length) % projectCards.length;
    const nextProjectIndex = (activeProjectIndex + 1) % projectCards.length;

    projectCards.forEach((card, cardIndex) => {
      card.classList.toggle("is-active", cardIndex === activeProjectIndex);
      card.classList.toggle("is-prev", cardIndex === previousProjectIndex);
      card.classList.toggle("is-next", cardIndex === nextProjectIndex);
    });
    dotButtons.forEach((button, buttonIndex) => {
      if (buttonIndex === activeProjectIndex) {
        button.setAttribute("aria-current", "true");
      } else {
        button.removeAttribute("aria-current");
      }
    });
  }

  projectPrev?.addEventListener("click", () => {
    setActiveProject(activeProjectIndex - 1);
  });

  projectNext?.addEventListener("click", () => {
    setActiveProject(activeProjectIndex + 1);
  });

  setActiveProject(activeProjectIndex);
}

if (experienceCards.length > 0) {
  let activeExperienceIndex = Math.max(
    0,
    experienceCards.findIndex((card) => card.classList.contains("is-active")),
  );

  function setActiveExperience(index) {
    activeExperienceIndex = (index + experienceCards.length) % experienceCards.length;
    experienceCards.forEach((card, cardIndex) => {
      card.classList.toggle("is-active", cardIndex === activeExperienceIndex);
    });
  }

  experiencePrev?.addEventListener("click", () => {
    setActiveExperience(activeExperienceIndex - 1);
  });

  experienceNext?.addEventListener("click", () => {
    setActiveExperience(activeExperienceIndex + 1);
  });

  setActiveExperience(activeExperienceIndex);
}

if (aboutCards.length > 0) {
  let activeAboutIndex = Math.max(
    0,
    aboutCards.findIndex((card) => card.classList.contains("is-active")),
  );

  function setActiveAbout(index) {
    activeAboutIndex = (index + aboutCards.length) % aboutCards.length;
    aboutCards.forEach((card, cardIndex) => {
      card.classList.toggle("is-active", cardIndex === activeAboutIndex);
    });
  }

  aboutPrev?.addEventListener("click", () => {
    setActiveAbout(activeAboutIndex - 1);
  });

  aboutNext?.addEventListener("click", () => {
    setActiveAbout(activeAboutIndex + 1);
  });

  setActiveAbout(activeAboutIndex);
}

experiencePapers.forEach((paper) => {
  const unfurledSrc = paper.dataset.unfurledSrc;
  const rolledSrc = paper.dataset.rolledSrc;

  paper.closest(".experience-card")?.addEventListener("mouseenter", () => {
    if (rolledSrc) {
      paper.src = rolledSrc;
    }
  });

  paper.closest(".experience-card")?.addEventListener("mouseleave", () => {
    if (unfurledSrc) {
      paper.src = unfurledSrc;
    }
  });
});

swingSigns.forEach((sign) => {
  sign.addEventListener("click", () => {
    sign.classList.remove("is-swinging");
    window.requestAnimationFrame(() => {
      sign.classList.add("is-swinging");
    });
  });

  sign.addEventListener("animationend", () => {
    sign.classList.remove("is-swinging");
  });
});
