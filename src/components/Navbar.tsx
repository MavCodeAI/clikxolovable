import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
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
        </div>

        {/* Mobile Menu */}
        {isOpen && (
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
