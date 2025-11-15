import { useState } from "react";
<<<<<<< HEAD
import { Menu, X, Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
=======
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
>>>>>>> 71bb57dcd97441ab822e7494165eab70b333db2a

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
<<<<<<< HEAD
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
              className="relative px-3 py-2 text-foreground hover:text-primary transition-all duration-300 font-bold text-lg group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className="relative px-3 py-2 text-foreground hover:text-primary transition-all duration-300 font-bold text-lg group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="relative px-3 py-2 text-foreground hover:text-primary transition-all duration-300 font-bold text-lg group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="relative px-3 py-2 text-foreground hover:text-primary transition-all duration-300 font-bold text-lg group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
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
=======
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="w-8 h-8 rounded-full bg-primary"></div>
              <div className="w-8 h-8 rounded-full bg-orange-glow"></div>
            </div>
            <span className="text-2xl font-bold text-foreground">ClikXo</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              SERVICES
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              CONTACT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
>>>>>>> 71bb57dcd97441ab822e7494165eab70b333db2a
        </div>

        {/* Mobile Menu */}
        {isOpen && (
<<<<<<< HEAD
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium rounded-md"
              >
                Home
              </button>

              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium rounded-md"
              >
                Services
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium rounded-md"
              >
                About
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium rounded-md"
              >
                Contact
              </button>
            </div>
=======
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              SERVICES
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              CONTACT
            </button>
>>>>>>> 71bb57dcd97441ab822e7494165eab70b333db2a
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
