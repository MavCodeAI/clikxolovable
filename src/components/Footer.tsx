import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/95 backdrop-blur-sm border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                <div className="w-6 h-6 rounded-full bg-primary"></div>
                <div className="w-6 h-6 rounded-full bg-orange-glow"></div>
              </div>
              <span className="text-xl font-bold text-foreground">ClikXo</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Performance digital marketing agency delivering results that matter.
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Web Development</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Graphics Design</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">UI/UX Design</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Digital Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-card hover:bg-primary/10 flex items-center justify-center transition-colors group">
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-card hover:bg-primary/10 flex items-center justify-center transition-colors group">
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-card hover:bg-primary/10 flex items-center justify-center transition-colors group">
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-card hover:bg-primary/10 flex items-center justify-center transition-colors group">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} ClikXo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
