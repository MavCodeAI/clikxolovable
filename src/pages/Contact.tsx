import Navbar from "@/components/Navbar";
import Contact from "../components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact ClikXo Studio",
    "description": "Get in touch with ClikXo Studio for digital marketing, web development, and design services.",
    "url": "https://clikxo.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "ClikXo Studio",
      "telephone": "+971-443186",
      "email": "hello@clikxo.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AE"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us"
        description="Contact ClikXo Studio for professional web development, graphics design, and digital marketing services in Dubai, UAE."
        url="https://clikxo.com/contact"
      />
      <BreadcrumbSchema />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;
