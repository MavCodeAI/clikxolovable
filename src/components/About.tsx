import { CheckCircle2, Users, Award, Target, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
    <section id="about" className="py-20 bg-white-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-background mb-6 uppercase">
              About <span className="text-primary">ClikXo</span>
            </h2>
            <p className="text-gray-text/80 text-lg mb-6">
              We are a performance-driven digital marketing agency dedicated to helping businesses grow through innovative strategies and data-driven solutions.
            </p>
            <p className="text-gray-text/80 text-lg mb-8">
              Our team of experts combines creativity with technical expertise to deliver measurable results that exceed expectations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-background font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div ref={projectCounter.ref} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">
                  {projectCounter.count}+
                </div>
                <p className="text-gray-text/80 text-sm">Projects Completed</p>
              </div>

              <div ref={clientCounter.ref} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">
                  {clientCounter.count}+
                </div>
                <p className="text-gray-text/80 text-sm">Happy Clients</p>
              </div>

              <div ref={satisfactionCounter.ref} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">
                  {satisfactionCounter.count}%
                </div>
                <p className="text-gray-text/80 text-sm">Client Satisfaction</p>
              </div>

              <div ref={experienceCounter.ref} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">
                  {experienceCounter.count}+
                </div>
                <p className="text-gray-text/80 text-sm">Years Experience</p>
              </div>
            </div>

            {/* Featured Card */}
            <div className="mt-6 bg-gradient-to-br from-primary/10 to-hero-accent/10 rounded-2xl p-8 border border-primary/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">Award Winning</div>
                <p className="text-gray-text/80">Industry Recognition & Excellence</p>
                <div className="mt-4 flex justify-center">
                  <Award className="w-8 h-8 text-primary animate-pulse" />
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
