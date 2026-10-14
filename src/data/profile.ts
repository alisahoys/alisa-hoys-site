export const profile = {
  name: "Alisa Hoys",
  firstName: "Alisa",
  title: "Software Developer",
  role: "Scraping Engineer",
  company: "GroupBWT",
  location: "Hungary",
  email: "hois@protonmail.com",
  linkedin: "https://www.linkedin.com/in/alisa-hoys",
  github: "https://github.com/alisahoys",
  portfolioUrl: "https://github.com/alisahoys",
  itch: "https://nerdess.itch.io/",
  youtube: "https://www.youtube.com/@nerdess",
  gamerTag: "Nerdess",
  cvPath: "/Alisa-Hoys-CV.pdf",
  summary:
    "I'm a Software Developer working as a Scraping Engineer at GroupBWT, where I develop and maintain web scraping workflows and work with distributed systems using Python, Scrapy, RabbitMQ, MySQL, and Docker.",
  about: [
    "I build the quiet infrastructure behind data: resilient scraping pipelines, message-driven services, and the tooling that keeps them honest at scale. My day-to-day is Python, Scrapy and RabbitMQ, with MySQL and Docker holding everything together.",
    "Before engineering, I spent years in film, VR research and game-dev education, and I still think like a storyteller. That background shows up in how I design systems: clear structure, thoughtful naming, and an obsession with the experience of whoever reads the code next.",
    "I speak six languages, which turns out to be useful training for a job that is mostly about translating between messy inputs and clean, reliable outputs.",
  ],
  stack: [
    "Python",
    "Scrapy",
    "RabbitMQ",
    "Docker",
    "MySQL",
    "PostgreSQL",
    "Django",
    "Django REST Framework",
    "Linux",
    "Distributed Systems",
    "REST APIs",
    "Automated Testing",
    "Unity",
    "C#",
  ],
  topSkills: ["RabbitMQ", "Docker", "Linux"],
  languages: [
    { name: "Hebrew", level: "Native" },
    { name: "Ukrainian", level: "Native" },
    { name: "English", level: "Full professional" },
    { name: "Russian", level: "Full professional" },
    { name: "Spanish", level: "Limited working" },
    { name: "Hungarian", level: "Limited working" },
  ],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  start: string;
  duration: string;
  location?: string;
  chapter: "Engineering" | "Creative";
  highlights: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    company: "GroupBWT",
    role: "Software Developer · Scraping Engineer",
    period: "Aug 2026 — Present",
    start: "2026",
    duration: "Current",
    chapter: "Engineering",
    highlights: [
      "Develop and maintain production web scraping workflows at scale.",
      "Work across distributed systems with Python, Scrapy, RabbitMQ, MySQL and Docker.",
    ],
    tags: ["Python", "Scrapy", "RabbitMQ", "MySQL", "Docker"],
  },
  {
    company: "Independent & team projects",
    role: "Python Developer",
    period: "Feb 2026 — Sep 2026",
    start: "2026",
    duration: "8 months",
    chapter: "Engineering",
    highlights: [
      "Developed and deployed a Django platform for sharing and voting on programming opinions, with authentication, email registration, tagging, AI-generated avatars, PostgreSQL and automated tests.",
      "Collaborated on a Car Rental Service REST API with Django REST Framework, contributing CRUD operations, filtering, API tests and database integration.",
    ],
    tags: ["Django", "DRF", "PostgreSQL", "Testing"],
  },
  {
    company: "Hands on Games",
    role: "Technical Content Creator",
    period: "Jan 2022 — Jan 2024",
    start: "2022",
    duration: "2 years",
    location: "Israel",
    chapter: "Creative",
    highlights: [
      "Created educational and promotional content focused on Unity and C#.",
      "Wrote instructional material for 30+ Unity and C# lessons, translating programming concepts into structured learning content.",
    ],
    tags: ["Unity", "C#", "Education"],
  },
  {
    company: "“Ahuzat Bayit” — Virtual Reality Project",
    role: "Research Assistant",
    period: "Mar 2023 — Aug 2023",
    start: "2023",
    duration: "6 months",
    location: "Tel Aviv, Israel",
    chapter: "Creative",
    highlights: [
      "Conducted visual and historical research supporting authentic cultural narratives in an immersive VR experience, directed by Adam Horowitz.",
      "Represented the project at conferences for investor outreach and partnerships.",
      "Coordinated with a 3D artist to manage creative tasks and keep the project workflow moving.",
    ],
    tags: ["VR", "Research", "Production"],
  },
  {
    company: "A Tech / Anastasia Technologies",
    role: "Video Editor",
    period: "Feb 2019 — Dec 2022",
    start: "2019",
    duration: "4 years",
    location: "Tel Aviv, Israel",
    chapter: "Creative",
    highlights: [
      "Edited and produced video content, developing the visual judgement and narrative sense I still bring to product work.",
    ],
    tags: ["Video", "Storytelling"],
  },
];

export const education = [
  {
    school: "Shenkar — Engineering. Design. Art.",
    degree: "M.Des, Computer Games & Programming",
    period: "2021 — 2024",
  },
  {
    school: "Tel Aviv University",
    degree: "B.A., Film, Cinema & Video Studies",
    period: "2018 — 2021",
  },
  {
    school: "Mate academy",
    degree: "Python Developer Program",
    period: "2026",
  },
];

export type Project = {
  title: string;
  kind: string;
  description: string;
  tags: string[];
  accent: "rose" | "mauve" | "gold";
  /** Live deployment, if any */
  live: string | null;
  /** Source repository, if public */
  repo: string | null;
  /** Cover image under /public (4:3 works best); falls back to a gradient */
  image: string | null;
  /** Shown as the badge when there is no live link */
  status: "soon" | "private";
};

export type Game = {
  title: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
  /** Playable in the browser on itch.io */
  browser: boolean;
};

export const games: Game[] = [
  {
    title: "Alice in TV-Land",
    description:
      "A colourful pixel-art side-scroller with a female protagonist, built in Unity. Weird, feel-good and made for kids of all ages.",
    url: "https://nerdess.itch.io/alice-in-tvland",
    image: "/projects/games/alice-in-tvland.jpg",
    tags: ["Platformer", "Unity", "Pixel art"],
    browser: true,
  },
  {
    title: "Virus Tag",
    description:
      "Online multiplayer tag inside a petri dish. Be the virus, infect the cells, don't get caught. Made with Unity.",
    url: "https://nerdess.itch.io/virus-tag",
    image: "/projects/games/virus-tag.jpg",
    tags: ["Multiplayer", "Unity", "2D"],
    browser: true,
  },
  {
    title: "Anarchist",
    description:
      "A 2D strategy and simulation game about the 2023 Israeli protests against a corrupt government. Luck, crowds and conviction.",
    url: "https://nerdess.itch.io/anarchist",
    image: "/projects/games/anarchist.jpg",
    tags: ["Strategy", "Simulation", "Windows"],
    browser: false,
  },
  {
    title: "Toasters Fight",
    description:
      "Kitchen appliances settle their differences the only way they know how. A fighting game prototype for Windows.",
    url: "https://nerdess.itch.io/toasters-fight",
    image: "/projects/games/toasters-fight.jpg",
    tags: ["Fighting", "Windows"],
    browser: false,
  },
  {
    title: "Space Trek",
    description:
      "Your spaceship is trapped. Boost with Space, rotate with A and D, and reach the green platform. Built for Ludum Dare 49.",
    url: "https://nerdess.itch.io/space-trek",
    image: "/projects/games/space-trek.jpg",
    tags: ["Ludum Dare 49", "Physics", "Windows"],
    browser: false,
  },
];

export const projects: Project[] = [
  {
    title: "Unpopular Opinions Court",
    kind: "Django web app · live on Render",
    description:
      "A retro-terminal courtroom where unpopular opinions go on trial for 24 hours. Users defend or prosecute, verdicts land, and a Contrarian Score tracks who wins. Email-verified accounts, tag filtering, search, unique pixel-art avatars and a full test suite.",
    tags: ["Django", "django-allauth", "SQLite", "Testing", "Render"],
    accent: "rose",
    live: "https://unpopular-court.onrender.com",
    repo: "https://github.com/alisahoys/unpopular_court",
    image: "/projects/unpopular-court.jpg",
    status: "soon",
  },
  {
    title: "Car Rental API",
    kind: "REST API · team project",
    description:
      "A Django REST Framework service for a car rental business: CRUD, filtering, API tests and database integration, built collaboratively.",
    tags: ["DRF", "REST", "Filtering", "Testing"],
    accent: "mauve",
    live: null,
    repo: null,
    image: null,
    status: "soon",
  },
  {
    title: "Distributed Scraping Pipelines",
    kind: "Production systems · GroupBWT",
    description:
      "Scrapy spiders coordinated over RabbitMQ, persisted to MySQL and shipped in Docker. The work that keeps data flowing reliably every day.",
    tags: ["Scrapy", "RabbitMQ", "Docker", "MySQL"],
    accent: "gold",
    live: null,
    repo: null,
    image: null,
    status: "private",
  },
];
