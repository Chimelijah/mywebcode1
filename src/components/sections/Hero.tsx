import heroProfile from "@/assets/hero-profile-new.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full Cover Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroProfile} 
          alt="Elijah Chimera - Cloud Security Professional"
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/20 to-background/40" />
      </div>
    </section>
  );
};

export default Hero;
