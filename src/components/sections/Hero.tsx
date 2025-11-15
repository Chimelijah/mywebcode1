import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroProfile from "@/assets/hero-profile-large.jpg";

const Hero = () => {
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-purple-950/20 to-background" />
      
      {/* Animated Glow Effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Profile Image - Left 2/3 */}
          <div className="lg:col-span-7 flex justify-center lg:justify-start animate-fade-in">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-3xl overflow-hidden border-4 border-primary/30 shadow-[var(--shadow-glow)] animate-glow">
                <img 
                  src={heroProfile} 
                  alt="Elijah Chimera - Cloud Security Professional"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Purple gradient overlay on edges */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/30 via-transparent to-secondary/30 pointer-events-none" />
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
            <div className="relative overflow-hidden py-4 -mx-6 lg:mx-0" style={{ transform: 'rotate(-3deg)' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-yellow-400 to-primary opacity-90" />
              <div className="relative flex gap-8 animate-marquee whitespace-nowrap">
                {[...skills, ...skills].map((skill, index) => (
                  <span key={index} className="text-background font-bold text-lg px-2">
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
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 shadow-[var(--shadow-glow)] hover:scale-105 transition-all"
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
