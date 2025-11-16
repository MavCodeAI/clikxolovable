import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [currentService, setCurrentService] = useState(0);
  const services = [
    "Web Development",
    "App Development",
    "Graphics Design",
    "Digital Marketing"
  ];

  // Mouse parallax values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations for parallax
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  // Transform values for different depths
  const xBg1 = useTransform(smoothX, [0, window?.innerWidth || 1920], [-10, 10]);
  const yBg1 = useTransform(smoothY, [0, window?.innerHeight || 1080], [-10, 10]);

  const xBg2 = useTransform(smoothX, [0, window?.innerWidth || 1920], [15, -15]);
  const yBg2 = useTransform(smoothY, [0, window?.innerHeight || 1080], [15, -15]);

  const xBg3 = useTransform(smoothX, [0, window?.innerWidth || 1920], [-5, 5]);
  const yBg3 = useTransform(smoothY, [0, window?.innerHeight || 1080], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-bg"
    >
      {/* Parallax Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large depth shape - back */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-hero-accent/40 rounded-full blur-3xl animate-float"
          style={{
            x: xBg1,
            y: yBg1,
          }}
        />

        {/* Medium depth shape - middle */}
        <motion.div
          className="absolute top-1/2 right-1/4 w-80 h-80 bg-orange-primary/20 rounded-full blur-2xl animate-float"
          style={{
            x: xBg2,
            y: yBg2,
            animationDelay: "1s"
          }}
        />

        {/* Small depth shape - front */}
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-orange-glow/25 rounded-full blur-xl animate-float"
          style={{
            x: xBg3,
            y: yBg3,
            animationDelay: "2s"
          }}
        />

        {/* Additional geometric shapes */}
        <motion.div
          className="absolute top-1/6 right-1/6 w-24 h-24 bg-primary/30 rounded-lg blur-lg"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            x: xBg1,
            y: yBg2,
          }}
        />

        <motion.div
          className="absolute bottom-1/6 left-1/6 w-16 h-16 bg-orange-dim/20 rounded-full blur-md"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            x: xBg2,
            y: yBg1,
          }}
        />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero Subheading */}
          <motion.p
            className="text-gray-text text-lg md:text-xl mb-6 font-medium tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Transform Your Digital Presence With Expert Solutions
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-heading text-white mb-8 leading-[0.9] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            CREATIVE
          </motion.h1>

          {/* Services Cycling Text */}
          <motion.div
            className="h-20 md:h-24 lg:h-28 flex items-center justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentService}
                  className="absolute inset-0 bg-gradient-to-r from-primary via-orange-primary to-orange-glow bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-heading tracking-tight"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.4, 0.0, 0.2, 1]
                  }}
                >
                  {services[currentService]}
                </motion.span>
              </AnimatePresence>
              {/* Placeholder to maintain height */}
              <div className="invisible text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black">
                Web Development
              </div>
            </div>
          </motion.div>

          {/* Secondary Heading */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 leading-snug"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Empowering Businesses Through
            <span className="bg-gradient-to-r from-primary to-orange-glow bg-clip-text text-transparent"> Innovation</span>
          </motion.h2>

          {/* Services Tagline */}
          <motion.p
            className="text-gray-text text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            From stunning web experiences to mobile apps, creative designs, and strategic digital marketing —
            we bring your vision to life with cutting-edge technology and unparalleled expertise.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <Button
              onClick={scrollToServices}
              size="lg"
              aria-label="Explore our services"
              className="group relative overflow-hidden px-8 py-4 md:px-12 md:py-6 text-lg md:text-xl font-bold uppercase tracking-wider rounded-full border-2 border-transparent bg-gradient-to-r from-primary via-orange-primary to-orange-glow text-white shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get Started Today
                <motion.svg
                  className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-primary via-orange-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
                animate={{}}
              />
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%]"
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
            </Button>

            <Button
              onClick={() => navigate('/portfolio')}
              size="lg"
              aria-label="Learn more about our work"
              className="px-8 py-4 md:px-12 md:py-6 text-lg md:text-xl font-bold uppercase tracking-wider rounded-full border-2 border-primary/50 text-white bg-gradient-to-r from-orange-primary/20 to-orange-glow/20 hover:from-primary hover:to-orange-glow hover:border-primary hover:shadow-xl hover:shadow-primary/25 transition-all duration-500 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
            >
              View Our Work
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
