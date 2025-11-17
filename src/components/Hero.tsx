import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, Zap, Target, Rocket, TrendingUp } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();
  const [currentWord, setCurrentWord] = useState(0);
  const [currentStat, setCurrentStat] = useState(0);
  
  const powerWords = [
    { text: "INNOVATE", color: "from-primary to-blue-400" },
    { text: "DOMINATE", color: "from-orange-glow to-red-400" },
    { text: "TRANSFORM", color: "from-primary to-purple-400" },
    { text: "ACCELERATE", color: "from-orange-glow to-yellow-400" }
  ];

  const stats = [
    { number: "150+", label: "Projects Delivered", icon: Rocket },
    { number: "98%", label: "Client Satisfaction", icon: Target },
    { number: "5x", label: "Average ROI", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Zap }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % powerWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [powerWords.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-orange-glow/10">
      {/* Enhanced Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30" aria-hidden="true">
        <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.15) 2px, transparent 2px), linear-gradient(90deg, hsl(var(--primary) / 0.15) 2px, transparent 2px)', backgroundSize: '60px 60px'}} />
      </div>

      {/* Enhanced Animated Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-3xl" animate={{scale: [1, 1.3, 1], opacity: [0.4, 0.6, 0.4], x: [0, 50, 0]}} transition={{duration: 8, repeat: Infinity, ease: "easeInOut"}} />
        <motion.div className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-orange-glow/30 to-transparent blur-3xl" animate={{scale: [1, 1.4, 1], opacity: [0.4, 0.7, 0.4], y: [0, -50, 0]}} transition={{duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2}} />
        <motion.div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 via-orange-glow/20 to-transparent blur-3xl" animate={{rotate: [0, 360], scale: [1, 1.2, 1]}} transition={{duration: 15, repeat: Infinity, ease: "linear"}} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div className="space-y-8 text-center lg:text-left" initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}}>
              <motion.div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/30 shadow-lg animated-border" whileHover={{scale: 1.06}}>
                <Sparkles className="w-4 h-4 text-primary animate-pulse" aria-hidden="true" />
                <span className="text-sm font-bold text-foreground uppercase tracking-wider">#1 Digital Innovation Partner</span>
              </motion.div>

              <div className="space-y-4">
                <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                  <span className="block text-foreground mb-2">LET'S</span>
                  <AnimatePresence mode="wait">
                    <motion.span key={currentWord} className={`block text-transparent bg-clip-text bg-gradient-to-r ${powerWords[currentWord].color} mb-2 animate-gradient glow-text`} style={{ backgroundSize: '200% 200%' }} initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -20}} transition={{duration: 0.5}}>
                      {powerWords[currentWord].text}
                    </motion.span>
                  </AnimatePresence>
                  <span className="block text-foreground">YOUR BUSINESS</span>
                </motion.h1>

                <div className="mx-auto lg:mx-0 mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-primary to-orange-glow" />

                <motion.p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  We craft <span className="text-primary font-bold">game-changing digital solutions</span> that drive real results. From stunning websites to powerful marketing strategies — we turn your vision into reality.
                </motion.p>
              </div>

              <motion.div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Button onClick={scrollToServices} size="lg" className="group px-8 py-6 bg-gradient-to-r from-primary to-orange-glow text-white font-bold uppercase rounded-full shadow-2xl hover:scale-105 min-w-[220px] button-magnetic btn-glow" aria-label="Start your project">
                  <span className="flex items-center gap-2">Start Your Project <Rocket className="w-5 h-5 group-hover:translate-x-1" aria-hidden="true" /></span>
                </Button>
                <Button onClick={() => navigate('/portfolio')} size="lg" variant="outline" className="px-8 py-6 border-2 font-bold uppercase rounded-full min-w-[220px] button-magnetic" aria-label="View portfolio">
                  <span className="flex items-center gap-2">View Portfolio <ArrowRight className="w-5 h-5" aria-hidden="true" /></span>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div className="relative" initial={{opacity: 0, x: 40}} animate={{opacity: 1, x: 0}} transition={{duration: 0.8, delay: 0.4}}>
              <div className="bg-gradient-to-br from-background to-primary/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-primary/20 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div key={currentStat} className="space-y-6" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -20}}>
                    <div className="flex items-center justify-between">
                      <div className="p-4 bg-gradient-to-br from-primary/20 to-orange-glow/20 rounded-2xl">
                        {(() => { const Icon = stats[currentStat].icon; return <Icon className="w-8 h-8 text-primary" aria-hidden="true" />; })()}
                      </div>
                      <div className="text-right">
                        <div className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-glow">{stats[currentStat].number}</div>
                        <div className="text-sm text-muted-foreground font-medium uppercase mt-2">{stats[currentStat].label}</div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="flex justify-center gap-2 mt-8">
                  {stats.map((_, index) => (<button key={index} onClick={() => setCurrentStat(index)} className={`h-1.5 rounded-full transition-all ${currentStat === index ? 'w-8 bg-primary' : 'w-1.5 bg-primary/30'}`} aria-label={`View stat ${index + 1}`} />))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
