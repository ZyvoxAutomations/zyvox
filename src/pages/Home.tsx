import { useRef, useEffect } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowRight, Shield, Zap, Phone, MessageSquare, Truck, Database, Link2, Settings, Globe2, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import { cn } from "@/lib/utils";
import marqueeAnthropic from "../../images/Anthropic_logo.svg";
import marqueeN8n from "../../images/n8n.png";
import marqueeOpenAi from "../../images/OpenAi.png";
import marqueePlivo from "../../images/plivo.png";
import marqueeRetell from "../../images/Retell.png";

/** Odd-index homepage cards use navy hover top sweep; even use gold (default). */
const homeCardToplineNavyClass = (globalIndex: number) =>
  globalIndex % 2 === 1 ? "home-card-topline-navy" : "";

/* ─────────────────────────────────────────────
   Reveal-on-scroll wrapper (framer-motion)
   ───────────────────────────────────────────── */
const Reveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : 0,
      x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   Section I: Architectural Hero
   ───────────────────────────────────────────── */
const HeroSection = () => (
  <section className="relative overflow-hidden bg-white">
    {/* Subtle radial accents */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#D4AF37]/[0.07] to-transparent blur-3xl" />
      <div className="absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#001F3F]/[0.04] to-transparent blur-3xl" />
    </div>

    <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-8 md:py-28 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — Copy */}
        <div>
          <Reveal>
            <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              The New Standard in Enterprise Infrastructure
            </p>
          </Reveal>
          <motion.h1
            className="font-serif text-4xl font-bold leading-[1.08] text-[#001F3F] sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem]"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
            }}
          >
            {["Automation ", "for ", "the ", "next ", "generation ", "of "].map((w) => (
              <motion.span
                key={w}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                {w}
              </motion.span>
            ))}
            <span className="relative inline-block">
              {["industry ", "leaders"].map((w) => (
                <motion.span
                  key={w}
                  className="inline-block"
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  {w}
                </motion.span>
              ))}
              <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/30" />
            </span>
            <motion.span
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              .
            </motion.span>
          </motion.h1>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#001F3F]/60 sm:text-lg">
              India's full-stack sovereign AI platform — building population-scale
              applications, conversational agents, and enterprise workflows that run
              from start to finish.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              <span>For Enterprises</span>
              <span className="h-1 w-1 rounded-full bg-[#D4AF37]" />
              <span>Government</span>
              <span className="h-1 w-1 rounded-full bg-[#D4AF37]" />
              <span>Developers</span>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="btn-primary-gold inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-sans text-sm font-semibold"
              >
                Book a Strategy Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#001F3F]/10 bg-white px-8 py-4 font-sans text-sm font-semibold text-[#001F3F] transition-all hover:border-[#D4AF37]/30 hover:shadow-diffused"
              >
                Explore Services
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Right — Hero image with gold overlay */}
        <Reveal delay={0.15} direction="right">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-diffused-lg">
              <img
                src="/images/hero-main.jpg"
                alt="Modern enterprise office"
                className="h-[380px] w-full object-cover sm:h-[440px] md:h-[500px]"
              />
              {/* Gold gradient overlays on edges */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#D4AF37]/[0.08] via-transparent to-[#D4AF37]/[0.05]" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
            </div>

            {/* Floating glass card */}
            <div className="absolute -bottom-5 -left-4 z-10 max-w-[16rem] rounded-2xl border border-white/40 bg-white/80 p-5 shadow-diffused backdrop-blur-xl sm:-left-6 sm:max-w-xs">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D4AF37]/10">
                  <Zap className="h-4 w-4 text-[#D4AF37]" />
                </div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37]">
                  Live Infrastructure
                </p>
              </div>
              <p className="mt-2 text-sm leading-snug text-[#001F3F]/60">
                AI agents processing{" "}
                <span className="font-semibold text-[#001F3F]">10,000+</span>{" "}
                workflows monthly.
              </p>
            </div>

            {/* Decorative gold ring */}
            <div className="absolute -right-3 -top-3 h-20 w-20 rounded-full border-2 border-[#D4AF37]/20 sm:-right-5 sm:-top-5 sm:h-28 sm:w-28" />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);


/* ─────────────────────────────────────────────
   Section III: Moving Marquee — Tech Stack
   ───────────────────────────────────────────── */
/** Wordmark-heavy logos — reference size in the marquee row. */
const MARQUEE_IMG_DEFAULT =
  "h-8 w-auto max-h-8 max-w-[11rem] object-contain object-center sm:h-10 sm:max-h-10 sm:max-w-[13rem]";
/** Bigger footprint for denser/smaller-source marks (n8n, Retell, Plivo) — bounded so row/clipping stay stable. */
const MARQUEE_IMG_BOOST =
  "h-[3.5rem] w-auto max-h-[3.5rem] max-w-[17rem] object-contain object-center sm:h-[3.75rem] sm:max-h-[3.75rem] sm:max-w-[20rem] md:max-w-[21.5rem]";

const techLogos = [
  { name: "n8n", logoSrc: marqueeN8n, imgClassName: MARQUEE_IMG_BOOST },
  { name: "Retell AI", logoSrc: marqueeRetell, imgClassName: MARQUEE_IMG_BOOST },
  { name: "OpenAI", logoSrc: marqueeOpenAi },
  { name: "Anthropic", logoSrc: marqueeAnthropic },
  { name: "Plivo", logoSrc: marqueePlivo, imgClassName: MARQUEE_IMG_BOOST },
] as const;

/** One marquee “half”: cycle logos until the row is comfortably wider than the viewport. */
function buildContinuousMarqueeStrip(
  items: readonly { name: string; logoSrc: string; imgClassName?: string }[],
  repeatsPerHalf: number,
): Array<{ name: string; logoSrc: string; imgClassName?: string; key: string }> {
  const halfLen = repeatsPerHalf * items.length;
  const half = Array.from({ length: halfLen }, (_, i) => {
    const logo = items[i % items.length];
    return { ...logo, key: `${i}` };
  });
  return [...half, ...half.map((logo, i) => ({ ...logo, key: `d-${i}` }))];
}

const TechMarquee = () => {
  const strip = buildContinuousMarqueeStrip(techLogos, 10);
  return (
    <section className="relative border-y border-[#001F3F]/5 bg-white py-10 sm:py-14">
      <Reveal>
        <p className="mb-8 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#001F3F]/30">
          Powered by world-class infrastructure
        </p>
      </Reveal>

      <div
        className="relative overflow-hidden bg-white [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <div className="marquee-track items-center">
          {strip.map((logo) => (
            <div
              key={logo.key}
              className="flex h-[4.75rem] min-h-[4.75rem] shrink-0 cursor-default items-center justify-center px-5 py-2 sm:h-[5.25rem] sm:min-h-[5.25rem] sm:px-8"
            >
              <img
                src={logo.logoSrc}
                alt={logo.name}
                width={200}
                height={64}
                className={cn(MARQUEE_IMG_DEFAULT, logo.imgClassName)}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   Section IV: The Three Pillars (Vault Cards)
   ───────────────────────────────────────────── */
const pillars = [
  {
    icon: Phone,
    secondaryIcon: MessageSquare,
    title: "AI Customer Communication",
    desc: "Voice AI agents and intelligent SMS workflows that handle inbound and outbound customer interactions with human-level nuance.",
    features: ["Voice AI Agents", "SMS Automation", "Call Routing", "Sentiment Analysis"],
    specs: [
      { label: "Latency", value: "<200ms" },
      { label: "Uptime", value: "99.9%" },
      { label: "Languages", value: "12+" },
    ],
  },
  {
    icon: Truck,
    secondaryIcon: Database,
    title: "Intelligent Logistics",
    desc: "Resource-to-job matching and real-time dispatch engines that optimize field operations and reduce idle time.",
    features: ["Smart Matching", "Live Dispatch", "Route Optimization", "Resource Tracking"],
    specs: [
      { label: "Match Speed", value: "<3s" },
      { label: "Accuracy", value: "97.8%" },
      { label: "Throughput", value: "50K/day" },
    ],
  },
  {
    icon: Link2,
    secondaryIcon: Settings,
    title: "Operational Sync",
    desc: "Deep integrations between CRM, back-office, and field systems that eliminate data silos and manual reconciliation.",
    features: ["CRM Sync", "ERP Bridge", "Data Pipeline", "Audit Trail"],
    specs: [
      { label: "Sync Freq", value: "Real-time" },
      { label: "Integrations", value: "40+" },
      { label: "Data Loss", value: "0%" },
    ],
  },
];

const PillarsSection = () => (
  <section className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-[1440px] px-6 sm:px-8">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Core Capabilities
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-[#001F3F] sm:text-4xl md:text-5xl">
            Three pillars of{" "}
            <span className="italic text-[#D4AF37]">operational excellence</span>
          </h2>
          <p className="mt-4 text-base text-[#001F3F]/50 sm:text-lg">
            Enterprise-grade systems engineered for reliability, speed, and scale.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
        {pillars.map((pillar, idx) => (
          <Reveal key={pillar.title} delay={idx * 0.12}>
            <article
              className={cn(
                "vault-card group flex h-full flex-col rounded-3xl border border-[#001F3F]/[0.06] bg-white p-7 shadow-diffused sm:p-8",
                homeCardToplineNavyClass(idx),
              )}
            >
              {/* Icon cluster */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#001F3F] shadow-lg">
                  <pillar.icon className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#D4AF37]/10">
                  <pillar.secondaryIcon className="h-4 w-4 text-[#D4AF37]" />
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#001F3F]">
                {pillar.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#001F3F]/50">
                {pillar.desc}
              </p>

              {/* Feature tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {pillar.features.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-[#001F3F]/[0.06] bg-[#F9FAFB] px-3 py-1 font-sans text-[11px] font-medium text-[#001F3F]/60"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Tech Specs — monospace */}
              <div className="mt-6 border-t border-dashed border-[#001F3F]/[0.08] pt-5">
                <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Tech Specs
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {pillar.specs.map((spec) => (
                    <div key={spec.label}>
                      <p className="font-mono text-lg font-bold text-[#001F3F]">
                        {spec.value}
                      </p>
                      <p className="font-mono text-[10px] text-[#001F3F]/35">
                        {spec.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   Section V: Powering AI-First Future
   ───────────────────────────────────────────── */
const AiFirstStarBullet = ({ className = "" }: { className?: string }) => (
  <svg
    className={`h-3.5 w-3.5 shrink-0 text-[#6CB396] sm:h-4 sm:w-4 ${className}`}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M12 2.2L14.2 9H21l-5.6 4.1 2.1 6.7L12 16.9 5.5 19.8l2.1-6.7L2 9h6.8L12 2.2z" />
  </svg>
);

const aiFirstFeatures = [
  {
    title: "Sovereign by design",
    desc: "Build, deploy, and run AI with full control, developed and operated entirely in India",
  },
  {
    title: "State of the art models",
    desc: "Industry-leading models built for global languages, culture, and context",
  },
  {
    title: "Human at the core",
    desc: "Forward deployed engineers work alongside your teams to deliver production-ready agents",
  },
];

const AIFirstFutureSection = () => (
  <section className="relative overflow-hidden bg-[#F9FAFB] py-24 sm:py-32">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#D4AF37]/10 to-transparent blur-3xl" />
      <div className="absolute -right-24 -bottom-16 h-[360px] w-[360px] rounded-full bg-gradient-to-tl from-[#001F3F]/10 to-transparent blur-3xl" />
    </div>
    <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Our North Star
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-[#001F3F] sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
            Powering World's{" "}
            <span className="italic text-[#D4AF37]">AI-first future</span>
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div
          className="card-gold-topline relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] border border-[#001F3F]/[0.06] bg-white p-6 shadow-diffused transition-[transform,box-shadow] duration-300 ease-out will-change-transform hover:-translate-y-2 hover:scale-[1.01] hover:shadow-xl sm:mt-14 sm:p-8 md:p-10 lg:rounded-[2.25rem]"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12">
            <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-[#001F3F]/[0.05] bg-[#F0F4FF] shadow-inner sm:rounded-[1.35rem]">
                <img
                  src="/images/homepage+card.png"
                  alt="Zyvox Automations AI-powered workflow dashboard"
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <ul className="flex flex-col gap-8 sm:gap-9">
              {aiFirstFeatures.map((item) => (
                <li key={item.title} className="flex gap-3.5 sm:gap-4">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#001F3F] sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#001F3F]/55 sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   Section VI: Population-scale Applications
   ───────────────────────────────────────────── */
const PopulationScaleSection = () => (
  <section className="relative overflow-hidden bg-[#F9FAFB] py-24 sm:py-32">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -left-28 top-1/4 h-[380px] w-[380px] rounded-full bg-gradient-to-br from-[#D4AF37]/10 to-transparent blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-[320px] w-[320px] rounded-full bg-gradient-to-tl from-[#001F3F]/8 to-transparent blur-3xl" />
    </div>
    <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8">
      <Reveal>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D4AF37] sm:text-[11px] sm:tracking-[0.22em]">
            <span>For enterprises</span>
            <span className="hidden text-[#001F3F]/25 sm:inline" aria-hidden>
              |
            </span>
            <span className="h-1 w-1 rounded-full bg-[#D4AF37] sm:hidden" aria-hidden />
            <span>Government</span>
            <span className="hidden text-[#001F3F]/25 sm:inline" aria-hidden>
              |
            </span>
            <span className="h-1 w-1 rounded-full bg-[#D4AF37] sm:hidden" aria-hidden />
            <span>Developers</span>
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-[#001F3F] sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
            Full-Stack Sovereign{" "}
            <span className="italic text-[#D4AF37]">AI Platform</span>
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="home-card-topline-navy card-gold-topline relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] border border-[#001F3F]/[0.06] bg-white p-6 shadow-diffused-lg transition-[transform,box-shadow] duration-300 ease-out will-change-transform hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl sm:mt-14 sm:p-8 md:p-10 lg:rounded-[2.25rem]">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12">
            <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#001F3F]/[0.05] shadow-inner sm:rounded-[1.35rem]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#EA7A2F] via-[#F0B98A] to-[#DDD6F5]" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/[0.12] via-transparent to-white/20" />
                <div className="relative flex h-full w-full items-center justify-center p-10 sm:p-14">
                  <div
                    className="relative flex h-[min(56vw,14rem)] w-[min(56vw,14rem)] items-center justify-center sm:h-56 sm:w-56 md:h-64 md:w-64"
                    aria-hidden
                  >
                    <div className="absolute h-[78%] w-[78%] rotate-45 rounded-[1.75rem] border border-white/45 bg-white/20 shadow-[0_8px_32px_rgba(0,31,63,0.08)] backdrop-blur-xl" />
                    <div className="absolute h-[48%] w-[48%] rotate-45 rounded-xl border border-white/35 bg-white/15 backdrop-blur-md" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold text-[#001F3F] sm:text-2xl md:text-[1.65rem]">
                Population-scale Applications
              </h3>
              <div className="mt-6 space-y-5 text-sm leading-relaxed text-[#001F3F]/60 sm:text-base sm:leading-[1.65]">
                <p>
                  Building products <strong className="font-semibold text-[#001F3F]">World</strong>{" "}
                  can use.
                </p>
                <p>
                  Conversational agents fluent in{" "}
                  <strong className="font-semibold text-[#001F3F]">every</strong> languages.
                </p>
                <p>
                  Platforms that run enterprise workflows from start to finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   Section VII: Enterprise-grade Security
   ───────────────────────────────────────────── */
const securityBadges = [
  { label: "ISO", value: "27001", icon: Globe2 },
  { label: "AICPA", value: "SOC 2", icon: Lock },
  { label: "India", value: "Data Residency", icon: Shield },
];

const SecuritySection = () => (
  <section className="bg-[#F9FAFB] py-24 sm:py-32">
    <div className="mx-auto max-w-[1440px] px-6 sm:px-8">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Trust Foundation
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-[#001F3F] sm:text-4xl md:text-5xl">
            Enterprise-grade security.{" "}
            <span className="italic text-[#D4AF37]">Built in from day one.</span>
          </h2>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-8 sm:grid-cols-3 sm:gap-10">
        {securityBadges.map((b, idx) => (
          <Reveal key={b.value} delay={idx * 0.1}>
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6 flex h-44 w-44 cursor-default items-center justify-center transition-[transform,filter] duration-300 ease-out hover:-translate-y-2 hover:scale-[1.04] hover:drop-shadow-[0_12px_28px_rgba(0,31,63,0.12)] sm:h-52 sm:w-52">
                <div className="absolute inset-0 rounded-full border border-[#D4AF37]/35 bg-gradient-to-br from-[#D4AF37]/15 via-white to-[#001F3F]/10 shadow-diffused-lg" />
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-white to-[#F9FAFB] shadow-inner" />
                <div className="relative z-[1] flex flex-col items-center justify-center">
                  <b.icon className="mb-1 h-5 w-5 text-[#001F3F]/40" />
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#001F3F]/50">
                    {b.label}
                  </p>
                  <p className="mt-1 font-serif text-xl font-bold text-[#001F3F] sm:text-2xl">
                    {b.value}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.4}>
        <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-[#001F3F]/50 sm:text-base">
          Audited controls, encrypted-by-default infrastructure, and full data
          residency in India — so compliance never blocks the rollout.
        </p>
      </Reveal>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   CTA Section
   ───────────────────────────────────────────── */
const CTASection = () => (
  <section className="relative overflow-hidden bg-white py-24 sm:py-32">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
    </div>
    <div className="mx-auto max-w-[1440px] px-6 sm:px-8">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center">
            <img src="/images/logo-favicon.png" alt="Zyvox Automations" className="h-full w-full object-contain scale-[1.25] mix-blend-multiply" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-[#001F3F] sm:text-4xl md:text-5xl">
            Ready to build infrastructure that scales?
          </h2>
          <p className="mt-5 text-base text-[#001F3F]/50 sm:text-lg">
            Join the enterprises, government teams, and developers already running
            on India's full-stack sovereign AI platform.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="btn-primary-gold inline-flex items-center gap-2 rounded-xl px-10 py-4 font-sans text-sm font-semibold"
            >
              Start Your Transformation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="font-mono text-[11px] text-[#001F3F]/30">
              No commitment required
            </span>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   Home Page Assembly
   ───────────────────────────────────────────── */
const Home = () => {
  usePageMeta({
    title: "Zyvox Automations | India's Full-Stack Sovereign AI Platform",
    description:
      "India's full-stack sovereign AI platform. Population-scale conversational agents, voice AI, intelligent logistics, and enterprise workflows for enterprises, government, and developers.",
    path: "/",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "org-schema";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Zyvox Automations",
      url: "https://zyvoxautomations.com",
      logo: "https://zyvoxautomations.com/images/logo.png",
      description:
        "AI-powered automation solutions that eliminate manual work, cut costs, and scale your business on autopilot.",
      sameAs: [],
    });
    document.head.appendChild(script);
    return () => {
      document.getElementById("org-schema")?.remove();
    };
  }, []);

  return (
    <div className="bg-white">
      <HeroSection />
      <TechMarquee />
      <PillarsSection />
      <AIFirstFutureSection />
      <PopulationScaleSection />
      <div className="gold-divider mx-auto max-w-[800px]" />
      <SecuritySection />
      <CTASection />
    </div>
  );
};

export default Home;