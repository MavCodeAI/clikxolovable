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
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group cursor-pointer"
    >
      <Card className="bg-card border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full min-h-[300px]">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-orange-glow/0 group-hover:from-primary/5 group-hover:via-orange-glow/5 group-hover:to-primary/5 transition-all duration-300"></div>
        
        {/* Content */}
        <div className="relative z-10 p-8">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-orange-glow/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <MaterialIcon name={service.iconName} className="text-primary" />
          </div>
          <CardTitle className="text-2xl font-black font-heading text-foreground group-hover:text-primary transition-colors duration-300 mb-3 uppercase tracking-wider">{service.title}</CardTitle>
          <CardDescription className="text-gray-text text-base leading-relaxed group-hover:text-foreground transition-colors duration-300 font-medium">
            {service.description}
          </CardDescription>
          {/* Learn more button effect */}
          <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="inline-flex items-center text-primary text-sm font-black font-heading uppercase tracking-widest gap-2">
              Learn more 
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
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
      iconName: "phone_iphone",
      title: "App Development",
      description: "Native iOS & Android apps, Progressive Web Apps (PWA), and cross-platform solutions built with React Native and modern frameworks for seamless user experiences.",
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
            Comprehensive web development, graphics, and digital marketing solutions for modern businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto" role="list">
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
