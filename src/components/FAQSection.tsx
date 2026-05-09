import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  { q: "How long does onboarding take?", a: "Most implementations go live in 2 to 4 weeks depending on your call-flow complexity, approval cycles, and integration requirements." },
  { q: "Can the workflow match our current operating model?", a: "Yes. We map your existing policies, routing rules, escalation standards, and service priorities before launch." },
  { q: "Do you support multi-location practices?", a: "Yes. We provide centralized governance and location-specific logic for multi-site dental groups." },
  { q: "What reporting do we receive?", a: "You receive clear operational reports covering response consistency, captured opportunities, and conversion signals." },
  { q: "How do you handle compliance and data protection?", a: "Our delivery model is built with strong data-handling controls, least-privilege access, and auditable communication logs." },
  { q: "Will this disrupt our current team?", a: "No. Implementation is staged to minimize operational disruption and align with your existing front-desk workflows." },
  { q: "Can we use our existing phone and scheduling tools?", a: "In most cases, yes. We design around your current stack to avoid unnecessary platform migration." },
  { q: "Is there a long-term contract?", a: "Engagement structure depends on your plan, but we prioritize clarity, value delivery, and transparent terms." },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary">
      <div ref={ref} className={`container max-w-3xl scroll-fade-in ${isVisible ? "visible" : ""}`}>
        <p className="text-sm font-semibold text-brand-gold text-center mb-3 uppercase tracking-[0.2em]">Frequently Asked Questions</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Everything decision-makers ask before launch
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Straightforward answers on onboarding, operations, and implementation readiness.
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-card px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
