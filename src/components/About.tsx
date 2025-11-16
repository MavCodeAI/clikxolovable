import { CheckCircle2, Users, Award, Target, Clock, Sparkles, Star, Trophy, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const useCounter = (end: number, duration: number = 2500) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;

      const progress = (currentTime - startTime) / duration;
      const current = Math.floor(end * (1 - Math.pow(1 - Math.min(progress, 1), 3))); // Ease out cubic

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return { count, ref };
};

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
  index: number;
  colors: string;
}

const StatCard = ({ icon: Icon, value, suffix, label, index, colors }: StatCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const statCounter = useCounter(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      {/* Card background with premium gradient */}
      <div className={`relative bg-gradient-to-br ${colors} rounded-2xl p-8 text-center overflow-hidden
                      border border-white/20 shadow-2xl backdrop-blur-sm
                      hover:shadow-3xl hover:shadow-primary/25 hover:border-primary/30
                      transition-all duration-700 group-hover:scale-[1.02] h-full`}>

        {/* Animated particle effects */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full animate-ping group-hover:w-3 group-hover:h-3 transition-all duration-500" />
        <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-primary/50 rounded-full animate-pulse group-hover:w-2 group-hover:h-2 transition-all duration-500" />

        {/* Glowing border effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

        {/* Main content */}
        <div className="relative z-10">
          {/* Icon with enhanced animation */}
          <motion.div
            className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/20 backdrop-blur-sm
                       flex items-center justify-center shadow-lg border border-white/30"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-2xl bg-primary/20 scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700" />
          </motion.div>

          {/* Counter with premium typography */}
          <div ref={statCounter.ref} className="text-5xl sm:text-6xl font-black text-white mb-3 font-heading tracking-tight">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
            >
              {statCounter.count}
            </motion.span>
            <span className="text-4xl">{suffix}</span>
          </div>

          {/* Label with elegant styling */}
          <p className="text-white/90 text-lg font-semibold tracking-wide uppercase mb-0 leading-tight">
            {label}
          </p>
        </div>

        {/* Premium shadow effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      </div>
    </motion.div>
  );
};

const About = () => {
  const achievements = [
    "Quality-Focused Excellence",
    "50+ Successful Projects",
    "98% Client Satisfaction",
    "25+ Expert Team Members",
  ];

  const projectCounter = useCounter(500);
  const clientCounter = useCounter(1200);
  const satisfactionCounter = useCounter(98);
  const experienceCounter = useCounter(10);

  return (
    <section id="about" className="py-24 bg-white-section relative overflow-hidden" aria-labelledby="about-heading">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-glow/5 rounded-full blur-3xl" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="text-primary text-sm font-bold tracking-widest uppercase px-4 py-2 bg-primary/10 rounded-full">
                About Us
              </span>
            </motion.div>
            <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-background mb-6 uppercase tracking-tight">
              About <span className="text-primary">ClikXo</span>
            </h2>
            <p className="text-gray-textDark/80 text-lg mb-6 leading-relaxed">
              We are a performance-driven digital marketing agency dedicated to helping businesses grow through innovative strategies and data-driven solutions.
            </p>
            <p className="text-gray-textDark/80 text-lg mb-8 leading-relaxed">
              Our team of experts combines creativity with technical expertise to deliver measurable results that exceed expectations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8" role="list" aria-label="Key achievements">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  role="listitem"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
                  <span className="text-background font-semibold">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative animate-fade-in">
            {/* Premium Statistics Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring" }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4" role="list" aria-label="Company statistics">
                <StatCard
                  icon={Trophy}
                  value={50}
                  suffix="+"
                  label="Successful Projects"
                  index={0}
                  colors="from-emerald-500 via-teal-500 to-cyan-500"
                />
                <StatCard
                  icon={Award}
                  value={98}
                  suffix="%"
                  label="Client Satisfaction"
                  index={1}
                  colors="from-amber-500 via-orange-500 to-red-500"
                />
                <StatCard
                  icon={Users}
                  value={25}
                  suffix="+"
                  label="Team Members"
                  index={2}
                  colors="from-purple-500 via-violet-500 to-indigo-500"
                />
                <StatCard
                  icon={Zap}
                  value={5}
                  suffix="+"
                  label="Years Experience"
                  index={3}
                  colors="from-pink-500 via-rose-500 to-red-500"
                />
              </div>
            </motion.div>

            {/* Featured Card */}
            <div className="mt-6 bg-gradient-to-br from-primary/10 to-hero-accent/10 rounded-2xl p-8 border border-primary/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">Award Winning</div>
                <p className="text-gray-textDark/70">Industry Recognition & Excellence</p>
                <div className="mt-4 flex justify-center">
                  <Award className="w-8 h-8 text-primary animate-pulse" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
