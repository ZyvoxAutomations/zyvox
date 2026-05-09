import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-surface px-6">
      <div className="max-w-lg rounded-2xl border border-border bg-card p-10 text-center shadow-xl">
        <h1 className="mb-4 text-5xl font-bold text-brand-navy">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">The page you are looking for does not exist.</p>
        <a href="/" className="inline-flex rounded-lg bg-brand-navy px-5 py-2.5 text-sm font-semibold text-primary-foreground">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
