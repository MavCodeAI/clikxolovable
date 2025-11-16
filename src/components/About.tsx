import { motion } from "framer-motion";
import { Award, Users, Globe, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Award,
      value: "500+",
      label: "Projects Completed",
    },
    {
      icon: Users,
      value: "250+",
      label: "Happy Clients",
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries Served",
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-primary text-sm font-bold uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              About ClikXo
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 uppercase tracking-tight">
            Driving Digital <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are a results-driven digital agency that combines creativity, strategy, and technology
            to transform businesses and drive measurable growth.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-black text-foreground mb-2">
                {stat.value}
              </h3>
              <p className="text-muted-foreground font-medium uppercase text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <h3 className="text-2xl font-black text-foreground mb-4 uppercase">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses with innovative digital solutions that drive sustainable growth
              and create lasting impact in the digital landscape.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <h3 className="text-2xl font-black text-foreground mb-4 uppercase">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the leading force in digital transformation, helping businesses thrive in
              an ever-evolving digital world through excellence and innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
