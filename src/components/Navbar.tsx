import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Who We Are", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-sm border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M6 23L13 10L18 18L26 8" stroke="hsl(var(--brand-navy))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 25H25" stroke="hsl(var(--brand-gold))" strokeWidth="3" strokeLinecap="round"/>
          </svg>
          <span className="text-xl font-bold text-brand-navy">Zyvox Automations</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <a href="#cta" className="btn-pop hidden md:inline-flex items-center px-5 py-2.5 rounded-lg bg-brand-navy text-primary-foreground text-sm font-semibold">
          Book Strategy Call
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/60 backdrop-blur-sm px-4 pb-4">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground">
              {link.label}
            </a>
          ))}
          <a href="#cta" onClick={() => setOpen(false)} className="block mt-2 text-center px-5 py-2.5 rounded-lg bg-brand-navy text-primary-foreground text-sm font-semibold">
            Book Strategy Call
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
