import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-bg">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-hero-accent/30 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 -right-32 w-96 h-96 rounded-full bg-hero-accent/20 blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-primary/10 blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <p className="text-muted-foreground text-lg mb-6">
            Digital marketing is evolving—are you staying ahead?
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            CLIKXO IS A PERFORMANCE
          </h1>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="text-primary">DIGITAL MARKETING</span>{" "}
            <span className="text-foreground">AGENCY</span>
          </h2>

          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6 text-lg font-semibold"
          >
            Request a Proposal
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
