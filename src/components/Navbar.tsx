import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, ArrowRight, Sparkles, Home, Layers, Info, Users, FolderOpen, Mail } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import useScrollSpy from "@/hooks/use-scroll-spy";

const Navbar = () => {
  const location = useLocation();
  if (import.meta.env.DEV) {
    const params = new URLSearchParams(location.search);
    if (params.has("__throw_error")) {
      throw new Error("Dev test error");
    }
  }
  const isHomePage = location.pathname === '/';

  // Use scroll spy for active section detection on home page
  const sectionIds = isHomePage ? ['services', 'about', 'team', 'portfolio', 'contact'] : [];
  const activeSection = useScrollSpy(sectionIds, 100); // 100px offset for navbar height

  const getLinkClasses = (isActive = false) => `px-4 py-2 font-medium rounded-lg ${isActive ? 'text-primary' : 'text-foreground hover:text-primary'} transition-colors`;
  const getMobileLinkClasses = (isActive = false) => `flex items-center w-full text-left px-4 py-4 transition-all duration-200 font-medium rounded-lg ${isActive ? 'text-primary bg-primary/5' : 'text-foreground/80 hover:text-primary hover:bg-primary/5'}`;

  

  return (
    <header role="banner" className="sticky top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border/40">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-primary/30 via-orange-glow/30 to-primary/30" />
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-20 lg:min-h-24">
          <Link to="/" className="flex items-center z-10 flex-shrink-0 group rounded-xl p-2 -m-2" aria-label="ClikXo Studio Home">
            <Sparkles className="text-primary w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" aria-hidden="true" />
            <span className="ml-4 text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-foreground group-hover:text-primary transition-all duration-300 tracking-tight drop-shadow-sm">ClikXo Studio</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-2 flex-1 justify-center mx-8" role="navigation" aria-label="Main navigation">
            {isHomePage ? (
              <>
                <Link to="/" className={`relative group inline-block ${getLinkClasses()}`} aria-label="Home">
                  Home
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-primary via-orange-glow to-primary transition-all duration-300 group-hover:w-full" />
                </Link>
                <a href="#services" className={`relative group inline-block ${getLinkClasses(activeSection === 'services')}`} aria-label="Services">
                  Services
                  <span className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-primary via-orange-glow to-primary transition-all duration-300 ${activeSection === 'services' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </a>
                <a href="#about" className={`relative group inline-block ${getLinkClasses(activeSection === 'about')}`} aria-label="About">
                  About
                  <span className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-primary via-orange-glow to-primary transition-all duration-300 ${activeSection === 'about' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </a>
                <a href="#team" className={`relative group inline-block ${getLinkClasses(activeSection === 'team')}`} aria-label="Team">
                  Team
                  <span className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-primary via-orange-glow to-primary transition-all duration-300 ${activeSection === 'team' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </a>
                <a href="#portfolio" className={`relative group inline-block ${getLinkClasses(activeSection === 'portfolio')}`} aria-label="Portfolio">
                  Portfolio
                  <span className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-primary via-orange-glow to-primary transition-all duration-300 ${activeSection === 'portfolio' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </a>
                <a href="#contact" className={`relative group inline-block ${getLinkClasses(activeSection === 'contact')}`} aria-label="Contact">
                  Contact
                  <span className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-primary via-orange-glow to-primary transition-all duration-300 ${activeSection === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </a>
              </>
            ) : (
              <>
                <Link to="/" className={`relative group inline-block ${getLinkClasses()}`} aria-label="Home">
                  Home
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-primary via-orange-glow to-primary transition-all duration-300 group-hover:w-full" />
                </Link>
                <Link to="/#services" className={`relative group inline-block ${getLinkClasses()}`} aria-label="Services">
                  Services
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-primary via-orange-glow to-primary transition-all duration-300 group-hover:w-full" />
                </Link>
                <Link to="/about" className={`relative group inline-block ${getLinkClasses(location.pathname === '/about')} ${location.pathname === '/about' ? 'text-primary' : ''}`} aria-label="About">
                  About
                  <span className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-primary via-orange-glow to-primary transition-all duration-300 ${location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
                <Link to="/team" className={`relative group inline-block ${getLinkClasses(location.pathname === '/team')} ${location.pathname === '/team' ? 'text-primary' : ''}`} aria-label="Team">
                  Team
                  <span className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-primary via-orange-glow to-primary transition-all duration-300 ${location.pathname === '/team' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
                <Link to="/portfolio" className={`relative group inline-block ${getLinkClasses(location.pathname === '/portfolio')} ${location.pathname === '/portfolio' ? 'text-primary' : ''}`} aria-label="Portfolio">
                  Portfolio
                  <span className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-primary via-orange-glow to-primary transition-all duration-300 ${location.pathname === '/portfolio' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
                <Link to="/contact" className={`relative group inline-block ${getLinkClasses(location.pathname === '/contact')} ${location.pathname === '/contact' ? 'text-primary' : ''}`} aria-label="Contact">
                  Contact
                  <span className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-primary via-orange-glow to-primary transition-all duration-300 ${location.pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              </>
            )}
          </nav>

          <div className="flex items-center gap-4 lg:gap-6">
            <a href="tel:+97144318653" className="flex items-center gap-3 hover:bg-primary/10 rounded-lg p-2 -m-2 transition-colors duration-200" aria-label="Call ClikXo Studio at +971 44318653">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground hidden sm:inline">+971 44318653</span>
              <span className="text-sm font-medium text-foreground sm:hidden">Call</span>
            </a>

            <div className="hidden xl:block">
              <Link to="/contact" className="group relative px-8 py-3 bg-gradient-to-r from-primary to-orange-glow text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300" aria-label="Get Started">
                <span className="flex items-center gap-3">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <button className="lg:hidden p-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors duration-200 min-w-[48px] min-h-[48px] flex items-center justify-center" aria-label="Open mobile menu">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0">
                <div className="px-4 pt-16 pb-8 space-y-2 max-w-3xl mx-auto">
                  {isHomePage ? (
                    <>
                      <SheetClose asChild>
                        <Link to="/" className={getMobileLinkClasses()} aria-label="Home"><Home className="w-5 h-5 text-primary mr-3" /><span>Home</span></Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <a href="#services" className={getMobileLinkClasses(activeSection === 'services')} aria-label="Services"><Layers className="w-5 h-5 text-primary mr-3" /><span>Services</span></a>
                      </SheetClose>
                      <SheetClose asChild>
                        <a href="#about" className={getMobileLinkClasses(activeSection === 'about')} aria-label="About"><Info className="w-5 h-5 text-primary mr-3" /><span>About</span></a>
                      </SheetClose>
                      <SheetClose asChild>
                        <a href="#team" className={getMobileLinkClasses(activeSection === 'team')} aria-label="Team"><Users className="w-5 h-5 text-primary mr-3" /><span>Team</span></a>
                      </SheetClose>
                      <SheetClose asChild>
                        <a href="#portfolio" className={getMobileLinkClasses(activeSection === 'portfolio')} aria-label="Portfolio"><FolderOpen className="w-5 h-5 text-primary mr-3" /><span>Portfolio</span></a>
                      </SheetClose>
                      <SheetClose asChild>
                        <a href="#contact" className={getMobileLinkClasses(activeSection === 'contact')} aria-label="Contact"><Mail className="w-5 h-5 text-primary mr-3" /><span>Contact</span></a>
                      </SheetClose>
                    </>
                  ) : (
                    <>
                      <SheetClose asChild>
                        <Link to="/" className={getMobileLinkClasses()} aria-label="Home"><Home className="w-5 h-5 text-primary mr-3" /><span>Home</span></Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link to="/#services" className={getMobileLinkClasses()} aria-label="Services"><Layers className="w-5 h-5 text-primary mr-3" /><span>Services</span></Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link to="/about" className={getMobileLinkClasses(location.pathname === '/about')} aria-label="About"><Info className="w-5 h-5 text-primary mr-3" /><span>About</span></Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link to="/team" className={getMobileLinkClasses(location.pathname === '/team')} aria-label="Team"><Users className="w-5 h-5 text-primary mr-3" /><span>Team</span></Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link to="/portfolio" className={getMobileLinkClasses(location.pathname === '/portfolio')} aria-label="Portfolio"><FolderOpen className="w-5 h-5 text-primary mr-3" /><span>Portfolio</span></Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link to="/contact" className={getMobileLinkClasses(location.pathname === '/contact')} aria-label="Contact"><Mail className="w-5 h-5 text-primary mr-3" /><span>Contact</span></Link>
                      </SheetClose>
                    </>
                  )}
                  <div className="pt-6 border-t border-border">
                    <SheetClose asChild>
                      <Link to="/contact" className="group w-full relative px-6 py-4 bg-gradient-to-r from-primary to-orange-glow text-white font-bold text-base rounded-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 active:scale-95 transition-all duration-300" aria-label="Get Started">
                        <span className="flex items-center justify-center gap-3">
                          <span>Get Started</span>
                          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
