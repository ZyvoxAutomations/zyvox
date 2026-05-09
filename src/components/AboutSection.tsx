import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  
  return (
    <section id="about" className="py-20 md:py-28">
      <div ref={ref} className={`container max-w-3xl scroll-fade-in ${isVisible ? "visible" : ""}`}>
        <p className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-3">About Zyvox Automations</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">A focused operations partner for ambitious dental practices</h2>
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Zyvox Automations is built for clinics that want enterprise-level communication standards without enterprise-level complexity.
          </p>
          <p>
            We combine process design, implementation discipline, and performance reporting so your front-desk operations remain fast, dependable, and consistent.
          </p>
          <p>
            From solo practices to multi-site groups, our delivery model is tailored to your scheduling policies, escalation rules, and growth targets.
          </p>
          <p>
            Every engagement emphasizes compliance, patient trust, and a premium service experience that reflects your brand.
          </p>
          <p className="font-medium text-foreground italic">
            We help you run communication as a strategic business function, not a daily fire drill.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
