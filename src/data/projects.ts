import { projectCaseStudies, type ProjectCaseStudy } from "./projectCaseStudies";

export type ProjectAction = {
  label: string;
  href: string;
  ariaLabel: string;
  icon?: string;
  iconClassName?: string;
  adaptiveDownload?: {
    desktopHref: string;
    iosHref: string;
    androidHref: string;
  };
};

export type Project = {
  id: string;
  title: string;
  order: number;
  isActive?: boolean;
  tags: string[];
  images: string[];
  imageFit?: "contain" | "soft-contain";
  hideModalTags?: boolean;
  actions: ProjectAction[];
  caseStudy: ProjectCaseStudy;
};

export const projects: Project[] = [
  {
    id: "myloops",
    title: "MyLoops",
    order: 1,
    isActive: true,
    tags: ["Product Design", "UI/UX", "Figma", "Mobile"],
    images: [
      "assets/myloops/myloops0.png",
      "assets/myloops/myloops1.png",
      "assets/myloops/myloops2.png",
      "assets/myloops/myloops3.png",
    ],
    imageFit: "contain",
    hideModalTags: true,
    actions: [
      {
        label: "Visit Site",
        href: "https://myloops.co/",
        ariaLabel: "Visit the MyLoops website",
        icon: "assets/globe-export.png",
        iconClassName: "button-icon-globe",
      },
      {
        label: "Figma",
        href: "https://www.figma.com/design/GsAt77jM7CsYbEU7jF9uxP/Untitled?node-id=0-1&t=qb4jrPp2OVLy2K36-1",
        ariaLabel: "View MyLoops Figma design",
        icon: "assets/figma.png",
        iconClassName: "button-icon-figma",
      },
      {
        label: "Download App",
        href: "https://myloops.co/#download",
        ariaLabel: "Download the MyLoops app",
        icon: "assets/download.png",
        adaptiveDownload: {
          desktopHref: "https://myloops.co/#download",
          iosHref: "https://apps.apple.com/us/app/myloops-connected-and-safe/id6748546808",
          androidHref: "https://play.google.com/store/apps/details?id=com.innovation43veryone.mycircles&pcampaignid=web_share",
        },
      },
    ],
    caseStudy: projectCaseStudies.myloops,
  },
  {
    id: "celo",
    title: "Celo",
    order: 2,
    tags: ["Web App", "Product UX"],
    images: ["assets/celo/celo0.png", "assets/celo/celo1.png", "assets/celo/celo2.png"],
    imageFit: "soft-contain",
    hideModalTags: true,
    actions: [
      {
        label: "Visit Site",
        href: "https://www.celo.fyi/",
        ariaLabel: "Visit Celo site",
        icon: "assets/globe-export.png",
        iconClassName: "button-icon-globe",
      },
    ],
    caseStudy: projectCaseStudies.celo,
  },
  {
    id: "sealbound",
    title: "Sealbound",
    order: 3,
    tags: ["Game Design", "Production", "Development", "Godot"],
    images: [
      "assets/sealbound/sealbound0.webp",
      "assets/sealbound/sealbound1.webp",
      "assets/sealbound/sealbound2.webp",
    ],
    hideModalTags: true,
    actions: [
      {
        label: "Play Demo",
        href: "https://koibaa.itch.io/sealbound",
        ariaLabel: "Play Sealbound demo on itch.io",
        icon: "assets/demo.png",
      },
      {
        label: "GitHub",
        href: "https://github.com/AlisaK13003/sealbound",
        ariaLabel: "View Sealbound on GitHub",
        icon: "assets/githubIcon.png",
      },
    ],
    caseStudy: projectCaseStudies.sealbound,
  },
  {
    id: "sunny-days",
    title: "Sunny Days",
    order: 4,
    tags: ["Developer", "UI Design", "Pixel Art", "Unity"],
    images: [
      "assets/sunnyDays/sunnyDays0.png",
      "assets/sunnyDays/sunnyDays1.png",
      "assets/sunnyDays/sunnyDays2.png",
      "assets/sunnyDays/sunnyDays3.png",
    ],
    hideModalTags: true,
    actions: [
      {
        label: "Play Demo",
        href: "https://koibaa.itch.io/sunny-days",
        ariaLabel: "Play Sunny Days demo on itch.io",
        icon: "assets/demo.png",
      },
    ],
    caseStudy: projectCaseStudies["sunny-days"],
  },
  {
    id: "infolio",
    title: "Infolio",
    order: 5,
    tags: ["Frontend", "CRUD", "JavaScript", "Figma"],
    images: [
      "assets/infolio/infolio0.png",
      "assets/infolio/infolio1.png",
      "assets/infolio/infolio2.png",
      "assets/infolio/infolio3.png",
    ],
    imageFit: "soft-contain",
    hideModalTags: true,
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/Arqane-UCF/COP_4331_Small_Project_Public",
        ariaLabel: "View Infolio on GitHub",
        icon: "assets/githubIcon.png",
      },
      {
        label: "Figma",
        href: "https://www.figma.com/design/3mZuHrmgh5qEs5fhqsywy0/Infolio--Contact-Manager?node-id=0-1&t=MTFABrEdYIlup2cx-1",
        ariaLabel: "View Infolio Figma design",
        icon: "assets/figma.png",
        iconClassName: "button-icon-figma",
      },
    ],
    caseStudy: projectCaseStudies.infolio,
  },
];
