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
        <meta name="twitter:data1" content="Web Development, App Development, Digital Marketing, Graphic Design" />
        <meta name="twitter:label2" content="Location" />
        <meta name="twitter:data2" content="Dubai, UAE" />
      </Helmet>

      <section
        id="hero"
        className="hero-section"
        aria-label="ClikXo Dubai - Premium Digital Services Hero"
        role="banner"
        itemScope
        itemType="https://schema.org/Organization"
      >
        {/* Optimized background - removed complex animations for better performance */}
        <div
          className="hero-background"
          role="presentation"
          aria-hidden="true"
        />

        {/* LCP Critical Image - Large Contentful Paint Element */}
        <div className="hero-lcp-image" role="presentation">
          <img
            src="/og-image.jpg"
            alt="ClikXo Studio - Dubai Digital Agency"
            className="hero-bg-image"
            width="1200"
            height="800"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.15,
              zIndex: 1,
              filter: 'blur(2px)',
              transform: 'scale(1.05)'
            }}
          />
        </div>

        {/* Main content container - optimized for mobile-first */}
        <div className="hero-content" itemProp="mainEntity">
          {/* High-conversion H1 optimized for Dubai business market - LCP Text Element */}
          <h1
            className="hero-title"
            itemProp="name"
            style={{
              background: 'none',
              color: 'hsl(var(--f))',
              WebkitBackgroundClip: 'unset',
              backgroundClip: 'unset'
            }}
          >
            Elevate Your Dubai Business with Expert Digital Solutions
          </h1>

          {/* Concise, benefit-focused subheading */}
          <p
            className="hero-subtitle"
            itemProp="description"
          >
            Leading Dubai web development, mobile app development, digital marketing, and graphic design agency.
            Drive growth for UAE businesses with our proven expertise and measurable results.
          </p>

          {/* Primary and secondary CTAs - mobile-optimized */}
          <div className="hero-ctas" role="navigation" aria-label="Call to Actions">
            <Button
              size="lg"
              className="hero-cta-primary"
              aria-label="Start your Dubai business transformation"
              asChild
            >
              <Link
                to="/contact"
                className="flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Get Free Consultation
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="hero-cta-secondary"
              aria-label="See Dubai business success stories"
              asChild
            >
              <Link
                to="/portfolio"
                className="flex items-center gap-2"
              >
                <Eye className="w-5 h-5" />
                View Our Work
              </Link>
            </Button>
          </div>

          {/* Key performance stats - Dubai-focused */}
          <div
            className="hero-stats"
            aria-label="ClikXo credibility measures"
            role="region"
          >
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              <span>200+ Dubai Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary fill-current" />
              <span>4.9/5 Client Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="w-5 h-5 text-primary" />
              <span>5-Day Project Start</span>
            </div>
          </div>
        </div>

        {/* Performance-optimized visual background - no heavy animations */}
        <div
          className="hero-visual-bg"
          aria-hidden="true"
          role="presentation"
        >
          {/* Optimized: Removed lazy loading and complex animations */}
          <PixelGridBackground
            className="absolute inset-0"
            accent="primary"
            density={8}
          />
        </div>
      </section>
    </>
  );
};

export default HeroClassic;
