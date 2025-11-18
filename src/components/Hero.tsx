import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PixelGridBackground from "@/components/PixelGridBackground";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Rocket, Zap, Cpu, ShieldCheck, Stars } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();
  const [currentWord, setCurrentWord] = useState(0);

  const powerWords = [
    { text: "BUILD", color: "from-primary via-orange-glow to-primary" },
    { text: "LAUNCH", color: "from-primary via-orange-glow to-primary" },
    { text: "SCALE", color: "from-primary via-orange-glow to-primary" },
    { text: "TRANSFORM", color: "from-primary via-orange-glow to-primary" },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % powerWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [powerWords.length]);
  const features = [
    { label: "Understand", Icon: Stars },
    { label: "Execute", Icon: Cpu },
    { label: "Deliver", Icon: Zap },
    { label: "Secure", Icon: ShieldCheck },
  ];

  

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-background via-background/90 to-background">
      <PixelGridBackground className="absolute inset-0" accent="primary" density={10} speed={0.5} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid items-center">
            <motion.div className="space-y-8 text-center" initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}}>
              <motion.div className="inline-flex items-center gap-2 px-5 py-2.5 bg-background/60 backdrop-blur rounded-full border border-border/40 shadow-lg" whileHover={{scale: 1.06}}>
                <Sparkles className="w-4 h-4 text-primary animate-pulse" aria-hidden="true" />
                <span className="text-sm font-bold text-foreground uppercase tracking-wider">#1 Digital Innovation Partner</span>
              </motion.div>

              <div className="space-y-4">
                <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter text-balance font-heading">
                  <span className="block text-foreground mb-2">LET'S</span>
                  <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${powerWords[currentWord].color} mb-2`}>
                    {powerWords[currentWord].text}
                  </span>
                  <span className="block text-foreground">YOUR BUSINESS</span>
                </motion.h1>

                <div className="mx-auto lg:mx-0 mt-3 h-1 w-32 sm:w-40 rounded-full bg-gradient-to-r from-primary via-orange-glow to-primary" />

                <motion.p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed max-w-3xl mx-auto lg:mx-0">
                  We design and ship <span className="text-primary font-bold">high‑performance products</span> — fast. From elegant websites to growth‑focused marketing, we help you build, launch and scale with confidence.
                </motion.p>
                <motion.ul className="flex flex-wrap items-center justify-center gap-2 pt-2" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.2, duration: 0.6}}>
                  {features.map(({ label, Icon }) => (
                    <motion.li key={label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-foreground text-sm font-semibold shadow-sm hover:shadow-md hover:border-primary/50 hover:bg-primary/15 transition-all" whileHover={{scale: 1.03}} whileTap={{scale: 0.98}}>
                      <Icon className="w-4 h-4 text-primary" />
                      <span>{label}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button onClick={scrollToServices} size="lg" className="group px-8 py-6 bg-gradient-to-r from-primary to-orange-glow text-white font-bold rounded-full shadow-2xl hover:scale-105 min-w-[220px] button-magnetic btn-glow" aria-label="Start your project">
                  <span className="flex items-center gap-2">Start Your Project <Rocket className="w-5 h-5 group-hover:translate-x-1" aria-hidden="true" /></span>
                </Button>
                <Button onClick={() => navigate('/portfolio')} size="lg" variant="outline" className="px-8 py-6 border-2 font-bold rounded-full min-w-[220px] button-magnetic" aria-label="View portfolio">
                  <span className="flex items-center gap-2">View Portfolio <ArrowRight className="w-5 h-5" aria-hidden="true" /></span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
