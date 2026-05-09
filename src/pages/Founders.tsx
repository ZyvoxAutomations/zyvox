import { usePageMeta } from "@/hooks/usePageMeta";

const founders = [
  {
    name: "Lokik Ganeriwal",
    role: "Co-Founder",
    image: "/images/lokik.jpg",
  },
  {
    name: "Vijayant Singh",
    role: "Co-Founder",
    image: "/images/vinnayat.jpg",
  },
  {
    name: "Kunwar Zaid",
    role: "Co-Founder",
    image: "/images/kunwar-zaid.jpg",
  },
];

const Founders = () => {
  usePageMeta({
    title: "Zyvox Automations | Founders",
    description: "Meet the founders of Zyvox Automations and explore the vision behind our business communication and workflow systems.",
    path: "/founders",
  });

  return (
    <section className="container py-10 sm:py-12 md:py-20">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Founders</p>
      <h1 className="text-3xl font-bold text-brand-navy sm:text-4xl md:text-5xl">Built by founders focused on execution and long-term value</h1>
      <p className="mt-4 max-w-3xl text-sm text-muted-foreground sm:text-base">
        Zyvox Automations is led by founders who believe strong operations and customer experience can become a durable business advantage.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {founders.map((founder) => (
          <article key={founder.name} className="interactive-card rounded-2xl border border-border bg-card p-6">
            {founder.image ? (
              <div className="flex h-52 items-center justify-center rounded-xl overflow-hidden bg-brand-navy">
                <img src={founder.image} alt={founder.name} className="h-full w-full object-cover" />
              </div>
            ) : (
              <div className="flex h-52 items-center justify-center rounded-xl border border-dashed border-border bg-secondary text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Add {founder.name} Image
              </div>
            )}
            <h2 className="mt-5 text-2xl font-semibold text-foreground">{founder.name}</h2>
            <p className="mt-1 text-sm font-medium text-brand-gold">{founder.role}</p>
            <div className="mt-4 rounded-lg bg-secondary p-4">
              <p className="text-sm text-muted-foreground">
                Add founder description, experience, and key achievements here.
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Founders' Vision</p>
        <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">A future where communication operations are precise, scalable, and human-centered</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-secondary p-4 text-sm text-muted-foreground">
            Build systems that keep customer trust high at every touchpoint.
          </div>
          <div className="rounded-xl bg-secondary p-4 text-sm text-muted-foreground">
            Help teams scale operations without sacrificing service quality.
          </div>
          <div className="rounded-xl bg-secondary p-4 text-sm text-muted-foreground">
            Deliver measurable outcomes that compound business growth over time.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
