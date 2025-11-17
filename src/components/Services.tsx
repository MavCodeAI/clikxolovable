import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { servicesData, additionalServices } from '@/data/services-data';

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 bg-gradient-to-br from-background via-background/95 to-primary/5 overflow-hidden"
      aria-labelledby="services-title"
      role="region"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-orange-glow/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />

        {/* Subtle geometric patterns */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-primary/5 to-transparent transform rotate-45 blur-2xl" />
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-gradient-to-l from-orange-glow/5 to-transparent transform -rotate-45 blur-2xl" />

        {/* Floating particles */}
        <div className="absolute top-16 left-16 w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-32 right-32 w-1.5 h-1.5 bg-orange-glow/70 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-24 left-24 w-1 h-1 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-32 right-16 w-2.5 h-2.5 bg-orange-glow/60 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/20 to-orange-glow/20 rounded-full border border-primary/30 shadow-lg backdrop-blur-sm mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">
              Our Premium Services
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            id="services-title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="block mb-4">Transforming Ideas</span>
            <span className="block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-glow to-primary">
                Into Digital
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-glow to-red-500">
                Excellence
              </span>
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium max-w-4xl mx-auto leading-relaxed mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            From concept to launch, we deliver cutting-edge digital solutions that drive growth,
            engage audiences, and position your brand as an industry leader.
          </motion.p>

          {/* Statistics */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: '500+', label: 'Projects Completed', suffix: '' },
              { number: '98%', label: 'Client Satisfaction', suffix: '%' },
              { number: '99.9%', label: 'Uptime Guarantee', suffix: '%' },
              { number: '24/7', label: 'Expert Support', suffix: '' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-glow mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          role="list"
          aria-label="Services offered"
        >
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              role="listitem"
              className="min-h-[500px]"
            >
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </motion.div>

        {/* Additional Services Preview */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-foreground mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            And So Much More...
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-card to-card/80 backdrop-blur-sm rounded-full border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className={`p-2 rounded-full bg-gradient-to-r ${service.gradient} group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 }}
          >
            <motion.button
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-orange-glow text-white font-bold text-lg uppercase tracking-wider rounded-full shadow-2xl shadow-primary/30 hover:shadow-3xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              aria-label="Start your digital transformation project"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary/30 text-primary font-bold text-lg uppercase tracking-wider rounded-full hover:bg-primary/10 transition-all duration-300 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              aria-label="Explore all our services"
            >
              <span>Explore All Services</span>
              <motion.div
                className="w-2 h-2 bg-primary rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Services;
