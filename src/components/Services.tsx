import { Code, Smartphone, Layers, Palette, Camera, Monitor } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web App Development",
      description: "Build modern, scalable web applications with cutting-edge technologies and frameworks.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Create responsive mobile applications that deliver exceptional user experiences across all devices.",
    },
    {
      icon: Layers,
      title: "UI/UX Design",
      description: "Design intuitive user interfaces and experiences that engage users and drive conversions.",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Professional visual design solutions including logos, branding, and marketing materials.",
    },
    {
      icon: Camera,
      title: "Visual Content Creation",
      description: "Produce high-quality images, videos, and graphics for your brand's digital presence.",
    },
    {
      icon: Monitor,
      title: "Digital Marketing",
      description: "Comprehensive online marketing strategies to grow your brand and reach your target audience.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive web development, graphics, and digital marketing solutions for modern businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 animate-fade-in group cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-hero-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Floating particles effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-full group-hover:translate-x-0"></div>
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-orange-glow rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform -translate-y-full group-hover:translate-y-0"></div>

              <CardHeader className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500 relative">
                  <service.icon className="w-7 h-7 text-primary group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
                  {/* Pulse ring effect */}
                  <div className="absolute inset-0 rounded-lg bg-primary/20 scale-0 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700 animate-ping"></div>
                </div>
                <CardTitle className="text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </CardDescription>
                {/* Learn more button effect */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <span className="inline-flex items-center text-primary text-sm font-medium">
                    Learn more →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
