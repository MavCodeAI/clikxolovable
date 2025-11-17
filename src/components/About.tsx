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
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" aria-hidden="true"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-glow/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-primary text-sm font-black font-heading tracking-widest uppercase px-5 py-2 bg-primary/10 rounded-full border-2 border-primary/20">
              About ClikXo Studio
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.08 }}
              className="relative flex items-center justify-center min-h-[160px] p-8 bg-white rounded-2xl shadow-lg border-2 border-gray-textDark/10 hover:border-primary/50 group focus-within:ring-4 focus-within:ring-primary/30 transition-all duration-500 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="text-center relative z-10">
                <motion.div 
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-black text-background mb-2 group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </h3>
                <p className="text-gray-textDark font-bold uppercase text-xs md:text-sm tracking-wide">
                  {stat.label}
                </p>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute bottom-2 left-2 w-4 h-4 bg-orange-glow/20 rounded-full group-hover:scale-150 group-hover:bg-orange-glow/40 transition-all duration-500"></div>
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
