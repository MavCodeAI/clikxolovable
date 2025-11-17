import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, Zap, Target, Rocket, TrendingUp, Play, Pause } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();
  const [currentWord, setCurrentWord] = useState(0);
  const [currentStat, setCurrentStat] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showVideoControls, setShowVideoControls] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
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
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Parallax scroll effects
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -100]);
  const videoY = useTransform(scrollY, [0, 800], [0, -200]);
  const contentY = useTransform(scrollY, [0, 600], [0, -150]);

  // Video controls
  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  const videoEnded = () => {
    setIsVideoPlaying(false);
  };

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-orange-glow/10">
      {/* Parallax Video Background */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ y: videoY }}
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-10 lg:opacity-15"
          loop
          muted
          playsInline
          onEnded={videoEnded}
          preload="metadata"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          <source src="/videos/hero-bg.webm" type="video/webm" />
          {/* Fallback image if video doesn't load */}
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-primary/5 to-orange-glow/10" />
      </motion.div>

      {/* Parallax Background Pattern */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-20"
        style={{ y: backgroundY }}
        aria-hidden="true"
      >
        <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}} />
      </motion.div>

      {/* Video Control Button */}
      <motion.button
        onClick={toggleVideo}
        onMouseEnter={() => setShowVideoControls(true)}
        onMouseLeave={() => setShowVideoControls(false)}
        className="absolute top-6 right-6 z-20 p-3 bg-background/80 backdrop-blur-md hover:bg-background rounded-full border border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 hidden md:flex items-center justify-center group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isVideoPlaying ? "Pause background video" : "Play background video"}
      >
        {isVideoPlaying ? (
          <Pause className="w-5 h-5 text-primary group-hover:text-orange-glow transition-colors" />
        ) : (
          <Play className="w-5 h-5 text-primary group-hover:text-orange-glow transition-colors" />
        )}
      </motion.button>

      {/* Video Controls Tooltip */}
      <AnimatePresence>
        {showVideoControls && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 right-6 z-20 px-3 py-2 bg-background/90 backdrop-blur-md rounded-lg border border-primary/30 shadow-lg pointer-events-none"
          >
            <span className="text-sm text-foreground font-medium">
              {isVideoPlaying ? "Pause Video" : "Play Video"}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl" animate={{scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3]}} transition={{duration: 8, repeat: Infinity, ease: "easeInOut"}} />
        <motion.div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-orange-glow/20 to-transparent blur-3xl" animate={{scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3]}} transition={{duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2}} />
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
        style={{ y: contentY }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div className="space-y-8 text-center lg:text-left" initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}}>
              <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/30 shadow-lg" whileHover={{scale: 1.05}}>
                <Sparkles className="w-4 h-4 text-primary animate-pulse" aria-hidden="true" />
                <span className="text-sm font-bold text-foreground uppercase tracking-wider">#1 Digital Innovation Partner</span>
              </motion.div>

              <div className="space-y-4">
                <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                  <span className="block text-foreground mb-2">LET'S</span>
                  <AnimatePresence mode="wait">
                    <motion.span key={currentWord} className={`block text-transparent bg-clip-text bg-gradient-to-r ${powerWords[currentWord].color} mb-2`} initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -20}} transition={{duration: 0.5}}>
                      {powerWords[currentWord].text}
                    </motion.span>
                  </AnimatePresence>
                  <span className="block text-foreground">YOUR BUSINESS</span>
                </motion.h1>

                <motion.p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  We craft <span className="text-primary font-bold">game-changing digital solutions</span> that drive real results. From stunning websites to powerful marketing strategies — we turn your vision into reality.
                </motion.p>
              </div>

              <motion.div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Button onClick={scrollToServices} size="lg" className="group px-8 py-6 bg-gradient-to-r from-primary to-orange-glow text-white font-bold uppercase rounded-full shadow-2xl hover:scale-105 min-w-[220px]" aria-label="Start your project">
                  <span className="flex items-center gap-2">Start Your Project <Rocket className="w-5 h-5 group-hover:translate-x-1" aria-hidden="true" /></span>
                </Button>
                <Button onClick={() => navigate('/portfolio')} size="lg" variant="outline" className="px-8 py-6 border-2 font-bold uppercase rounded-full min-w-[220px]" aria-label="View portfolio">
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
      </motion.div>
    </section>
  );
};

export default Hero;
