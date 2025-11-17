import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBrands from "@/components/TrustedBrands";
import Services from "@/components/Services";
import About from "@/components/About";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import SkipToContent from "@/components/SkipToContent";

const Index = () => {
  return (
    <>
      <SEO />
      <StructuredData />
      <SkipToContent />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main id="main-content">
          <Hero />
          <TrustedBrands />
          <Services />
          <About />
          <Team />
          <Testimonials />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
