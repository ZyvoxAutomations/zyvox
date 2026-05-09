import { usePageMeta } from "@/hooks/usePageMeta";

const sectors = [
  {
    name: "Dental Clinics",
    desc: "Improve patient inquiry handling, appointment conversion, and day-to-day communication continuity.",
    image: "/images/industry-dental.jpg",
  },
  {
    name: "Multi-Site Practices",
    desc: "Standardize communication quality across locations while preserving local process flexibility.",
    image: "/images/industry-multisite.jpg",
  },
  {
    name: "Professional Services",
    desc: "Create predictable intake and response standards for consultative, high-value client interactions.",
    image: "/images/industry-professional-services.jpg",
  },
];

const Industries = () => {
  usePageMeta({
    title: "Zyvox Automations | Industries",
    description: "See how Zyvox Automations supports dental clinics, multi-site practices, and professional services with tailored communication workflows.",
    path: "/industries",
  });

  return (
    <section className="container py-10 sm:py-12 md:py-20">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Industries</p>
      <h1 className="text-3xl font-bold text-brand-navy sm:text-4xl md:text-5xl">Solutions tailored by industry context</h1>
      <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:mt-5 sm:text-base">
        We partner with organizations where communication quality directly impacts trust, conversion, and long-term customer value.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {sectors.map((sector) => (
          <article key={sector.name} className="interactive-card rounded-2xl border border-border bg-card p-6 sm:p-7">
            <img src={sector.image} alt={sector.name} className="h-44 w-full rounded-xl object-cover" />
            <h2 className="mt-4 text-xl font-semibold sm:text-2xl">{sector.name}</h2>
            <p className="mt-4 text-sm text-muted-foreground">{sector.desc}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-4 rounded-2xl border border-border bg-secondary p-6 md:grid-cols-3 md:p-8">
        <div className="rounded-xl bg-background p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Focus area</p>
          <p className="mt-2 text-sm text-muted-foreground">First-response quality and intake consistency.</p>
        </div>
        <div className="rounded-xl bg-background p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Focus area</p>
          <p className="mt-2 text-sm text-muted-foreground">Process reliability across teams and locations.</p>
        </div>
        <div className="rounded-xl bg-background p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Focus area</p>
          <p className="mt-2 text-sm text-muted-foreground">Conversion-centered communication standards.</p>
        </div>
      </div>
    </section>
  );
};

export default Industries;
