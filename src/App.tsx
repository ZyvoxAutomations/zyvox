import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteShell from "./components/SiteShell.tsx";
import LoadingScreen from "./components/LoadingScreen.tsx";
import Home from "./pages/Home.tsx";
import Services from "./pages/Services.tsx";
import Industries from "./pages/Industries.tsx";
import About from "./pages/About.tsx";
import Founders from "./pages/Founders.tsx";
import Contact from "./pages/Contact.tsx";
import Testimonials from "./pages/testimonials/Testimonials.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence>
          {loading && (
            <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
          )}
        </AnimatePresence>
        <BrowserRouter>
          <Routes>
            <Route element={<SiteShell />}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/about" element={<About />} />
              <Route path="/founders" element={<Founders />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testimonials" element={<Testimonials />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
