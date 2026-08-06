const header = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const menuBackdrop = document.querySelector("[data-menu-backdrop]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const navBoard = document.querySelector("[data-nav-board]");
const typewriterText = document.querySelector("[data-typewriter]");
const projectCards = [...document.querySelectorAll("[data-project-card]")];
const projectPrev = document.querySelector("[data-project-prev]");
const projectNext = document.querySelector("[data-project-next]");
const projectDots = document.querySelector("[data-project-dots]");
const swingSigns = [...document.querySelectorAll("[data-swing-sign]")];
const navLinks = [...document.querySelectorAll('a[href^="#"]')];
const sectionIds = ["home", "projects", "experience", "about", "contact"];
const titles = ["Game Developer", "Software Engineer", "Project Manager", "UI/UX Designer"];

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
