import { Headphones } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const demos = [
  { title: "Inbound Call Operations", desc: "Structured intake, issue classification, and immediate routing for all incoming patient communication." },
  { title: "Scheduling Orchestration", desc: "Reduced friction across consultation requests, treatment reminders, and confirmation workflows." },
  { title: "After-Hours Continuity", desc: "Capture and qualify out-of-hours opportunities so no high-value inquiry is lost overnight." },
];

const AudioDemos = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="solutions" className="py-20 md:py-28">
      <div ref={ref} className={`container scroll-fade-in ${isVisible ? "visible" : ""}`}>
        <p className="text-sm font-semibold text-brand-gold text-center mb-3 uppercase tracking-[0.2em]">Service Areas</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Communication systems built for growth-stage clinics</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          Every service line is designed to reduce administrative load while improving response quality and patient confidence.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {demos.map((demo, i) => (
            <div key={demo.title} className={`rounded-2xl border border-border bg-card p-6 hover-lift scroll-fade-in scroll-fade-in-delay-${i + 1} ${isVisible ? "visible" : ""}`}>
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-brand-navy" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{demo.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{demo.desc}</p>
              <div className="h-12 rounded-lg bg-secondary flex items-center justify-center">
                <p className="text-xs text-muted-foreground">Enterprise-ready operating standard</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudioDemos;
