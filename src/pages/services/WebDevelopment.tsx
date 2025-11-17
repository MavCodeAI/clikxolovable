import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";

const WebDevelopment = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <SEO 
        title="Professional Web Development in Dubai | ClikXo Digital Agency"
        description="Dubai's top Web Development solutions tailored for UAE businesses. High-performance sites, modern stacks, and conversion-focused design."
        url="https://clikxo.com/services/web-development"
        image="https://clikxo.com/og-web-dev-dubai.jpg"
        alternateHreflangs={[{ hreflang: 'ar-AE', href: 'https://clikxo.com/ar/services/web-development' }]}
      />
      <h1 className="text-4xl md:text-5xl font-black text-balance">Dubai's Premier Web Development Services</h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
        We build fast, secure, and scalable websites for Dubai businesses. Our team delivers conversion-focused experiences using modern frameworks, SEO-first architectures, and mobile-first design. From corporate sites to complex platforms, we craft reliable products aligned with Dubai's competitive market and UAE compliance.
      </p>
      <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
        Recent wins include performance optimizations for retail brands in Business Bay and custom CMS builds for DIFC-based firms. We integrate analytics, accessibility, and multilingual content (including Arabic) to reach a wider audience across the Middle East.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Why ClikXo for Dubai Web Development</h2>
      <ul className="mt-4 list-disc pl-6 space-y-2 text-muted-foreground">
        <li>High-performance builds that improve Core Web Vitals</li>
        <li>Optimized for Dubai and UAE search intent and compliance</li>
        <li>SEO-ready content structures and clean internal linking</li>
        <li>Robust security, caching, and CDN strategies</li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold">Dubai FAQs</h2>
      <ul className="mt-4 space-y-3 text-muted-foreground">
        <li>What's the cost of web development in Dubai?</li>
        <li>How long does a corporate site project take?</li>
        <li>Do you support Arabic and English content?</li>
        <li>Can you migrate our current site to a modern stack?</li>
        <li>How do you improve site speed for Dubai-based audiences?</li>
      </ul>

      <div className="mt-10 text-sm text-muted-foreground">
        Recommended internal links: App Development, Digital Marketing, Dubai portfolio cases, UAE resources.
      </div>
    </div>
  );
};

export default WebDevelopment;
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {"@type": "Question", "name": "What's the cost of web development in Dubai?", "acceptedAnswer": {"@type": "Answer", "text": "Pricing depends on complexity and integrations. We provide transparent quotes tailored to Dubai market needs."}},
              {"@type": "Question", "name": "How long does a corporate site project take?", "acceptedAnswer": {"@type": "Answer", "text": "Typical timelines are 6–12 weeks, aligned with discovery, design, development, and QA phases."}},
              {"@type": "Question", "name": "Do you support Arabic and English content?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, bilingual content with RTL support is part of our standard offering."}},
              {"@type": "Question", "name": "Can you migrate our current site to a modern stack?", "acceptedAnswer": {"@type": "Answer", "text": "We handle migrations to modern frameworks with minimal downtime and improved performance."}},
              {"@type": "Question", "name": "How do you improve site speed for Dubai-based audiences?", "acceptedAnswer": {"@type": "Answer", "text": "We implement image optimization, caching, CDNs, and Core Web Vitals improvements."}}
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://clikxo.com/"},
              {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://clikxo.com/#services"},
              {"@type": "ListItem", "position": 3, "name": "Web Development", "item": "https://clikxo.com/services/web-development"}
            ]
          })}
        </script>
      </Helmet>