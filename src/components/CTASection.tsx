import { FormEvent, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
};

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.company) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    try {
      // If we're in dev mode, just simulate a successful request since backend isn't available
      if (import.meta.env.DEV) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } else {
        const response = await fetch("/.netlify/functions/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }
      }

      setFormData(initialState);
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cta" className="py-20 md:py-28">
      <div ref={ref} className={`container max-w-4xl scroll-fade-in ${isVisible ? "visible" : ""}`}>
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-xl">
          <p className="text-sm font-semibold text-brand-gold uppercase tracking-[0.2em] mb-3">Get Started</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Build your business-ready communication system</h2>
          <p className="text-muted-foreground mb-8">
            Share your current setup and growth goals. Our team will return with a clear rollout plan tailored to your practice.
          </p>

          <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
            <input
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="Full name"
              className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              required
            />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              placeholder="Work email"
              className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              required
            />
            <input
              value={formData.company}
              onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
              placeholder="Practice or company name"
              className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              required
            />
            <input
              value={formData.phone}
              onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
              placeholder="Phone number"
              className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              value={formData.message}
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              placeholder="Tell us your biggest front-desk communication challenge"
              className="md:col-span-2 min-h-28 rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="md:col-span-2 btn-pop mt-2 inline-flex items-center justify-center rounded-lg bg-brand-navy px-6 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Request Consultation"}
            </button>
          </form>

          {status === "success" && (
            <p className="mt-4 text-sm text-brand-navy">Thank you. Your request has been received and our team will contact you shortly.</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-destructive">We could not submit your request. Please verify your details and try again.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;