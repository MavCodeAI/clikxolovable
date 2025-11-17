import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";

const AppDevelopment = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <SEO 
        title="Professional App Development in Dubai | ClikXo Digital Agency"
        description="Dubai's top App Development solutions tailored for UAE businesses. Native, cross-platform, and secure mobile apps."
        url="https://clikxo.com/services/app-development"
        image="https://clikxo.com/og-app-dev-dubai.jpg"
        alternateHreflangs={[{ hreflang: 'ar-AE', href: 'https://clikxo.com/ar/services/app-development' }]}
      />
      <h1 className="text-4xl md:text-5xl font-black text-balance font-heading">Dubai's Premier Mobile App Development</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-3xl">
        We design and build mobile apps loved by Dubai users. Whether native iOS/Android or cross-platform, we focus on secure authentication, intuitive UX, and performance that drives retention. Our builds meet regional standards and scale for high-traffic UAE audiences.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-3xl">
        From fintech to retail, we've delivered measurable outcomes including faster onboarding and improved app store ratings for Dubai-based enterprises.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Differentiators</h2>
      <ul className="mt-4 list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Secure builds with modern auth and encryption</li>
        <li>Optimized for battery life and network conditions</li>
        <li>Arabic/English support and RTL-friendly layouts</li>
        <li>Analytics and growth loops baked in</li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold">Dubai FAQs</h2>
      <ul className="mt-4 space-y-3 text-muted-foreground">
        <li>What's the cost of app development in Dubai?</li>
        <li>Do you build native or cross-platform apps?</li>
        <li>How do you ensure app security?</li>
        <li>Can you integrate payment gateways popular in UAE?</li>
        <li>What is the typical timeline and milestones?</li>
      </ul>

      <div className="mt-10 text-sm text-muted-foreground">
        Recommended internal links: Web Development, Digital Marketing, Dubai portfolio cases, UAE resources.
      </div>
    </div>
  );
};

export default AppDevelopment;
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {"@type": "Question", "name": "What's the cost of app development in Dubai?", "acceptedAnswer": {"@type": "Answer", "text": "Costs vary by scope and platform. We provide fixed and milestone-based pricing aligned with UAE market standards."}},
              {"@type": "Question", "name": "Do you build native or cross-platform apps?", "acceptedAnswer": {"@type": "Answer", "text": "We support both native (iOS/Android) and cross-platform builds depending on performance and budget requirements."}},
              {"@type": "Question", "name": "How do you ensure app security?", "acceptedAnswer": {"@type": "Answer", "text": "We implement secure auth, encryption-at-rest/in-transit, and follow best practices for OWASP Mobile security."}},
              {"@type": "Question", "name": "Can you integrate payment gateways popular in UAE?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, we integrate popular UAE gateways and comply with local regulations."}},
              {"@type": "Question", "name": "What is the typical timeline and milestones?", "acceptedAnswer": {"@type": "Answer", "text": "Most projects run 8–16 weeks with discovery, design, build, testing, and launch phases."}}
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
              {"@type": "ListItem", "position": 3, "name": "App Development", "item": "https://clikxo.com/services/app-development"}
            ]
          })}
        </script>
      </Helmet>
import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";

const AppDevelopment = () => {
  return (
    <>
    <div className="container mx-auto px-4 py-16">
      <SEO 
        title="Professional App Development in Dubai | ClikXo Digital Agency"
        description="Dubai's top App Development solutions tailored for UAE businesses. Native, cross-platform, and secure mobile apps."
        url="https://clikxo.com/services/app-development"
        image="https://clikxo.com/og-app-dev-dubai.jpg"
        alternateHreflangs={[{ hreflang: 'ar-AE', href: 'https://clikxo.com/ar/services/app-development' }]}
      />
      <h1 className="text-4xl md:text-5xl font-black text-balance">Dubai's Premier Mobile App Development</h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
        We design and build mobile apps loved by Dubai users. Whether native iOS/Android or cross-platform, we focus on secure authentication, intuitive UX, and performance that drives retention. Our builds meet regional standards and scale for high-traffic UAE audiences.
      </p>
      <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
        From fintech to retail, we've delivered measurable outcomes including faster onboarding and improved app store ratings for Dubai-based enterprises.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Differentiators</h2>
      <ul className="mt-4 list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Secure builds with modern auth and encryption</li>
        <li>Optimized for battery life and network conditions</li>
        <li>Arabic/English support and RTL-friendly layouts</li>
        <li>Analytics and growth loops baked in</li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold">Dubai FAQs</h2>
      <ul className="mt-4 space-y-3 text-muted-foreground">
        <li>What's the cost of app development in Dubai?</li>
        <li>Do you build native or cross-platform apps?</li>
        <li>How do you ensure app security?</li>
        <li>Can you integrate payment gateways popular in UAE?</li>
        <li>What is the typical timeline and milestones?</li>
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
            {"@type": "Question", "name": "What's the cost of app development in Dubai?", "acceptedAnswer": {"@type": "Answer", "text": "Costs vary by scope and platform. We provide fixed and milestone-based pricing aligned with UAE market standards."}},
            {"@type": "Question", "name": "Do you build native or cross-platform apps?", "acceptedAnswer": {"@type": "Answer", "text": "We support both native (iOS/Android) and cross-platform builds depending on performance and budget requirements."}},
            {"@type": "Question", "name": "How do you ensure app security?", "acceptedAnswer": {"@type": "Answer", "text": "We implement secure auth, encryption-at-rest/in-transit, and follow best practices for OWASP Mobile security."}},
            {"@type": "Question", "name": "Can you integrate payment gateways popular in UAE?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, we integrate popular UAE gateways and comply with local regulations."}},
            {"@type": "Question", "name": "What is the typical timeline and milestones?", "acceptedAnswer": {"@type": "Answer", "text": "Most projects run 8–16 weeks with discovery, design, build, testing, and launch phases."}}
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
            {"@type": "ListItem", "position": 3, "name": "App Development", "item": "https://clikxo.com/services/app-development"}
          ]
        })}
      </script>
    </Helmet>
    </>
  );
};

export default AppDevelopment;