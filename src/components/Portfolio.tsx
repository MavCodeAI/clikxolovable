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
    <section id="portfolio" className="py-20 bg-background relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {/* Gradient Mesh */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 via-orange-glow/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-orange-dim/15 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider border border-primary/20">
              Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 uppercase tracking-tight">
            Real Results From <span className="text-primary">Real Clients</span>
          </h2>
          <p className="text-gray-text text-lg max-w-3xl mx-auto leading-relaxed">
            See how we've helped businesses transform and grow through innovative digital solutions that deliver measurable impact.
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["all", "ecommerce", "saas", "mobile"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`group relative px-8 py-3 rounded-full font-bold uppercase text-sm tracking-wider transition-all duration-300 overflow-hidden ${
                activeFilter === filter
                  ? "bg-primary text-background shadow-[0_0_20px_rgba(255,140,0,0.3)]"
                  : "bg-card border-2 border-border text-foreground hover:border-primary/50"
              }`}
            >
              {activeFilter === filter && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange-dim via-primary to-orange-glow animate-pulse"></div>
              )}
              <span className="relative z-10">{filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
            </button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {filteredProjects.map((project) => {
            const metrics = [
              { value: Object.values(project.after)[0], label: Object.keys(project.after)[0] },
              { value: Object.values(project.after)[1], label: Object.keys(project.after)[1] },
              { value: Object.values(project.after)[2], label: Object.keys(project.after)[2] }
            ];
            
            return (
              <div
                key={project.id}
                className="group bg-card rounded-2xl p-8 border-2 border-border hover:border-primary/40 transition-all duration-500 animate-fade-in hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-foreground mb-2 uppercase">{project.title}</h3>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold text-sm rounded-full border border-primary/20">{project.category}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {metrics.map((metric, idx) => (
                      <div key={idx} className="text-center p-4 rounded-xl bg-background/50 border border-border group-hover:border-primary/30 transition-all duration-300">
                        <div className="text-3xl md:text-4xl font-black text-primary mb-1 group-hover:scale-110 transition-transform duration-300">{metric.value}</div>
                        <div className="text-xs font-semibold text-gray-text uppercase tracking-wide">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <blockquote className="border-l-4 border-primary/50 pl-6 mb-6 py-2">
                    <p className="text-foreground/90 italic text-lg mb-3 leading-relaxed">"{project.testimonial.quote}"</p>
                    <footer className="text-sm font-semibold text-gray-text">
                      — {project.testimonial.author}, <span className="text-primary">{project.testimonial.position}</span>
                    </footer>
                  </blockquote>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1.5 bg-background border border-border text-foreground rounded-full text-xs font-bold uppercase tracking-wide hover:border-primary/40 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Testimonials Section */}
        <div className="mt-20 mb-16">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider border border-primary/20">
                Client Testimonials
              </span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-foreground uppercase">
              What Our Clients Say
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 border-2 border-border hover:border-primary/40 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-primary text-5xl mb-4 opacity-30">"</div>
                  <p className="text-foreground/90 italic text-base mb-6 leading-relaxed">{testimonial.quote}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-orange-glow flex items-center justify-center text-background font-black text-lg">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-gray-text">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-br from-card via-card to-card/50 rounded-2xl p-12 border-2 border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-orange-glow/5 to-primary/5 animate-pulse"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4 uppercase">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-text text-lg mb-8 max-w-2xl mx-auto">
              Let's create your next success story together. Our expertise is ready to transform your business.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block px-10 py-4 bg-gradient-to-r from-primary via-orange-glow to-primary text-background font-black uppercase tracking-wider rounded-full hover:shadow-[0_0_30px_rgba(255,140,0,0.4)] transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
