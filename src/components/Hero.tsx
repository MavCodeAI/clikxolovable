import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import CycleText from "@/components/CycleText";

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
      {/* Enhanced Parallax Container with Larger Circles */}
      <div ref={parallaxRef} className="absolute inset-0 overflow-hidden">
        {/* Large Geometric Background Circles - DigitalOrks Style */}
        <div className="parallax-element absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-hero-accent/40 blur-3xl animate-float transition-transform duration-75 ease-out"></div>
        <div className="parallax-element absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full bg-hero-accent/25 blur-3xl animate-float transition-transform duration-75 ease-out" style={{ animationDelay: "3s" }}></div>
        <div className="parallax-element absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-muted/20 blur-2xl transition-transform duration-75 ease-out" style={{ animationDelay: "1.5s" }}></div>
        {/* Additional floating elements */}
        <div className="parallax-element absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-2xl transition-transform duration-75 ease-out" style={{ animationDelay: "2s" }}></div>
        <div className="parallax-element absolute bottom-1/4 left-1/3 w-[250px] h-[250px] rounded-full bg-orange-glow/8 blur-xl transition-transform duration-75 ease-out" style={{ animationDelay: "1s" }}></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            className="text-gray-text text-base md:text-lg mb-8 tracking-wide font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Digital marketing is evolving—are you staying ahead?
          </motion.p>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black font-heading text-white mb-6 leading-[1.1] uppercase tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            CLIKXO IS A PERFORMANCE
          </motion.h1>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black font-heading mb-12 leading-[1.1] uppercase tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <CycleText
              words={["DIGITAL MARKETING", "CONTENT CREATION", "SOCIAL MEDIA", "BRAND DESIGN", "SEO OPTIMIZATION", "WEB DEVELOPMENT"]}
              interval={2500}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black font-heading leading-[1.1] uppercase tracking-tighter"
            />{" "}
            <span className="text-white">AGENCY</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Button
               onClick={scrollToContact}
              size="lg"
              aria-label="Get started with ClikXo"
              className="group relative overflow-hidden bg-gradient-to-r from-white via-white to-gray-100 text-background hover:from-gray-50 hover:via-white hover:to-gray-100 px-8 sm:px-12 py-6 sm:py-8 text-base md:text-lg font-black font-heading uppercase tracking-wider shadow-2xl shadow-white/20 transition-all duration-500 border-4 border-white/30 hover:scale-110 hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] rounded-full hover:rotate-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
            >
              <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                Get Started Today
                <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-125" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-orange-glow/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
