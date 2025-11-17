import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";

const DigitalMarketing = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <SEO 
        title="Professional Digital Marketing in Dubai | ClikXo Digital Agency"
        description="Dubai's top Digital Marketing solutions tailored for UAE businesses. Performance campaigns and measurable growth."
        url="https://clikxo.com/services/digital-marketing"
        image="https://clikxo.com/og-dm-dubai.jpg"
        alternateHreflangs={[{ hreflang: 'ar-AE', href: 'https://clikxo.com/ar/services/digital-marketing' }]}
      />
      <h1 className="text-4xl md:text-5xl font-black text-balance">Dubai's Performance-Driven Digital Marketing</h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
        We run ROI-focused campaigns across search, social, and content for Dubai organizations. Our strategies align with local audience behavior, compliance, and Arabic/English content norms to maximize reach and conversions.
      </p>
      <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
        Successes include 23x engagement for food brands and top rankings for legal services in Dubai, achieved through intent-driven SEO and creative social content.
      </p>

      <h2 className="mt-10 text-2xl font-bold">What You Get</h2>
      <ul className="mt-4 list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Search and social campaigns with clear KPIs</li>
        <li>On-page SEO, technical fixes, and content calendars</li>
        <li>Arabic/English strategies tailored to Dubai audiences</li>
        <li>Conversion optimization with analytics insights</li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold">Dubai FAQs</h2>
      <ul className="mt-4 space-y-3 text-muted-foreground">
        <li>What's the best SEO strategy for Dubai businesses?</li>
        <li>Which platforms work best in the UAE?</li>
        <li>How fast can we see results?</li>
        <li>Do you manage bilingual content?</li>
        <li>How do you measure campaign ROI?</li>
      </ul>

      <div className="mt-10 text-sm text-muted-foreground">
        Recommended internal links: SEO Services, Web Development, Dubai portfolio cases, UAE resources.
      </div>
    </div>
  );
};

export default DigitalMarketing;
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {"@type": "Question", "name": "What's the best SEO strategy for Dubai businesses?", "acceptedAnswer": {"@type": "Answer", "text": "Prioritize local intent, technical health, and bilingual content aligned with UAE audience behavior."}},
              {"@type": "Question", "name": "Which platforms work best in the UAE?", "acceptedAnswer": {"@type": "Answer", "text": "Search + social (Meta, TikTok, LinkedIn) with tailored creatives deliver strong ROI in Dubai."}},
              {"@type": "Question", "name": "How fast can we see results?", "acceptedAnswer": {"@type": "Answer", "text": "Paid channels show impact in weeks; SEO/content typically 3–6 months depending on competition."}},
              {"@type": "Question", "name": "Do you manage bilingual content?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, we deliver Arabic/English content calendars and localization best practices."}},
              {"@type": "Question", "name": "How do you measure campaign ROI?", "acceptedAnswer": {"@type": "Answer", "text": "We set clear KPIs and track conversions with GA4 and platform analytics dashboards."}}
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
              {"@type": "ListItem", "position": 3, "name": "Digital Marketing", "item": "https://clikxo.com/services/digital-marketing"}
            ]
          })}
        </script>
      </Helmet>