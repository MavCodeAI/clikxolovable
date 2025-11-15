import { CheckCircle2 } from "lucide-react";

const About = () => {
  const achievements = [
    "10+ Years of Excellence",
    "500+ Successful Projects",
    "98% Client Satisfaction",
    "Award-Winning Team",
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">ClikXo</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              We are a performance-driven digital marketing agency dedicated to helping businesses grow through innovative strategies and data-driven solutions.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
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
                  <span className="text-foreground font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-hero-accent overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-primary mb-4">500+</div>
                  <p className="text-foreground text-xl">Successful Projects</p>
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
