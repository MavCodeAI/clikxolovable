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
const AIVideoGenerator = lazy(() => import("./pages/AIVideoGenerator"));
const NotFound = lazy(() => import("./pages/NotFound"));
const WebDevService = lazy(() => import("./pages/services/WebDevelopment"));
const AppDevService = lazy(() => import("./pages/services/AppDevelopment"));
const DigitalMarketingService = lazy(() => import("./pages/services/DigitalMarketing"));
const GraphicDesignService = lazy(() => import("./pages/services/GraphicDesign"));
const SEOService = lazy(() => import("./pages/services/SEOService"));

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
          <Route path="/ai-video-generator" element={<RouteTransition><AIVideoGenerator /></RouteTransition>} />
          <Route path="/privacy-policy" element={<RouteTransition><PrivacyPolicy /></RouteTransition>} />
          <Route path="/terms-of-service" element={<RouteTransition><TermsOfService /></RouteTransition>} />
          <Route path="/cookie-policy" element={<RouteTransition><CookiePolicy /></RouteTransition>} />
          <Route path="/services/web-development" element={<RouteTransition><WebDevService /></RouteTransition>} />
          <Route path="/services/app-development" element={<RouteTransition><AppDevService /></RouteTransition>} />
          <Route path="/services/digital-marketing" element={<RouteTransition><DigitalMarketingService /></RouteTransition>} />
          <Route path="/services/graphic-design" element={<RouteTransition><GraphicDesignService /></RouteTransition>} />
          <Route path="/services/seo" element={<RouteTransition><SEOService /></RouteTransition>} />
          <Route path="*" element={<RouteTransition><NotFound /></RouteTransition>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes (formerly cacheTime)
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => (
  <HelmetProvider>
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
  </HelmetProvider>
);

export default App;
