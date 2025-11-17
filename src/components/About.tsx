import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, Mail, Sparkles, Award, Users, Clock } from 'lucide-react';
import MissionVisionSection from './about/MissionVision';
import StatsSection from './about/StatsSection';
import WhyChooseUsSection from './about/WhyChooseUs';
import { aboutContent, contactInfo, capabilitiesData, missionVisionData, achievementsData, whyChooseUsData } from '@/data/about-content';

const About: React.FC = () => {
  const { hero, backstory } = aboutContent;

  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-background via-background/95 to-primary/10 overflow-hidden" id="about">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating gradient orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-orange-glow/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />

          {/* Geometric patterns */}
          <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-gradient-to-r from-primary/5 to-transparent transform rotate-45 blur-2xl" />
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-l from-orange-glow/5 to-transparent transform -rotate-45 blur-2xl" />

          {/* Floating particles */}
          <div className="absolute top-16 right-16 w-3 h-3 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-32 left-32 w-2 h-2 bg-orange-glow/70 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-24 right-24 w-2.5 h-2.5 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-orange-glow/60 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={heroVariants}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/20 to-orange-glow/20 rounded-full border border-primary/30 shadow-lg backdrop-blur-sm mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">
                About ClikXo Studio
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {hero.title.split(' ').map((word, index) => (
                index === 1 ? (
                  <span key={index} className="block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-glow to-primary">
                      ClikXo
                    </span>{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-glow to-red-500">
                      Studio
                    </span>
                  </span>
                ) : (
                  <span key={index}>{word} </span>
                )
              ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {hero.subtitle}
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg sm:text-xl text-muted-foreground font-medium max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8 }}
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
                aria-label="Learn more about our services and expertise"
              >
                <span>Discover More</span>
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

            {/* Key highlights */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 mt-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: Users, text: '50+ Specialists' },
                { icon: Award, text: '25+ Awards' },
                { icon: Clock, text: '4+ Years' }
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  variants={itemVariants}
                  className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-card to-card/80 backdrop-blur-sm rounded-full border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Backstory Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background to-primary/5" aria-labelledby="backstory-title">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2
                id="backstory-title"
                className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight"
              >
                Our Journey
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-glow mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Backstory text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  From Vision to Reality
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {backstory.description}
                </p>

                <div className="space-y-4">
                  {backstory.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-orange-glow rounded-full"></div>
                      <span className="text-muted-foreground font-medium">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Capabilities highlight */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {capabilitiesData.map((capability, index) => (
                  <motion.div
                    key={capability.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="group p-6 bg-gradient-to-br from-card to-card/90 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 text-center"
                  >
                    <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${capability.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <capability.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                      {capability.title}
                    </h4>
                    <p className="text-xs text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                      {capability.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Contact info */}
            <motion.div
              className="mt-16 pt-12 border-t border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="flex flex-wrap justify-center gap-8">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-card to-card/90 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.1 }}
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.label}
                      </div>
                      <div className="text-sm text-muted-foreground">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <MissionVisionSection className="bg-gradient-to-br from-primary/5 via-background to-orange-glow/5" />

      {/* Stats Section */}
      <StatsSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />
    </div>
  );
};

export default About;
