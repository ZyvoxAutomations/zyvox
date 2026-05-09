import { ArrowRight, Headphones } from "lucide-react";
import heroWaves from "@/assets/hero-waves.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-20 md:pt-28 overflow-hidden bg-brand-surface">
      <div className="absolute inset-0 z-0">
        <img src={heroWaves} alt="" className="w-full h-full object-cover opacity-20" width={1920} height={800} />
      </div>
      <div className="relative z-10 container text-center py-20 md:py-32">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-gold" />
          <span className="text-sm font-medium text-muted-foreground">Trusted communication infrastructure for modern dental practices</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-brand-navy leading-tight max-w-4xl mx-auto">
          A Professional Front-Desk Experience, Delivered With Precision
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Zyvox Automations designs and operates business-grade communication workflows that protect every patient inquiry, improve scheduling conversion, and reduce front-desk pressure.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#cta" className="btn-pop inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-brand-navy text-primary-foreground font-semibold text-base shadow-lg hover:shadow-xl">
            Book a 30-Min Strategy Call <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#solutions" className="btn-pop inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border bg-background text-foreground font-semibold text-base hover:bg-secondary">
            <Headphones className="w-4 h-4" /> Explore Service Areas
          </a>
        </div>
      </div>

      <div className="relative z-10 container pb-12">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-6">Designed for high-performing clinical teams</p>
        <div className="flex items-center justify-center gap-10 opacity-40">
          <span className="text-xl font-serif font-bold text-foreground">Operations</span>
          <span className="text-xl font-serif font-bold text-foreground">Compliance</span>
          <span className="text-xl font-serif font-bold text-foreground hidden sm:block">Patient Experience</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
