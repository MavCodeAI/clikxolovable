import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";

const GraphicDesign = () => {
  return (
    <>
    <div className="container mx-auto px-4 py-20">
      <SEO 
        title="Professional Graphic Design in Dubai | ClikXo Digital Agency"
        description="Dubai's top Graphic Design services tailored for UAE businesses. Branding, visuals, and conversion-led creatives."
        url="https://clikxo.com/services/graphic-design"
        image="https://clikxo.com/og-graphic-dubai.jpg"
        alternateHreflangs={[{ hreflang: 'ar-AE', href: 'https://clikxo.com/ar/services/graphic-design' }]}
      />
      <h1 className="text-4xl md:text-5xl font-black text-balance font-heading">Dubai's Creative Graphic Design Services</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-3xl">
        We craft visual identities and marketing materials that resonate with Dubai audiences. From logos and brand systems to sales collateral, our work increases recognition and conversion for UAE enterprises.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-3xl">
        Projects include rebrands for tech startups and premium visuals for hospitality brands across Dubai's key districts.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Capabilities</h2>
      <ul className="mt-4 list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Brand identity and guidelines</li>
        <li>Web and social media creatives</li>
        <li>Arabic/English typography and layout</li>
        <li>Sales decks and print materials</li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold">Dubai FAQs</h2>
      <ul className="mt-4 space-y-3 text-muted-foreground">
        <li>What's the typical cost for a brand identity in Dubai?</li>
        <li>Can you support bilingual designs?</li>
        <li>Do you offer ongoing design support?</li>
        <li>What timelines should we expect?</li>
        <li>Can you adapt designs for Middle East marketplaces?</li>
      </ul>

      <div className="mt-10 text-sm text-muted-foreground">
        Recommended internal links: Web Development, Digital Marketing, Dubai portfolio cases, UAE resources.
      </div>
    </div>
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {"@type": "Question", "name": "What's the typical cost for a brand identity in Dubai?", "acceptedAnswer": {"@type": "Answer", "text": "Pricing depends on scope—logo, guidelines, collateral. We provide transparent packages for UAE businesses."}},
            {"@type": "Question", "name": "Can you support bilingual designs?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, we deliver Arabic/English assets with RTL-aware layouts."}},
            {"@type": "Question", "name": "Do you offer ongoing design support?", "acceptedAnswer": {"@type": "Answer", "text": "We offer retainers for continuous design needs and campaign creatives."}},
            {"@type": "Question", "name": "What timelines should we expect?", "acceptedAnswer": {"@type": "Answer", "text": "Brand identity projects typically take 3–6 weeks; collateral timelines vary by deliverables."}},
            {"@type": "Question", "name": "Can you adapt designs for Middle East marketplaces?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, we tailor designs for popular local platforms and marketplaces."}}
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
            {"@type": "ListItem", "position": 3, "name": "Graphic Design", "item": "https://clikxo.com/services/graphic-design"}
          ]
        })}
      </script>
    </Helmet>
    </>
  );
};

export default GraphicDesign;