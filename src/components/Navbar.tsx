import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import useScrollSpy from "@/hooks/use-scroll-spy";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const activeSection = useScrollSpy(['home', 'services', 'about', 'team', 'portfolio', 'contact'], 150);
  const prefersReducedMotion = useReducedMotion();

  // Handle navbar dynamic styling based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        // Sections that have lighter backgrounds (where navbar should be dark)
        const lightSections = activeSection === 'about' || activeSection === 'team';
        setIsScrolled(lightSections);
      } else {
        // On other pages, use dark navbar
        setIsScrolled(true);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, isHomePage]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const getButtonClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `relative px-4 py-2 transition-all duration-300 font-bold text-base font-heading group ${
      isActive
        ? 'text-primary'
        : 'text-foreground hover:text-primary'
    }`;
  };

  const getUnderlineClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-primary via-orange-glow to-primary transition-all duration-300 rounded-full ${
      isActive ? 'w-full' : 'w-0 group-hover:w-full'
    }`;
  };

  const getMobileButtonClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `block w-full text-left px-3 py-3 transition-all duration-200 font-medium rounded-md ${
      isActive
        ? 'text-primary bg-primary/10'
        : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
    }`;
  };

  return (
    <nav className={`sticky top-0 left-0 right-0 z-50 backdrop-blur-md border-b relative overflow-hidden shadow-lg transition-all duration-500 ${
      isScrolled
        ? 'bg-background/95 border-border/60 shadow-background/20'
        : 'bg-hero-bg/90 border-primary/20 shadow-primary/10'
    }`}>
      {/* Geometric Background Shapes */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 opacity-[0.03]">
          {/* Animated Circles */}
          <div className="absolute top-2 left-8 w-8 h-8 rounded-full bg-primary/30 animate-pulse"></div>
          <div className="absolute top-4 right-16 w-6 h-6 rounded-full bg-orange-glow/30 animate-bounce" style={{animationDuration: '3s'}}></div>

          {/* Rotating Triangles */}
          <div className="absolute bottom-2 left-1/4 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-primary/20 animate-spin" style={{animationDuration: '8s'}}></div>
          <div className="absolute top-3 right-24 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[14px] border-l-transparent border-r-transparent border-t-orange-glow/25 animate-spin" style={{animationDuration: '10s', animationDirection: 'reverse'}}></div>

          {/* Thin Lines */}
          <div className="absolute bottom-1 right-1/3 w-12 h-0.5 bg-primary/25 transform rotate-12 animate-pulse"></div>
          <div className="absolute top-1/2 left-32 w-8 h-0.5 bg-orange-glow/20 transform -rotate-6 animate-bounce" style={{animationDuration: '4s'}}></div>

          {/* Abstract Polygons */}
          <div className="absolute top-6 left-1/2 w-6 h-6 bg-primary/15 transform rotate-45 animate-spin" style={{animationDuration: '12s'}}></div>
          <div className="absolute bottom-4 right-8 w-4 h-4 rounded-sm bg-orange-glow/20 transform rotate-30 animate-pulse"></div>

          {/* Floating Elements */}
          <div className="absolute top-1 right-1/4 w-2 h-2 rounded-full bg-primary/40 animate-bounce" style={{animationDuration: '5s'}}></div>
          <div className="absolute bottom-3 left-16 w-3 h-1 bg-orange-glow/30 rounded-full animate-pulse"></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16 relative">
          {/* Left Side - Logo */}
          <Link to="/" className="flex items-center z-10" onClick={() => setIsOpen(false)}>
            <div className="flex items-center space-x-1">
              <div className="w-6 h-6 rounded-full bg-primary"></div>
              <div className="w-6 h-6 rounded-full bg-orange-glow"></div>
            </div>
            <span className="ml-2 text-xl font-black font-heading text-foreground hover:text-primary transition-colors tracking-tight">
              ClikXo Studio
            </span>
          </Link>

          {/* Center - Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection("home")}
                  className={getButtonClasses("home")}
                >
                  Home
                  <span className={getUnderlineClasses("home")}></span>
                </button>

                <button
                  onClick={() => scrollToSection("services")}
                  className={getButtonClasses("services")}
                >
                  Services
                  <span className={getUnderlineClasses("services")}></span>
                </button>

                <Link
                  to="/about"
                  className={`${getButtonClasses("about")} inline-block`}
                >
                  About
                  <span className={getUnderlineClasses("about")}></span>
                </Link>

                <Link
                  to="/team"
                  className={`${getButtonClasses("team")} inline-block`}
                >
                  Team
                  <span className={getUnderlineClasses("team")}></span>
                </Link>

                <Link
                  to="/portfolio"
                  className={`${getButtonClasses("portfolio")} inline-block`}
                >
                  Portfolio
                  <span className={getUnderlineClasses("portfolio")}></span>
                </Link>

                <Link
                  to="/contact"
                  className={`${getButtonClasses("contact")} inline-block`}
                >
                  Contact
                  <span className={getUnderlineClasses("contact")}></span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className={`${getButtonClasses("home")} inline-block`}
                >
                  Home
                  <span className={getUnderlineClasses("home")}></span>
                </Link>

                <Link
                  to="/#services"
                  className={`${getButtonClasses("services")} inline-block`}
                  onClick={(e) => {
                    e.preventDefault();
                    // Navigate to home page first, then scroll to services
                    if (window.location.pathname !== '/') {
                      window.location.href = '/#services';
                    } else {
                      setTimeout(() => {
                        const element = document.getElementById('services');
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }, 100);
                    }
                  }}
                >
                  Services
                  <span className={getUnderlineClasses("services")}></span>
                </Link>

                <Link
                  to="/about"
                  className={`${getButtonClasses("about")} inline-block ${location.pathname === '/about' ? 'text-primary' : ''}`}
                >
                  About
                  <span className={getUnderlineClasses("about")}></span>
                </Link>

                <Link
                  to="/team"
                  className={`${getButtonClasses("team")} inline-block ${location.pathname === '/team' ? 'text-primary' : ''}`}
                >
                  Team
                  <span className={getUnderlineClasses("team")}></span>
                </Link>

                <Link
                  to="/portfolio"
                  className={`${getButtonClasses("portfolio")} inline-block ${location.pathname === '/portfolio' ? 'text-primary' : ''}`}
                >
                  Portfolio
                  <span className={getUnderlineClasses("portfolio")}></span>
                </Link>

                <Link
                  to="/contact"
                  className={`${getButtonClasses("contact")} inline-block ${location.pathname === '/contact' ? 'text-primary' : ''}`}
                >
                  Contact
                  <span className={getUnderlineClasses("contact")}></span>
                </Link>
              </>
            )}
          </div>

          {/* Right Side - Contact Number and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Contact Number - Visible on all screen sizes */}
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground font-medium hidden sm:inline">+971 44318653</span>
              <span className="text-sm text-foreground font-medium sm:hidden">Call</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {isHomePage ? (
                <>
                  <button
                    onClick={() => scrollToSection("home")}
                    className={getMobileButtonClasses("home")}
                  >
                    Home
                  </button>

                  <button
                    onClick={() => scrollToSection("services")}
                    className={getMobileButtonClasses("services")}
                  >
                    Services
                  </button>

                  <Link
                    to="/about"
                    className={getMobileButtonClasses("about")}
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>

                  <Link
                    to="/team"
                    className={getMobileButtonClasses("team")}
                    onClick={() => setIsOpen(false)}
                  >
                    Team
                  </Link>

                  <Link
                    to="/portfolio"
                    className={getMobileButtonClasses("portfolio")}
                    onClick={() => setIsOpen(false)}
                  >
                    Portfolio
                  </Link>

                  <Link
                    to="/contact"
                    className={getMobileButtonClasses("contact")}
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    className={getMobileButtonClasses("home")}
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>

                  <Link
                    to="/#services"
                    className={getMobileButtonClasses("services")}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      // Navigate to home page first, then scroll to services
                      if (window.location.pathname !== '/') {
                        window.location.href = '/#services';
                      } else {
                        setTimeout(() => {
                          const element = document.getElementById('services');
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }, 100);
                      }
                    }}
                  >
                    Services
                  </Link>

                  <Link
                    to="/about"
                    className={`${getMobileButtonClasses("about")} ${location.pathname === '/about' ? 'text-primary bg-primary/10' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>

                  <Link
                    to="/team"
                    className={`${getMobileButtonClasses("team")} ${location.pathname === '/team' ? 'text-primary bg-primary/10' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Team
                  </Link>

                  <Link
                    to="/portfolio"
                    className={`${getMobileButtonClasses("portfolio")} ${location.pathname === '/portfolio' ? 'text-primary bg-primary/10' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Portfolio
                  </Link>

                  <Link
                    to="/contact"
                    className={`${getMobileButtonClasses("contact")} ${location.pathname === '/contact' ? 'text-primary bg-primary/10' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
