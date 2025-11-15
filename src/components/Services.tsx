import { Search, Share2, FileText, BarChart3, Target, Megaphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
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
