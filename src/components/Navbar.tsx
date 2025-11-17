import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import useScrollSpy from "@/hooks/use-scroll-spy";

const throttle = (func: () => void, limit: number) => {
  let inThrottle: boolean;
  let lastRan: number;
  return function(this: unknown) {
    if (!inThrottle) {
      func.apply(this);
      inThrottle = true;
      lastRan = Date.now();
      setTimeout(() => inThrottle = false, Math.max(limit - (Date.now() - lastRan), 0));
    }
  };
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const activeSection = useScrollSpy(['home', 'services', 'about', 'team', 'portfolio', 'contact'], 150);

  // Improved scroll handler with better performance
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    if (isHomePage) {
      // Dynamic styling based on content sections for optimal contrast
      const lightSections = activeSection === 'about' || activeSection === 'team' || activeSection === 'contact';
      setIsScrolled(lightSections || scrollPosition > 50);
    } else {
      // On other pages, always use scrolled styling for consistency
      setIsScrolled(true);
    }
  }, [activeSection, isHomePage]);

  // Handle navbar dynamic styling with optimized event listeners
  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const getButtonClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `relative px-5 py-3 transition-all duration-300 font-bold text-base font-heading group rounded-lg ${
      isActive
        ? 'text-primary'
        : 'text-foreground hover:text-primary'
    }`;
  };

  const getUnderlineClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[3px] bg-gradient-to-r from-primary via-orange-glow to-primary transition-all duration-300 rounded-full ${
      isActive ? 'w-full' : 'w-0 group-hover:w-full'
    }`;
  };

  const getMobileButtonClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `flex items-center w-full text-left px-4 py-4 transition-all duration-200 font-medium rounded-lg ${
      isActive
        ? 'text-primary bg-primary/10'
        : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
    }`;
  };

  return (
    <header
      role="banner"
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/98 backdrop-blur-lg border-b border-border/50 shadow-xl shadow-background/10'
          : 'bg-gradient-to-r from-hero-bg/95 via-background/90 to-hero-accent/95 backdrop-blur-md border-b border-primary/25 shadow-2xl shadow-primary/10'
      }`}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          isScrolled
            ? 'bg-gradient-to-r from-background/60 to-background/40'
            : 'bg-gradient-to-r from-primary/5 via-transparent to-orange-glow/5'
        }`} />

        {/* Subtle Animated Elements */}
        <div className="absolute top-3 left-12 w-2 h-2 bg-primary/40 rounded-full animate-pulse" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-2 right-20 w-1.5 h-1.5 bg-orange-glow/50 rounded-full animate-bounce" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-1 left-1/3 w-3 h-0.5 bg-primary/30 transform rotate-45 animate-pulse" style={{animationDuration: '5s'}}></div>
      </div>

      {/* Main Navigation Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-20 lg:min-h-24">
          {/* Left Side - Logo */}
          <Link
            to="/"
            className="flex items-center z-10 flex-shrink-0 group focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg p-2 -m-2"
            onClick={() => setIsOpen(false)}
            aria-label="ClikXo Studio Home"
          >
            <i className="material-icons text-4xl sm:text-5xl text-primary flex-shrink-0 transition-transform duration-300 group-hover:scale-110">touch_app</i>
            <span className="ml-4 text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-foreground group-hover:text-primary transition-colors tracking-tight drop-shadow-sm">
              ClikXo Studio
            </span>
          </Link>

          {/* Center - Desktop Navigation Menu */}
          <nav
            className="hidden lg:flex items-center xl:space-x-4 2xl:space-x-6 flex-1 justify-center mx-8"
            role="navigation"
            aria-label="Main navigation"
          >
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection("home")}
                  className={getButtonClasses("home")}
                  aria-label="Scroll to Home section"
                >
                  Home
                  <span className={getUnderlineClasses("home")}></span>
                </button>

                <button
                  onClick={() => scrollToSection("services")}
                  className={getButtonClasses("services")}
                  aria-label="Scroll to Services section"
                >
                  Services
                  <span className={getUnderlineClasses("services")}></span>
                </button>

                <Link
                  to="/about"
                  className={`${getButtonClasses("about")} inline-block`}
                  aria-label="Go to About page"
                >
                  About
                  <span className={getUnderlineClasses("about")}></span>
                </Link>

                <Link
                  to="/team"
                  className={`${getButtonClasses("team")} inline-block`}
                  aria-label="Go to Team page"
                >
                  Team
                  <span className={getUnderlineClasses("team")}></span>
                </Link>

                <Link
                  to="/portfolio"
                  className={`${getButtonClasses("portfolio")} inline-block`}
                  aria-label="Go to Portfolio page"
                >
                  Portfolio
                  <span className={getUnderlineClasses("portfolio")}></span>
                </Link>

                <Link
                  to="/contact"
                  className={`${getButtonClasses("contact")} inline-block`}
                  aria-label="Go to Contact page"
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
                  aria-label="Go to Home page"
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
                  aria-label="Go to Services section"
                >
                  Services
                  <span className={getUnderlineClasses("services")}></span>
                </Link>

                <Link
                  to="/about"
                  className={`${getButtonClasses("about")} inline-block ${location.pathname === '/about' ? 'text-primary' : ''}`}
                  aria-label="Go to About page"
                >
                  About
                  <span className={getUnderlineClasses("about")}></span>
                </Link>

                <Link
                  to="/team"
                  className={`${getButtonClasses("team")} inline-block ${location.pathname === '/team' ? 'text-primary' : ''}`}
                  aria-label="Go to Team page"
                >
                  Team
                  <span className={getUnderlineClasses("team")}></span>
                </Link>

                <Link
                  to="/portfolio"
                  className={`${getButtonClasses("portfolio")} inline-block ${location.pathname === '/portfolio' ? 'text-primary' : ''}`}
                  aria-label="Go to Portfolio page"
                >
                  Portfolio
                  <span className={getUnderlineClasses("portfolio")}></span>
                </Link>

                <Link
                  to="/contact"
                  className={`${getButtonClasses("contact")} inline-block ${location.pathname === '/contact' ? 'text-primary' : ''}`}
                  aria-label="Go to Contact page"
                >
                  Contact
                  <span className={getUnderlineClasses("contact")}></span>
                </Link>
              </>
            )}
          </nav>

          {/* Right Side - CTA Button, Contact Number and Mobile Menu */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* CTA Button - Desktop Only */}
            <div className="hidden xl:block">
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative px-8 py-3 bg-gradient-to-r from-primary to-orange-glow text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                aria-label="Get Started with ClikXo Studio - Scroll to Contact section"
              >
                <span className="flex items-center gap-3">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>

            {/* Contact Number - Visible on all screen sizes */}
            <a
              href="tel:+97144318653"
              className="flex items-center gap-3 hover:bg-primary/10 rounded-lg p-2 -m-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Call ClikXo Studio at +971 44318653"
            >
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground hidden sm:inline">+971 44318653</span>
              <span className="text-sm font-medium text-foreground sm:hidden">Call</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors duration-200 min-w-[48px] min-h-[48px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav
            className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm mt-4 rounded-lg mx-4 mb-4"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-4 pt-4 pb-4 space-y-2">
              {isHomePage ? (
                <>
                  <button
                    onClick={() => scrollToSection("home")}
                    className={getMobileButtonClasses("home")}
                    aria-label="Scroll to Home section"
                  >
                    <span className="w-6" /> {/* Spacer for alignment */}
                    Home
                  </button>

                  <button
                    onClick={() => scrollToSection("services")}
                    className={getMobileButtonClasses("services")}
                    aria-label="Scroll to Services section"
                  >
                    <span className="w-6" /> {/* Spacer for alignment */}
                    Services
                  </button>

                  <Link
                    to="/about"
                    className={getMobileButtonClasses("about")}
                    onClick={() => setIsOpen(false)}
                    aria-label="Go to About page"
                  >
                    <span className="w-6" /> {/* Spacer for alignment */}
                    About
                  </Link>

                  <Link
                    to="/team"
                    className={getMobileButtonClasses("team")}
                    onClick={() => setIsOpen(false)}
                    aria-label="Go to Team page"
                  >
                    <span className="w-6" /> {/* Spacer for alignment */}
                    Team
                  </Link>

                  <Link
                    to="/portfolio"
                    className={getMobileButtonClasses("portfolio")}
                    onClick={() => setIsOpen(false)}
                    aria-label="Go to Portfolio page"
                  >
                    <span className="w-6" /> {/* Spacer for alignment */}
                    Portfolio
                  </Link>

                  <Link
                    to="/contact"
                    className={getMobileButtonClasses("contact")}
                    onClick={() => setIsOpen(false)}
                    aria-label="Go to Contact page"
                  >
                    <span className="w-6" /> {/* Spacer for alignment */}
                    Contact
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    className={getMobileButtonClasses("home")}
                    onClick={() => setIsOpen(false)}
                    aria-label="Go to Home page"
                  >
                    <span className="w-6" /> {/* Spacer for alignment */}
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
                    aria-label="Go to Services section"
                  >
                    <span className="w-6" /> {/* Spacer for alignment */}
                    Services
                  </Link>

                  <Link
                    to="/about"
                    className={`${getMobileButtonClasses("about")} ${location.pathname === '/about' ? 'text-primary bg-primary/10' : ''}`}
                    onClick={() => setIsOpen(false)}
                    aria-label="Go to About page"
                  >
                    <span className="w-6" /> {/* Spacer for alignment */}
                    About
                  </Link>

                  <Link
                    to="/team"
                    className={`${getMobileButtonClasses("team")} ${location.pathname === '/team' ? 'text-primary bg-primary/10' : ''}`}
                    onClick={() => setIsOpen(false)}
                    aria-label="Go to Team page"
                  >
                    <span className="w-6" /> {/* Spacer for alignment */}
                    Team
                  </Link>

                  <Link
                    to="/portfolio"
                    className={`${getMobileButtonClasses("portfolio")} ${location.pathname === '/portfolio' ? 'text-primary bg-primary/10' : ''}`}
                    onClick={() => setIsOpen(false)}
                    aria-label="Go to Portfolio page"
                  >
                    <span className="w-6" /> {/* Spacer for alignment */}
                    Portfolio
                  </Link>

                  <Link
                    to="/contact"
                    className={`${getMobileButtonClasses("contact")} ${location.pathname === '/contact' ? 'text-primary bg-primary/10' : ''}`}
                    onClick={() => setIsOpen(false)}
                    aria-label="Go to Contact page"
                  >
                    <span className="w-6" /> {/* Spacer for alignment */}
                    Contact
                  </Link>
                </>
              )}

              {/* CTA Button in Mobile Menu */}
              <div className="pt-4 border-t border-border">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="group w-full relative px-6 py-4 bg-gradient-to-r from-primary to-orange-glow text-white font-bold text-base uppercase tracking-wider rounded-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-label="Get Started with ClikXo Studio - Scroll to Contact section"
                >
                  <span className="flex items-center justify-center gap-3">
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
