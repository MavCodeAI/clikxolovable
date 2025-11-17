import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, TrendingUp } from 'lucide-react';
import { Achievement, achievementsData } from '@/data/about-content';

interface StatCounterProps {
  number: string;
  suffix?: string;
  icon: LucideIcon;
  gradient: string;
  delay: number;
}

const StatCounter: React.FC<StatCounterProps> = ({ number, suffix, icon: Icon, gradient, delay }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const numericValue = parseInt(number.replace(/[+,]/g, ''));
  const isPercentage = number.includes('%');

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = numericValue / steps;
    const stepDuration = duration / steps;

    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: delay / 1000,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
      onViewportEnter={() => setIsInView(true)}
      className="group relative"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-glow/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className={`absolute -inset-2 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl`} />

      <div className="relative p-8 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-xl rounded-3xl border border-border hover:border-primary/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <motion.div
            className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
            whileHover={{ scale: 1.1 }}
          >
            <Icon className="w-8 h-8 text-white" aria-hidden="true" />
          </motion.div>
        </div>

        {/* Counter */}
        <div className="text-center">
          <motion.div
            className={`text-5xl sm:text-6xl lg:text-7xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}
            animate={isInView ? { opacity: [0.8, 1, 0.8] } : {}}
            transition={{ duration: 0.3, repeat: 1 }}
          >
            {isInView ? (
              <>
                {isPercentage ? `${count}` : count.toLocaleString()}
                <span className="text-primary">
                  {number.includes('+') && '+'}
                  {suffix}
                </span>
              </>
            ) : (
              '0'
            )}
          </motion.div>

          <motion.div
            className="text-sm uppercase tracking-wider text-muted-foreground font-bold group-hover:text-foreground transition-colors duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (delay + 400) / 1000 }}
          >
            {/* We'll set this from props */}
          </motion.div>
        </div>

        {/* Floating particles */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-primary/40 rounded-full animate-bounce opacity-0 group-hover:opacity-100" style={{ animationDelay: '0.2s' }} />
        <div className="absolute bottom-4 left-2 w-1.5 h-1.5 bg-orange-glow/50 rounded-full animate-bounce opacity-0 group-hover:opacity-100" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-2 left-4 w-1 h-1 bg-primary/30 rounded-full animate-bounce opacity-0 group-hover:opacity-100" style={{ animationDelay: '0.8s' }} />
      </div>
    </motion.div>
  );
};

interface StatsSectionProps {
  achievements?: Achievement[];
  className?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({
  achievements,
  className = ''
}) => {
  const stats = achievements || achievementsData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className={`py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-orange-glow/5 ${className}`} aria-labelledby="achievements-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-glow/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-background/80 to-primary/10 rounded-full border border-primary/30 backdrop-blur-sm mb-6 text-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <TrendingUp className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-wider">
                Our Impact
              </span>
            </motion.div>

            <motion.h2
              id="achievements-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Measurable Results
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-glow to-primary">
                Speak Louder
              </span>
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Numbers that reflect our commitment to excellence and the tangible impact
              we create for businesses across industries.
            </motion.p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            role="list"
            aria-label="Achievement statistics"
          >
            {stats.map((stat, index) => (
              <div key={stat.id} role="listitem" className="flex flex-col items-center text-center">
                <StatCounter
                  number={stat.number}
                  suffix={stat.suffix}
                  icon={stat.icon}
                  gradient={stat.gradient}
                  delay={stat.delay}
                />
                <motion.div
                  className="mt-4 text-sm sm:text-base text-muted-foreground font-bold uppercase tracking-wider"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (stat.delay + 400) / 1000 }}
                >
                  {stat.label}
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Achievement showcase */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-orange-glow/10 rounded-full border border-primary/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-orange-glow rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">
                Join 500+ successful businesses worldwide
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
