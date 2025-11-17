import { lazy, Suspense } from "react";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import SkipToContent from "@/components/SkipToContent";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { SpinnerFullScreen } from "@/components/ui/spinner";

// Lazy load components
const Navbar = lazy(() => import("@/components/Navbar"));
const Hero = lazy(() => import("@/components/Hero"));
const TrustedBrands = lazy(() => import("@/components/TrustedBrands"));
const Services = lazy(() => import("@/components/Services"));
const About = lazy(() => import("@/components/About"));
const Team = lazy(() => import("@/components/Team"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center bg-background/50">
    <div className="animate-pulse bg-muted/20 rounded-lg p-8 max-w-md mx-auto">
      <div className="h-4 bg-muted/40 rounded w-3/4 mx-auto mb-4"></div>
      <div className="h-3 bg-muted/40 rounded w-1/2 mx-auto"></div>
    </div>
  </div>
);

const Index = () => {
  return (
    <>
      <SEO />
      <StructuredData />
      <BreadcrumbSchema />
      <SkipToContent />
      <div className="min-h-screen bg-background">
        <Suspense fallback={<SpinnerFullScreen />}>
          <Navbar />
        </Suspense>
        
        <main id="main-content">
          <Suspense fallback={<SectionLoader />}>
            <Hero />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <TrustedBrands />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Services />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Team />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Portfolio />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Footer />
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default Index;
