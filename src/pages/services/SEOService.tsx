import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";

const SEOService = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <SEO 
        title="Professional SEO Services in Dubai | ClikXo Digital Agency"
        description="Dubai's top SEO services tailored for UAE businesses. Technical SEO, content, and local rankings."
        url="https://clikxo.com/services/seo"
        image="https://clikxo.com/og-seo-dubai.jpg"
        alternateHreflangs={[{ hreflang: 'ar-AE', href: 'https://clikxo.com/ar/services/seo' }]}
      />
      <h1 className="text-4xl md:text-5xl font-black text-balance">Best SEO Company in Dubai for UAE Businesses</h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
        We improve visibility and conversions for Dubai organizations through technical excellence, structured content, and intent-driven keyword strategies. Our approach aligns with local search behavior and competitive niches across the Emirates.
      </p>
      <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
        Case outcomes include #1 rankings for legal services and significant growth in qualified traffic for Dubai-based B2B companies.
      </p>

      <h2 className="mt-10 text-2xl font-bold">SEO Capabilities</h2>
      <ul className="mt-4 list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Technical audits and fixes</li>
        <li>On-page optimization and content strategy</li>
        <li>Local SEO for Dubai and UAE</li>
        <li>Analytics and reporting</li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold">Dubai FAQs</h2>
      <ul className="mt-4 space-y-3 text-muted-foreground">
        <li>What's the best SEO plan for Dubai startups?</li>
        <li>How soon can rankings improve?</li>
        <li>Do you manage Arabic SEO?</li>
        <li>How do you measure SEO ROI?</li>
        <li>Can you fix technical SEO issues on our site?</li>
      </ul>

      <div className="mt-10 text-sm text-muted-foreground">
        Recommended internal links: Web Development, Digital Marketing, Dubai portfolio cases, UAE resources.
      </div>
    </div>
  );
};

export default SEOService;
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {"@type": "Question", "name": "What's the best SEO plan for Dubai startups?", "acceptedAnswer": {"@type": "Answer", "text": "Focus on technical foundations, localized keywords, and intent-driven content."}},
              {"@type": "Question", "name": "How soon can rankings improve?", "acceptedAnswer": {"@type": "Answer", "text": "Expect early movement in weeks; sustainable growth typically 3–6 months."}},
              {"@type": "Question", "name": "Do you manage Arabic SEO?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, we optimize Arabic content with proper schema and localized terms."}},
              {"@type": "Question", "name": "How do you measure SEO ROI?", "acceptedAnswer": {"@type": "Answer", "text": "We track qualified traffic, conversions, and revenue attribution using GA4 and CRM data."}},
              {"@type": "Question", "name": "Can you fix technical SEO issues on our site?", "acceptedAnswer": {"@type": "Answer", "text": "We implement fixes for crawlability, structured data, page speed, and internal linking."}}
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
              {"@type": "ListItem", "position": 3, "name": "SEO Services", "item": "https://clikxo.com/services/seo"}
            ]
          })}
        </script>
      </Helmet>