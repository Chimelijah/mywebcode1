import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Text */}
          <div className="flex-1 space-y-4 animate-slide-up">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl">
              <span className="block text-muted-foreground">between</span>
              <span className="block text-foreground">Cloud</span>
            </h1>
          </div>

          {/* Center Circular Image */}
          <div className="relative animate-fade-in">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/50 shadow-[var(--shadow-glow)] relative">
              <img 
                src={profilePhoto} 
                alt="Elijah Chimera - Cloud Security Professional"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" style={{ animation: 'pulse 3s ease-in-out infinite' }} />
          </div>

          {/* Right Text */}
          <div className="flex-1 space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-right">
              <span className="block text-muted-foreground">&</span>
              <span className="block text-foreground">Security</span>
            </h1>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center mt-12 space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-xl md:text-2xl tracking-[0.3em] text-muted-foreground uppercase">
            Bridging Architecture & Defense
          </h2>
          <div className="flex items-center justify-center gap-4 text-sm tracking-wider text-primary">
            <span>AWS SAA</span>
            <span>|</span>
            <span>CEH</span>
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

      {/* Side Text */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-left">
        <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
          Scroll Down
        </p>
      </div>
    </section>
  );
};

export default Hero;
