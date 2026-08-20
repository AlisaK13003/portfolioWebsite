export const heroIntro = "I design and build thoughtful digital products from idea to launch.";

export const heroRoleTitle = "Software Engineer.";

export type HeroAction = {
  ariaLabel: string;
  className: string;
  href: string;
  icon?: string;
  text?: string;
};

export const heroActions: HeroAction[] = [
  {
    ariaLabel: "Open Alisa's resume PDF",
    className: "resume-link",
    href: "assets/AlisaKatsionova_Resume.pdf",
    text: "Resume",
  },
  {
    ariaLabel: "GitHub",
    className: "social-link social-github",
    href: "https://github.com/AlisaK13003",
    icon: "assets/githubIcon.png",
  },
  {
    ariaLabel: "LinkedIn",
    className: "social-link social-linkedin",
    href: "https://www.linkedin.com/in/alisa-katsionova/",
    icon: "assets/linkedinIcon.png",
  },
  {
    ariaLabel: "Email Alisa",
    className: "social-link social-email",
    href: "mailto:alisakatsionova@gmail.com",
    icon: "assets/emailIcon.png",
  },
];
