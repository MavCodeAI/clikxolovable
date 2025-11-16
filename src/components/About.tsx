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
    <section id="about" className="py-24 bg-white-section relative overflow-hidden" aria-label="About section">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-primary text-sm font-black font-heading tracking-widest uppercase px-5 py-2 bg-primary/10 rounded-full border-2 border-primary/20">
              About ClikXo
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-background mb-6 uppercase tracking-tighter leading-[1.1]">
            Driving Digital <span
              className="text-background"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--orange-glow)), hsl(var(--primary)))',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                filter: 'brightness(1.1)',
                textShadow: '0 0 20px hsl(var(--primary) / 0.2)',
                fontWeight: 900
              }}
            >
              Excellence
            </span>
          </h2>
          <p className="text-gray-textDark text-lg md:text-xl font-medium">
            We are a results-driven digital agency that combines creativity, strategy, and technology to transform businesses and drive measurable growth.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center min-h-[120px] p-6 bg-white rounded-xl hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-md border-2 border-gray-textDark/20 hover:border-primary/40 group focus-within:ring-4 focus-within:ring-primary/20"
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-background mb-2 group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </h3>
                <p className="text-gray-textDark font-medium uppercase text-sm tracking-tight">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 border-2 border-gray-textDark/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-md"
          >
            <h3 className="text-2xl font-black font-heading text-background mb-4 uppercase tracking-tight">
              Our Mission
            </h3>
            <p className="text-gray-textDark leading-relaxed font-medium">
              To empower businesses with innovative digital solutions that drive sustainable growth
              and create lasting impact in the digital landscape.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 border-2 border-gray-textDark/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-md"
          >
            <h3 className="text-2xl font-black font-heading text-background mb-4 uppercase tracking-tight">
              Our Vision
            </h3>
            <p className="text-gray-textDark leading-relaxed font-medium">
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
