import heroProfile from "@/assets/hero-profile-new.jpg";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/use-parallax";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const parallaxRef = useParallax(0.3);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Immersive Background with Parallax */}
      <div className="absolute inset-0 z-0" ref={parallaxRef}>
        <img
          src={heroProfile}
          alt="Elijah Chimera - Cloud Security Professional"
          className="w-full h-full min-w-full min-h-full object-cover"
          style={{ width: "100vw", height: "100vh", objectFit: "cover", objectPosition: "center 15%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background/90" />
        <div
          className="absolute inset-0 opacity-30 mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.2), transparent 45%), radial-gradient(circle at 80% 10%, rgba(255,0,0,0.2), transparent 50%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.1), transparent 55%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.4em] text-white/70 animate-fade-in" style={{ animationDelay: "0s" }}>
          Cloud Security • AWS • Cybersecurity
        </p>
        <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white tracking-tight drop-shadow-2xl">
            Hey I'm <span className="text-primary font-bold">Elijah</span>
          </h1>
          <p className="mt-4 font-sans text-xl md:text-2xl text-white/90 font-light tracking-[0.35em]">
            AWS SAA • CEH
          </p>
        </div>
        <p
          className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed tracking-wide drop-shadow-lg italic animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Bridging the gap between{" "}
          <span className="font-bold text-primary not-italic">cloud architecture</span> and{" "}
          <span className="font-bold text-primary not-italic">cybersecurity</span>.
        </p>
        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button
            className="h-12 px-10 rounded-[12px] text-lg font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.45)]"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Hire Me
          </Button>
        </div>
      </div>

      {/* Scroll Prompt */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/80">
        <span className="text-xs uppercase tracking-[0.5em]">Scroll</span>
        <button
          className="mt-3 h-12 w-12 rounded-full border border-white/40 flex items-center justify-center text-white transition-all duration-300 hover:bg-white/10 hover:border-white/70"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          aria-label="Scroll to About section"
        >
          <ChevronDown className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
