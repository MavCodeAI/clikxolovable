const TrustedBrands = () => {
  const brands = [
    "TechCorp", "InnovateLab", "GlobalEdge", "NextGen Solutions",
    "Digital First", "Creative Hub", "Smart Systems", "Future Tech"
  ];

  return (
    <section className="py-20 bg-white-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-primary text-sm font-semibold mb-2">Growing Together with Integrity</p>
          <h2 className="text-3xl md:text-4xl font-bold text-background uppercase">
            Trusted by Leading Brands
          </h2>
          <p className="text-gray-text/80 mt-2">
            Who Value Growth, Integrity, and Genuine Partnership
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-card/50 rounded-lg hover:bg-muted/30 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-background font-semibold text-lg">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
