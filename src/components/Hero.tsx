import { Button } from "@/components/ui/button";

import { useEffect, useRef } from "react";

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        // Apply parallax effect to background elements
        const elements = parallaxRef.current.querySelectorAll('.parallax-element');
        elements.forEach((element, index) => {
          const speed = (index + 1) * 0.1;
          (element as HTMLElement).style.transform = `translateY(${rate * speed}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-bg">
      {/* Parallax Container */}
      <div ref={parallaxRef} className="absolute inset-0 overflow-hidden">
        {/* Geometric Background Elements with Parallax */}
        <div className="parallax-element absolute top-20 -left-32 w-96 h-96 rounded-full bg-hero-accent/30 blur-3xl animate-float transition-transform duration-75 ease-out"></div>
        <div className="parallax-element absolute bottom-20 -right-32 w-96 h-96 rounded-full bg-hero-accent/20 blur-3xl animate-float transition-transform duration-75 ease-out" style={{ animationDelay: "3s" }}></div>
        <div className="parallax-element absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-primary/10 blur-2xl transition-transform duration-75 ease-out"></div>
        {/* Additional floating elements */}
        <div className="parallax-element absolute top-40 right-20 w-32 h-32 rounded-full bg-orange-glow/10 blur-xl transition-transform duration-75 ease-out" style={{ animationDelay: "1s" }}></div>
        <div className="parallax-element absolute bottom-40 left-20 w-48 h-48 rounded-full bg-primary/5 blur-2xl transition-transform duration-75 ease-out" style={{ animationDelay: "2s" }}></div>
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
