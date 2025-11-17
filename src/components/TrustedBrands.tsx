import { motion } from "framer-motion";

const TrustedBrands = () => {
  const brands = [
    "TechCorp", "InnovateLab", "Global Edge", "NextGen",
    "Digital First", "Creative Hub", "Smart Systems", "Future Tech"
  ];

  return (
    <section className="py-24 bg-white-section relative overflow-hidden" aria-label="Trusted brands section">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-glow/5 rounded-full blur-3xl" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-primary text-sm font-black font-heading tracking-widest uppercase px-5 py-2 bg-primary/10 rounded-full border-2 border-primary/20">
              Our Partners
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-background mb-6 uppercase tracking-tighter leading-[1.1] text-balance">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-glow to-primary">Leading Brands</span>
          </h2>
          <p className="text-gray-textDark text-lg md:text-xl font-medium">
            Who Value Growth, Integrity, and Genuine Partnership
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-stretch max-w-6xl mx-auto" role="list">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              role="listitem"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="relative flex items-center justify-center min-h-[140px] p-8 bg-white rounded-2xl shadow-lg border-2 border-gray-textDark/10 hover:border-primary/50 group focus-within:ring-4 focus-within:ring-primary/30 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-orange-glow/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Brand Name */}
              <span className="relative text-background font-black font-heading text-xl md:text-2xl group-hover:text-primary transition-all duration-300 tracking-tight uppercase">{brand}</span>
              
              {/* Corner Accent */}
              <div className="absolute top-2 right-2 w-3 h-3 bg-primary/20 rounded-full group-hover:scale-150 group-hover:bg-primary/40 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
