export type Service = {
  title: string;
  description: string;
  points: string[];
  icon: string; // SVG path string
};

export const services: Service[] = [
  {
    title: "Diagnose Systems",
    description:
      "We audit your entire front-desk operation, identify the exact failure points, and engineer a repeatable process from first contact to closed deal.",
    points: [
      "Front-desk process mapping",
      "Escalation and routing logic",
      "Service-quality checkpoints",
    ],
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    title: "Architect & Deploy",
    description:
      "We build and deploy the full system — tooling, integrations, and team onboarding — then stay present until you are live and stable.",
    points: [
      "System setup and onboarding",
      "Integration with existing tools",
      "Go-live readiness planning",
    ],
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Optimize Performance",
    description:
      "Ongoing performance loops — conversion audits, live reporting, and sprint-based iteration — so your system keeps getting sharper.",
    points: [
      "Conversion and response audits",
      "Performance reporting",
      "Continuous iteration sprints",
    ],
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
];

export const deliveryItems = [
  {
    label: "Weekly Touchpoints",
    description: "Structured implementation check-ins every week to track progress and resolve blockers in real time.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    label: "Clear Ownership",
    description: "Every milestone has a named owner and deadline — no ambiguity about who is responsible for what.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    label: "Reporting Dashboard",
    description: "A live dashboard with prioritised action items, conversion metrics, and response-time benchmarks.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];
