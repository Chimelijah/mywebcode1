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
      {/* Gradient Background with Parallax */}
      <div ref={parallaxRef} className="absolute inset-0 z-0 bg-gradient-to-r from-background via-background to-background" />
      
      {/* Animated Glow Effects - Red and Cyan */}
      <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-primary/25 rounded-full blur-[150px] animate-float" />
      <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-accent/25 rounded-full blur-[150px] animate-float" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className={`grid lg:grid-cols-12 gap-8 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Image - Left 2/3 */}
          <div className="lg:col-span-7 flex justify-center lg:justify-start animate-fade-in">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-2xl overflow-hidden border-2 border-primary/40 shadow-[var(--shadow-glow)] animate-glow">
                <img 
                  src={heroProfile} 
                  alt="Elijah Chimera - Cloud Security Professional"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Red and Cyan gradient overlay on edges */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/40 via-transparent to-accent/40 pointer-events-none" />
            </div>
          </div>

          {/* Text Content - Right 1/3 */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="font-bold text-6xl md:text-7xl lg:text-8xl leading-tight">
                <span className="text-gradient block">Cloud Security</span>
                <span className="text-gradient block">Engineer</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-foreground font-semibold">
                Elijah Chimera
              </h2>
            </div>

            {/* Flowing Skills Ribbon */}
            <div className="relative overflow-hidden py-4 -mx-6 lg:mx-0" style={{ transform: 'rotate(-2deg)' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary to-secondary opacity-95" />
              <div className="relative flex gap-8 animate-marquee whitespace-nowrap">
                {[...skills, ...skills].map((skill, index) => (
                  <span key={index} className="text-secondary-foreground font-bold text-lg px-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats Display */}
            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="text-center lg:text-left">
                <div className="text-4xl md:text-5xl font-bold text-gradient">100+</div>
                <div className="text-sm text-muted-foreground mt-1">Lab Challenges<br/>Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl md:text-5xl font-bold text-gradient">5+</div>
                <div className="text-sm text-muted-foreground mt-1">Cloud Projects<br/>Deployed</div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Button 
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-8 py-6 shadow-[var(--shadow-glow-secondary)] hover:scale-105 transition-all"
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="text-secondary" size={32} />
      </a>
    </section>
  );
};

export default Hero;
