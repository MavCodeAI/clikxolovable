import { motion } from "framer-motion";

const TrustedBrands = () => {
  const brands = [
    "TechCorp", "InnovateLab", "GlobalEdge", "NextGen Solutions",
    "Digital First", "Creative Hub", "Smart Systems", "Future Tech"
  ];

  return (
    <section className="py-24 bg-white-section relative overflow-hidden" aria-label="Trusted brands section">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true" style={{
        backgroundImage: 'linear-gradient(30deg, #000 12%, transparent 12.5%, transparent 87%, #000 87.5%, #000), linear-gradient(150deg, #000 12%, transparent 12.5%, transparent 87%, #000 87.5%, #000)',
        backgroundSize: '20px 35px'
      }}></div>
      
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-background mb-6 uppercase tracking-tighter leading-[1.1]">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-glow to-primary">Leading Brands</span>
          </h2>
          <p className="text-gray-textDark text-lg md:text-xl font-medium">
            Who Value Growth, Integrity, and Genuine Partnership
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center max-w-5xl mx-auto" role="list">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              role="listitem"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center p-8 bg-white rounded-xl hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-md border-2 border-gray-textDark/20 hover:border-primary/40 group focus-within:ring-4 focus-within:ring-primary/20"
            >
              <span className="text-background font-black font-heading text-lg md:text-xl group-hover:text-primary transition-colors duration-300 tracking-tight">{brand}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
