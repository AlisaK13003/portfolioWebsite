const header = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const menuBackdrop = document.querySelector("[data-menu-backdrop]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const navBoard = document.querySelector("[data-nav-board]");
const typewriterText = document.querySelector("[data-typewriter]");
const butterfly = document.querySelector("[data-butterfly]");
const projectCards = [...document.querySelectorAll("[data-project-card]")];
const projectsGrid = document.querySelector("[data-projects-grid]");
const projectPrev = document.querySelector("[data-project-prev]");
const projectNext = document.querySelector("[data-project-next]");
const projectDots = document.querySelector("[data-project-dots]");
const projectModal = document.querySelector("[data-project-modal]");
const projectModalPanel = document.querySelector("[data-project-modal-panel]");
const projectModalTitle = document.querySelector("[data-project-modal-title]");
const projectModalMedia = document.querySelector("[data-project-modal-media]");
const projectModalImage = document.querySelector("[data-project-modal-image]");
const projectModalPrev = document.querySelector("[data-project-modal-prev]");
const projectModalNext = document.querySelector("[data-project-modal-next]");
const projectModalImageDots = document.querySelector("[data-project-modal-image-dots]");
const projectModalBody = document.querySelector("[data-project-modal-body]");
const projectModalActions = document.querySelector("[data-project-modal-actions]");
const projectModalTags = document.querySelector("[data-project-modal-tags]");
const projectModalCloseButtons = [...document.querySelectorAll("[data-project-modal-close]")];
const experienceCards = [...document.querySelectorAll("[data-experience-card]")];
const experiencePapers = [...document.querySelectorAll("[data-unfurled-src][data-rolled-src]")];
const experiencePrev = document.querySelector("[data-experience-prev]");
const experienceNext = document.querySelector("[data-experience-next]");
const aboutCards = [...document.querySelectorAll("[data-about-card]")];
const aboutPrev = document.querySelector("[data-about-prev]");
const aboutNext = document.querySelector("[data-about-next]");
const aboutBoards = [...document.querySelectorAll("[data-about-board]")];
const contactForm = document.querySelector("[data-contact-form]");
const contactStatus = document.querySelector("[data-contact-status]");
const footerSprite = document.querySelector("[data-footer-sprite]");
const footerWell = document.querySelector("[data-footer-well]");
const swingSigns = [...document.querySelectorAll("[data-swing-sign]")];
const navLinks = [...document.querySelectorAll('a[href^="#"]')];
const sectionIds = ["home", "projects", "experience", "about", "contact"];
const titles = ["Game Developer", "Software Engineer", "Project Manager", "UI/UX Designer"];
const butterflyFollowDuration = 3200;
const butterflyReturnMinSpeed = 180;
const butterflyReturnMaxSpeed = 640;
const butterflyInteractionQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
const butterflyReturnWobbleStrength = 16;
const butterflyReturnWobbleFrequency = 0.009;
const footerFrameCount = 7;
const footerFrameDuration = 180;
let footerAnimationTimer = 0;
let footerFrame = 0;
let isFooterBucketFull = false;

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
  let butterflyMode = "idle";
  let butterflyFrame = 0;
  let butterflyTimeout = 0;
  let butterflyReturnStartDistance = 0;

  function setButterflyPosition(x, y) {
    butterfly.style.setProperty("--butterfly-x", `${x}px`);
    butterfly.style.setProperty("--butterfly-y", `${y}px`);
  }

  function setButterflyTarget(pageX, pageY) {
    const rect = butterfly.getBoundingClientRect();

    if (pageX > lastButterflyPointerX + 1) {
      butterfly.classList.add("is-facing-right");
      butterfly.classList.remove("is-facing-left");
    } else if (pageX < lastButterflyPointerX - 1) {
      butterfly.classList.add("is-facing-left");
      butterfly.classList.remove("is-facing-right");
    }

    lastButterflyPointerX = pageX;
    butterflyTarget = {
      x: pageX - rect.width / 2 - butterflyOrigin.x,
      y: pageY - rect.height / 2 - butterflyOrigin.y,
    };
  }

  function flyButterfly() {
    if (butterflyMode !== "following") {
      return;
    }

    butterflyPosition = {
      x: butterflyPosition.x + (butterflyTarget.x - butterflyPosition.x) * 0.14,
      y: butterflyPosition.y + (butterflyTarget.y - butterflyPosition.y) * 0.14,
    };
    setButterflyPosition(butterflyPosition.x, butterflyPosition.y);
    butterflyFrame = window.requestAnimationFrame(flyButterfly);
  }

  function returnButterflyHome(previousTime) {
    if (butterflyMode !== "returning") {
      return;
    }

    const now = performance.now();
    const elapsedSeconds = Math.min(Math.max((now - previousTime) / 1000, 0), 0.05);
    const distance = Math.hypot(butterflyPosition.x, butterflyPosition.y);
    const returnProgress = butterflyReturnStartDistance
      ? Math.min(1, 1 - distance / butterflyReturnStartDistance)
      : 1;
    const wobbleFade = Math.sin(returnProgress * Math.PI);
    const wobblePhase = now * butterflyReturnWobbleFrequency;
    const wobbleAmount = butterflyReturnWobbleStrength * wobbleFade;
    const returnSpeed = Math.min(
      butterflyReturnMaxSpeed,
      butterflyReturnMinSpeed + distance * 0.65,
    );
    const travelDistance = returnSpeed * elapsedSeconds;

    if (distance > travelDistance) {
      const directionToHome = {
        x: -butterflyPosition.x / distance,
        y: -butterflyPosition.y / distance,
      };

      butterflyPosition = {
        x: butterflyPosition.x + directionToHome.x * travelDistance,
        y: butterflyPosition.y + directionToHome.y * travelDistance,
      };
      const flutterX = -directionToHome.y * Math.sin(wobblePhase) * wobbleAmount;
      const flutterY =
        directionToHome.x * Math.sin(wobblePhase * 0.85) * wobbleAmount * 0.55
        + Math.cos(wobblePhase * 1.15) * wobbleAmount * 0.2;

      setButterflyPosition(butterflyPosition.x + flutterX, butterflyPosition.y + flutterY);
      butterflyFrame = window.requestAnimationFrame(() => returnButterflyHome(now));
      return;
    }

    butterflyPosition = { x: 0, y: 0 };
    setButterflyPosition(0, 0);
    butterfly.classList.remove("is-following", "is-facing-left", "is-facing-right");
    butterflyMode = "idle";
  }

  function updateButterflyTarget(event) {
    if (butterflyMode === "following") {
      setButterflyTarget(event.pageX, event.pageY);
    }
  }

  window.addEventListener("pointermove", updateButterflyTarget);
  window.addEventListener("mousemove", updateButterflyTarget);

  butterfly.addEventListener("click", (event) => {
    if (!butterflyInteractionQuery.matches) {
      return;
    }

    const rect = butterfly.getBoundingClientRect();
    butterflyOrigin = {
      x: rect.left + window.scrollX - butterflyPosition.x,
      y: rect.top + window.scrollY - butterflyPosition.y,
    };
    lastButterflyPointerX = event.pageX;
    butterfly.classList.add("is-facing-right");
    butterfly.classList.remove("is-facing-left");
    setButterflyTarget(event.pageX, event.pageY);
    butterfly.classList.add("is-following");
    butterflyMode = "following";

    window.cancelAnimationFrame(butterflyFrame);
    flyButterfly();
    window.clearTimeout(butterflyTimeout);
    butterflyTimeout = window.setTimeout(() => {
      window.cancelAnimationFrame(butterflyFrame);
      const returnStartPosition = { ...butterflyPosition };
      butterflyReturnStartDistance = Math.hypot(returnStartPosition.x, returnStartPosition.y);
      butterflyMode = "returning";

      if (returnStartPosition.x > 1) {
        butterfly.classList.add("is-facing-left");
        butterfly.classList.remove("is-facing-right");
      } else if (returnStartPosition.x < -1) {
        butterfly.classList.add("is-facing-right");
        butterfly.classList.remove("is-facing-left");
      }

      returnButterflyHome(performance.now());
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

function smoothScrollToSection(section) {
  const startY = window.scrollY;
  const headerOffset = window.matchMedia("(max-width: 640px)").matches ? 84 : 190;
  const targetY = section.getBoundingClientRect().top + window.scrollY - headerOffset;
  const distance = targetY - startY;
  const duration = Math.min(Math.max(Math.abs(distance) * 0.55, 420), 900);
  const startTime = performance.now();

  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(0, startY + distance * easedProgress);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const sectionId = link.getAttribute("href")?.slice(1);
    const section = sectionId ? document.getElementById(sectionId) : null;

    if (sectionIds.includes(sectionId) && section) {
      event.preventDefault();
      setActiveSection(sectionId);
      window.history.pushState(null, "", `#${sectionId}`);
      smoothScrollToSection(section);
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
      setActiveProject(index, getProjectDirection(index));
    });
    projectDots?.append(button);
    return button;
  });

  let activeProjectIndex = Math.max(
    0,
    projectCards.findIndex((card) => card.classList.contains("is-active")),
  );
  let isProjectTransitioning = false;
  let projectTransitionTimer = 0;

  function updateProjectCarouselHeight() {
    const activeCard = projectCards[activeProjectIndex];

    if (!projectsGrid || !activeCard) {
      return;
    }

    window.requestAnimationFrame(() => {
      projectsGrid.style.setProperty(
        "--project-carousel-height",
        `${Math.ceil(activeCard.scrollHeight)}px`,
      );
    });
  }

  function getProjectDirection(index) {
    const targetIndex = (index + projectCards.length) % projectCards.length;
    const forwardSteps = (targetIndex - activeProjectIndex + projectCards.length) % projectCards.length;
    const backwardSteps = (activeProjectIndex - targetIndex + projectCards.length) % projectCards.length;

    if (forwardSteps === 0) {
      return null;
    }

    if (forwardSteps === backwardSteps) {
      return targetIndex > activeProjectIndex ? "forward" : "backward";
    }

    return forwardSteps < backwardSteps ? "forward" : "backward";
  }

  function setActiveProject(index, direction = null, force = false) {
    const nextProjectIndex = (index + projectCards.length) % projectCards.length;

    if (!force && nextProjectIndex === activeProjectIndex) {
      return;
    }

    if (isProjectTransitioning) {
      return;
    }

    isProjectTransitioning = Boolean(direction);
    window.clearTimeout(projectTransitionTimer);

    activeProjectIndex = nextProjectIndex;
    const previousProjectIndex =
      (activeProjectIndex - 1 + projectCards.length) % projectCards.length;
    const followingProjectIndex = (activeProjectIndex + 1) % projectCards.length;

    projectCards.forEach((card, cardIndex) => {
      card.classList.remove("is-entering-forward", "is-entering-backward");
      card.classList.toggle("is-active", cardIndex === activeProjectIndex);
      card.classList.toggle("is-prev", cardIndex === previousProjectIndex);
      card.classList.toggle("is-next", cardIndex === followingProjectIndex);
    });

    if (direction) {
      const activeCard = projectCards[activeProjectIndex];
      window.requestAnimationFrame(() => {
        activeCard.classList.add(
          direction === "forward" ? "is-entering-forward" : "is-entering-backward",
        );
      });
    }

    projectTransitionTimer = window.setTimeout(() => {
      isProjectTransitioning = false;
    }, 320);

    dotButtons.forEach((button, buttonIndex) => {
      if (buttonIndex === activeProjectIndex) {
        button.setAttribute("aria-current", "true");
      } else {
        button.removeAttribute("aria-current");
      }
    });

    updateProjectCarouselHeight();
  }

  projectPrev?.addEventListener("click", () => {
    setActiveProject(activeProjectIndex - 1, "backward");
  });

  projectNext?.addEventListener("click", () => {
    setActiveProject(activeProjectIndex + 1, "forward");
  });

  projectCards.forEach((card) => {
    card.addEventListener("animationend", () => {
      card.classList.remove("is-entering-forward", "is-entering-backward");
      isProjectTransitioning = false;
      window.clearTimeout(projectTransitionTimer);
    });
  });

  if ("ResizeObserver" in window && projectsGrid) {
    const projectHeightObserver = new ResizeObserver(updateProjectCarouselHeight);
    projectCards.forEach((card) => projectHeightObserver.observe(card));
  }

  window.addEventListener("resize", updateProjectCarouselHeight);
  window.addEventListener("load", updateProjectCarouselHeight);

  setActiveProject(activeProjectIndex, null, true);
}

if (projectModal) {
  let lastProjectTrigger = null;
  let projectModalImages = [];
  let activeProjectModalImageIndex = 0;
  let projectModalImageTimer = 0;
  const projectModalImageCache = new WeakMap();

  function clearProjectModal() {
    if (projectModalActions) {
      projectModalActions.innerHTML = "";
    }

    if (projectModalTags) {
      projectModalTags.innerHTML = "";
    }

    if (projectModalImageDots) {
      projectModalImageDots.innerHTML = "";
    }
  }

  function stopProjectModalImageCarousel() {
    window.clearInterval(projectModalImageTimer);
    projectModalImageTimer = 0;
  }

  function setProjectModalImage(index) {
    if (!projectModalImage || projectModalImages.length === 0) {
      return;
    }

    activeProjectModalImageIndex = (index + projectModalImages.length) % projectModalImages.length;
    projectModalImage.src = projectModalImages[activeProjectModalImageIndex];
    projectModalImageDots?.querySelectorAll("button").forEach((button, buttonIndex) => {
      if (buttonIndex === activeProjectModalImageIndex) {
        button.setAttribute("aria-current", "true");
      } else {
        button.removeAttribute("aria-current");
      }
    });
  }

  function startProjectModalImageCarousel() {
    stopProjectModalImageCarousel();

    if (projectModalImages.length <= 1) {
      return;
    }

    projectModalImageTimer = window.setInterval(() => {
      setProjectModalImage(activeProjectModalImageIndex + 1);
    }, 2600);
  }

  function showProjectModalImage(index) {
    setProjectModalImage(index);
    startProjectModalImageCarousel();
  }

  function canLoadImage(src) {
    return new Promise((resolve) => {
      const image = new Image();
      image.onload = () => resolve(true);
      image.onerror = () => resolve(false);
      image.src = src;
    });
  }

  async function discoverProjectModalImages(card) {
    const cachedImages = projectModalImageCache.get(card);

    if (cachedImages) {
      return cachedImages;
    }

    const explicitImages = card.dataset.modalImages
      ?.split(",")
      .map((src) => src.trim())
      .filter(Boolean);

    if (explicitImages?.length) {
      projectModalImageCache.set(card, explicitImages);
      return explicitImages;
    }

    const folder = card.dataset.modalImageFolder;
    const prefix = card.dataset.modalImagePrefix;
    const extension = card.dataset.modalImageExtension ?? "png";

    if (!folder || !prefix) {
      projectModalImageCache.set(card, []);
      return [];
    }

    const discoveredImages = [];

    for (let index = 0; index < 24; index += 1) {
      const webpSrc = `${folder}/${prefix}${index}.webp`;
      const fallbackSrc = `${folder}/${prefix}${index}.${extension}`;
      // Static sites cannot enumerate folders, so we probe the predictable numbered filenames.
      // The first missing file marks the end of the carousel.
      if (await canLoadImage(webpSrc)) {
        discoveredImages.push(webpSrc);
        continue;
      }

      if (!(await canLoadImage(fallbackSrc))) {
        break;
      }

      discoveredImages.push(fallbackSrc);
    }

    projectModalImageCache.set(card, discoveredImages);
    return discoveredImages;
  }

  async function openProjectModal(card, trigger) {
    const title = card.querySelector(".project-island h3")?.textContent?.trim() ?? "Project";
    const body = card.querySelector(".project-note p")?.textContent?.trim() ?? "";
    const image = card.querySelector(".project-island > img");
    const actions = [...card.querySelectorAll(".project-actions a, .project-actions button")];
    const tags = [...card.querySelectorAll(".project-tags li")].map((tag) => tag.textContent?.trim()).filter(Boolean);

    lastProjectTrigger = trigger;
    const modalImages = await discoverProjectModalImages(card);

    stopProjectModalImageCarousel();
    clearProjectModal();
    projectModalImages = modalImages?.length ? modalImages : [image?.getAttribute("src") ?? "assets/island.png"];
    activeProjectModalImageIndex = 0;

    if (projectModalTitle) {
      projectModalTitle.textContent = title;
    }

    if (projectModalBody) {
      projectModalBody.textContent = body;
    }

    if (projectModalImage) {
      projectModalImage.alt = `${title} project preview`;
    }

    projectModalMedia?.classList.toggle("has-carousel", projectModalImages.length > 1);
    projectModalImageDots?.classList.toggle("has-carousel", projectModalImages.length > 1);

    projectModalImages.forEach((_, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-label", `Show ${title} image ${index + 1}`);
      button.addEventListener("click", () => showProjectModalImage(index));
      projectModalImageDots?.append(button);
    });

    setProjectModalImage(0);

    actions.forEach((action) => {
      const modalAction = action.cloneNode(true);
      modalAction.removeAttribute("aria-label");

      if (modalAction.tagName === "BUTTON") {
        modalAction.type = "button";
      }

      projectModalActions?.append(modalAction);
    });

    tags.forEach((tag) => {
      const tagItem = document.createElement("li");
      tagItem.textContent = tag;
      projectModalTags?.append(tagItem);
    });

    projectModal.classList.add("is-open");
    projectModal.setAttribute("aria-hidden", "false");
    projectModal.removeAttribute("inert");
    document.body.style.overflow = "hidden";
    projectModalPanel?.focus();
    startProjectModalImageCarousel();
  }

  function closeProjectModal() {
    stopProjectModalImageCarousel();
    projectModal.classList.remove("is-open");
    projectModal.setAttribute("aria-hidden", "true");
    projectModal.setAttribute("inert", "");
    document.body.style.overflow = "";
    lastProjectTrigger?.focus();
  }

  projectCards.forEach((card) => {
    const trigger = card.querySelector("[data-project-modal-trigger]");
    trigger?.addEventListener("click", () => {
      openProjectModal(card, trigger);
    });
    trigger?.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProjectModal(card, trigger);
      }
    });
  });

  projectModalCloseButtons.forEach((button) => {
    button.addEventListener("click", closeProjectModal);
  });

  projectModalPrev?.addEventListener("click", () => {
    showProjectModalImage(activeProjectModalImageIndex - 1);
  });

  projectModalNext?.addEventListener("click", () => {
    showProjectModalImage(activeProjectModalImageIndex + 1);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && projectModal.classList.contains("is-open")) {
      closeProjectModal();
    }
  });
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

aboutBoards.forEach((board) => {
  board.addEventListener("click", () => {
    board.classList.remove("is-seesawing");
    window.requestAnimationFrame(() => {
      board.classList.add("is-seesawing");
    });
  });

  board.addEventListener("animationend", () => {
    board.classList.remove("is-seesawing");
  });
});

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const requiredFields = [...contactForm.querySelectorAll("[required]")];
  const formData = new FormData(contactForm);
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const honeypot = String(formData.get("_honey") ?? "").trim();
  const submitButton = contactForm.querySelector('button[type="submit"]');
  let hasInvalidField = false;

  if (honeypot) {
    return;
  }

  requiredFields.forEach((field) => {
    const isInvalid = !field.validity.valid;
    field.classList.toggle("is-invalid", isInvalid);
    field.setAttribute("aria-invalid", String(isInvalid));
    hasInvalidField = hasInvalidField || isInvalid;
  });

  if (hasInvalidField) {
    contactStatus?.classList.remove("is-error", "is-success");
    if (contactStatus) {
      contactStatus.textContent = "";
    }
    return;
  }

  contactStatus?.classList.remove("is-error", "is-success");
  if (contactStatus) {
    contactStatus.textContent = "Sending...";
  }
  submitButton?.setAttribute("disabled", "true");

  try {
    const response = await fetch("https://formsubmit.co/ajax/alisakatsionova@gmail.com", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `Portfolio message from ${name || "someone"}`,
        _template: "table",
      }),
    });

    if (!response.ok) {
      throw new Error("Message failed to send");
    }

    contactForm.reset();
    contactStatus?.classList.add("is-success");
    if (contactStatus) {
      contactStatus.textContent = "Message sent!";
    }
  } catch (error) {
    contactStatus?.classList.add("is-error");
    if (contactStatus) {
      contactStatus.textContent = "Couldn't send. Try email?";
    }
  } finally {
    submitButton?.removeAttribute("disabled");
  }
});

contactForm?.querySelectorAll("[required]").forEach((field) => {
  field.addEventListener("input", () => {
    const isInvalid = field.classList.contains("is-invalid") && !field.validity.valid;
    field.classList.toggle("is-invalid", isInvalid);
    field.setAttribute("aria-invalid", String(isInvalid));
  });
});

function setFooterFrame(frame) {
  if (!footerSprite) {
    return;
  }

  footerFrame = Math.max(0, Math.min(frame, footerFrameCount - 1));
  footerSprite.style.backgroundPositionX = `${(footerFrame / (footerFrameCount - 1)) * 100}%`;
}

function stopFooterAnimation() {
  window.clearInterval(footerAnimationTimer);
  footerAnimationTimer = 0;
  footerSprite?.classList.remove("is-animating");
}

footerWell?.addEventListener("click", () => {
  if (!footerSprite || footerAnimationTimer) {
    return;
  }

  if (isFooterBucketFull) {
    isFooterBucketFull = false;
    setFooterFrame(0);
    footerSprite.classList.remove("is-full");
    footerWell.setAttribute("aria-label", "Raise water from the well");
    return;
  }

  footerSprite.classList.add("is-animating");
  footerSprite.classList.remove("is-full");
  footerWell.setAttribute("aria-label", "Empty the well bucket");
  setFooterFrame(0);

  footerAnimationTimer = window.setInterval(() => {
    if (footerFrame >= footerFrameCount - 1) {
      stopFooterAnimation();
      isFooterBucketFull = true;
      footerSprite.classList.add("is-full");
      return;
    }

    setFooterFrame(footerFrame + 1);
  }, footerFrameDuration);
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
