import Navbar from "@/components/Navbar";
import Portfolio from "../components/Portfolio";
import Footer from "@/components/Footer";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
