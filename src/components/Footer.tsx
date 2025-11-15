import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const navigateToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/#services');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById('services');
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary/5 via-background to-orange-glow/5 border-t border-border">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center space-x-1">
                  <div className="w-8 h-8 rounded-full bg-primary"></div>
                  <div className="w-8 h-8 rounded-full bg-orange-glow"></div>
                </div>
                <span className="text-2xl font-bold text-foreground">ClikXo</span>
              </div>

              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Your trusted digital marketing partner driving growth, engagement, and measurable results for businesses worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">+971 44318653</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">info@clikxo.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Dubai, UAE</span>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div>
              <h4 className="text-foreground font-bold text-lg mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li><a onClick={navigateToServices} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group cursor-pointer">
                  <span className="w-0 group-hover:w-2 bg-primary transition-all duration-300 h-0.5 mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100"></span>
                  Web Development
                </a></li>
                <li><a onClick={navigateToServices} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group cursor-pointer">
                  <span className="w-0 group-hover:w-2 bg-primary transition-all duration-300 h-0.5 mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100"></span>
                  Graphics Design
                </a></li>
                <li><a onClick={navigateToServices} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group cursor-pointer">
                  <span className="w-0 group-hover:w-2 bg-primary transition-all duration-300 h-0.5 mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100"></span>
                  UI/UX Design
                </a></li>
                <li><a onClick={navigateToServices} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group cursor-pointer">
                  <span className="w-0 group-hover:w-2 bg-primary transition-all duration-300 h-0.5 mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100"></span>
                  Digital Marketing
                </a></li>
                <li><a onClick={navigateToServices} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group cursor-pointer">
                  <span className="w-0 group-hover:w-2 bg-primary transition-all duration-300 h-0.5 mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100"></span>
                  SEO Optimization
                </a></li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h4 className="text-foreground font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                  <span className="w-0 group-hover:w-2 bg-primary transition-all duration-300 h-0.5 mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100"></span>
                  About Us
                </Link></li>
                <li><Link to="/team" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                  <span className="w-0 group-hover:w-2 bg-primary transition-all duration-300 h-0.5 mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100"></span>
                  Our Team
                </Link></li>
                <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                  <span className="w-0 group-hover:w-2 bg-primary transition-all duration-300 h-0.5 mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100"></span>
                  Portfolio
                </Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                  <span className="w-0 group-hover:w-2 bg-primary transition-all duration-300 h-0.5 mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100"></span>
                  Contact Us
                </Link></li>
                <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                  <span className="w-0 group-hover:w-2 bg-primary transition-all duration-300 h-0.5 mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100"></span>
                  Blog & Insights
                </Link></li>
              </ul>
            </div>

            {/* Social & Newsletter */}
            <div>
              <h4 className="text-foreground font-bold text-lg mb-6">Connect With Us</h4>

              {/* Social Links */}
              <div className="flex space-x-3 mb-6">
                <a href="https://facebook.com/clikxo" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-card hover:bg-primary group flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                </a>
                <a href="https://twitter.com/clikxo" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-card hover:bg-primary group flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                </a>
                <a href="https://instagram.com/clikxo" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-card hover:bg-primary group flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                </a>
                <a href="https://linkedin.com/company/clikxo" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-card hover:bg-primary group flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                </a>
              </div>

              {/* Working Hours */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Mon - Fri: 9AM - 6PM</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Available 24/7 for urgent inquiries
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-muted-foreground text-sm">
                © {currentYear} ClikXo. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Additional Footer Info */}
          <div className="mt-6 pt-6 border-t border-border/30">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
              <div className="text-xs text-muted-foreground">
                Last updated: November {currentYear}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
