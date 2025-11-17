import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";

const Team = () => {
  const teamMembers = [
    {
      name: "AB Darwesh",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
      bio: "Expert full-stack developer with 5+ years experience in React, Node.js, and modern web technologies.",
    },
    {
      name: "Ali Khan",
      role: "Graphic Designer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300",
      bio: "Creative design specialist focused on branding, UI/UX design, and marketing materials with 4+ years experience.",
    },
  ];

  return (
    <section id="team" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-glow/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}} aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-primary text-sm font-bold uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              Our Team
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-6 uppercase tracking-tight">
            Meet the <span className="text-primary">Dream Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate innovators combining creativity and technical excellence to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="relative bg-card rounded-3xl p-8 border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Image with enhanced styling */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-orange-glow/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <OptimizedImage
                    src={member.image}
                    alt={`${member.name} - ${member.role} at ClikXo`}
                    className="relative w-full h-full rounded-full object-cover border-4 border-background shadow-xl group-hover:scale-105 transition-transform duration-500"
                    width={128}
                    height={128}
                  />
                  {/* Status Indicator */}
                  <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-4 border-background shadow-lg"></div>
                </div>

                {/* Text Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-black text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                  <p className="text-primary font-bold text-base mb-4 uppercase tracking-wider">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{member.bio}</p>

                  {/* Social Links with enhanced styling */}
                  <div className="flex justify-center gap-4">
                    {[Linkedin, Twitter, Mail].map((Icon, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center transition-all duration-300 cursor-pointer group/icon border border-border hover:border-primary/30"
                      >
                        <Icon className="w-5 h-5 text-muted-foreground group-hover/icon:text-primary transition-colors" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-primary/20 rounded-full group-hover:scale-150 group-hover:bg-primary/40 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
