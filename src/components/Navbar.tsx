import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight, Sparkles, Home, Briefcase, Users, FolderOpen, Mail } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import useScrollSpy from "@/hooks/use-scroll-spy";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    if (isOpen) {
      // Disable page scroll when mobile menu is open (consistent across devices)
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable page scroll when mobile menu is closed
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, isMobile]);

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
    return `flex items-center gap-4 w-full text-left px-5 py-4 transition-all duration-200 font-bold text-lg rounded-xl ${
      isActive
        ? 'text-primary bg-primary/10 shadow-md'
        : 'text-foreground hover:text-primary hover:bg-primary/5'
    }`;
  };

  const menuItems = isHomePage ? [
    { id: 'home', label: 'Home', icon: Home, action: () => scrollToSection('home') },
    { id: 'services', label: 'Services', icon: Briefcase, action: () => scrollToSection('services') },
    { id: 'about', label: 'About', to: '/about', icon: Users },
    { id: 'team', label: 'Team', to: '/team', icon: Users },
    { id: 'portfolio', label: 'Portfolio', to: '/portfolio', icon: FolderOpen },
    { id: 'contact', label: 'Contact', to: '/contact', icon: Mail },
  ] : [
    { id: 'home', label: 'Home', to: '/', icon: Home },
    { id: 'services', label: 'Services', to: '/#services', icon: Briefcase },
    { id: 'about', label: 'About', to: '/about', icon: Users },
    { id: 'team', label: 'Team', to: '/team', icon: Users },
    { id: 'portfolio', label: 'Portfolio', to: '/portfolio', icon: FolderOpen },
    { id: 'contact', label: 'Contact', to: '/contact', icon: Mail },
  ];

  return (
    <header
      role="banner"
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/98 backdrop-blur-lg border-b border-border/50 shadow-xl shadow-background/10'
          : 'bg-background/96 backdrop-blur-md border-b border-border/40 shadow-2xl shadow-background/10'
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

        
      </div>

      {/* Main Navigation Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-16 sm:min-h-20 lg:min-h-24">
          {/* Left Side - Logo */}
          <Link
            to="/"
            className="flex items-center z-10 flex-shrink-0 group focus:outline-none focus:ring-4 focus:ring-primary/30 rounded-xl p-1 sm:p-2 -m-1 sm:-m-2 transition-all"
            onClick={() => setIsOpen(false)}
            aria-label="ClikXo Studio Home"
          >
            <Sparkles className="text-primary w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" aria-hidden="true" />
            <span className="ml-2 sm:ml-3 md:ml-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black font-heading text-foreground group-hover:text-primary transition-all duration-300 tracking-tight drop-shadow-sm">
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

        {/* Enhanced Mobile Menu with Animations */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-md"
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
              />

              {/* Slide-in menu */}
              <motion.nav
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="lg:hidden fixed right-0 top-0 bottom-0 z-50 w-[85%] max-w-sm bg-background border-l border-border shadow-2xl overflow-y-auto"
                role="navigation"
                aria-label="Mobile navigation"
              >
                {/* Close button at top */}
                <div className="flex items-center justify-between p-4 border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-10">
                  <span className="text-lg font-bold text-foreground">Menu</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Menu items with stagger animation */}
                <div className="px-4 py-6 space-y-2">
                  {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        {item.to ? (
                          <Link
                            to={item.to}
                            className={getMobileButtonClasses(item.id)}
                            onClick={(e) => {
                              setIsOpen(false);
                              if (item.to === '/#services') {
                                e.preventDefault();
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
                              }
                            }}
                            aria-label={`Go to ${item.label}`}
                          >
                            <Icon className="w-5 h-5 flex-shrink-0" />
                            <span>{item.label}</span>
                          </Link>
                        ) : (
                          <button
                            onClick={() => {
                              if (item.action) item.action();
                            }}
                            className={getMobileButtonClasses(item.id)}
                            aria-label={`Scroll to ${item.label}`}
                          >
                            <Icon className="w-5 h-5 flex-shrink-0" />
                            <span>{item.label}</span>
                          </button>
                        )}
                      </motion.div>
                    );
                  })}

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pt-6 border-t border-border mt-4"
                  >
                    <button
                      onClick={() => {
                        scrollToSection("contact");
                        setIsOpen(false);
                      }}
                      className="group w-full relative px-6 py-5 bg-gradient-to-r from-primary to-orange-glow text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 active:scale-95 transition-all duration-300"
                      aria-label="Get Started"
                    >
                      <span className="flex items-center justify-center gap-3">
                        <span>Get Started</span>
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </button>
                  </motion.div>

                  {/* Contact info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="pt-6 text-center"
                  >
                    <a
                      href="tel:+97144318653"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors min-h-[44px]"
                      onClick={() => setIsOpen(false)}
                    >
                      <Phone className="w-4 h-4" />
                      <span className="font-medium">+971 44318653</span>
                    </a>
                  </motion.div>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
