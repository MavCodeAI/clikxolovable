import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Darwesh",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces",
      bio: "Expert full-stack developer specialized in React, TypeScript, and modern web technologies with 8+ years of experience.",
      social: {
        linkedin: "https://linkedin.com/in/darweshexpert",
        github: "https://github.com/darwesh-dev",
        email: "darwesh@clikxo.com"
      }
    },
    {
      name: "Ali",
      role: "Lead Graphics Designer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=faces",
      bio: "Creative design excellence specialist with expertise in branding, UI/UX design, and visual storytelling – 7+ years of award-winning work.",
      social: {
        linkedin: "https://linkedin.com/in/alidesigner",
        twitter: "https://twitter.com/alicreative",
        email: "ali@clikxo.com"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <section id="team" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Expert Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our expert team combines technical excellence and creative design to deliver
            outstanding digital solutions and exceptional user experiences.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={cardVariants as any}>
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group bg-card h-full">
                <div className="relative">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <motion.div
                      className="p-6 w-full"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {/* Social Links */}
                      <div className="flex justify-center space-x-4">
                        {member.social.linkedin && (
                          <motion.a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors duration-200"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Linkedin className="w-4 h-4" />
                          </motion.a>
                        )}
                        {member.social.twitter && (
                          <motion.a
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors duration-200"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Twitter className="w-4 h-4" />
                          </motion.a>
                        )}

                        <motion.a
                          href={`mailto:${member.social.email}`}
                          className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors duration-200"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Mail className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col flex-1">
                  <motion.h3
                    className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    className="text-primary font-medium mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {member.role}
                  </motion.p>
                  <motion.p
                    className="text-muted-foreground text-sm leading-relaxed flex-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {member.bio}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-hero-accent rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Successful Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg opacity-90">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
