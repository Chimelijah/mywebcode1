import { Shield, Cloud, Code, Target, Award } from "lucide-react";
import aboutTimeline from "@/assets/about-timeline-modern.jpg";
import skillsHolographic from "@/assets/skills-holographic.jpg";

const About = () => {
  const highlights = [
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "AWS Certified with expertise in designing resilient, scalable infrastructures using the Well-Architected Framework",
      proficiency: 90
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Certified Ethical Hacker specializing in penetration testing, offensive and defensive security strategies",
      proficiency: 85
    },
    {
      icon: Code,
      title: "DevOps & Automation",
      description: "Proficient in CI/CD pipelines, containerization with Docker and Kubernetes, and Infrastructure as Code",
      proficiency: 88
    },
    {
      icon: Target,
      title: "Compliance & Risk",
      description: "87% reduction in operational risks through strict adherence to regulatory frameworks and security best practices",
      proficiency: 92
    }
  ];

  const certifications = [
    { name: "AWS Solutions Architect", badge: "AWS SAA", year: "2024" },
    { name: "Certified Ethical Hacker", badge: "CEH", year: "2024" },
    { name: "Kubernetes Administrator", badge: "CKA", year: "2023" },
  ];

  return (
    <section id="about" className="py-24 relative">
      {/* Timeline Banner with Parallax */}
      <div className="w-full h-64 md:h-80 mb-16 relative overflow-hidden">
        <img 
          src={aboutTimeline} 
          alt="Academic and Professional Journey" 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
        
        {/* Timeline Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-2">
            <h3 className="text-4xl font-bold text-gradient">2020 → 2024</h3>
            <p className="text-xl text-foreground/90">From Education to Enterprise Security</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="mb-16 animate-fade-in">
            <h2 className="font-bold text-5xl md:text-7xl mb-4">
              <span className="text-gradient">About Me</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-yellow-400 to-transparent" />
          </div>

          {/* Introduction */}
          <div className="space-y-8 mb-16 animate-slide-up">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I'm <span className="text-gradient font-bold text-2xl">Elijah Chimera</span>, an avid technology professional in cloud, 
              cybersecurity and AI with practical experience in building systems that are efficient, secure and compliant. 
              I sit at the intersection of regulatory rigor and technical agility, driven by the belief that the best 
              solutions are both well-governed and highly scalable.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              My professional journey has been focused on driving measurable improvements through disciplined processes 
              and data analysis. From reducing administrative costs by <span className="text-primary font-bold">37%</span> through automation at the Communications Authority, 
              to achieving an <span className="text-primary font-bold">87%</span> reduction in operational risks at KCB Bank through strict compliance adherence.
            </p>
          </div>

          {/* Skills Grid with Holographic Background */}
          <div 
            className="relative mb-16 p-8 rounded-3xl overflow-hidden border border-primary/20"
            style={{
              backgroundImage: `url(${skillsHolographic})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-purple-950/90 to-background/95" />
            
            <div className="relative grid md:grid-cols-2 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="backdrop-blur-glass border border-primary/30 rounded-xl p-6 hover:border-primary/60 hover:scale-105 transition-all duration-300 group animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:shadow-[var(--shadow-glow)] transition-all">
                          <Icon className="text-primary" size={28} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Proficiency Bar */}
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-muted-foreground mb-2">
                        <span>Proficiency</span>
                        <span className="text-primary font-bold">{item.proficiency}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-yellow-400 transition-all duration-1000"
                          style={{ width: `${item.proficiency}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gradient mb-8 flex items-center gap-3">
              <Award className="text-primary" size={32} />
              Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="relative group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="backdrop-blur-glass border border-primary/30 rounded-xl p-6 text-center hover:border-primary/60 hover:scale-105 transition-all duration-300">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl font-bold text-primary group-hover:shadow-[var(--shadow-glow)] transition-all">
                      {cert.badge}
                    </div>
                    <h4 className="font-bold text-lg text-foreground mb-1">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="backdrop-blur-glass border border-primary/30 rounded-2xl p-8 text-center animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">
              Looking for a Security-First Cloud Engineer?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              I'm seeking opportunities in cloud architecture, DevSecOps, or penetration testing roles where I can 
              apply my AWS and ethical hacking expertise to build resilient, compliant systems from the ground up.
            </p>
            <div className="flex flex-wrap gap-3 justify-center text-sm">
              <span className="px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30">
                Cloud Solutions Architect
              </span>
              <span className="px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                Security Engineer
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30">
                DevSecOps Specialist
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
