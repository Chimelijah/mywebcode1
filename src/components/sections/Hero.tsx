import heroProfile from "@/assets/hero-profile-new.jpg";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/use-parallax";

const Hero = () => {
  const parallaxRef = useParallax(0.3);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Full Cover Background Image with Parallax */}
      <div className="absolute inset-0 z-0" ref={parallaxRef}>
        <img 
          src={heroProfile} 
          alt="Elijah Chimera - Cloud Security Professional"
          className="w-full h-full min-w-full min-h-full object-cover object-center"
          style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/20 rounded-full animate-float animation-delay-200" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary/25 rounded-full animate-float animation-delay-400" />
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-primary/30 rounded-full animate-float" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary/15 rounded-full blur-3xl animate-glow animation-delay-200" />
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse animation-delay-400" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-between h-full py-20">
        {/* Top Spacer for face visibility */}
        <div className="flex-[0.4]" />

        {/* Middle Section - Introduction (below face) */}
        <div className="text-center animate-fade-in flex-[0.3]">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-3 tracking-tight drop-shadow-2xl">
            Hey I'm <span className="text-primary font-bold">Elijah</span>
          </h1>
          <p className="font-sans text-xl md:text-2xl text-white/90 font-light tracking-widest drop-shadow-lg uppercase">
            AWS SAA, CEH
          </p>
        </div>

        {/* Tagline */}
        <div className="text-center max-w-3xl animate-fade-in animation-delay-200 flex-[0.2]">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed tracking-wide drop-shadow-lg italic">
            Bridging the gap between{" "}
            <span className="font-bold text-primary not-italic">cloud architecture</span>
            {" "}and{" "}
            <span className="font-bold text-primary not-italic">cybersecurity</span>.
          </p>
        </div>

        {/* Bottom Section - CTA */}
        <div className="mb-16 animate-fade-in animation-delay-400 flex-[0.1]">
          <Button 
            size="lg"
            className="font-sans text-lg px-10 py-7 rounded-full font-bold tracking-wider hover:scale-105 transition-transform shadow-2xl"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Hire Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
