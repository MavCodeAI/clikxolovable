import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, User } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechCorp Solutions",
    role: "CEO",
    content: "Digitalorks transformed our online presence completely. Their attention to detail and innovative approach helped us increase our conversion rate by 340% in just 6 months. The team's expertise is unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Chen",
    company: "InnovateTech",
    role: "CTO",
    content: "The level of creativity and technical excellence Digitalorks brings to every project is phenomenal. They didn't just build us a website; they crafted a digital experience that truly represents our brand.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Growth Dynamics",
    role: "Marketing Director",
    content: "Working with Digitalorks was a game-changer for our business. Their strategic insights and execution excellence delivered results beyond our expectations. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    company: "Elite Consulting",
    role: "Founder",
    content: "The ROI we've seen from our Digitalorks project is incredible. Their data-driven approach and cutting-edge solutions helped us establish ourselves as industry leaders.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Wang",
    company: "Future Enterprises",
    role: "VP Operations",
    content: "Digitalorks delivered on every promise. From concept to launch, their professionalism and dedication was evident. Our new platform has exceeded all performance expectations.",
    rating: 5,
  },
  {
    id: 6,
    name: "Robert Kim",
    company: "Nexus Systems",
    role: "Product Manager",
    content: "The collaborative approach and deep technical expertise made all the difference. Digitalorks doesn't just deliver projects; they become true technology partners.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    setCurrent(api.selectedScrollSnap());

    return () => {
      api?.off("select", onSelect);
    };
  }, [api]);

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1" role="img" aria-label={`Rating: ${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-br from-background via-primary/5 to-orange-glow/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-orange-glow/20 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/30 shadow-lg mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-foreground uppercase tracking-wider">Client Success Stories</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-glow">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Don't just take our word for it. Here's what industry leaders and business owners
            have to say about their Digitalorks experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Carousel
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4">
                  <div className="p-8 bg-gradient-to-br from-background to-primary/5 backdrop-blur-xl rounded-3xl border border-primary/20 shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <div className="w-14 h-14 bg-gradient-to-br from-primary to-orange-glow rounded-full flex items-center justify-center shadow-lg">
                            <User className="w-7 h-7 text-white" />
                          </div>
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-background"></div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-foreground">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                        <StarRating rating={testimonial.rating} />
                      </div>

                      <Quote className="w-8 h-8 text-primary/40 mb-4" />

                      <blockquote className="flex-1">
                        <p className="text-foreground/90 leading-relaxed text-lg font-medium">
                          "{testimonial.content}"
                        </p>
                      </blockquote>

                      <div className="mt-6 pt-6 border-t border-primary/10">
                        <div className="flex items-center justify-between">
                          <div className="text-primary font-bold">
                            Verified Client
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            Completed Project
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "24/7", label: "Client Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-glow group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium mt-2 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
