import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowBackToTop(currentY > 320);
      setIsScrollingUp(currentY < lastScrollY);
      lastScrollY = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`border-t border-border/60 transition-opacity duration-500 ${isScrollingUp ? "opacity-60" : "opacity-100"}`}
    >
      <div className="container mx-auto px-6 h-[60px] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {currentYear} Elijah Chimera. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/elijah-chimera-938718261"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Chimelijah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://medium.com/@elijahchimera01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Medium
          </a>
        </div>
      </div>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="back-to-top-button"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
