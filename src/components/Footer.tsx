const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-secondary">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <path d="M6 23L13 10L18 18L26 8" stroke="hsl(var(--brand-navy))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 25H25" stroke="hsl(var(--brand-gold))" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            <span className="font-bold text-foreground">Zyvox Automations</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Purpose-built communication operations for modern dental practices.
          </p>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Zyvox Automations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};







export default Footer;
