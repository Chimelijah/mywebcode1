import { ShieldCheck, Layers, Scale, Cpu, BadgeCheck, ArrowUpRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const methodology = [
  {
    title: "Security by Default",
    description:
      "Security-first architecture that integrates controls and defensive measures at design time to prevent vulnerabilities.",
    icon: ShieldCheck,
  },
  {
    title: "Architectural Rigor",
    description:
      "Disciplined adherence to the AWS Well-Architected Framework across all five pillars for resilient cloud systems.",
    icon: Layers,
  },
  {
    title: "Process Optimization",
    description:
      "Automation-led execution to make processes repeatable, auditable, and less prone to human error.",
    icon: Cpu,
  },
  {
    title: "Regulatory Discipline",
    description:
      "Built-in compliance guardrails covering access controls, data privacy, and risk governance from the outset.",
    icon: Scale,
  },
];

const focusAreas = [
  {
    domain: "Cloud Architecture",
    detail: "Designing resilient, cost-optimized, and highly available infrastructures.",
    badge: "Actively Studying: AWS SAA",
  },
  {
    domain: "Cybersecurity",
    detail: "Applying offensive and defensive strategies to harden systems.",
    badge: "Actively Studying: CEH",
  },
  {
    domain: "DevOps & IaC",
    detail: "Standing up CI/CD pipelines, container orchestration, and IaC automation.",
    badge: "Docker • Kubernetes • Terraform",
  },
  {
    domain: "Compliance & Risk",
    detail: "Embedding regulatory adherence and security best practices for trust.",
    badge: "Strong Applied Knowledge",
  },
];

const About = () => {
  const { ref: aboutRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={aboutRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,0,0,0.2), transparent 55%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.08), transparent 45%), linear-gradient(120deg, rgba(2,2,2,0.9), rgba(10,10,10,0.8))",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <div
          className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Photo */}
          <div className="relative order-1 md:order-none">
            <div className="absolute inset-0 blur-3xl bg-primary/20 scale-105" />
            <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-3">
              <img
                src={profilePhoto}
                alt="Elijah Chimera portrait"
                className="w-full h-full object-cover rounded-3xl shadow-2xl animate-photo-float"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 text-muted-foreground">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.45em] text-primary">Architecture, Automation, and Imagination</p>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight">
              The Intersection of Cloud Architecture and Cyber Defense
              </h2>
              <p className="text-lg text-foreground/90 leading-relaxed">
                I am a results-oriented technology professional specializing in{" "}
                <strong>Cloud Architecture, Cybersecurity, and AI</strong>. My mission is to bridge technical agility
                with regulatory rigorbuilding systems that are <strong>highly scalable</strong>,{" "}
                <strong>secure by design</strong>, and <strong>compliant with industry standards</strong>. My collaborative and iterative exploration
                methodology and curious guardian mindset enable me to ensure teams innovate securely and scale with precision.
              </p>
              <p className="text-base leading-relaxed">
                I pair security-first architecture with continuous improvement, ensuring automation, repeatability, and
                provable compliance across every engagement.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-foreground text-2xl font-semibold">Professional Excellence & Methodology</h3>
              <div className="grid gap-4">
                {methodology.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-foreground animate-fade-in"
                      style={{ animationDelay: `${index * 0.2}s` }}
                      data-aos="fade-up"
                      data-aos-delay={index * 200 + 100}
                    >
                      <div className="mt-1 rounded-full bg-primary/15 text-primary p-2">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="text-sm text-white/70">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-foreground text-2xl font-semibold">Technical Focus Areas</h3>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <table className="w-full text-sm">
                  <thead className="text-left text-muted-foreground uppercase tracking-widest text-xs">
                    <tr>
                      <th className="px-4 py-3 font-medium">Domain</th>
                      <th className="px-4 py-3 font-medium">Expertise & Focus</th>
                      <th className="px-4 py-3 font-medium">Key Tooling / Certification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {focusAreas.map((area, index) => (
                      <tr
                        key={area.domain}
                        className="border-t border-white/5 text-foreground animate-fade-in"
                        style={{ animationDelay: `${0.2 * index + 0.3}s` }}
                        data-aos="fade-up"
                        data-aos-delay={index * 200 + 200}
                      >
                        <td className="px-4 py-4 font-semibold">{area.domain}</td>
                        <td className="px-4 py-4 text-sm text-white/80">{area.detail}</td>
                        <td className="px-4 py-4">
                          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary font-medium">
                            <BadgeCheck size={14} />
                            {area.badge}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/10 to-transparent p-6 text-center text-white">
              <h3 className="text-2xl font-semibold mb-3">Looking for a Security-First Cloud Engineer?</h3>
              <p className="text-sm md:text-base text-white/80 mb-5">
                I am pursuing entry-to-mid-level roles in DevSecOps, Security Engineering, or Cloud Architecture—
                bringing the speed of a passionate technologist with the rigor of a compliance lead.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                <span className="px-4 py-2 rounded-full bg-white/10 text-white">DevSecOps</span>
                <span className="px-4 py-2 rounded-full bg-white/10 text-white">Security Engineering</span>
                <span className="px-4 py-2 rounded-full bg-white/10 text-white">Cloud Architecture</span>
              </div>
              <button
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-primary-foreground text-sm font-semibold hover:scale-105 transition"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Connect with Elijah
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
