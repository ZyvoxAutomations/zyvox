import { useEffect, useRef } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BotMessageSquare,
  CalendarClock,
  Cog,
  Linkedin,
} from "lucide-react";

/* ─── Data ─── */

const pillars = [
  {
    icon: BotMessageSquare,
    title: "AI-Powered Communication",
    description:
      "Enterprise voice agents, intelligent chatbots, and automated SMS workflows that ensure every customer interaction is handled with precision and speed.",
    highlights: ["Voice Agents", "Chatbots", "SMS Workflows"],
  },
  {
    icon: CalendarClock,
    title: "Intelligent Scheduling",
    description:
      "Automated job routing and resource-to-job matching systems that eliminate scheduling conflicts and maximize operational throughput.",
    highlights: ["Job Routing", "Resource Matching", "Calendar Sync"],
  },
  {
    icon: Cog,
    title: "Operational Automation",
    description:
      "Custom CRM integrations and back-office system builds that streamline your entire operational backbone — from lead capture to fulfilment.",
    highlights: ["CRM Integration", "Back-Office Systems", "Data Pipelines"],
  },
];

const founders = [
  {
    name: "Kunwar Zaid",
    role: "Founder & CEO",
    initials: "KZ",
    image: "/images/kunwar-zaid.jpg",
    linkedin: "https://www.linkedin.com/in/kunwarzaid-zyvox",
    bio: "Leads Zyvox's strategic vision and enterprise partnerships globally.",
  },
  {
    name: "Vijayant Singh",
    role: "Co-Founder & CFO",
    initials: "VS",
    image: "/images/vinnayat.jpg",
    linkedin: "https://www.linkedin.com/in/vijayantsingh11",
    bio: "Oversees financial strategy, compliance, and sustainable growth operations.",
  },
  {
    name: "Lokik Ganeriwal",
    role: "Co-Founder & CTO",
    initials: "LG",
    image: "/images/lokik.jpg",
    linkedin: "https://www.linkedin.com/in/lokikg18",
    bio: "Architects the AI infrastructure and engineering systems powering Zyvox's automation platform.",
  },
];

/* ─── Scroll Observer Hook ─── */

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = root.querySelectorAll(".scroll-fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ─── Component ─── */

const About = () => {
  usePageMeta({
    title: "Zyvox Automations | About",
    description:
      "Discover the enterprise-grade AI automation infrastructure powering the next generation of businesses globally.",
    path: "/about",
  });

  const wrapperRef = useScrollReveal();

  return (
    <div ref={wrapperRef} className="bg-brand-surface">
      {/* ════════════════════════════════════════════════════════
          SECTION A — Hero: The Vision
          ════════════════════════════════════════════════════════ */}
      <section className="container grid items-center gap-10 py-12 sm:py-16 md:grid-cols-2 md:gap-14 md:py-24">
        {/* Text */}
        <div className="animate-rise">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
            About Zyvox Automations
          </p>
          <h1 className="text-3xl font-bold leading-tight text-brand-navy sm:text-4xl md:text-5xl lg:text-[3.4rem]">
            The automation infrastructure powering the next generation of
            enterprises.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-7 sm:text-lg">
            Zyvox Automations is an enterprise-grade AI partner dedicated to
            mid-market and scaling businesses{" "}
            <span className="font-semibold text-foreground">globally</span>.
            We build reliable, measurable communication and operational systems
            — so you can focus on growth.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="btn-pop inline-flex items-center justify-center rounded-lg bg-brand-navy px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Work With Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="btn-pop inline-flex items-center justify-center rounded-lg border border-brand-navy/20 bg-card px-6 py-3 text-sm font-semibold text-brand-navy hover:border-brand-gold"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="animate-rise">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-xl sm:p-4">
            <img
              src="/images/about-vision.jpg"
              alt="Modern automated workspace"
              className="h-[300px] w-full rounded-2xl object-cover sm:h-[360px] md:h-[420px]"
            />
            <div className="absolute bottom-4 left-4 max-w-[14rem] rounded-xl bg-background/90 p-3 shadow-lg backdrop-blur sm:bottom-8 sm:left-8 sm:max-w-xs sm:p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                Enterprise AI Partner
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Discovery, implementation, and optimization — delivered as one
                operating model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION B — Our Pillars
          ════════════════════════════════════════════════════════ */}
      <section className="container pb-14 sm:pb-16 md:pb-24">
        <div className="scroll-fade-in mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
            What We Build
          </p>
          <h2 className="mt-3 text-2xl font-bold text-brand-navy sm:text-3xl md:text-4xl">
            Enterprise-Grade AI Solutions
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Three interconnected pillars form the backbone of every Zyvox
            engagement — each engineered for reliability, scale, and measurable
            impact.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3 md:mt-14">
          {pillars.map((pillar, i) => (
            <article
              key={pillar.title}
              className={`scroll-fade-in scroll-fade-in-delay-${i + 1
                } interactive-card group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8`}
            >
              {/* Gold top-line accent */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-brand-gold/60 via-brand-gold to-brand-gold/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy/10 text-brand-navy transition-colors group-hover:bg-brand-navy group-hover:text-primary-foreground">
                <pillar.icon className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {pillar.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brand-gold/30 bg-brand-gold/5 px-3 py-1 text-xs font-medium text-brand-navy"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION C — Leadership
          ════════════════════════════════════════════════════════ */}
      <section className="container pb-14 sm:pb-16 md:pb-24">
        <div className="scroll-fade-in mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
            The Team
          </p>
          <h2 className="mt-3 text-2xl font-bold text-brand-navy sm:text-3xl md:text-4xl">
            Meet Our Leadership
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            A founding team combining operational expertise, financial acumen,
            and deep technical capability.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3 md:mt-14">
          {founders.map((founder, i) => (
            <article
              key={founder.name}
              className={`scroll-fade-in scroll-fade-in-delay-${i + 1
                } group relative rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-brand-gold/40 hover:shadow-lg sm:p-8`}
            >
              {/* Avatar placeholder with initials or Image */}
              {founder.image ? (
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ring-4 ring-brand-gold/20 transition-all group-hover:ring-brand-gold/50 overflow-hidden bg-brand-navy">
                  <img src={founder.image} alt={founder.name} className="h-full w-full object-cover" />
                </div>
              ) : (
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-navy text-2xl font-bold text-primary-foreground ring-4 ring-brand-gold/20 transition-all group-hover:ring-brand-gold/50">
                  {founder.initials}
                </div>
              )}

              <h3 className="mt-5 text-xl font-semibold text-foreground">
                {founder.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-brand-gold">
                {founder.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {founder.bio}
              </p>

              {/* LinkedIn icon */}
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`${founder.name} LinkedIn`}
                className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand-gold hover:text-brand-navy"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>



      {/* ════════════════════════════════════════════════════════
          CTA Strip
          ════════════════════════════════════════════════════════ */}
      <section className="container pb-14 sm:pb-16 md:pb-24">
        <div className="scroll-fade-in flex flex-col items-center gap-6 rounded-2xl bg-brand-navy px-6 py-12 text-center sm:px-10 sm:py-16 md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
              Ready to automate your operations?
            </h2>
            <p className="mt-2 max-w-lg text-sm text-primary-foreground/70 sm:text-base">
              Let's build an automation infrastructure tailored to your business
              — with measurable outcomes from week one.
            </p>
          </div>
          <Link
            to="/contact"
            className="btn-pop shrink-0 rounded-lg bg-brand-gold px-8 py-3.5 text-sm font-bold text-brand-navy shadow-lg"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
