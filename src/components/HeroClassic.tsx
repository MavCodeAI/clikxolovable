import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FileText, Eye, Target, Star, Rocket } from "lucide-react";

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
        {/* Simple background */}
        <div
          className="hero-background"
          role="presentation"
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%)',
            zIndex: 1
          }}
        />

        {/* Main content container - optimized for mobile-first */}
        <div className="hero-content" itemProp="mainEntity">
          {/* High-conversion H1 optimized for Dubai business market - LCP Text Element */}
          <h1
            className="hero-title"
            itemProp="name"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--orange-glow)))',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Streamline your digital experience
          </h1>

          {/* Concise, benefit-focused subheading */}
          <p
            className="hero-subtitle"
            itemProp="description"
          >
            Experience clarity in every interaction with our intuitive platform designed for the modern digital landscape.
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


      </section>
    </>
  );
};

export default HeroClassic;
