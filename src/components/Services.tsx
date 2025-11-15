<<<<<<< HEAD
import { Code, Smartphone, Palette, TrendingUp } from "lucide-react";
=======
import { Search, Share2, FileText, BarChart3, Target, Megaphone } from "lucide-react";
>>>>>>> 71bb57dcd97441ab822e7494165eab70b333db2a
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
<<<<<<< HEAD
      icon: Code,
      title: "Web Development",
      description: "Create stunning, responsive websites and web applications with cutting-edge technologies and modern design principles.",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Build powerful mobile applications for iOS and Android platforms that deliver exceptional user experiences.",
    },
    {
      icon: Palette,
      title: "Graphics Designing",
      description: "Design beautiful visual content, logos, and branding materials that capture attention and communicate your message effectively.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Drive growth through comprehensive digital marketing strategies including SEO, social media, PPC, and content marketing.",
=======
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your website's visibility and rank higher on search engines with our proven SEO strategies.",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Engage your audience across all platforms with compelling content and strategic campaigns.",
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description: "Create valuable, relevant content that attracts and retains your target audience.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Data-driven insights to optimize your marketing performance and ROI.",
    },
    {
      icon: Target,
      title: "PPC Advertising",
      description: "Maximize your ad spend with targeted campaigns that deliver measurable results.",
    },
    {
      icon: Megaphone,
      title: "Brand Strategy",
      description: "Build a strong brand identity that resonates with your audience and stands out.",
>>>>>>> 71bb57dcd97441ab822e7494165eab70b333db2a
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
<<<<<<< HEAD
            Transforming ideas into digital reality with our core development and design services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 hover:scale-105 animate-fade-in group cursor-pointer relative overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`,
                transformStyle: "preserve-3d",
              }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 15;
                const rotateY = (centerX - x) / 15;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-500 group-hover:scale-110 mx-auto">
                  <service.icon className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <CardTitle className="text-foreground group-hover:text-primary transition-colors duration-300 text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 text-center">
=======
            Comprehensive digital marketing solutions tailored to your business needs
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
>>>>>>> 71bb57dcd97441ab822e7494165eab70b333db2a
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
