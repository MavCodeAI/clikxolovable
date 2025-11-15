import { Code, Smartphone, Palette, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ServiceType {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

function ServiceCard({ service, index }: { service: ServiceType; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group cursor-pointer"
    >
      <Card className="bg-card border-border hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden h-full">
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-primary via-hero-accent to-orange-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-full h-full bg-card rounded-lg"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6">
          <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500 relative">
            <service.icon className="w-7 h-7 text-primary group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
            {/* Pulse ring effect */}
            <div className="absolute inset-0 rounded-lg bg-primary/20 scale-0 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700 animate-ping"></div>
          </div>
          <CardTitle className="text-foreground group-hover:text-primary transition-colors duration-300 mb-3">{service.title}</CardTitle>
          <CardDescription className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
            {service.description}
          </CardDescription>
          {/* Learn more button effect */}
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <span className="inline-flex items-center text-primary text-sm font-medium">
              Learn more →
            </span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Build modern, scalable web applications with cutting-edge technologies and frameworks.",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Create responsive mobile applications that deliver exceptional user experiences across all devices.",
    },
    {
      icon: Palette,
      title: "Graphics Designing",
      description: "Professional visual design solutions including logos, branding, and marketing materials.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive online marketing strategies to grow your brand and reach your target audience.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive web development, graphics, and digital marketing solutions for modern businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
