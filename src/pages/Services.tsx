import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { services, deliveryItems } from "@/data/services";

// ── Outcome metrics ───────────────────────────────────────────────────────────
const metrics = [
  { prefix: "+", value: "82%", label: "After-hours inquiries captured into the booking flow" },
  { prefix: "",  value: "3.4×", label: "Faster first-response on inbound messages" },
  { prefix: "",  value: "97%", label: "Customer satisfaction sustained across all touchpoints" },
];

const featured = {
  quote:
    "Zyvox didn't sell us software. They rebuilt how our intake function thinks. Every call, every missed inquiry, every follow-up now lives inside a rhythm we can actually measure.",
  name: "Priya Menon",
  role: "Director of Operations",
  company: "Saanvi Dental Group",
};

// ── Arrow connector between step cards ───────────────────────────────────────
const Connector = () => (
  <div className="hidden items-center justify-center md:flex" aria-hidden="true">
    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/8">
      <ArrowRight className="h-3.5 w-3.5 text-brand-gold" />
    </div>
  </div>
);

// ── Step icon ─────────────────────────────────────────────────────────────────
const StepIcon = ({ path }: { path: string }) => (
  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy/8 ring-1 ring-brand-navy/10">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.6}
      stroke="currentColor"
      className="h-5 w-5 text-brand-navy"
    >
      {path.split(" M").map((segment, i) => (
        <path
          key={i}
          strokeLinecap="round"
          strokeLinejoin="round"
          d={i === 0 ? segment : "M" + segment}
        />
      ))}
    </svg>
  </div>
);

// ── Page ──────────────────────────────────────────────────────────────────────
const Services = () => {
  usePageMeta({
    title: "Zyvox Automations | Services",
    description:
      "AI-powered communication and operational systems that reduce response time, improve conversions, and eliminate manual inefficiencies.",
    path: "/services",
  });

  const headerAnim   = useScrollAnimation();
  const metricsAnim  = useScrollAnimation();
  const cardsAnim    = useScrollAnimation();
  const deliveryAnim = useScrollAnimation();
  const testimonialAnim = useScrollAnimation();
  const ctaAnim      = useScrollAnimation();

  return (
    <div className="bg-background">

      {/* ── HERO — 120px vertical ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-surface">
        {/* ambient blobs */}
        <div
          className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-brand-gold/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-brand-navy/10 blur-3xl"
          aria-hidden="true"
        />

        <div
          ref={headerAnim.ref}
          className={`container relative z-10 max-w-5xl pt-6 pb-10 sm:pt-8 sm:pb-12 md:pt-10 md:pb-16 scroll-fade-in ${
            headerAnim.isVisible ? "visible" : ""
          }`}
        >
          {/* pill badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            Services
          </span>

          {/* headline — stronger, outcome-driven */}
          <h1 className="mt-5 max-w-4xl text-[2.6rem] font-bold leading-[1.04] text-brand-navy sm:text-5xl md:text-[3.5rem]">
            Build AI-Powered Systems That{" "}
            <span className="italic text-brand-gold">Scale Your Operations.</span>
          </h1>

          {/* subtext — reduced opacity for hierarchy */}
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/55 sm:text-lg">
            We design communication and operational systems that reduce response time, improve
            conversions, and eliminate manual inefficiencies — end to end.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="btn-primary-gold btn-pop inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold"
            >
              Book a Consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/80 px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-brand-gold hover:text-brand-gold"
            >
              See Client Results
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS — tight proof strip, 60px vertical ──────────────────────────── */}
      <section className="border-y border-border">
        <div
          ref={metricsAnim.ref}
          className={`container max-w-4xl py-4 sm:py-5 scroll-fade-in ${
            metricsAnim.isVisible ? "visible" : ""
          }`}
        >
          <dl className="grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className="flex flex-col items-center px-6 py-3 text-center first:pt-0 last:pb-0 sm:py-0 sm:first:pt-0 sm:last:pb-0"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <dt className="font-sans text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
                  {m.prefix}
                  {m.value}
                </dt>
                <dd className="mt-1.5 max-w-[16ch] text-xs leading-snug text-foreground/50">
                  {m.label}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Aggregated across active engagements ·{" "}
            <Link
              to="/testimonials"
              className="text-brand-gold underline-offset-2 hover:underline"
            >
              Read client stories →
            </Link>
          </p>
        </div>
      </section>

      {/* ── THREE PHASES — 80px vertical, tighter card gap ───────────────────── */}
      <section className="container py-10 sm:py-12">
        <div
          ref={cardsAnim.ref}
          className={`scroll-fade-in ${cardsAnim.isVisible ? "visible" : ""}`}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
            How it works
          </p>
          <h2 className="mt-3 text-4xl font-bold text-brand-navy sm:text-5xl">
            Three phases. One operating system.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/55 sm:text-base">
            Each phase builds directly on the last — so by the time we hand you the keys, the
            system is already compounding.
          </p>
        </div>

        {/* Cards + connectors — gap reduced from gap-3 → gap-2, cards wider inside */}
        <div className="mt-6 grid items-start gap-2 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {services.map((service, idx) => (
            <>
              <ServiceCard key={service.title} service={service} idx={idx} />
              {idx < services.length - 1 && <Connector key={`conn-${idx}`} />}
            </>
          ))}
        </div>
      </section>

      {/* divider */}
      <div className="gold-divider mx-auto max-w-5xl" />

      {/* ── DELIVERY — flattened horizontal list, 60px vertical ──────────────── */}
      <section className="container py-8 sm:py-10">
        <div
          ref={deliveryAnim.ref}
          className={`scroll-fade-in ${deliveryAnim.isVisible ? "visible" : ""}`}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
            Delivery format
          </p>
          <h2 className="mt-3 text-4xl font-bold text-brand-navy sm:text-5xl">
            How execution actually works.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/55 sm:text-base">
            We don't hand over a playbook and disappear. Our delivery structure keeps us
            accountable to outcomes, not activities.
          </p>

          {/* Horizontal rule list — no cards, just clean rows */}
          <dl className="mt-5 divide-y divide-border">
            {deliveryItems.map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col gap-1 py-3.5 sm:flex-row sm:items-start sm:gap-12 scroll-fade-in ${
                  metricsAnim.isVisible ? "visible" : ""
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <dt className="w-full shrink-0 text-sm font-semibold text-foreground sm:w-52">
                  {item.label}
                </dt>
                <dd className="text-sm leading-relaxed text-foreground/55">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* divider */}
      <div className="gold-divider mx-auto max-w-5xl" />

      {/* ── TESTIMONIAL — 80px vertical, slightly tighter top ────────────────── */}
      <section className="container pt-8 pb-10 sm:pt-10 sm:pb-12">
        <div
          ref={testimonialAnim.ref}
          className={`scroll-fade-in ${testimonialAnim.isVisible ? "visible" : ""}`}
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
            Client voice
          </p>
          <p className="mb-5 text-4xl font-bold text-brand-navy sm:text-5xl font-serif">
            What operators say.
          </p>

          <article className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[0_20px_60px_-30px_hsl(var(--brand-navy)/0.35)] sm:p-8">
            <Quote
              aria-hidden="true"
              className="absolute -top-2 -left-1 h-20 w-20 text-brand-gold/20 sm:h-24 sm:w-24"
            />
            <p className="relative font-serif text-xl leading-[1.4] text-brand-navy sm:text-2xl md:text-[1.7rem]">
              &ldquo;{featured.quote}&rdquo;
            </p>

            <div className="mt-7 flex flex-col gap-4 border-t border-border/70 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground">{featured.name}</p>
                <p className="mt-0.5 text-xs text-foreground/50">
                  {featured.role} · {featured.company}
                </p>
              </div>
              <Link
                to="/testimonials"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold underline-offset-2 hover:underline"
              >
                See all client stories <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* ── CTA — UNTOUCHED, already perfect ─────────────────────────────────── */}
      <section className="container pb-12 sm:pb-16">
        <div
          ref={ctaAnim.ref}
          className={`relative overflow-hidden rounded-3xl bg-brand-navy p-8 text-primary-foreground sm:p-10 scroll-fade-in ${
            ctaAnim.isVisible ? "visible" : ""
          }`}
        >
          <div
            className="pointer-events-none absolute -top-16 -right-10 h-64 w-64 rounded-full bg-brand-gold/30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent"
            aria-hidden="true"
          />

          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                Ready to start?
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
                Tell us where your operation is breaking down.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
                Thirty minutes is enough to understand whether your communication infrastructure
                is ready for an upgrade. We'll tell you either way — no pitch, no pressure.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:ml-auto md:flex-col md:w-60 md:items-stretch">
              <Link
                to="/contact"
                className="btn-pop inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-gold px-6 py-3.5 text-sm font-semibold text-brand-navy shadow-lg"
              >
                Book a Strategy Call <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/testimonials"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary-foreground/25 bg-transparent px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:border-brand-gold hover:text-brand-gold"
              >
                Read Client Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ── Service card ──────────────────────────────────────────────────────────────
const ServiceCard = ({ service, idx }: { service: (typeof services)[0]; idx: number }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <article
      ref={ref}
      className={`vault-card interactive-card flex h-full flex-col rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm scroll-fade-in ${
        isVisible ? "visible" : ""
      }`}
      style={{ transitionDelay: `${idx * 100}ms` }}
    >
      {/* step badge */}
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
        Step 0{idx + 1}
      </p>

      <StepIcon path={service.icon} />

      <h3 className="mt-4 text-xl font-semibold text-foreground sm:text-[1.35rem]">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground/55">{service.description}</p>

      <ul className="mt-4 space-y-1.5 text-sm text-foreground/55">
        {service.points.map((point) => (
          <li key={point} className="flex items-start gap-2.5">
            <span className="mt-[5px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Services;
