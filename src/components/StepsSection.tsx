import receptionWorkflow from "@/assets/reception-workflow.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { num: 1, title: "Capture every inbound inquiry", desc: "Every call and web lead enters a structured workflow from the first touchpoint." },
  { num: 2, title: "Route requests with clear business rules", desc: "Scheduling, treatment inquiries, insurance questions, and urgent requests are correctly directed." },
  { num: 3, title: "Deliver confirmed outcomes to your team", desc: "Your staff receives clean summaries, next actions, and full context for seamless follow-through." },
];

const StepsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="process" className="py-20 md:py-28 bg-secondary">
      <div ref={ref} className={`container scroll-fade-in ${isVisible ? "visible" : ""}`}>
        <p className="text-sm font-semibold text-brand-gold text-center mb-3 uppercase tracking-[0.2em]">Delivery Framework</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          A reliable process from first contact to completed action
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          Our implementation model is built to improve patient communication quality while preserving your clinical team's focus.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
            <div className="mt-6 p-4 rounded-lg bg-background border border-border">
              <p className="text-sm font-medium text-foreground">Built for consistency, compliance, and measurable front-desk performance.</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={receptionWorkflow} alt="Professional dental reception workflow" className="w-full h-auto" loading="lazy" width={1280} height={720} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
