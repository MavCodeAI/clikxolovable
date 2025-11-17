import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { MissionVision, missionVisionData } from '@/data/about-content';

interface MissionVisionCardProps {
  item: MissionVision;
  index: number;
}

const MissionVisionCard: React.FC<MissionVisionCardProps> = ({ item, index }) => {
  const { icon: Icon, title, description, gradient, delay } = item;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay: delay / 1000,
        ease: "easeOut"
      }}
      className="group relative"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-glow/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Floating geometric shapes */}
      <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-700" />

      <div className="relative p-8 bg-gradient-to-br from-card via-card to-card/90 backdrop-blur-xl rounded-2xl border border-border hover:border-primary/40 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">

        {/* Icon section with animated background */}
        <div className="flex justify-center mb-6">
          <motion.div
            className="relative p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:scale-110 transition-transform duration-300"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg shadow-primary/20`}>
              <Icon className="w-8 h-8 text-white" aria-hidden="true" />
            </div>

            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-orange-glow to-primary opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500 -z-10" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="text-center">
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (delay + 200) / 1000 }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (delay + 350) / 1000 }}
          >
            {description}
          </motion.p>
        </div>

        {/* Decorative bottom border */}
        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${gradient} group-hover:w-full transition-all duration-500 rounded-full`} />
      </div>
    </motion.div>
  );
};

interface MissionVisionProps {
  className?: string;
}

const MissionVisionSection: React.FC<MissionVisionProps> = ({ className = '' }) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className={`py-16 lg:py-24 ${className}`} aria-labelledby="mission-vision-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-orange-glow/20 rounded-full border border-primary/30 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-orange-glow rounded-full animate-pulse" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">
              Our Purpose
            </span>
          </motion.div>

          <motion.h2
            id="mission-vision-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Driving Innovation,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-glow to-primary">
              Delivering Excellence
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Our mission and vision guide every decision we make and every solution we create,
            ensuring we remain focused on delivering exceptional value to our clients.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          role="list"
          aria-label="Mission and vision"
        >
          {missionVisionData.map((item, index) => (
            <div key={item.id} role="listitem">
              <MissionVisionCard item={item} index={index} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
