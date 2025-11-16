import { CheckCircle2, Users, Award, Target, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;

      const progress = (currentTime - startTime) / duration;
      const current = Math.floor(end * Math.min(progress, 1));

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return { count, ref };
};

const About = () => {
  const achievements = [
    "10+ Years of Excellence",
    "500+ Successful Projects",
    "98% Client Satisfaction",
    "Award-Winning Team",
  ];

  const projectCounter = useCounter(500);
  const clientCounter = useCounter(1200);
  const satisfactionCounter = useCounter(98);
  const experienceCounter = useCounter(10);

  return (
    <section id="about" className="py-24 bg-white-section relative overflow-hidden" aria-labelledby="about-heading">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-glow/5 rounded-full blur-3xl" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="text-primary text-sm font-bold tracking-widest uppercase px-4 py-2 bg-primary/10 rounded-full">
                About Us
              </span>
            </motion.div>
            <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-background mb-6 uppercase tracking-tight">
              About <span className="text-primary">ClikXo</span>
            </h2>
            <p className="text-gray-textDark/80 text-lg mb-6 leading-relaxed">
              We are a performance-driven digital marketing agency dedicated to helping businesses grow through innovative strategies and data-driven solutions.
            </p>
            <p className="text-gray-textDark/80 text-lg mb-8 leading-relaxed">
              Our team of experts combines creativity with technical expertise to deliver measurable results that exceed expectations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8" role="list" aria-label="Key achievements">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  role="listitem"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
                  <span className="text-background font-semibold">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative animate-fade-in">
            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-4" role="list" aria-label="Company statistics">
              <div ref={projectCounter.ref} role="listitem" className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center" aria-hidden="true">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1" aria-label={`${projectCounter.count} plus projects completed`}>
                  {projectCounter.count}+
                </div>
                <p className="text-gray-text/80 text-sm">Projects Completed</p>
              </div>

              <div ref={clientCounter.ref} role="listitem" className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center" aria-hidden="true">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1" aria-label={`${clientCounter.count} plus happy clients`}>
                  {clientCounter.count}+
                </div>
                <p className="text-gray-text/80 text-sm">Happy Clients</p>
              </div>

              <div ref={satisfactionCounter.ref} role="listitem" className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center" aria-hidden="true">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1" aria-label={`${satisfactionCounter.count} percent client satisfaction`}>
                  {satisfactionCounter.count}%
                </div>
                <p className="text-gray-text/80 text-sm">Client Satisfaction</p>
              </div>

              <div ref={experienceCounter.ref} role="listitem" className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center" aria-hidden="true">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1" aria-label={`${experienceCounter.count} plus years experience`}>
                  {experienceCounter.count}+
                </div>
                <p className="text-gray-text/80 text-sm">Years Experience</p>
              </div>
            </div>

            {/* Featured Card */}
            <div className="mt-6 bg-gradient-to-br from-primary/10 to-hero-accent/10 rounded-2xl p-8 border border-primary/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">Award Winning</div>
                <p className="text-gray-textDark/70">Industry Recognition & Excellence</p>
                <div className="mt-4 flex justify-center">
                  <Award className="w-8 h-8 text-primary animate-pulse" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
