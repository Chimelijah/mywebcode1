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
    { href: "#home", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#resume", label: "RESUME" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#labs", label: "LABS" },
    { href: "#contact", label: "CONTACT" },
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
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/elijah-chimera-938718261"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href="https://github.com/Chimelijah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              GITHUB
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
          <div className="md:hidden pt-4 pb-6 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-4 pt-4 border-t border-border">
              <a
                href="https://www.linkedin.com/in/elijah-chimera-938718261"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                LINKEDIN
              </a>
              <a
                href="https://github.com/Chimelijah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                GITHUB
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
