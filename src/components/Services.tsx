import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { memo, useMemo } from "react";
import { Globe, Smartphone, Brush, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceType {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  to: string;
}

const ServiceCard = memo(function ServiceCard({ service, index }: { service: ServiceType; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group cursor-pointer h-full"
    >
      <Card className="relative bg-card border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 h-full flex flex-col overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-orange-glow/0 group-hover:from-primary/10 group-hover:via-orange-glow/5 group-hover:to-primary/10 transition-all duration-500 rounded-lg"></div>
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 p-8 flex flex-col h-full">
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 via-orange-glow/10 to-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/30">
            {(() => { const I = service.Icon; return <I className="text-primary w-10 h-10 group-hover:scale-110 transition-transform duration-500" aria-hidden="true" />; })()}
          </div>
          
          {/* Title */}
          <CardTitle className="text-2xl font-black font-heading text-foreground group-hover:text-primary transition-colors duration-300 mb-4 uppercase tracking-wider leading-tight">
            {service.title}
          </CardTitle>
          
          {/* Description */}
          <CardDescription className="text-muted-foreground text-base leading-relaxed group-hover:text-foreground transition-colors duration-300 font-medium flex-grow mb-6">
            {service.description}
          </CardDescription>
          
          {/* Learn more button - always visible but animates on hover */}
          <div className="mt-auto pt-4 border-t border-border/50 group-hover:border-primary/30 transition-colors duration-300">
            <Link to={service.to} className="inline-flex items-center text-primary text-sm font-black font-heading uppercase tracking-widest gap-2 group-hover:gap-3 transition-all duration-300">
              Explore Service
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
});

const Services = () => {
  const services = useMemo(() => [
    {
      Icon: Globe,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and responsive design for optimal performance.",
      to: "/services/web-development",
    },
    {
      Icon: Smartphone,
      title: "App Development",
      description: "Native iOS & Android apps, Progressive Web Apps (PWA), and cross-platform solutions built with React Native and modern frameworks for seamless user experiences.",
      to: "/services/app-development",
    },
    {
      Icon: Brush,
      title: "Graphic Design",
      description: "Professional branding, logos, and marketing materials designed to make your business stand out.",
      to: "/services/graphic-design",
    },
    {
      Icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to increase visibility and drive growth for your business online.",
      to: "/services/digital-marketing",
    },
  ], []);

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden scroll-mt-20 md:scroll-mt-24" aria-labelledby="services-heading">
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
          <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight font-heading text-balance">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-text text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive web development, graphics, and digital marketing solutions for modern businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto items-stretch" role="list">
          {services.map((service, index) => (
            <div key={index} role="listitem" className="h-full">
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
