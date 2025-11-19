import heroProfile from "@/assets/hero-profile-new.jpg";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/use-parallax";

const Hero = () => {
  const parallaxRef = useParallax(0.3);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Full Cover Background Image with Parallax */}
      <div className="absolute inset-0 z-0" ref={parallaxRef}>
        <img 
          src={heroProfile} 
          alt="Elijah Chimera - Cloud Security Professional"
          className="w-full h-full object-cover object-[center_25%]"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/80" />
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
