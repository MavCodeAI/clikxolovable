import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Sparkles, Rocket, Zap, ArrowRight, Star } from "lucide-react";

const HeroClassic = () => {
  // Hero-specific structured data
  const heroStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ClikXo Digital Studio - Dubai",
    "description": "Dubai's premier digital studio offering web development, app development, digital marketing, and graphic design services",
    "url": "https://clikxo.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "ClikXo",
      "description": "Leading digital solutions provider for UAE businesses",
      "url": "https://clikxo.com",
      "logo": "https://clikxo.com/logo.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971-542738137",
        "contactType": "Customer Service",
        "areaServed": "AE",
        "availableLanguage": ["English", "Arabic"]
      },
      "sameAs": [
        "https://facebook.com/clikxo",
        "https://instagram.com/clikxo",
        "https://linkedin.com/company/clikxo"
      ]
    }
  };

  return (
    <>
      {/* Hero-specific structured data */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(heroStructuredData)}
        </script>
        <meta name="twitter:label1" content="Services" />
        <meta name="twitter:data1" content="Web Development, App Development, Digital Marketing, Graphic Design" />
        <meta name="twitter:label2" content="Location" />
        <meta name="twitter:data2" content="Dubai, UAE" />
      </Helmet>

      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-label="ClikXo Dubai - Premium Digital Services Hero"
        role="banner"
        itemScope
        itemType="https://schema.org/Organization"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
        </div>

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-orange-glow/10 rounded-full blur-3xl"
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Main content */}
        <div className="relative z-10 container mx-auto px-4 py-20" itemProp="mainEntity">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Dubai's Premier Digital Studio
              </span>
              <Star className="w-4 h-4 text-accent animate-pulse" />
            </motion.div>

            {/* Main heading with stunning gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
              itemProp="name"
            >
              <span className="block bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Transform Your
              </span>
              <span className="block mt-2 bg-gradient-to-r from-accent via-orange-glow to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Digital Vision
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              itemProp="description"
            >
              Elevate your brand with cutting-edge web development, stunning design,
              and powerful digital marketing solutions crafted for success in Dubai's
              competitive market
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
              role="navigation"
              aria-label="Call to Actions"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 text-lg px-8 py-6 h-auto"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group relative overflow-hidden border-2 hover:border-primary hover:bg-primary/5 backdrop-blur-sm transition-all duration-300 text-lg px-8 py-6 h-auto"
                asChild
              >
                <Link to="/portfolio" className="flex items-center gap-2">
                  <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  View Our Work
                </Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto"
              role="complementary"
              aria-label="Client trust indicators"
            >
              {[
                { icon: Rocket, number: "500+", label: "Projects Delivered" },
                { icon: Star, number: "4.9/5", label: "Client Rating" },
                { icon: Sparkles, number: "50+", label: "Happy Clients" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                  <div className="relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 group-hover:border-primary/50 transition-all">
                    <item.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:text-accent transition-colors" />
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {item.number}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-primary rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroClassic;
