export type ProjectFact = {
  label: string;
  tags: string[];
};

export type ProjectCaseSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type ProjectCaseStudy = {
  subtitle: string;
  facts: ProjectFact[];
  sections: ProjectCaseSection[];
};

export const projectCaseStudies = {
  myloops: {
    subtitle: "Location-sharing and family-safety product",
    facts: [
      { label: "Role", tags: ["UI/UX Lead", "Product Designer"] },
      { label: "Team", tags: ["3 people"] },
      { label: "Timeline", tags: ["1 year"] },
      { label: "Tools", tags: ["Figma", "React", "Figma AI"] },
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "MyLoops is a **location-sharing and family-safety platform** designed to make staying connected with trusted contacts feel simpler and more approachable. Similar in concept to apps like Life360, MyLoops focuses on a cleaner, more user-friendly experience for location sharing, safety tools, and emergency coordination.",
          "I designed the product experience across the **mobile application, website, and supporting marketing materials**, creating a consistent visual system and interaction language across the entire brand.",
        ],
      },
      {
        heading: "My Role",
        paragraphs: [
          "I served as the **UI/UX Lead and Product Designer** on a three-person team alongside a developer and project manager.",
          "Over roughly a year of development, I was responsible for **designing the full application experience in Figma**, including user flows, wireframes, high-fidelity screens, interactive prototypes, and reusable design patterns. I also designed the public-facing website and created marketing graphics used to communicate the product and its features.",
          "I worked closely with the team to **translate product requirements into usable interfaces**, refine flows based on feedback, and maintain consistency as the product evolved.",
        ],
      },
      {
        heading: "Process",
        paragraphs: [
          "The design process began by defining the core user journeys around **location sharing, trusted circles, safety tools, notifications, and account management**. I mapped these flows in Figma and iterated from early wireframes into increasingly detailed prototypes.",
          "As new requirements were introduced, I expanded and refined the design system rather than treating each screen as a standalone design. This helped keep navigation, components, spacing, states, and interactions consistent across a growing number of screens.",
          "I regularly reviewed designs with the developer and project manager, adjusting layouts and interactions based on **technical constraints, product priorities, and feedback** before handoff.",
        ],
      },
      {
        heading: "What I Designed",
        list: [
          "**Designed the complete mobile application experience**, including navigation, location-sharing flows, circle management, notifications, safety tools, and account settings.",
          "Created **75+ mobile-first wireframes and high-fidelity screens** in Figma.",
          "Built a reusable **UI design system and component library** to maintain consistency across the product.",
          "Designed and prototyped the **public-facing MyLoops website**.",
          "Created **marketing graphics, product demonstrations, and app store assets** to support product communication and launch.",
          "Produced interactive prototypes used to **communicate requirements and support developer handoff**.",
        ],
      },
      {
        heading: "Challenges & Decisions",
        paragraphs: [
          "One of the main design challenges was balancing a feature-rich safety application with the need to keep the interface **simple and approachable for users with different levels of technical comfort**.",
          "As the product expanded, I simplified navigation and grouped related features to reduce cognitive load rather than exposing every capability at once. I also refined visual hierarchy, terminology, and interaction patterns to make important safety actions easier to understand and access.",
          "Because the project was developed by a small three-person team, design decisions also needed to account for **implementation effort and development priorities**. I worked closely with the developer and project manager to adjust scope and refine designs so that the most important user flows remained clear and achievable.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The result was a **cohesive product experience spanning the mobile app, website, and marketing presence**, with a shared visual language and design system connecting each part of the product.",
          "Over the course of the project, I took MyLoops from early product concepts through **wireframing, visual design, prototyping, iteration, and developer handoff**, giving me experience designing a complex digital product across its full lifecycle.",
        ],
      },
    ],
  },
  celo: {
    subtitle: "Privacy-awareness product",
    facts: [
      { label: "Role", tags: ["Product Designer"] },
      { label: "Team", tags: ["3 people"] },
      { label: "Timeline", tags: ["4 months"] },
      { label: "Tools", tags: ["Figma", "SvelteKit", "Vercel"] },
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Celo is a **privacy-awareness platform that helps users understand how the apps on their devices collect, track, and share their data**. Users can upload a screenshot of their home screen to identify their apps and receive a report with privacy risk scores, flags, and actionable recommendations.",
          "The product was designed to make **complex privacy information easier to understand and act on**, translating dense policies and data practices into an approachable experience for everyday users.",
        ],
      },
      {
        heading: "My Role",
        paragraphs: [
          "I worked as the **Product Designer** on a three-person team, owning the visual and interaction design across Celo's website and product interface.",
          "I designed the user experience from early concepts through high-fidelity interfaces, including the public-facing website, app-scanning experience, privacy reports, dashboard, and supporting marketing graphics.",
          "I also contributed to frontend development, working with **SvelteKit and Vercel adapters** to help translate the designs into the live product and support deployment on Vercel.",
        ],
      },
      {
        heading: "Process",
        paragraphs: [
          "My design work focused on turning a technically complex privacy-analysis system into an experience that felt **clear, trustworthy, and approachable**.",
          "I designed flows around uploading and scanning apps, understanding privacy risk scores, reviewing individual app findings, and navigating recommendations. As the product evolved, I worked alongside the developer and project manager to refine the interface around new functionality and technical requirements.",
          "Because Celo communicates potentially unfamiliar privacy concepts, I paid particular attention to **information hierarchy and progressive disclosure**, surfacing the most important findings first while allowing users to explore the underlying details when needed.",
        ],
      },
      {
        heading: "What I Designed & Built",
        list: [
          "**Designed Celo's product experience and visual system**, including the website, dashboard, scanning flow, privacy reports, and supporting interfaces.",
          "Created reusable **UI patterns and components** to keep a data-heavy product visually consistent and easy to navigate.",
          "Designed **marketing graphics and educational content** used to communicate privacy risks and Celo's value to users.",
          "Worked alongside the developer to **translate Figma designs into the live product**.",
          "Contributed to frontend implementation using **SvelteKit** and helped configure **Vercel adapters and deployment**.",
        ],
      },
      {
        heading: "Challenges & Decisions",
        paragraphs: [
          "Celo needed to communicate a large amount of privacy information without overwhelming users. Privacy policies are dense and technical, while Celo's audience includes people who may have little familiarity with concepts such as third-party tracking, data brokers, or cross-app data sharing.",
          "I approached the interface by **prioritizing actionable information over raw complexity**. Risk scores, severity levels, flags, and recommendations create an immediate summary, while more detailed information remains available for users who want to understand why an app was flagged.",
          "Another challenge was designing around a product that continued to evolve technically. Working in a small three-person team meant designs needed to remain flexible as functionality changed, so I regularly **adjusted flows and components around implementation constraints and new product requirements**.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The result is a **live privacy product that turns complex app-data practices into a visual, actionable experience**. Users can move from a screenshot of their device to a structured report highlighting privacy risks, patterns, and recommendations in a single workflow.",
          "Celo was also **approved for a partnership with Incogni**, a personal-data removal service, providing external validation for the product's direction within the consumer privacy space.",
          "The project gave me experience owning the design of a product with **complex information architecture**, while also working beyond Figma to contribute directly to frontend implementation and deployment.",
        ],
      },
    ],
  },
  sealbound: {
    subtitle: "2D narrative-focused fantasy RPG",
    facts: [
      { label: "Role", tags: ["Game Producer", "Designer", "Developer"] },
      { label: "Team", tags: ["5 people"] },
      { label: "Timeline", tags: ["6 months"] },
      { label: "Tools", tags: ["Godot", "GDScript", "Git", "GitHub", "Jira"] },
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Sealbound is a **2D pixel-art fantasy RPG** centered around **exploration, turn-based party combat, character relationships, and narrative progression**. Players explore the village of Hearthwyn and surrounding dungeons, complete quests, build bonds with party members, and progress through a story centered around restoring ancient Seals that hold the world together.",
        ],
      },
      {
        heading: "My Role",
        paragraphs: [
          "I **created the original concept and game design documentation** for Sealbound, designing its **core gameplay systems, progression, characters, and overall player experience**. As Game Producer, I **translated those designs into development priorities, delegated implementation across the team, and managed scope and milestones** throughout production.",
          "Alongside leading the project, I worked directly in Godot to **implement character bonds, dialogue, NPC schedules, and the sleep/day-cycle system**.",
        ],
      },
      {
        heading: "Process",
        paragraphs: [
          "Development began with a detailed game design document defining the world, gameplay systems, characters, combat, progression, and overall scope. I **translated the design into actionable features and milestones**, organized development through **Jira sprints**, and delegated work across programming, art, and level design based on team capacity and project priorities.",
          "Features were developed across Git branches and regularly integrated into the main build for testing. As systems came together, I **reviewed implementations, tested interactions between features, identified issues, and adjusted requirements or priorities** where necessary.",
        ],
      },
      {
        heading: "What I Built",
        list: [
          "**Designed the game's core systems**, including combat, character bonds, dialogue, quests, progression, NPC behavior, and day/night gameplay.",
          "**Implemented and debugged** the bond, dialogue, NPC scheduling, and sleep/day-cycle systems in **Godot using GDScript**.",
          "**Defined system behavior and requirements** for features delegated to other developers, including combat and supporting gameplay systems.",
          "**Integrated and tested independently developed systems** across gameplay, UI, narrative, and level design.",
        ],
      },
      {
        heading: "Challenges & Decisions",
        paragraphs: [
          "The original design was ambitious for a five-person team and the available development timeline, so **maintaining a realistic scope became a major production priority**. As development progressed, I **reduced feature complexity, deferred lower-priority content, and reorganized work around the systems most important to the core experience**.",
          "I also **adjusted designs after implementation and playtesting** revealed where systems were too complex or where development effort would have had limited impact. Work was reprioritized based on **team capacity, dependencies, and progress**, allowing us to focus on delivering a cohesive playable build rather than spreading development across unfinished features.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The final prototype brings together **exploration, turn-based combat, character relationships, quests, NPC schedules, shops, progression, dialogue, and multiple dungeon areas** into a cohesive playable experience.",
          "The team transformed the original design document into a **functional RPG vertical slice demonstrating Sealbound's core gameplay loop and narrative systems**. The project gave me hands-on experience carrying a product from **initial concept and system design through production planning, implementation, integration, testing, and delivery**.",
        ],
      },
    ],
  },
  "sunny-days": {
    subtitle: "2D solarpunk adventure and life-simulation game",
    facts: [
      { label: "Role", tags: ["Game Developer", "UI Designer", "Pixel Artist"] },
      { label: "Team", tags: ["5 people"] },
      { label: "Timeline", tags: ["4 months"] },
      { label: "Tools", tags: ["Unity", "C#", "Git", "GitHub", "Aseprite"] },
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Sunny Days is a **2D solarpunk adventure and life-simulation game built in Unity**, set in a village overtaken by pollution and smog. Players gather resources by exploring and defeating enemies, then use those materials to build **green machinery and restore the environment**.",
          "Alongside its environmental progression, the game combines **combat, hydroponic farming, cooking, crafting, and day/night systems** into a larger gameplay loop centered around gradually bringing life back to the village.",
        ],
      },
      {
        heading: "My Role",
        paragraphs: [
          "I worked as a **Game Developer and Designer**, taking ownership of several player-facing features from concept through implementation.",
          "My primary development work included the **farming, cooking, sleeping, and day/night systems**, along with UI supporting the game's core interactions. I worked across gameplay logic and presentation to ensure these systems were intuitive to use and connected naturally with the game's larger progression loop.",
          "While the project primarily used existing asset packs, I also created **custom pixel-art assets when existing resources couldn't support a feature**, including crops and their growth stages, food items, hydroponics equipment, cooking stations, and other gameplay-specific objects.",
        ],
      },
      {
        heading: "Process",
        paragraphs: [
          "I approached features as **complete player experiences rather than isolated mechanics**. Building the farming system, for example, involved implementing planting and harvesting logic, crop progression over time, visual growth states, player interactions, and connections with sleeping and the day/night cycle.",
          "Because Sunny Days combines environmental restoration, combat, resource collection, farming, and crafting, features also needed to work within a **shared progression loop**. I regularly moved between gameplay logic, UI, testing, and visual assets to ensure the systems I owned worked cohesively within the larger game.",
          "Development was collaborative, so features were integrated and tested alongside systems created by other team members, requiring implementations to adapt as mechanics and progression evolved.",
        ],
      },
      {
        heading: "What I Built",
        list: [
          "**Developed the farming experience end-to-end**, including planting, crop growth, harvesting, visual growth stages, and integration with the game's time system.",
          "Implemented **sleeping and day/night progression**, connecting player actions and other gameplay systems to the daily loop.",
          "Developed the **cooking system and supporting interactions**, allowing collected and grown resources to be turned into food.",
          "Designed and implemented **player-facing UI** supporting the game's core mechanics.",
          "Created custom **pixel-art assets** for features not supported by existing asset packs, including crops, food, hydroponics equipment, and cooking stations.",
          "**Integrated and tested features within the larger Unity project**, ensuring my systems worked alongside combat, resource collection, crafting, and environmental progression.",
        ],
      },
      {
        heading: "Challenges & Decisions",
        paragraphs: [
          "One recurring challenge was building features that needed to interact with several other systems. **Farming depended on time progression, crops required visual state changes, sleeping advanced the day, and harvested ingredients fed into cooking**. Changes to one mechanic therefore had consequences elsewhere in the player's experience.",
          "The game's functionality also extended beyond what was available in our existing asset packs. Rather than limiting mechanics around those constraints, **I created the additional artwork required to support them**, allowing features such as hydroponic farming and cooking to retain their intended functionality while remaining visually consistent with the rest of the game.",
          "This required an **end-to-end approach to feature development**, balancing implementation, usability, visual feedback, and integration rather than treating code, UI, and art as separate responsibilities.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The completed project brought together **environmental restoration, combat, resource collection, farming, cooking, crafting, and time progression** into a cohesive playable experience centered around restoring a polluted solarpunk village.",
          "My contributions spanned the full lifecycle of several player-facing features, from defining how they should work through **implementation, interface design, asset creation, integration, and testing**. Sunny Days strengthened my experience taking ownership of features beyond their underlying code and considering how each system contributes to the overall player experience.",
        ],
      },
    ],
  },
  infolio: {
    subtitle: "Web-based contact management application",
    facts: [
      { label: "Role", tags: ["Product Designer", "Frontend Developer"] },
      { label: "Team", tags: ["4 people"] },
      { label: "Timeline", tags: ["1.5 months"] },
      { label: "Tools", tags: ["Figma", "HTML", "CSS", "JavaScript", "GitHub"] },
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Infolio is a **web-based contact management application** built around core CRUD functionality, allowing users to create, view, update, delete, search, and organize contacts through a simple interface.",
          "The project focused on creating a straightforward interface for common contact-management tasks while maintaining a cohesive visual system across authentication, contact lists, search, and editing flows.",
        ],
      },
      {
        heading: "My Role",
        paragraphs: [
          "I worked as the **Product Designer and Frontend Developer**, owning the product experience from initial interface design through implementation.",
          "I designed the complete application in Figma, defining its **visual system, layouts, interaction patterns, and core user flows**, then translated those designs directly into the frontend.",
          "Beyond the interface itself, I also contributed JavaScript logic supporting features such as **contact search and filtering**, allowing me to work across both presentation and user-facing functionality.",
        ],
      },
      {
        heading: "Process",
        paragraphs: [
          "I began by designing the application's primary workflows in Figma, including authentication, viewing and managing contacts, searching, and editing contact information.",
          "Rather than treating design and implementation as separate phases, I used the Figma designs as the foundation for development and refined the interface as the application took shape in code. This allowed me to account for **real implementation constraints, responsive behavior, and interaction states** while preserving the original design intent.",
          "Working within a team repository also required coordinating frontend work with the application's backend functionality and adapting the interface around the data and behaviors provided by other team members.",
        ],
      },
      {
        heading: "What I Built",
        list: [
          "**Designed the complete application experience in Figma**, including authentication, navigation, contact management, and reusable interface patterns.",
          "**Developed the frontend from the Figma designs**, implementing responsive layouts, styling, and interactive UI behavior.",
          "**Built the frontend for CRUD workflows**, supporting the creation, viewing, editing, and deletion of contacts.",
          "Developed JavaScript for **contact search, filtering, and other user-facing interaction logic**.",
          "**Integrated frontend interactions with backend functionality**, handling dynamic contact data and application states.",
        ],
      },
      {
        heading: "Challenges & Decisions",
        paragraphs: [
          "One of the main challenges was maintaining consistency between the original Figma designs and the realities of a working application.",
          "Layouts that appear straightforward in a static design need to account for **dynamic contact data, varying content lengths, interaction states, validation, and responsive behavior** once implemented. I adjusted components and flows during development where necessary while preserving the underlying visual hierarchy and usability goals.",
          "Because I owned both the design and frontend implementation, I was able to resolve these issues directly rather than relying on a traditional designer-to-developer handoff. That shortened the feedback loop between **design decisions and technical implementation**.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The result was a functional contact-management application with a **consistent experience from initial design through implementation**.",
          "Infolio gave me direct experience taking a product from **Figma to working frontend code**, while contributing additional JavaScript functionality for user-facing features such as contact discovery and search. The project strengthened my ability to work across **product design, frontend engineering, and interaction logic** rather than treating those responsibilities as separate disciplines.",
        ],
      },
    ],
  },
} satisfies Record<string, ProjectCaseStudy>;
