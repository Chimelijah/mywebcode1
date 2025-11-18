import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroProfile from "@/assets/hero-profile-new.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

const Hero = () => {
  const { ref: heroRef, isVisible } = useScrollAnimation(0.1);
  const parallaxRef = useParallax(0.3);
  
  const skills = [
    "AWS SAA",
    "CEH",
    "Kubernetes",
    "Terraform",
    "Python",
    "DevOps",
    "Penetration Testing",
    "CI/CD"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={heroRef}>
      {/* Full Cover Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroProfile} 
          alt="Elijah Chimera - Cloud Security Professional"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex flex-col items-center justify-center text-center space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Title with Pill Backgrounds */}
          <div className="space-y-4">
            <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
              <span className="inline-block px-8 py-3 bg-card/90 backdrop-blur-sm rounded-full border border-primary/30 text-foreground mb-3">
                Security That
              </span>
              <br />
              <span className="inline-block px-8 py-3 bg-card/90 backdrop-blur-sm rounded-full border border-primary/30 text-foreground mb-3">
                Works
              </span>
              <br />
              <span className="inline-block px-8 py-3 bg-primary/90 backdrop-blur-sm rounded-full border border-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                Harder
              </span>
            </h1>
          </div>

          {/* Name and Role with Pill Backgrounds */}
          <div className="space-y-4">
            <h2 className="inline-block px-8 py-3 bg-card/90 backdrop-blur-sm rounded-full border border-primary/30 text-xl md:text-2xl lg:text-3xl text-foreground font-bold">
              Elijah Chimera
            </h2>
            <br />
            <p className="inline-block px-6 py-2 bg-muted/80 backdrop-blur-sm rounded-full border border-border text-sm md:text-base text-muted-foreground">
              Cloud Security Engineer
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="text-primary" size={32} />
      </a>
    </section>
  );
};

export default Hero;
