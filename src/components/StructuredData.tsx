import { Helmet } from "react-helmet-async";

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "DigitalMarketingAgency",
    "name": "ClikXo Studio",
    "description": "Performance-driven digital marketing agency helping businesses grow",
    "url": "https://clikxo.com",
    "logo": "https://clikxo.com/logo.png",
    "telephone": "+971-443186",
    "email": "hello@clikxo.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AE"
    },
    "sameAs": [
      "https://facebook.com/clikxo",
      "https://twitter.com/clikxo",
      "https://instagram.com/clikxo",
      "https://linkedin.com/company/clikxo"
    ],
    "priceRange": "$$"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Marketing",
    "provider": {
      "@type": "Organization",
      "name": "ClikXo Studio"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
