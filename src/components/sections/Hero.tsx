import heroProfile from "@/assets/hero-profile-new.jpg";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/use-parallax";

const Hero = () => {
  const parallaxRef = useParallax(0.3);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full Cover Background Image with Parallax - Adjusted for face visibility */}
      <div className="absolute inset-0 z-0" ref={parallaxRef}>
        <img 
          src={heroProfile} 
          alt="Elijah Chimera - Cloud Security Professional"
          className="w-full h-full object-cover object-[center_20%]"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/30 to-background/60" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-between min-h-screen py-20">
        {/* Spacer for face */}
        <div className="flex-1" />

        {/* Middle Section - Introduction (below face) */}
        <div className="text-center animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-2 tracking-wide drop-shadow-lg">
            Hey I'm <span className="text-primary font-bold">Elijah</span>
          </h1>
          <p className="text-lg md:text-xl text-white font-light tracking-wider drop-shadow-lg">
            AWS SAA, CEH
          </p>
        </div>

        {/* Tagline */}
        <div className="text-center max-w-3xl animate-fade-in animation-delay-200 mt-8">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed tracking-wide drop-shadow-lg">
            Bridging the gap between{" "}
            <span className="font-semibold text-primary">cloud architecture</span>
            {" "}and{" "}
            <span className="font-semibold text-primary">cybersecurity</span>.
          </p>
        </div>

        {/* Bottom Section - CTA */}
        <div className="mb-20 animate-fade-in animation-delay-400">
          <Button 
            size="lg"
            className="text-lg px-8 py-6 rounded-full font-semibold tracking-wide hover:scale-105 transition-transform"
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
