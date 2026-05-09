import { Check, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";

const plans = [
  {
    name: "Starter",
    price: "GBP 349",
    frequency: "/month",
    description: "Great for single-location teams launching structured workflows.",
    features: [
      "Communication workflow design",
      "Standard intake and response playbooks",
      "Monthly performance reporting",
      "Email support",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "GBP 749",
    frequency: "/month",
    description: "Best for organizations scaling operations and improving conversion.",
    features: [
      "Everything in Starter",
      "Advanced routing and escalation logic",
      "Bi-weekly optimization sprints",
      "Priority support and advisory",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    frequency: "engagement",
    description: "For multi-site operations that need governance and centralized standards.",
    features: [
      "Multi-location architecture",
      "Leadership reporting dashboard",
      "Custom governance controls",
      "Dedicated implementation manager",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  usePageMeta({
    title: "Zyvox Automations | Pricing",
    description: "View Zyvox Automations pricing plans with clear deliverables for startups, growth-stage teams, and enterprise operations.",
    path: "/pricing",
  });

  return (
    <div className="bg-brand-surface">
      <section className="container py-10 sm:py-12 md:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
          <img
            src="/images/pricing-background.jpg"
            alt="Pricing background"
            className="h-[260px] w-full object-cover sm:h-[320px] md:h-[360px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/10" />
          <div className="relative z-10 p-6 sm:p-10 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Pricing</p>
            <h1 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl md:text-5xl">
              Flexible plans built for business outcomes
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Transparent monthly pricing with clear deliverables. Choose the level of implementation support that fits your current growth stage.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`interactive-card rounded-2xl border bg-card p-6 sm:p-7 shadow-sm ${
                plan.highlight ? "border-brand-gold ring-2 ring-brand-gold/30" : "border-border"
              }`}
            >
              {plan.highlight && (
                <span className="inline-flex rounded-full bg-brand-navy px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h2 className="mt-4 text-2xl font-bold">{plan.name}</h2>
              <div className="mt-4 flex items-end gap-2">
                <p className="text-3xl font-bold text-brand-navy">{plan.price}</p>
                <p className="mb-1 text-sm text-muted-foreground">{plan.frequency}</p>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 text-brand-gold" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`btn-pop mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold ${
                  plan.highlight ? "bg-brand-navy text-primary-foreground" : "bg-secondary text-foreground"
                }`}
              >
                Request Proposal
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container pb-14 md:pb-20">
        <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Included in every plan</p>
              <h2 className="mt-2 text-xl font-bold text-brand-navy sm:text-2xl">Execution, reporting, and continuous improvement</h2>
            </div>
            <ShieldCheck className="h-10 w-10 text-brand-navy" />
          </div>
          <div className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-4">
            <p className="rounded-lg bg-secondary p-3">Implementation roadmap</p>
            <p className="rounded-lg bg-secondary p-3">Progress tracking</p>
            <p className="rounded-lg bg-secondary p-3">Operational support</p>
            <p className="rounded-lg bg-secondary p-3">Performance review</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
