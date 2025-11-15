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
              className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
