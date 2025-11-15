import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import useScrollSpy from "@/hooks/use-scroll-spy";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const activeSection = useScrollSpy(['home', 'services', 'about', 'team', 'portfolio', 'contact'], 150);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const getButtonClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `relative px-3 py-2 transition-all duration-300 font-bold text-lg group ${
      isActive
        ? 'text-primary'
        : 'text-foreground hover:text-primary'
    }`;
  };

  const getUnderlineClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
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
    <nav className="sticky top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Left Side - Logo */}
          <div className="flex items-center z-10">
            <div className="flex items-center space-x-1">
              <div className="w-6 h-6 rounded-full bg-primary"></div>
              <div className="w-6 h-6 rounded-full bg-orange-glow"></div>
            </div>
            <span className="ml-2 text-xl font-bold text-foreground">
              ClikXo
            </span>
          </div>

          {/* Center - Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
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

            <button
              onClick={() => scrollToSection("about")}
              className={getButtonClasses("about")}
            >
              About
              <span className={getUnderlineClasses("about")}></span>
            </button>

            <button
              onClick={() => scrollToSection("team")}
              className={getButtonClasses("team")}
            >
              Team
              <span className={getUnderlineClasses("team")}></span>
            </button>

            <button
              onClick={() => scrollToSection("portfolio")}
              className={getButtonClasses("portfolio")}
            >
              Portfolio
              <span className={getUnderlineClasses("portfolio")}></span>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className={getButtonClasses("contact")}
            >
              Contact
              <span className={getUnderlineClasses("contact")}></span>
            </button>
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

              <button
                onClick={() => scrollToSection("about")}
                className={getMobileButtonClasses("about")}
              >
                About
              </button>

              <button
                onClick={() => scrollToSection("team")}
                className={getMobileButtonClasses("team")}
              >
                Team
              </button>

              <button
                onClick={() => scrollToSection("portfolio")}
                className={getMobileButtonClasses("portfolio")}
              >
                Portfolio
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className={getMobileButtonClasses("contact")}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
