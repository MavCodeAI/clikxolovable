import Navbar from "@/components/Navbar";
import Portfolio from "../components/Portfolio";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Helmet } from "react-helmet-async";

const PortfolioPage = () => {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "ClikXo Studio Portfolio",
    "description": "Explore our portfolio of successful web development, app development, and digital marketing projects.",
    "url": "https://clikxo.com/portfolio",
    "about": {
      "@type": "CreativeWork",
      "name": "Digital Marketing and Web Development Projects"
    }
  };

  return (
    <>
      <SEO 
        title="Portfolio - Our Work"
        description="Explore ClikXo Studio's portfolio of successful web development, app development, graphics design, and digital marketing projects."
        url="https://clikxo.com/portfolio"
      />
      <BreadcrumbSchema />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(portfolioSchema)}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Portfolio />
        <Footer />
      </div>
    </>
  );
};

export default PortfolioPage;
