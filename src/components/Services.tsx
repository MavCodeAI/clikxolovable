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
      <Card className="bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 relative overflow-hidden h-full group-hover:scale-[1.02]">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-orange-glow/0 group-hover:from-primary/5 group-hover:via-orange-glow/5 group-hover:to-primary/5 transition-all duration-500"></div>
        
        {/* Animated corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-500"></div>

        {/* Content */}
        <div className="relative z-10 p-8">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-orange-glow/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative shadow-lg">
            <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-all duration-500" />
            {/* Pulse ring effect */}
            <div className="absolute inset-0 rounded-xl bg-primary/30 scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700"></div>
          </div>
          <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3 uppercase tracking-wide">{service.title}</CardTitle>
          <CardDescription className="text-gray-text leading-relaxed group-hover:text-foreground transition-colors duration-300">
            {service.description}
          </CardDescription>
          {/* Learn more button effect */}
          <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <span className="inline-flex items-center text-primary text-sm font-bold uppercase tracking-wider">
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
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-glow/5 rounded-full blur-3xl"></div>
      
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
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6 uppercase tracking-tight">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-text text-lg max-w-2xl mx-auto leading-relaxed">
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
