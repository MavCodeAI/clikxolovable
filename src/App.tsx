import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import RouteTransition from "./components/RouteTransition";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorTest from "./components/ErrorTest";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Blog = lazy(() => import("./pages/Blog"));
const About = lazy(() => import("./pages/About"));
const Team = lazy(() => import("./pages/Team"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback component
import { SpinnerFullScreen } from "@/components/ui/spinner";

const PageLoader = () => <SpinnerFullScreen />;

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
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
      </Suspense>
    </AnimatePresence>
  );
};

const queryClient = new QueryClient();

const App = () => {
  const isDevelopment = import.meta.env.DEV;

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <AnimatedRoutes />
              </BrowserRouter>
              {isDevelopment && <ErrorTest />}
            </TooltipProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
