import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { memo, useMemo } from "react";
import { ArrowRight } from "lucide-react";

interface ServiceType {
  iconName: string;
  title: string;
  description: string;
}

// SVG-based icons for reliability
const MaterialIcon = ({ name, className }: { name: string; className?: string }) => (
  <i className={`material-icons ${className || ''}`}>{name}</i>
);

const ServiceCard = memo(function ServiceCard({ service, index }: { service: ServiceType; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="group h-full relative"
    >
      <Card className="relative h-full flex flex-col border-2 border-border hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
        {/* Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/0 via-transparent to-orange-glow/0 group-hover:from-primary/8 group-hover:via-orange-glow/5 group-hover:to-primary/5 rounded-lg transition-all duration-500"></div>

        <div className="relative z-10 p-6 flex flex-col h-full">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br from-primary/30 via-primary/20 to-orange-glow/30 flex items-center justify-center group-hover:scale-105 group-hover:rotate-3 transition-transform duration-500 shadow-xl shadow-primary/20 group-hover:shadow-2xl group-hover:shadow-primary/30">
              <MaterialIcon name={service.iconName} className="text-2xl sm:text-3xl lg:text-4xl text-primary" />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-4 flex-shrink-0">
            <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-black font-heading text-foreground group-hover:text-primary transition-colors duration-300 uppercase tracking-wider leading-tight">
              {service.title}
            </CardTitle>
          </div>

          {/* Description */}
          <div className="flex-grow flex items-center justify-center mb-6">
            <CardDescription className="text-gray-text text-sm sm:text-base leading-relaxed sm:leading-loose group-hover:text-foreground transition-colors duration-300 font-medium text-center px-4 sm:px-6">
              {service.description}
            </CardDescription>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-auto">
            <button
              className="bg-gradient-to-r from-primary to-orange-glow p-[1px] rounded-full shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-105"
              aria-label={`Learn more about ${service.title}`}
            >
              <div className="bg-background px-6 py-3 rounded-full transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-orange-glow">
                <span className="inline-flex items-center text-primary group-hover:text-white text-sm sm:text-base font-black font-heading uppercase tracking-widest gap-2 transition-colors duration-300">
                  Learn more
                  <ArrowRight className="w-4 h-4 text-primary group-hover:text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                </span>
              </div>
            </button>
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
            <span className="text-primary text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 border border-primary/30 rounded-full">
              What We Offer
            </span>
          </motion.div>
          <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-6 uppercase tracking-tight">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-text text-lg max-w-2xl mx-auto leading-relaxed sm:leading-loose">
            Comprehensive web development, mobile app development, graphics, and digital marketing solutions for modern businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto" role="list">
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
