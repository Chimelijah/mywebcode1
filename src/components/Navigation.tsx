import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#resume", label: "Resume" },
    { href: "#projects", label: "Projects" },
    { href: "#labs", label: "Labs" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-serif font-bold text-foreground hover:text-primary transition-colors">
            EC
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-6 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border/50 text-sm text-foreground hover:bg-card/80 hover:border-primary/50 transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/elijah-chimera-938718261"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border/50 text-sm text-foreground hover:bg-card/80 hover:border-primary/50 transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Chimelijah"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border/50 text-sm text-foreground hover:bg-card/80 hover:border-primary/50 transition-all"
            >
              Github
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 space-y-3 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-6 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border/50 text-sm text-foreground hover:bg-card/80 hover:border-primary/50 transition-all text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/elijah-chimera-938718261"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border/50 text-sm text-foreground hover:bg-card/80 hover:border-primary/50 transition-all text-center"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Chimelijah"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border/50 text-sm text-foreground hover:bg-card/80 hover:border-primary/50 transition-all text-center"
              >
                Github
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
