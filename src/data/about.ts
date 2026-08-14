export type AboutCard = {
  title: string;
  boardImage: string;
  shakeLabel: string;
  items?: string[];
  text?: string;
};

export const aboutIntro = [
  "Hi, I'm Alisa. I'm a Product Engineer who enjoys turning ideas into thoughtful, intuitive digital experiences. I like working across design and development, especially when I can shape both how something works and how it feels to use.",
  "I care about the small details that make products feel polished-from clear interaction flows and responsive interfaces to the little moments that give an experience personality.",
  "Outside of work, I'm usually sketching, gaming, traveling, or finding new music.",
];

export const aboutCards: AboutCard[] = [
  {
    title: "Fun Facts",
    boardImage: "assets/funFactsBoard.png",
    shakeLabel: "Shake Fun Facts sign",
    items: [
      "My favorite Pokemon is Absol.",
      "I play lots of League of Legends (I can play any role but I'm a Lulu OTP).",
      "I'm usually practicing violin, drawing, or working on a new app idea.",
    ],
  },
  {
    title: "Interests",
    boardImage: "assets/interestsBoard.png",
    shakeLabel: "Shake Interests sign",
    text: "Traveling, sketching, gaming, singing, discovering new music, and exploring new places and ideas.",
  },
  {
    title: "Currently",
    boardImage: "assets/currentlyBoard.png",
    shakeLabel: "Shake Currently sign",
    text: "Refining my product engineering skills, experimenting with new app ideas, and learning more about LLMs and how to use them effectively in design and development workflows.",
  },
];
