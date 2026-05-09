import { Linkedin, Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "About Us", to: "/about" },
];

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  `nav-link text-sm font-semibold transition-colors ${isActive ? "nav-link-active text-[#001F3F]" : "text-[#001F3F]/50 hover:text-[#001F3F]"}`;

const SiteShell = () => {
  const [open, setOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);
  const { pathname } = useLocation();

  // ── Scroll progress bar ───────────────────────────────────
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // ── Scroll to top on every route change ──────────────────
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  // ── Hide navbar on scroll down, show on scroll up ────────
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setNavHidden(y > lastScrollY.current && y > 100);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Scroll progress bar ───────────────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-[#D4AF37] origin-left pointer-events-none"
        style={{ scaleX }}
      />

      {/* ── Glassmorphism Navbar ──────────────────────────────── */}
      <motion.header
        className="sticky top-0 z-50 glass-nav"
        animate={{ y: navHidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}>
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 sm:px-8 md:h-20 relative">
          <NavLink to="/" className="flex items-center" onClick={() => setOpen(false)}>
            <div className="flex h-10 w-44 items-center justify-center rounded-md sm:h-12 sm:w-56 md:h-14 md:w-72">
              <img src="/images/logo.png" alt="Zyvox Automations" className="h-full w-full object-contain scale-[1.35] origin-center mix-blend-multiply" />
            </div>
          </NavLink>

          <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClasses}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <NavLink to="/contact" className="btn-primary-gold hidden rounded-xl px-5 py-2.5 text-sm font-semibold md:inline-flex">
            Contact Us
          </NavLink>

          <button className="absolute right-6 md:static md:hidden" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-[#001F3F]/5 glass-nav px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)} className={linkClasses}>
                  {link.label}
                </NavLink>
              ))}
              <NavLink to="/contact" onClick={() => setOpen(false)} className="btn-primary-gold mt-2 inline-flex justify-center rounded-xl px-4 py-2.5 text-sm font-semibold">
                Contact Us
              </NavLink>
            </div>
          </div>
        )}
      </motion.header>

      {/* ── Main Content ─────────────────────────────────────── */}
      <main className="cursor-default [&_a]:cursor-pointer [&_button]:cursor-pointer [&_input:not([type='checkbox']):not([type='radio'])]:cursor-text [&_textarea]:cursor-text [&_select]:cursor-pointer">
        <Outlet />
      </main>

      {/* ── Premium Footer ───────────────────────────────────── */}
      <footer className="border-t border-[#001F3F]/5 bg-[#F7E7CE] text-[#001F3F]">
        <div className="mx-auto max-w-[1440px] px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 text-center md:text-left lg:grid-cols-5 lg:gap-12">
            {/* Newsletter */}
            <div className="lg:col-span-2">
              <div className="mx-auto max-w-sm md:mx-0">
                <h4 className="text-sm font-bold text-[#001F3F] text-center md:text-left">Subscribe to news updates*</h4>
                <form className="mt-3 flex flex-col gap-2.5 text-center md:text-left" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    required
                    className="w-full rounded-md border border-[#001F3F]/30 bg-white/40 px-3 py-2 text-sm text-[#001F3F] placeholder-[#001F3F]/50 outline-none transition-colors focus:border-[#001F3F] focus:bg-transparent"
                  />
                  <p className="text-[10px] leading-tight text-[#001F3F]/60">
                    * By subscribing, you agree to our <NavLink to="/privacy" className="underline hover:text-[#001F3F]">Privacy Notice</NavLink>.
                  </p>
                  <button 
                    type="submit" 
                    className="mt-1 inline-flex w-fit items-center justify-center gap-2 rounded-md bg-[#001F3F] px-5 py-2 text-xs font-bold tracking-[0.1em] text-white transition-all hover:bg-[#001F3F]/80 active:scale-95 mx-auto md:mx-0 md:justify-start"
                  >
                    SUBSCRIBE →
                  </button>
                </form>
              </div>
            </div>

            {/* Explore */}
            <div>
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#001F3F]">Explore</h3>
              <ul className="mt-4 space-y-2 text-sm text-[#001F3F]/70">
                <li><NavLink to="/services" className="transition-colors hover:text-[#001F3F] hover:font-semibold">Services</NavLink></li>
                <li><NavLink to="/testimonials" className="transition-colors hover:text-[#001F3F] hover:font-semibold">Testimonials</NavLink></li>
                <li><NavLink to="/about" className="transition-colors hover:text-[#001F3F] hover:font-semibold">About Us</NavLink></li>
                <li><NavLink to="/contact" className="transition-colors hover:text-[#001F3F] hover:font-semibold">Contact Us</NavLink></li>
              </ul>
            </div>

            {/* Legal (Replacing Entity Details) */}
            <div>
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#001F3F]">Legal</h3>
              <ul className="mt-4 space-y-2 text-sm text-[#001F3F]/70">
                <li><NavLink to="/privacy" className="transition-colors hover:text-[#001F3F] hover:font-semibold">Privacy Policy</NavLink></li>
                <li><NavLink to="/terms" className="transition-colors hover:text-[#001F3F] hover:font-semibold">Terms of Service</NavLink></li>
                <li><NavLink to="/cookies" className="transition-colors hover:text-[#001F3F] hover:font-semibold">Cookie Policy</NavLink></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#001F3F]">Connect</h3>
              <div className="mt-4 inline-flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/zyvox-ai/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#001F3F] shadow-sm transition-all hover:bg-[#001F3F] hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="mailto:hello@zyvoxautomations.com"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#001F3F] shadow-sm transition-all hover:bg-[#001F3F] hover:text-white"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href="tel:+917078061233"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#001F3F] shadow-sm transition-all hover:bg-[#001F3F] hover:text-white"
                  aria-label="Phone"
                >
                  <Phone className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bg-[#EAD8C0] py-4">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-8 flex justify-center text-center">
            <span className="font-sans text-xs text-[#001F3F]/80">
              © {new Date().getFullYear()} Zyvox Automations. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteShell;