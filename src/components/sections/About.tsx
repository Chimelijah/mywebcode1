import { Shield, Cloud, Code, Target } from "lucide-react";
import aboutTimeline from "@/assets/about-timeline.jpg";

const About = () => {
  const highlights = [
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "AWS Certified with expertise in designing resilient, scalable infrastructures using the Well-Architected Framework"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Certified Ethical Hacker specializing in penetration testing, offensive and defensive security strategies"
    },
    {
      icon: Code,
      title: "DevOps & Automation",
      description: "Proficient in CI/CD pipelines, containerization with Docker and Kubernetes, and Infrastructure as Code"
    },
    {
      icon: Target,
      title: "Compliance & Risk",
      description: "87% reduction in operational risks through strict adherence to regulatory frameworks and security best practices"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      {/* Timeline Banner */}
      <div className="w-full h-64 md:h-80 mb-16 relative overflow-hidden">
        <img 
          src={aboutTimeline} 
          alt="Academic and Professional Journey" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      <div className="container mx-auto px-6 -mt-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-6xl mb-4">
              <span className="text-gradient">About Me</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent" />
          </div>

          {/* Introduction */}
          <div className="space-y-8 mb-16 animate-slide-up">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">Elijah Chimera</span>, an avid technology professional in cloud, 
              cybersecurity and AI with practical experience in building systems that are efficient, secure and compliant. 
              I sit at the intersection of regulatory rigor and technical agility, driven by the belief that the best 
              solutions are both well-governed and highly scalable.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              My professional journey has been focused on driving measurable improvements through disciplined processes 
              and data analysis. From reducing administrative costs by 37% through automation at the Communications Authority, 
              to achieving an 87% reduction in operational risks at KCB Bank through strict compliance adherence.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="text-primary" size={24} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-card to-secondary/20 border border-border rounded-lg p-8 animate-fade-in">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl md:text-3xl text-foreground">My Focus</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm actively seeking junior level roles as a <span className="text-primary font-semibold">Solutions Architect Associate</span>, 
                <span className="text-primary font-semibold"> Cloud Security Engineer</span>, or 
                <span className="text-primary font-semibold"> Cybersecurity Analyst</span> which will expose me further to 
                learn from seasoned industry experts and to grow in the technology sector. My deep background in regulatory 
                compliance and dedicated training in Ethical Hacking and cloud computing informs a security-first mindset, 
                making me uniquely positioned to design and test hardened, defensible cloud infrastructures and networks.
              </p>
              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-[var(--shadow-glow)] transition-all duration-300 font-semibold"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
