import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PixelGridBackground from "@/components/PixelGridBackground";
import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { FileText, Eye, Target, Star, Rocket } from "lucide-react";

// Lazy load background component for performance
const LazyPixelGridBackground = lazy(() => import("@/components/PixelGridBackground"));

const HeroClassic = () => {
  // Hero-specific structured data
  const heroStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ClikXo Digital Studio - Dubai",
    "description": "Dubai's premier digital studio offering web development, app development, digital marketing, and graphic design services",
    "url": "https://clikxo.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "ClikXo",
      "description": "Leading digital solutions provider for UAE businesses",
      "url": "https://clikxo.com",
      "logo": "https://clikxo.com/logo.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971-542738137",
        "contactType": "Customer Service",
        "areaServed": "AE",
        "availableLanguage": ["English", "Arabic"]
      },
      "sameAs": [
        "https://facebook.com/clikxo",
        "https://instagram.com/clikxo",
        "https://linkedin.com/company/clikxo"
      ]
    }
  };

  return (
    <>
      {/* Hero-specific structured data */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(heroStructuredData)}
        </script>
        {/* Additional meta tags for hero content */}
        <meta name="twitter:label1" content="Services" />
        <meta name="twitter:data1" content="Web & App Development, Digital Marketing" />
        <meta name="twitter:label2" content="Location" />
        <meta name="twitter:data2" content="Dubai, UAE" />
      </Helmet>

      <section
        id="hero"
        className="hero-section"
        aria-label="Dubai's Leading Digital Studio Hero Section"
        role="banner"
        itemScope
        itemType="https://schema.org/Organization"
      >
        {/* Enhanced background with better accessibility */}
        <div
          className="hero-background"
          role="presentation"
        />

        {/* Main content container with improved semantics */}
        <div className="hero-content smooth-fade-in" itemProp="mainEntity">
          {/* Primary headline with enhanced accessibility */}
          <h1
            className="hero-title gradient-text animate-gradient animate-fade-in-up"
            itemProp="name"
          >
            <span className="sr-only">ClikXo - </span>
            REVOLUTIONIZE Your Dubai Business with Leading Digital Innovation
          </h1>

          {/* Enhanced subtitle with better structure */}
          <p
            className="hero-subtitle animate-fade-in-up animate-delay-200 glow-text"
            itemProp="description"
          >
            Experience unmatched growth through expert{" "}
            <span className="font-semibold text-primary">web development</span>, custom{" "}
            <span className="font-semibold text-primary">mobile apps</span>, performance-driven{" "}
            <span className="font-semibold text-primary">digital marketing</span>, and premium{" "}
            <span className="font-semibold text-primary">graphic design</span>. Engineered for Dubai's elite brands demanding measurable results and rapid ROI.
          </p>

          {/* Primary actions with enhanced accessibility */}
          <nav
            className="hero-ctas animate-fade-in-up animate-delay-300"
            aria-label="Primary Call-to-Actions"
            role="navigation"
          >
            <Button
              size="lg"
              className="px-8 shadow-lg hover:shadow-xl hover-lift btn-glow animate-fade-in-up animate-delay-400 focus-ring"
              aria-label="Get started with a personalized quote today"
              asChild
            >
              <Link
                to="/contact"
                aria-describedby="cta-primary-desc"
                className="flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Get a Quote
              </Link>
            </Button>
            <span id="cta-primary-desc" className="sr-only">
              Contact us for a free consultation
            </span>

            <Button
              variant="outline"
              size="lg"
              className="px-8 hover-lift btn-glow animate-fade-in-up animate-delay-500 focus-ring"
              aria-label="Explore our previous work and projects"
              asChild
            >
              <Link
                to="/portfolio"
                aria-describedby="cta-secondary-desc"
                className="flex items-center gap-2"
              >
                <Eye className="w-5 h-5" />
                View Portfolio
              </Link>
            </Button>
            <span id="cta-secondary-desc" className="sr-only">
              See our successful digital projects
            </span>
          </nav>

          {/* Trust indicators with enhanced semantics */}
          <div
            className="hero-stats animate-fade-in-up animate-delay-700"
            aria-label="Trust and credibility indicators"
            role="region"
          >
            <ul className="sr-only" aria-hidden="true">
              <li>Over 150 successful UAE projects completed</li>
              <li>4.9 out of 5 star client rating</li>
              <li>Fast 7-day project kickoff process</li>
            </ul>

            <div aria-live="polite" aria-atomic="true">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                <span className="animate-slide-in-left animate-delay-100 hover-glow">
                  150+ UAE projects
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary fill-current" />
                <span className="animate-slide-in-left animate-delay-300 hover-glow">
                  4.9/5 rating
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-primary" />
                <span className="animate-slide-in-left animate-delay-500 hover-glow">
                  7-day kickoff
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced visual elements with accessibility */}
        <aside
          className="hero-visual"
          aria-hidden="true"
          role="presentation"
        >
          <Suspense fallback={<div className="absolute inset-0 bg-primary/5 animate-pulse" />}>
            <PixelGridBackground className="absolute inset-0" accent="primary" density={12} speed={0.6} />
          </Suspense>
          <div className="accent-float" aria-hidden="true" />
        </aside>

        {/* Performance optimization - preload critical assets */}
        <link rel="prefetch" href="/contact" />
        <link rel="prefetch" href="/portfolio" />
      </section>
    </>
  );
};

export default HeroClassic;
