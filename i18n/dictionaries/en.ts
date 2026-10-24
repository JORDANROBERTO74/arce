/**
 * English dictionary. This file is the source of truth for the copy shape:
 * every other locale must implement the same `Dictionary` type.
 */

export type PlanId = "starter" | "teams" | "business";

export type PlanValue = boolean | string;

export type PricingPlan = {
  id: PlanId;
  name: string;
  price: { fixed: string } | { monthly: string; annually: string };
  description: string;
  capacity: string[];
  features: string[];
  isStarter: boolean;
  isRecommended: boolean;
  buttonText: string;
};

export type PricingFeature = {
  name: string;
  tooltip?: string;
  plans: Partial<Record<PlanId, PlanValue>>;
};

export type PricingSection = {
  name: string;
  features: PricingFeature[];
};

export const en = {
  meta: {
    home: {
      title: "Arce — The relational data platform for product teams",
      description:
        "Arce is the relational, secure and scalable data platform for teams building high-impact digital products. Built in Switzerland, made for the world.",
    },
    about: {
      title: "About — Arce",
      description:
        "Meet the engineering team behind Arce, the relational data platform, and the vision that drives us.",
    },
    pricing: {
      title: "Pricing — Arce",
      description:
        "Simple, transparent plans that scale with your team. Start free, then grow with usage-based pricing.",
    },
    changelog: {
      title: "Changelog — Arce",
      description:
        "The latest additions, improvements and fixes shipped to the Arce data platform.",
    },
    notFound: {
      title: "Page not found — Arce",
      description: "The page you are looking for does not exist.",
    },
  },

  common: {
    skip: "Skip to content",
    brand: "Arce",
  },

  nav: {
    home: "Home",
    about: "About",
    pricing: "Pricing",
    changelog: "Changelog",
    demo: "Book a demo",
    demoShort: "Book demo",
    menu: "Menu",
    close: "Close menu",
    language: "Language",
  },

  footer: {
    tagline:
      "Redefining the way databases are built and managed. Built in Switzerland, made for the world.",
    productTitle: "Product",
    product: {
      enterprise: "Enterprise",
      pricing: "Pricing",
      docs: "Docs",
      changelog: "Changelog",
    },
    resourcesTitle: "Resources",
    resources: {
      faqs: "FAQs",
      github: "GitHub",
      discord: "Discord",
      youtube: "YouTube",
    },
    companyTitle: "Company",
    company: {
      about: "About",
      careers: "Careers",
      contact: "Contact",
      status: "Status",
    },
    legalTitle: "Legal",
    legal: {
      imprint: "Imprint",
      privacy: "Privacy",
      terms: "Terms",
      dpa: "DPA",
    },
    copyright: "All rights reserved.",
    status: "All systems operational",
  },

  hero: {
    title1: "Data that grows",
    title2: "with you",
    description:
      "Arce is the relational, secure and scalable data platform for teams building high-impact digital products.",
    cta: "Start 14-day trial",
    secondary: "View changelog",
  },

  logoCloud: {
    title: "Trusted by the world\u2019s best engineering teams",
  },

  globalDatabase: {
    badge: "Made for the cloud",
    title1: "The global",
    title2: "cloud database",
    features: [
      {
        name: "Global clusters",
        description: "Enable low-latency global access, enhancing performance.",
      },
      {
        name: "Serverless triggers",
        description:
          "Trigger functions automatically for dynamic app behavior.",
      },
      {
        name: "Monitoring & alerts",
        description:
          "Monitor health with key metrics or integrate third-party tools.",
      },
    ],
  },

  codeExample: {
    badge: "Developer-first",
    title1: "Built by developers,",
    title2: "for developers",
    description:
      "A rich and expressive query language that lets you filter and sort by any field, no matter how deeply nested.",
    selectLabel: "Select code example",
    tab1Title: "Model everything",
    tab1Description:
      "Data integrity and query efficiency for diverse data types including geospatial and time-series. Easy to create, effortless to maintain.",
    tab2Title: "Query efficiently",
    tab2Description:
      "Leverage a developer-native query API to efficiently manage PostgreSQL data. Initialize once, scale infinitely.",
    features: [
      {
        name: "Use Arce with your stack",
        description:
          "We offer client and server libraries in everything from React and Ruby to iOS.",
      },
      {
        name: "Try plug & play options",
        description:
          "Customize and deploy data infrastructure directly from the Arce dashboard.",
      },
      {
        name: "Explore pre-built integrations",
        description:
          "Connect Arce to over a hundred tools including Stripe, Salesforce, or QuickBooks.",
      },
      {
        name: "Security & privacy",
        description:
          "Arce supports PII data encrypted with AES-256 at rest or explicit user consent flows.",
      },
    ],
  },

  features: {
    badge: "Security at scale",
    title: "Architected for speed and reliability",
    description:
      "Arce\u2019s innovative architecture avoids the central bottlenecks of traditional systems, enhancing system reliability. This design ensures high productivity and security, minimizing the risk of service disruptions and outages.",
    stats: [
      { name: "Bandwidth increase", value: "+162%" },
      { name: "Better storage efficiency", value: "2-3x" },
      { name: "Rows ingested / second", value: "Up to 9M" },
    ],
  },

  cta: {
    title: "Ready to get started?",
    description:
      "Launch a new cluster or migrate to Arce with zero downtime.",
    placeholder: "Your work email",
    button: "Get started",
    notSure: "Not sure where to start?",
    talkToSales: "Talk to sales",
  },

  testimonial: {
    quote:
      "\u201CThanks to this robust database solution, our organization has streamlined data management processes, leading to increased efficiency and accuracy in our operations.\u201D",
    name: "Dima Coil",
    role: "CEO, Hornertools",
  },

  about: {
    badge: "About Arce",
    title: "We are engineers, building the database platform we always wanted",
    description:
      "Data is changing every aspect of running a business, and it is happening now. Arce is at the core of this revolution.",
    visionTitle: "Our vision",
    visionP1:
      "We envision a world where data management is no longer a complex challenge but a powerful advantage. By integrating cutting-edge AI into database solutions, we aim to transform raw data into strategic assets, empowering businesses to innovate faster and more efficiently.",
    visionP2:
      "We believe in removing the barriers of data complexity and scalability, enabling teams to focus on insights and innovations rather than maintenance and management. Our goal is to equip every organization with the tools they need to harness the full potential of their data.",
    signature: "\u2013 Alex and Robin",
    rolesCta: "View open roles",
    gallery: [
      {
        src: "/images/working.webp",
        alt: "Two employees working with computers",
        caption: "At Arce we use computers",
      },
      {
        src: "/images/workplace.webp",
        alt: "Office with a phone booth",
        caption: "Our phone booths are great",
      },
      {
        src: "/images/home.webp",
        alt: "Picture of the Fraum\u00fcnster in Zurich",
        caption: "Home sweet home",
      },
      {
        src: "/images/break.webp",
        alt: "Team having a break in the lunch room",
        caption: "Sometimes we take a break",
      },
      {
        src: "/images/cool.webp",
        alt: "Person with headphones",
        caption: "Robin runs the playlist",
      },
      {
        src: "/images/release.webp",
        alt: "Picture of a party with confetti",
        caption:
          "v1.0 release party. Our US intern, Mike, had his first alcohol-free beer",
      },
      {
        src: "/images/founders.webp",
        alt: "Join Arce, be yourself.",
        caption: "Join Arce, be yourself.",
      },
    ],
    benefitsTitle: "What\u2019s in it for you",
    benefits: [
      {
        title: "Work in Zurich",
        description:
          "We are in-person first and have a fantastic office in Zurich.",
      },
      {
        title: "Competitive salary & equity",
        description:
          "We pay competitive salary and option packages to attract the very best talent.",
      },
      {
        title: "Health, dental, vision",
        description:
          "Arce pays all of your health, dental, and vision insurance.",
      },
      {
        title: "Yearly off-sites",
        description:
          "We bring everyone together at an interesting location to discuss the big picture.",
      },
      {
        title: "Book budget",
        description:
          "We provide every employee with a 350 dollar budget for books.",
      },
      {
        title: "Tasty snacks",
        description:
          "The fridge and pantry are stocked, plus free dinner catered every night.",
      },
      {
        title: "20 PTO days per year",
        description: "Take time off to recharge and come back refreshed.",
      },
      {
        title: "Spotify Premium",
        description:
          "We really have the best fringe benefits, even a Spotify subscription is included.",
      },
    ],
  },

  pricing: {
    badge: "Pricing",
    title: "Our plans scale with you",
    description:
      "Plans that empower you and your team to ship without friction. Our flexible pricing models ensure that efficiency doesn\u2019t come at the cost of your budget.",
    monthly: "Monthly",
    yearly: "Yearly (-20%)",
    mostPopular: "Most popular",
    perUser1: "per user",
    perUser2: "per month",
    perUserShort: "per user",
    compare: "Compare plans",
    compareSub: "Price per month (billed yearly)",
    caption: "Pricing plan comparison",
    included: "Included",
    notIncluded: "Not included",
    activateLabel: "Link to activate plan",
    plans: [
      {
        id: "starter",
        name: "Starter",
        price: { fixed: "$0" },
        description: "For individuals and freelancers that need a scalable database.",
        capacity: ["Up to 5 users, 1 admin", "1 workspace"],
        features: [
          "Up to 1000/req. per day",
          "5 GB max storage",
          "Community Slack support",
        ],
        isStarter: true,
        isRecommended: false,
        buttonText: "Get started",
      },
      {
        id: "teams",
        name: "Teams",
        price: { monthly: "$49", annually: "$39" },
        description: "For small teams and start-ups that need a scalable database.",
        capacity: ["Up to 100 users, 3 admins", "Up to 20 workspaces"],
        features: [
          "Unlimited requests",
          "$0.07 per processed GB",
          "$0.34 per stored GB",
          "Slack Connect",
        ],
        isStarter: false,
        isRecommended: false,
        buttonText: "Start 14-day trial",
      },
      {
        id: "business",
        name: "Business",
        price: { monthly: "$99", annually: "$79" },
        description: "For larger teams that need more advanced controls and features.",
        capacity: ["Up to 500 users, 10 admins", "Unlimited workspaces"],
        features: [
          "Unlimited requests",
          "Volume discount",
          "$0.03 per processed GB",
          "$0.10 per stored GB",
          "Single Sign-On (SSO)",
        ],
        isStarter: false,
        isRecommended: true,
        buttonText: "Start 14-day trial",
      },
    ] as PricingPlan[],
    sections: [
      {
        name: "Workspace features",
        features: [
          {
            name: "Email notifications & webhooks",
            tooltip:
              "Stay in sync with configurable email alerts and outgoing webhooks.",
            plans: { starter: true, teams: true, business: true },
          },
          {
            name: "Workspaces",
            tooltip:
              "Isolated environments for organizing projects and collaborating with your team.",
            plans: { starter: "5", teams: "10", business: "Unlimited" },
          },
          {
            name: "Storage",
            tooltip:
              "Cost per stored gigabyte, billed monthly based on actual usage.",
            plans: {
              starter: "$0.65 per stored GB",
              teams: "$0.34 per stored GB",
              business: "Customized\u00b9",
            },
          },
          {
            name: "Seats",
            tooltip: "The number of team members who can access the workspace.",
            plans: {
              starter: "5 users",
              teams: "Up to 20 users",
              business: "Unlimited",
            },
          },
        ],
      },
      {
        name: "Automation",
        features: [
          {
            name: "Service accounts",
            tooltip: "Machine identities for automating CI/CD and background jobs.",
            plans: { starter: true, teams: true, business: true },
          },
          {
            name: "Admin API",
            tooltip:
              "Programmatic control over workspaces, users and billing.",
            plans: { teams: true, business: true },
          },
          {
            name: "No-code workflow builder",
            tooltip:
              "Compose automations visually without writing a single line of code.",
            plans: {
              starter: "Limited",
              teams: "Standard",
              business: "Enhanced",
            },
          },
        ],
      },
      {
        name: "Analytics",
        features: [
          {
            name: "Analytics retention",
            tooltip: "How long query and usage analytics are retained.",
            plans: {
              starter: "7 days",
              teams: "1 year",
              business: "Unlimited",
            },
          },
          {
            name: "Anomaly detection",
            tooltip:
              "Automatic alerts when query patterns deviate from the baseline.",
            plans: { teams: true, business: true },
          },
          {
            name: "Custom report builder",
            tooltip: "Build and share tailored reports from any metric.",
            plans: { business: true },
          },
        ],
      },
      {
        name: "Support",
        features: [
          {
            name: "Slack",
            plans: {
              starter: "Community",
              teams: "Connect",
              business: "Dedicated agent",
            },
          },
          {
            name: "Email",
            plans: {
              starter: "2-4 days",
              teams: "1-2 days",
              business: "Priority",
            },
          },
        ],
      },
    ] as PricingSection[],
    faqTitle: "Frequently asked questions",
    faqIntro:
      "Can\u2019t find the answer you\u2019re looking for? Don\u2019t hesitate to get in touch with our customer support team.",
    faqs: [
      {
        question: "How secure is Arce for protecting sensitive data?",
        answer:
          "Every database is encrypted with AES-256 at rest and TLS 1.3 in transit. Role-based access control, private networking and SSO keep sensitive data isolated at every layer.",
      },
      {
        question: "Can Arce be self-hosted?",
        answer:
          "Yes. The Enterprise plan includes a self-hosted option with the same control plane, deployable in your own cloud or on-premises infrastructure.",
      },
      {
        question: "Does Arce support integration with other systems?",
        answer:
          "Arce ships with over a hundred pre-built integrations and a rich Admin API, so you can connect Stripe, Salesforce, QuickBooks, and custom internal tools.",
      },
      {
        question: "How easy is it to back up and restore data?",
        answer:
          "Point-in-time recovery is automatic. Restore any schema or database to a specific timestamp from the dashboard in a couple of clicks.",
      },
      {
        question: "What happens when I exceed my plan limits?",
        answer:
          "We never hard-stop your traffic. You are charged transparently for the overflow, and you can set hard or soft limits from the billing settings.",
      },
    ],
  },

  changelog: {
    title: "Changelog",
    description:
      "Keep yourself informed about the most recent additions and improvements we\u2019ve made to Arce.",
    highlightsLabel: "New & improved",
    fixesLabel: "Fixes",
    entries: [
      {
        version: "v1.0.0",
        date: "Oct 20, 2026",
        heading: "Arce is generally available",
        summary:
          "After a year in preview, Arce is now generally available. Every workspace gets zero-downtime migrations, edge functions and a refreshed dashboard.",
        highlights: [
          {
            label: "Dashboard",
            text: "A redesigned console with faster navigation and unified billing.",
          },
          {
            label: "Edge functions",
            text: "Serverless triggers now run at the edge, closer to your users.",
          },
          {
            label: "SSO",
            text: "Single Sign-On is available on the Business plan via SAML and OIDC.",
          },
        ],
        fixes: [
          {
            label: "Replication",
            text: "Fixed a rare lag between the primary and read replicas.",
          },
        ],
      },
      {
        version: "v0.9.0",
        date: "Apr 27, 2026",
        heading: "Safe migrations on development branches",
        summary:
          "Safe migrations can now be activated on development branches, enabling zero-downtime schema changes with the ability to revert schemas.",
        highlights: [
          {
            label: "Filters",
            text: "AI filters now enhance your existing compatible filters rather than replacing them.",
          },
          {
            label: "Comments",
            text: "Opening a notification about a comment now focuses the reply input automatically.",
          },
          {
            label: "Editor",
            text: "Browse through multiple images in the editor without zooming out.",
          },
        ],
        fixes: [
          {
            label: "Templates",
            text: "When creating a template, you can now choose which team it belongs to.",
          },
        ],
      },
      {
        version: "v0.8.0",
        date: "Jan 15, 2026",
        heading: "Point-in-time recovery and branching",
        summary:
          "Restore any database to a specific timestamp and branch schemas for isolated development without affecting production data.",
        highlights: [
          {
            label: "Recovery",
            text: "Point-in-time recovery is now available for every plan.",
          },
          {
            label: "Branches",
            text: "Create disposable database branches for pull requests and previews.",
          },
        ],
        fixes: [],
      },
    ],
  },

  notFound: {
    title: "Page not found",
    text: "Sorry, we couldn\u2019t find the page you\u2019re looking for.",
    cta: "Go to the home page",
  },
};

export type Dictionary = typeof en;
