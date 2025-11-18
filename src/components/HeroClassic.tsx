import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroClassic = () => {
  return (
    <section id="hero" className="hero-section" aria-label="Hero">
      <div className="hero-background" />
      <div className="hero-content">
        <h1 className="hero-title">Dubai’s Top‑Rated Digital Studio for Brands That Demand Results</h1>
        <p className="hero-subtitle">We build fast, flawless web and mobile experiences that convert — engineered for growth, trust, and measurable ROI.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link to="/contact" className="inline-flex">
            <Button size="lg" className="px-8">Get a Quote</Button>
          </Link>
          <Link to="/portfolio" className="inline-flex">
            <Button variant="outline" size="lg" className="px-8">View Portfolio</Button>
          </Link>
        </div>
        <p className="mt-6 text-base opacity-90">Custom Web Development, App Development, Digital Marketing, and Graphic Designing — premium builds that look exceptional, load fast, and drive outcomes across UAE markets.</p>
        <p className="mt-2 text-sm opacity-80">Top‑Rated Digital Solutions in Dubai • Trusted by UAE businesses</p>
        <p className="mt-2 text-sm opacity-80">Made for business owners, startups, and scaling companies who want clarity, speed, and performance without compromises.</p>
      </div>
    </section>
  );
};

export default HeroClassic;