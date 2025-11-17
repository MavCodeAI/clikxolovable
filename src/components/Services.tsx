import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { memo, useMemo } from "react";

interface ServiceType {
  iconName: string;
  title: string;
  description: string;
}

const MaterialIcon = ({ name, className }: { name: string; className?: string }) => (
  <i className={`material-icons ${className || ''}`}>{name}</i>
);

const ServiceCard = memo(function ServiceCard({ service, index }: { service: ServiceType; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="group h-full"
    >
      <Card className="bg-card border-2 border-border hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 h-full flex flex-col">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-orange-glow/0 group-hover:from-primary/8 group-hover:via-orange-glow/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg"></div>

        {/* Card Content */}
        <div className="relative z-10 p-6 flex flex-col h-full">
          {/* Icon Section */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/30 via-primary/20 to-orange-glow/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-primary/20 group-hover:shadow-2xl group-hover:shadow-primary/30">
              <MaterialIcon name={service.iconName} className="text-primary text-3xl" />
            </div>
          </div>

          {/* Title Section */}
          <div className="text-center mb-4 flex-shrink-0">
            <CardTitle className="text-xl font-black font-heading text-foreground group-hover:text-primary transition-colors duration-300 uppercase tracking-wider leading-tight">
              {service.title}
            </CardTitle>
          </div>

          {/* Description Section */}
          <div className="flex-grow flex items-center justify-center mb-6">
            <CardDescription className="text-gray-text text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300 font-medium text-center px-2">
              {service.description}
            </CardDescription>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-auto">
            <div className="bg-gradient-to-r from-primary to-orange-glow p-[1px] rounded-full group-hover:scale-105 transition-all duration-300">
              <div className="bg-background group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-orange-glow px-6 py-3 rounded-full transition-all duration-300">
                <span className="inline-flex items-center text-primary group-hover:text-white text-sm font-black font-heading uppercase tracking-widest gap-2 transition-colors duration-300">
                  Learn more
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
});

const Services = () => {
  const services = useMemo(() => [
    {
      iconName: "web",
      title: "Web Development",
      description: "Custom web applications built with modern technologies and responsive design for optimal performance.",
    },
    {
      iconName: "smartphone",
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
    },
    {
      iconName: "brush",
      title: "Graphics Designing",
      description: "Professional branding, logos, and marketing materials designed to make your business stand out.",
    },
    {
      iconName: "trending_up",
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to increase visibility and drive growth for your business online.",
    },
  ], []);

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden" aria-labelledby="services-heading">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-glow/5 rounded-full blur-3xl" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-primary text-sm font-bold tracking-widest uppercase px-4 py-2 border border-primary/30 rounded-full">
              What We Offer
            </span>
          </motion.div>
          <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-6 uppercase tracking-tight">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-text text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive web development, mobile app development, graphics, and digital marketing solutions for modern businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto" role="list">
          {services.map((service, index) => (
            <div key={index} role="listitem">
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
