import { Check } from "lucide-react";

const plans = [
  {
    name: "Foundation",
    price: "GBP 349",
    period: "/month",
    subtitle: "Best for single-location practices",
    tagline: "Operational baseline",
    features: [
      "Inbound communication workflow setup",
      "Scheduling and inquiry routing standards",
      "Weekly performance summary",
      "Email support with priority response",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "GBP 699",
    period: "/month",
    subtitle: "Best for scaling clinics",
    tagline: "Conversion and control",
    features: [
      "Everything in Foundation",
      "Advanced call flow and escalation logic",
      "Monthly optimization workshop",
      "Dedicated account specialist",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "engagement",
    subtitle: "For multi-site dental groups",
    tagline: "Central governance",
    features: [
      "Multi-location workflow governance",
      "Unified reporting across sites",
      "Custom compliance and audit controls",
      "Implementation and onboarding management",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <p className="text-sm font-semibold text-brand-gold text-center mb-3 uppercase tracking-[0.2em]">Investment</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Transparent pricing built for operational ROI
        </h2>
        <p className="text-center text-muted-foreground mb-16">
          Clear monthly plans, implementation guidance, and measurable outcomes.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 bg-card relative hover-lift ${
                plan.popular ? "border-brand-gold shadow-xl ring-2 ring-brand-gold/25" : "border-border"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-navy text-primary-foreground text-xs font-semibold">
                  Recommended
                </span>
              )}
              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">{plan.tagline}</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-6">{plan.subtitle}</p>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`btn-pop block text-center py-3 rounded-lg font-semibold text-sm ${
                  plan.popular ? "bg-brand-navy text-primary-foreground" : "bg-background text-foreground border border-border"
                }`}
              >
                Talk to Our Team
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;