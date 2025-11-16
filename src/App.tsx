import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import RouteTransition from "./components/RouteTransition";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Team from "./pages/Team";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<RouteTransition><Index /></RouteTransition>} />
        <Route path="/about" element={<RouteTransition><About /></RouteTransition>} />
        <Route path="/team" element={<RouteTransition><Team /></RouteTransition>} />
        <Route path="/portfolio" element={<RouteTransition><Portfolio /></RouteTransition>} />
        <Route path="/contact" element={<RouteTransition><Contact /></RouteTransition>} />
        <Route path="/blog" element={<RouteTransition><Blog /></RouteTransition>} />
        <Route path="/privacy-policy" element={<RouteTransition><PrivacyPolicy /></RouteTransition>} />
        <Route path="/terms-of-service" element={<RouteTransition><TermsOfService /></RouteTransition>} />
        <Route path="/cookie-policy" element={<RouteTransition><CookiePolicy /></RouteTransition>} />
        <Route path="*" element={<RouteTransition><NotFound /></RouteTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
