import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Service } from '@/data/services-data';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const { title, shortDescription, icon: Icon, features, gradient, delay } = service;

  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: delay / 1000,
        ease: "easeOut"
      }}
      className="group h-full"
    >
      <div className="relative h-full p-8 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-xl rounded-2xl border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden">

        {/* Background gradient overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br from-primary/20 to-orange-glow/20" />

        {/* Floating background elements */}
        <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-xl group-hover:scale-150 transition-transform duration-700" />
        <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-gradient-to-tr from-orange-glow/10 to-transparent blur-xl group-hover:scale-125 transition-transform duration-500" />

        <div className="relative z-10 h-full flex flex-col">

          {/* Icon section with gradient border */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl shadow-primary/20 group-hover:shadow-primary/30"
              >
                <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                  <Icon
                    className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                    aria-hidden="true"
                  />
                </div>
              </motion.div>

              {/* Animated border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-orange-glow to-primary rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500 -z-10" />
            </div>
          </div>

          {/* Title and description */}
          <div className="text-center mb-6 flex-shrink-0">
            <motion.h3
              className="text-xl sm:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (delay + 200) / 1000 }}
            >
              {title}
            </motion.h3>
            <motion.p
              className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (delay + 350) / 1000 }}
            >
              {shortDescription}
            </motion.p>
          </div>

          {/* Features list */}
          <div className="flex-grow flex items-end">
            <motion.ul
              className="w-full space-y-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (delay + 500) / 1000 }}
            >
              {features.map((feature, featureIndex) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: (delay + 600 + featureIndex * 100) / 1000,
                    type: "spring",
                    stiffness: 300
                  }}
                  className="flex items-center gap-3 group/feature"
                >
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-orange-glow group-hover/feature:scale-150 group-hover/feature:shadow-lg group-hover/feature:shadow-primary/50 transition-all duration-300" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover/feature:text-foreground transition-colors duration-300">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* CTA button */}
          <motion.div
            className="mt-6 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (delay + 800) / 1000 }}
          >
            <button
              className="group/btn relative px-6 py-3 bg-gradient-to-r from-primary to-orange-glow text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/20"
              aria-label={`Learn more about ${title}`}
            >
              <div className="relative z-10 flex items-center gap-2">
                <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
                  Learn More
                </span>
                <motion.div
                  className="w-1 h-1 rounded-full bg-white"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
