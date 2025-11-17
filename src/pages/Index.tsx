import { lazy, Suspense, useEffect, useState } from "react";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import SkipToContent from "@/components/SkipToContent";
import { SpinnerFullScreen } from "@/components/ui/spinner";

// Lazy load components with priority loading for above-the-fold content
const Navbar = lazy(() => import("@/components/Navbar"));
const Hero = lazy(() => import("@/components/Hero"));
const TrustedBrands = lazy(() => import("@/components/TrustedBrands"));
const Services = lazy(() => import("@/components/Services"));
const About = lazy(() => import("@/components/About"));
const Team = lazy(() => import("@/components/Team"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionLoader = ({ id }: { id: string }) => (
  <div id={id} className="min-h-[50vh] flex items-center justify-center bg-background/50">
    <div className="animate-pulse bg-muted/20 rounded-lg p-8 max-w-md mx-auto">
      <div className="h-4 bg-muted/40 rounded w-3/4 mx-auto mb-4"></div>
      <div className="h-3 bg-muted/40 rounded w-1/2 mx-auto"></div>
    </div>
  </div>
);

// Above-the-fold components loader
const AboveFoldLoader = () => (
  <Suspense fallback={<SpinnerFullScreen />}>
    <Navbar />
    <Suspense fallback={<SectionLoader id="hero-section" />}>
      <Hero />
    </Suspense>
  </Suspense>
);

// Below-the-fold components with intersection observer loading
const BelowFoldContent = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { rootMargin: '100px' }
    );

    ['trusted-brands', 'services', 'about', 'team', 'portfolio', 'contact', 'footer'].forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Suspense fallback={<SectionLoader id="trusted-brands" />}>
        {visibleSections.has('trusted-brands') && <TrustedBrands />}
      </Suspense>

      <Suspense fallback={<SectionLoader id="services" />}>
        {visibleSections.has('services') && <Services />}
      </Suspense>

      <Suspense fallback={<SectionLoader id="about" />}>
        {visibleSections.has('about') && <About />}
      </Suspense>

      <Suspense fallback={<SectionLoader id="team" />}>
        {visibleSections.has('team') && <Team />}
      </Suspense>

      <Suspense fallback={<SectionLoader id="portfolio" />}>
        {visibleSections.has('portfolio') && <Portfolio />}
      </Suspense>

      <Suspense fallback={<SectionLoader id="contact" />}>
        {visibleSections.has('contact') && <Contact />}
      </Suspense>

      <Suspense fallback={<SectionLoader id="footer" />}>
        {visibleSections.has('footer') && <Footer />}
      </Suspense>
    </>
  );
};

const Index = () => {
  return (
    <>
      <SEO />
      <StructuredData />
      <BreadcrumbSchema />
      <SkipToContent />
      <div className="min-h-screen bg-background">
        <AboveFoldLoader />
        <main id="main-content">
          {/* Placeholder sections for intersection observer */}
          <div id="trusted-brands" className="min-h-[10vh]" />
          <div id="services" className="min-h-[10vh]" />
          <div id="about" className="min-h-[10vh]" />
          <div id="team" className="min-h-[10vh]" />
          <div id="portfolio" className="min-h-[10vh]" />
          <div id="contact" className="min-h-[10vh]" />
          <div id="footer" className="min-h-[10vh]" />

          <BelowFoldContent />
        </main>
      </div>
    </>
  );
};

export default Index;
