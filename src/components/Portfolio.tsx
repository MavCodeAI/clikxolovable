import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      client: "FashionTech Solutions",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
      result: "180% revenue increase",
      tags: ["React", "Node.js", "Analytics"]
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      client: "CloudWorks Inc",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
      result: "User engagement up 78%",
      tags: ["Vue.js", "Firebase", "UX Design"]
    },
    {
      id: 3,
      title: "Social Media Campaign",
      client: "OrganicFoods Co",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500",
      result: "23x engagement growth",
      tags: ["Social Media", "Marketing", "Strategy"]
    },
    {
      id: 4,
      title: "Brand & Website Launch",
      client: "TechFlow Innovations",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500",
      result: "38x traffic growth",
      tags: ["Branding", "Web Design", "SEO"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">
            Our Work
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            See how we've helped businesses succeed with our digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.client}</p>
                  <p className="text-primary font-semibold mb-4">{project.result}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
