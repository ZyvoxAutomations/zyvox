import { FormEvent, useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Mail, Linkedin, Phone } from "lucide-react";
import { AsYouType } from "libphonenumber-js";
import countries from "@/data/countries.json";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type ContactPayload = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};



const initialPayload: ContactPayload = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
};

const Contact = () => {
  usePageMeta({
    title: "Zyvox Automations | Contact",
    description: "Contact Zyvox Automations to discuss your current workflow challenges and receive a tailored implementation roadmap.",
    path: "/contact",
  });

  const [payload, setPayload] = useState<ContactPayload>(initialPayload);
  const [countryId, setCountryId] = useState("IN:+91");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitting, setSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const countryIso = countryId.split(':')[0] as any;
    const digits = payload.phone.replace(/\D/g, '');
    let isValidLength = false;
    if (countryIso === "IN" && digits.length === 10) isValidLength = true;
    else if (countryIso === "US" && digits.length === 10) isValidLength = true;
    else if (countryIso === "GB" && (digits.length === 10 || digits.length === 11)) isValidLength = true;
    else if (countryIso !== "IN" && countryIso !== "US" && countryIso !== "GB" && digits.length >= 5 && digits.length <= 15) isValidLength = true;
    
    if (!isValidLength) {
      setPhoneError(`Please enter a valid phone number for ${countryIso}.`);
      return;
    }
    
    setSubmitting(true);
    setStatus("idle");
    setPhoneError("");

    try {
      // If we're in dev mode, just simulate a successful request since backend isn't available
      if (import.meta.env.DEV) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } else {
        const response = await fetch("/.netlify/functions/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...payload,
            phone: `${countryId.split(':')[1]} ${payload.phone}`,
          }),
        });

        if (!response.ok) {
          throw new Error("submission failed");
        }
      }

      setPayload(initialPayload);
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="container py-10 sm:py-12 md:py-20">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Contact</p>
      <h1 className="text-3xl font-bold text-brand-navy sm:text-4xl md:text-5xl">Let us design your next growth system</h1>
      <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
        Share your current process, and we will propose a practical roadmap tailored to your business goals.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-5">
        <aside className="interactive-card rounded-2xl border border-border bg-card p-5 sm:p-6 lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Contact us</p>
          <img src="/images/contact-cta.jpg" alt="Consultation setup" className="mt-4 h-44 w-full rounded-xl object-cover" />
          <div className="mt-8 mb-4 flex justify-center gap-6">
            <a href="mailto:hello@zyvoxautomations.com" aria-label="Email Us" className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/40">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/company/zyvox-ai/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/40">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="tel:+91-7078061233" aria-label="Call Us" className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/40">
              <Phone className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Typical response time is within one business day.
          </p>
        </aside>

        <div className="interactive-card relative overflow-hidden rounded-2xl border border-border bg-card lg:col-span-3">
          <img src="/images/pricing-background.jpg" alt="Background texture" className="absolute inset-0 h-full w-full object-cover opacity-18" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/97 via-white/92 to-white/86" />

          <form onSubmit={submit} className="relative z-10 grid gap-4 p-5 sm:p-6 md:grid-cols-2 md:p-8">
            <div className="md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Inquiry Form</p>
              <h2 className="mt-2 text-2xl font-bold text-brand-navy">Tell us about your requirements</h2>
              <p className="mt-2 text-sm text-muted-foreground">Share a few details and our team will return with a practical roadmap.</p>
            </div>

            <input
              required
              value={payload.name}
              onChange={(event) => {
                const val = event.target.value;
                if (/^[a-zA-Z\s]*$/.test(val)) {
                  setPayload((prev) => ({ ...prev, name: val }));
                }
              }}
              placeholder="Full name"
              className="h-11 rounded-lg border border-input bg-background/95 px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="email"
              required
              value={payload.email}
              onChange={(event) => {
                const val = event.target.value;
                if (!/\s/.test(val)) {
                  setPayload((prev) => ({ ...prev, email: val }));
                }
              }}
              placeholder="Work email"
              className="h-11 rounded-lg border border-input bg-background/95 px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              required
              value={payload.company}
              onChange={(event) => {
                const val = event.target.value;
                if (/^[a-zA-Z0-9\s.,-]*$/.test(val)) {
                  setPayload((prev) => ({ ...prev, company: val }));
                }
              }}
              placeholder="Company name"
              className="h-11 rounded-lg border border-input bg-background/95 px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <div className={`flex flex-col gap-1 md:col-span-1`}>
              <div className={`flex h-11 rounded-lg border bg-background/95 focus-within:ring-2 focus-within:ring-ring ${phoneError ? "border-destructive" : "border-input"}`}>
                <Select value={countryId} onValueChange={(val) => {
                  setCountryId(val);
                  setPhoneError("");
                  const newIso = val.split(':')[0] as any;
                  const digits = payload.phone.replace(/\D/g, '');
                  if (digits) {
                    setPayload(prev => ({ ...prev, phone: new AsYouType(newIso).input(digits) }));
                  }
                }}>
                <SelectTrigger className="h-full w-[120px] rounded-r-none border-0 border-r border-input bg-transparent px-3 text-sm focus:ring-0 focus:ring-offset-0 shadow-none">
                  <SelectValue placeholder="+91">
                    {(() => {
                      const selected = countries.find(c => `${c.iso}:${c.code}` === countryId);
                      return selected ? (
                        <div className="flex items-center gap-2">
                          <img src={selected.flag} alt={selected.name} className="h-3 w-4 object-cover rounded-sm" />
                          <span>{selected.code}</span>
                        </div>
                      ) : (
                        "+91"
                      );
                    })()}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {countries.map((country, idx) => (
                    <SelectItem key={`${country.iso}-${idx}`} value={`${country.iso}:${country.code}`}>
                      <div className="flex items-center gap-2">
                        <img src={country.flag} alt={country.name} className="h-3 w-4 object-cover rounded-sm" />
                        <span>{country.name} ({country.code})</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
                <input
                  required
                  value={payload.phone}
                  onChange={(event) => {
                    setPhoneError("");
                    let val = event.target.value;
                    const countryIso = countryId.split(':')[0] as any;
                    
                    let digits = val.replace(/\D/g, '');
                    if (val.length < payload.phone.length && payload.phone.replace(/\D/g, '') === digits) {
                      digits = digits.slice(0, -1);
                    }
                    
                    let maxLength = 15;
                    if (countryIso === "IN" || countryIso === "US") maxLength = 10;
                    else if (countryIso === "GB") maxLength = 11;
                    
                    if (digits.length <= maxLength) {
                      const formatted = new AsYouType(countryIso).input(digits);
                      setPayload((prev) => ({ ...prev, phone: formatted }));
                    }
                  }}
                  placeholder="Phone number"
                  className="h-full w-full rounded-r-lg bg-transparent px-3 text-sm outline-none"
                />
              </div>
              {phoneError && <p className="text-xs text-destructive pl-1">{phoneError}</p>}
            </div>
            <div className="md:col-span-2 relative">
              <textarea
                value={payload.message}
                onChange={(event) => {
                  const text = event.target.value;
                  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
                  if (wordCount <= 10000) {
                    setPayload((prev) => ({ ...prev, message: text }));
                  }
                }}
                placeholder="Tell us about your project and current challenges"
                className="min-h-32 w-full rounded-lg border border-input bg-background/95 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button
              disabled={submitting}
              type="submit"
              className="btn-pop rounded-lg bg-brand-navy px-5 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-70 md:col-span-2"
            >
              {submitting ? "Submitting..." : "Send Inquiry"}
            </button>

            {status === "success" && <p className="text-sm text-brand-navy md:col-span-2">Thanks, your inquiry has been submitted.</p>}
            {status === "error" && <p className="text-sm text-destructive md:col-span-2">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
