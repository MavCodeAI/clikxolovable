import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Star, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      category: "ecommerce",
      client: "FashionTech Solutions",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
      before: {
        "Conversion Rate": "2.1%",
        "Bounce Rate": "78%",
        "Page Load Time": "8.2s"
      },
      after: {
        "Conversion Rate": "5.8%",
        "Bounce Rate": "32%",
        "Page Load Time": "1.8s"
      },
      testimonial: {
        quote: "The redesign transformed our online presence completely. Revenue increased by 180% in the first quarter alone.",
        author: "Sarah Chen",
        position: "CEO, FashionTech Solutions"
      },
      tags: ["React", "Node.js", "Stripe", "Analytics"]
    },
    {
      id: 2,
      title: "SaaS Dashboard Optimization",
      category: "saas",
      client: "CloudWorks Inc",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
      before: {
        "User Engagement": "35%",
        "Task Completion": "42%",
        "Support Tickets": "150/week"
      },
      after: {
        "User Engagement": "78%",
        "Task Completion": "89%",
        "Support Tickets": "25/week"
      },
      testimonial: {
        quote: "The dashboard redesign eliminated user confusion and dramatically improved productivity across our entire platform.",
        author: "Marcus Rodriguez",
        position: "Product Manager, CloudWorks Inc"
      },
      tags: ["Vue.js", "Firebase", "UX Research", "Data Viz"]
    },
    {
      id: 3,
      title: "Mobile App Marketing Campaign",
      category: "mobile",
      client: "FitLife App",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500",
      before: {
        "Downloads": "2,400/month",
        "Retention Rate": "15%",
        "Revenue/Install": "$0.45"
      },
      after: {
        "Downloads": "18,500/month",
        "Retention Rate": "67%",
        "Revenue/Install": "$3.20"
      },
      testimonial: {
        quote: "The digital marketing strategy turned our fitness app from a niche product into a market leader.",
        author: "Emma Thompson",
        position: "CMO, FitLife App"
      },
      tags: ["iOS", "Android", "Google Ads", "Instagram", "Influencer"]
    }
  ];

  const testimonials = [
    {
      quote: "Working with ClikXo has been transformative. Their data-driven approach and creative solutions delivered results beyond our expectations.",
      author: "David Kim",
      position: "CTO, TechStartup Inc",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
    },
    {
      quote: "The attention to detail and strategic thinking at ClikXo is unparalleled. They've been instrumental in scaling our business.",
      author: "Lisa Park",
      position: "Founder, GrowthCo",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100"
    },
    {
      quote: "ClikXo's expertise in digital marketing turned our modest startup into a recognized industry player in just 18 months.",
      author: "Alex Johnson",
      position: "CEO, StartupBoost",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
    }
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from real clients. See how we've helped businesses transform and grow through innovative digital solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["all", "ecommerce", "saas", "mobile"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground hover:bg-primary/10 border border-border"
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-primary font-medium">{project.client}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Before/After Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-red-500 mb-3">Before</h4>
                    {Object.entries(project.before).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-500 mb-3">After</h4>
                    {Object.entries(project.after).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">{key}:</span>
                        <span className="font-medium text-primary">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                  <blockquote className="text-sm italic text-muted-foreground mb-2">
                    "{project.testimonial.quote}"
                  </blockquote>
                  <cite className="text-xs font-medium">
                    - {project.testimonial.author}, {project.testimonial.position}
                  </cite>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            What Our <span className="text-primary">Clients Say</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="font-semibold text-foreground">
                  {testimonial.author}
                </cite>
                <p className="text-sm text-muted-foreground mt-1">
                  {testimonial.position}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-hero-accent rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's create your next success story together. Our expertise is ready to transform your business.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center mx-auto"
            >
              Start Your Project
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
