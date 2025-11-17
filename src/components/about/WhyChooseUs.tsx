import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { WhyChooseUs, whyChooseUsData } from '@/data/about-content';

interface WhyChooseUsCardProps {
  item: WhyChooseUs;
  index: number;
}

const WhyChooseUsCard: React.FC<WhyChooseUsCardProps> = ({ item, index }) => {
  const { title, description, icon: Icon, gradient, delay } = item;

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
      className="group relative h-full"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-glow/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className={`absolute -inset-2 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700 rounded-3xl`} />

      <div className="relative h-full p-8 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-xl rounded-3xl border border-border hover:border-primary/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden">

        {/* Floating geometric shapes */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
        <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-tr from-orange-glow/10 to-transparent rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />

        <div className="relative z-10 h-full flex flex-col">
          {/* Icon section */}
          <div className="flex justify-center mb-6">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-xl shadow-primary/20 group-hover:scale-105 group-hover:rotate-6 transition-all duration-500`}>
                <Icon className="w-10 h-10 text-white" aria-hidden="true" />
              </div>

              {/* Animated ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-orange-glow to-primary opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500 animate-ping" style={{ animationDuration: '3s' }} />
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex-grow flex flex-col justify-center text-center">
            <motion.h3
              className="text-xl sm:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (delay + 200) / 1000 }}
            >
              {title}
            </motion.h3>

            <motion.p
              className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (delay + 350) / 1000 }}
            >
              {description}
            </motion.p>
          </div>
        </div>

        {/* Bottom gradient accent */}
        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${gradient} group-hover:w-1/2 transition-all duration-700 rounded-full`} />

        {/* Floating particles */}
        <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce opacity-0 group-hover:opacity-100" style={{ animationDelay: '0.2s' }} />
        <div className="absolute bottom-6 left-6 w-1 h-1 bg-orange-glow/50 rounded-full animate-bounce opacity-0 group-hover:opacity-100" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-8 left-8 w-1 h-1 bg-primary/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100" style={{ animationDelay: '1s' }} />
      </div>
    </motion.div>
  );
};

interface WhyChooseUsProps {
  className?: string;
}

const WhyChooseUsSection: React.FC<WhyChooseUsProps> = ({ className = '' }) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className={`py-16 lg:py-24 ${className}`} aria-labelledby="why-choose-us-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-32 right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-32 left-32 w-48 h-48 bg-orange-glow/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-orange-glow/20 rounded-full border border-primary/30 backdrop-blur-sm mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-orange-glow rounded-full animate-pulse" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">
                Why Choose Us
              </span>
            </motion.div>

            <motion.h2
              id="why-choose-us-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              The Difference That
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-glow to-primary">
                Sets Us Apart
              </span>
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Discover what makes ClikXo Studio the preferred partner for businesses
              seeking exceptional digital solutions and unparalleled service quality.
            </motion.p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            role="list"
            aria-label="Reasons to choose us"
          >
            {whyChooseUsData.map((item, index) => (
              <div key={item.id} role="listitem" className="min-h-[300px]">
                <WhyChooseUsCard item={item} index={index} />
              </div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-orange-glow text-white font-bold text-lg rounded-full shadow-2xl shadow-primary/30 hover:shadow-3xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Start Your Success Story Today</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
