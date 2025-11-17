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
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 uppercase tracking-tight">
            Meet the <span className="text-primary">Experts</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of specialists brings together expertise from various fields
            to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="text-center">
                <OptimizedImage
                  src={member.image}
                  alt={`${member.name} - ${member.role} at ClikXo`}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  width={96}
                  height={96}
                />
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>

                <div className="flex justify-center space-x-3">
                  <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                  <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                  <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
