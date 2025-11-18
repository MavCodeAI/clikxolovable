import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-background to-primary/5 scroll-mt-20 md:scroll-mt-24" aria-label="Hero section">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" aria-hidden="true"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-glow/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} aria-hidden="true"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
            >
              <Star className="w-4 h-4 text-primary fill-current" />
              <span className="text-primary font-bold text-sm uppercase tracking-wider">
                Top Digital Agency in Dubai
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading text-background mb-6 uppercase tracking-tighter leading-[1.1]"
            >
              Transform Your
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="block mt-2"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--orange-glow)), hsl(var(--primary)))',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  filter: 'brightness(1.1)',
                  textShadow: '0 0 20px hsl(var(--primary) / 0.2)'
                }}
              >
                Digital Presence
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-gray-textDark text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Unlock your business potential with cutting-edge web development, mobile apps, and innovative digital marketing strategies. Join 500+ satisfied clients who've transformed their online presence with us.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-bold uppercase tracking-wider group">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary/30 hover:border-primary text-background hover:text-primary px-8 py-4 text-lg font-bold uppercase tracking-wider group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Watch Portfolio
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Placeholder for visual element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Placeholder for hero image/graphic - can be replaced with actual image */}
              <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-primary/20 via-orange-glow/10 to-primary/20 rounded-2xl flex items-center justify-center border-2 border-white/20 shadow-2xl backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary to-orange-glow rounded-full flex items-center justify-center shadow-lg">
                    <Star className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-background mb-2 uppercase tracking-tight">
                    Coming Soon
                  </h3>
                  <p className="text-gray-textDark font-medium">
                    Interactive Dashboard Preview
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
              >
                <span className="text-primary font-black text-2xl">+</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-glow/20 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
              >
                <span className="text-orange-glow font-black text-xl">£</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-background rounded-t-[50%] transform translate-y-12" aria-hidden="true"></div>
    </section>
  );
};

export default Hero;
