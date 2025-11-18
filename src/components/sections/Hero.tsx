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
      {/* Dark Background with Red Glow */}
      <div ref={parallaxRef} className="absolute inset-0 z-0 bg-gradient-to-br from-background via-card to-background" />
      
      {/* Animated Red Glow Effect */}
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[200px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[180px] animate-float" style={{ animationDelay: '1.5s' }} />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className={`grid lg:grid-cols-12 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Image - Left 2/3 */}
          <div className="lg:col-span-7 flex justify-center lg:justify-start animate-fade-in">
            <div className="relative group">
              <div className="w-80 h-80 md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] rounded-3xl overflow-hidden shadow-[var(--shadow-glow)] transition-all duration-500 group-hover:shadow-[0_0_100px_hsl(0_85%_55%/0.7)]">
                <div className="relative w-full h-full">
                  <img 
                    src={heroProfile} 
                    alt="Elijah Chimera - Cloud Security Professional"
                    className="w-full h-full object-cover"
                  />
                  {/* Red gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-transparent to-primary/30 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-70" />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content - Right 1/3 */}
          <div className="lg:col-span-5 space-y-10 text-center lg:text-left animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Main Title */}
            <div className="space-y-6">
              <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] tracking-tight">
                <span className="block text-foreground uppercase">Security That</span>
                <span className="block text-foreground uppercase">Works</span>
                <span className="block bg-gradient-to-r from-primary via-red-500 to-primary bg-clip-text text-transparent uppercase">Harder</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-foreground font-bold tracking-wider uppercase">
                Elijah Chimera
              </h2>
              <p className="text-muted-foreground text-sm md:text-base tracking-wide uppercase">
                Cloud Security Engineer
              </p>
            </div>

            {/* Stats Display */}
            <div className="grid grid-cols-2 gap-8 py-8 border-t border-b border-border/30">
              <div className="text-center lg:text-left space-y-2">
                <div className="text-5xl md:text-6xl font-black text-primary">100+</div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Lab Challenges<br/>Completed</div>
              </div>
              <div className="text-center lg:text-left space-y-2">
                <div className="text-5xl md:text-6xl font-black text-primary">5+</div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Cloud Projects<br/>Deployed</div>
              </div>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {skills.slice(0, 4).map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-card border border-primary/20 text-foreground text-xs md:text-sm font-medium uppercase tracking-wide hover:border-primary/50 transition-colors">
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <Button 
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base uppercase tracking-wider px-10 py-7 shadow-[var(--shadow-glow)] hover:shadow-[0_0_100px_hsl(0_85%_55%/0.8)] hover:scale-105 transition-all duration-300"
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
        <ArrowDown className="text-primary" size={32} />
      </a>
    </section>
  );
};

export default Hero;
