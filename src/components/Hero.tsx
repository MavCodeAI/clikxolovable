import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();
  const [currentService, setCurrentService] = useState(0);
  const services = [
    "Web Development",
    "App Development",
    "Graphics Design",
    "Digital Marketing"
  ];

  // Mouse parallax values for subtle interactions
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations for micro-interactions
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Magnetic cursor effect components
  const MagneticButton = ({ children, onClick, className, variant = "default", ...props }: any) => {
    const [isHovered, setIsHovered] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 400, damping: 25 });
    const springY = useSpring(y, { stiffness: 400, damping: 25 });

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!isHovered) return;

      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      );

      const range = 150; // Magnetic range
      if (distance < range) {
        const pull = (range - distance) / range;
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        x.set(Math.cos(angle) * pull * 0.5 * 20);
        y.set(Math.sin(angle) * pull * 0.5 * 20);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        className="inline-block"
        style={{
          x: springX,
          y: springY,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        <Button
          onClick={onClick}
          className={className}
          variant={variant}
          {...props}
        >
          {children}
        </Button>
      </motion.div>
    );
  };

  // Service rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-hero-bg via-background to-hero-accent/20"
      style={{ zIndex: 1 }}
    >
      {/* Minimal Geometric Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {/* Primary geometric elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-primary/30 rounded-full"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-orange-glow/15 rounded-lg rotate-45"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [45, 135, 45],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Minimal floating particles */}
        <motion.div
          className="absolute top-1/6 left-1/3 w-2 h-2 bg-primary/50 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-2/3 right-1/6 w-1.5 h-1.5 bg-orange-glow/40 rounded-full"
          animate={{
            y: [0, -40, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-20 relative flex items-center min-h-screen" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto w-full">
          {/* Top Section - Badge & Subheading */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/15 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-white text-sm font-medium tracking-wide uppercase">
                Transform Your Digital Presence With Expert Solutions
              </span>
            </motion.div>
          </motion.div>

          {/* Middle Section - Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              className="space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {/* Primary Statement */}
              <div className="space-y-3">
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white uppercase tracking-tighter leading-[1.1] drop-shadow-sm"
                  style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.1)' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  WE CREATE
                </motion.h1>
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white uppercase tracking-tighter leading-[1.1] drop-shadow-sm"
                  style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.1)' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                  EXCEPTIONAL
                </motion.h1>
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white uppercase tracking-tighter leading-[1.1] drop-shadow-sm"
                  style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.1)' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                  DIGITAL{" "}
                  <span
                    className="bg-gradient-to-r from-primary to-orange-glow"
                    style={{
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'white',
                      filter: 'brightness(1.1)'
                    }}
                  >
                    EXPERIENCES
                  </span>
                </motion.h1>
              </div>

              {/* Professional Description */}
              <motion.p
                className="text-gray-text text-lg md:text-xl leading-relaxed font-medium max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
              >
                From stunning web experiences to mobile apps, creative designs, and strategic digital marketing — we bring your vision to life with cutting-edge technology and unparalleled expertise.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              >
                <MagneticButton
                  onClick={scrollToServices}
                  size="lg"
                  aria-label="Explore our services"
                  className="group relative overflow-hidden px-10 py-5 bg-gradient-to-r from-primary to-orange-glow text-white font-bold text-lg uppercase tracking-wider rounded-full shadow-2xl shadow-primary/30 hover:shadow-3xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 min-w-[200px]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3 drop-shadow-sm">
                    Get Started Today
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-primary to-orange-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={{}}
                  />
                </MagneticButton>

                <MagneticButton
                  onClick={() => navigate('/portfolio')}
                  size="lg"
                  variant="outline"
                  aria-label="View our work"
                  className="px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold text-lg uppercase tracking-wider rounded-full hover:bg-white/5 hover:border-white/60 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50 min-w-[200px] relative"
                >
                  <span className="relative z-10 flex items-center justify-center drop-shadow-sm hover:text-primary transition-colors duration-300"
                        style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.2)' }}>
                    View Our Work
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/0 hover:bg-white/5 rounded-full transition-colors duration-300"
                    initial={false}
                    animate={{}}
                  />
                </MagneticButton>
              </motion.div>
            </motion.div>

            {/* Right Column - Services Display */}
            <motion.div
              className="text-center lg:text-right relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              style={{ zIndex: 15 }}
            >
              <div className="relative">
                {/* Core Services Cycle */}
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                  <div className="relative h-40 md:h-48 lg:h-56 flex items-center justify-center" style={{ zIndex: 20 }}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentService}
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeInOut"
                        }}
                      >
                        <h2
                          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-heading tracking-tight leading-tight"
                          style={{
                            background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--orange-primary)), hsl(var(--orange-glow)))',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'white',
                            filter: 'brightness(1.2) contrast(1.1)',
                            textShadow: '0 0 30px hsl(var(--primary) / 0.3)',
                            fontWeight: 900,
                            letterSpacing: '-0.02em'
                          }}
                        >
                          {services[currentService]}
                        </h2>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Service Indicators */}
                <motion.div
                  className="flex items-center justify-center lg:justify-end gap-3 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                  {services.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentService
                          ? 'w-12 bg-gradient-to-r from-primary to-orange-glow'
                          : 'w-1.5 bg-white/30'
                      }`}
                      initial={false}
                      animate={{
                        width: index === currentService ? 48 : 6
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </motion.div>

                {/* Professional Tagline */}
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                >
                  <p className="text-white text-base font-medium tracking-wide uppercase"
                     style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.1)' }}>
                    Empowering Businesses Through Innovation
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onClick={() => scrollToServices()}
        whileHover={{ scale: 1.1 }}
        style={{ zIndex: 15 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-text text-sm font-medium tracking-wide"
                style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.1)' }}>Scroll to Explore</span>
          <div className="w-8 h-12 border-2 border-gray-300/70 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1 h-3 bg-primary rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
