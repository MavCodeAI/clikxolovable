import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import OptimizedImage from "@/components/OptimizedImage";
import { motion } from "framer-motion";
import { memo, useState, useMemo } from "react";
import { ExternalLink, TrendingUp, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  client: string;
  image: string;
  result: string;
  metric: string;
  tags: string[];
  category: string;
  description: string;
}

const ProjectCard = memo(function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group h-full"
    >
      <Card className="relative overflow-hidden h-full flex flex-col bg-card border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
        {/* Image Container */}
        <div className="relative h-72 overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
          
          {/* Image */}
          <div className="relative h-full w-full overflow-hidden">
            <OptimizedImage
              src={project.image}
              alt={`${project.title} - ${project.client} project showcase`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              width={600}
              height={400}
            />
          </div>

          {/* Category badge */}
          <div className="absolute top-4 left-4 z-20">
            <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm font-black uppercase tracking-wider">
              {project.category}
            </Badge>
          </div>

          {/* Result metric - floating */}
          <motion.div 
            className="absolute top-4 right-4 z-20 bg-background/95 backdrop-blur-md px-4 py-2 rounded-xl border-2 border-primary/50 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-lg font-black text-primary">{project.metric}</span>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <CardContent className="flex-grow flex flex-col p-6">
          {/* Client name */}
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground font-medium">{project.client}</span>
          </div>

          {/* Project title */}
          <h3 className="text-2xl font-black text-foreground mb-3 group-hover:text-primary transition-colors duration-300 uppercase tracking-wide">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>

          {/* Result */}
          <div className="mb-4 p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
            <p className="text-sm font-bold text-foreground flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              {project.result}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-muted text-foreground text-xs rounded-full font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View project link */}
          <div className="pt-4 border-t border-border">
            {project.id === 7 ? (
              <Link
                to="/ai-video-generator"
                className="inline-flex items-center text-primary text-sm font-black uppercase tracking-wider gap-2 group-hover:gap-3 transition-all duration-300 cursor-pointer hover:text-primary/80"
              >
                Try AI Generator
                <ExternalLink className="w-4 h-4" />
              </Link>
            ) : (
              <span className="inline-flex items-center text-primary text-sm font-black uppercase tracking-wider gap-2 group-hover:gap-3 transition-all duration-300 cursor-pointer">
                View Case Study
                <ExternalLink className="w-4 h-4" />
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
});

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const projects: Project[] = useMemo(() => [
    {
      id: 1,
      title: "E-Commerce Platform",
      client: "FashionTech Solutions",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
      result: "Achieved 180% revenue increase in 6 months",
      metric: "+180%",
      category: "Web Development",
      description: "Built a high-performance e-commerce platform with advanced analytics, personalized recommendations, and seamless checkout experience.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"]
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      client: "CloudWorks Inc",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      result: "User engagement increased by 78%",
      metric: "+78%",
      category: "App Development",
      description: "Designed and developed an intuitive dashboard for real-time data visualization, team collaboration, and workflow automation.",
      tags: ["Vue.js", "Firebase", "Chart.js", "PWA"]
    },
    {
      id: 3,
      title: "Social Media Campaign",
      client: "OrganicFoods Co",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      result: "Generated 23x engagement growth across platforms",
      metric: "23x",
      category: "Digital Marketing",
      description: "Executed multi-platform social media strategy with influencer partnerships, viral content creation, and targeted advertising.",
      tags: ["Instagram", "TikTok", "Content Strategy", "Analytics"]
    },
    {
      id: 4,
      title: "Brand & Website Launch",
      client: "TechFlow Innovations",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800",
      result: "Delivered 38x organic traffic growth in 3 months",
      metric: "38x",
      category: "Graphics Design",
      description: "Complete brand identity redesign with modern website, compelling visuals, and SEO-optimized content strategy.",
      tags: ["Branding", "UI/UX", "Figma", "SEO"]
    },
    {
      id: 5,
      title: "Mobile Banking App",
      client: "FinSecure Digital",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      result: "Boosted app downloads by 250% in first quarter",
      metric: "+250%",
      category: "App Development",
      description: "Developed secure mobile banking application with biometric authentication, real-time transactions, and AI-powered insights.",
      tags: ["React Native", "Security", "API", "ML"]
    },
    {
      id: 6,
      title: "SEO & Content Strategy",
      client: "LegalEase Partners",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      result: "Achieved page 1 rankings for 45+ keywords",
      metric: "#1 Rank",
      category: "Digital Marketing",
      description: "Comprehensive SEO overhaul with technical optimization, quality content creation, and strategic link building campaign.",
      tags: ["SEO", "Content", "Analytics", "Backlinks"]
    },
    {
      id: 7,
      title: "AI Video Generator",
      client: "Digital Offshores",
      image: "/fynix ai.png",
      result: "Generated 1000+ AI videos with unlimited free access",
      metric: "1000+ Videos",
      category: "AI/ML Development",
      description: "Built a cutting-edge AI-powered video generation platform with advanced download capabilities, ASMR prompt system, and seamless user experience.",
      tags: ["AI/ML", "React", "Next.js", "Video Generation", "ASMR"]
    }
  ], []);

  const categories = useMemo(() => ["All", "Web Development", "App Development", "Digital Marketing", "Graphics Design", "AI/ML Development"], []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter(project => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <section id="portfolio" className="py-24 bg-background relative overflow-hidden" aria-labelledby="portfolio-heading">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-glow/5 rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-black uppercase tracking-widest border-2 border-primary/20">
              Success Stories
            </span>
          </motion.div>
          <h2 id="portfolio-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 sm:mb-6 uppercase tracking-tight text-balance px-4">
            Our <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Real results from real projects. See how we've transformed businesses with our innovative digital solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
                  : "bg-muted text-foreground hover:bg-primary/10 hover:text-primary border-2 border-transparent hover:border-primary/20"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-12 sm:mb-16 px-4">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-br from-primary/10 via-orange-glow/5 to-primary/10 rounded-3xl p-12 border-2 border-primary/20"
        >
          <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4 uppercase tracking-wide">
            Ready to See <span className="text-primary">Your Success Story</span>?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our proven digital solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-black uppercase tracking-wider hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 text-lg"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
