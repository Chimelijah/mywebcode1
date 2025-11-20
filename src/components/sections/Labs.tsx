import { Shield, Lock, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ctfWarroomUpdated from "@/assets/ctf-warroom-updated.jpg";
import lessonsLearnedMatrix from "@/assets/lessons-learned-matrix.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

const Labs = () => {
  const { ref: labsRef, isVisible } = useScrollAnimation(0.1);
  const parallaxRef = useParallax(0.2);
  
  const labs = [
    {
      title: "OWASP Top 10 2021",
      platform: "TryHackMe",
      icon: Shield,
      problem: "Identify and exploit various critical web application vulnerabilities based on the 2021 OWASP Top 10 list including Broken Access Control (IDOR), Cryptographic Failures, Injection attacks, and Security Misconfiguration.",
      approach: "Connected remotely via OpenVPN to perform exploits systematically. Captured flags for each vulnerability including IDOR, Command Injection, Cryptographic Failures, and Security Misconfiguration.",
      tools: ["Nmap", "Web Browser", "sqlite3", "CrackStation", "AttackBox/Terminal"],
      lessons: [
        "Defense in Depth: An application is only as secure as its weakest link",
        "Source Code Review: Developers often leave artifacts or expose information through poor configuration",
        "Input Sanitization: Critical importance of using allow lists and strong input validation"
      ]
    },
    {
      title: "Sequel",
      platform: "Hack The Box",
      icon: Lock,
      problem: "Gain unauthorized access on the target Linux machine by exploiting a web application vulnerability, then escalate privileges to root user.",
      approach: "Initial foothold via SQL Injection in CMS login function. Used discovered credentials for SSH access. Performed thorough local enumeration discovering non-standard group membership with PATH write permissions. Exploited PATH hijacking to escalate to root.",
      tools: ["Nmap", "Gobuster", "SQLMap", "Linux utilities (find, ls, echo/cat)"],
      lessons: [
        "SQL Injection Impact: Single SQLi flaw can lead to complete compromise",
        "PATH Hijacking: Effective privilege escalation when applications call commands without absolute paths",
        "Enumeration is Critical: Checking file permissions, user groups, and environment variables reveals escalation paths"
      ]
    },
    {
      title: "Meow",
      platform: "Hack The Box",
      icon: Terminal,
      problem: "Introduction to basic network enumeration and initial access by exploiting a common misconfiguration on a 'very easy' level machine.",
      approach: "Executed standard port scan revealing Redis service on high-numbered port. Connected to unauthenticated Redis instance and retrieved user flag directly from database. Root access was readily available due to the box's intentionally simple configuration.",
      tools: ["Nmap", "Netcat/Telnet", "redis-cli"],
      lessons: [
        "Simple Services Matter: Not all vulnerabilities are complex web flaws",
        "Authentication is Essential: Any networked service must have proper authentication",
        "Default Configuration Risks: Default and weak configurations are common attack paths"
      ]
    },
    {
      title: "RootMe Room",
      platform: "TryHackMe",
      icon: Terminal,
      problem: "Gain root access to a vulnerable Linux machine in this beginner CTF room focused on web exploitation and privilege escalation.",
      approach: "Scanned ports to identify SSH and Apache services. Enumerated web directories to find a file upload panel. Bypassed PHP upload restrictions by using a .php5 extension for a reverse shell payload. Obtained a www-data shell, upgraded it to interactive TTY, and retrieved the user flag. Identified SUID Python binary and exploited it to spawn a root shell, capturing the root flag.",
      tools: ["Nmap", "Gobuster", "Burp Suite", "Netcat", "Python"],
      lessons: [
        "Extension manipulation can bypass simplistic file upload filters",
        "SUID binaries like Python offer straightforward privesc paths if permissions are retained",
        "Upgrading shells to full TTY enhances usability in restricted environments",
        "Thorough recon uncovers hidden attack surfaces early"
      ]
    },
    {
      title: "Expressway Machine",
      platform: "Hack The Box",
      icon: Shield,
      problem: "Achieve full root ownership of this easy Linux machine, emphasizing network service enumeration and privilege escalation.",
      approach: "Conducted TCP and UDP Nmap scans to discover services including IKEv1 on UDP 500. Used ike-scan to capture PSK hash from Aggressive Mode responses. Cracked the PSK offline to gain SSH access as user 'ike' and retrieve the user flag. Enumerated local system, identifying vulnerable sudo version. Exploited CVE-2025-32463 (chroot escape in sudo) to escalate to root and capture the root flag.",
      tools: ["Nmap", "Ike-scan", "Hashcat/John the Ripper", "SSH", "Custom exploit script"],
      lessons: [
        "UDP scans are essential, as they reveal overlooked services like IKE/ISAKMP",
        "PSK cracking via ike-scan can unlock credential-based access in VPN setups",
        "Routine checks like sudo -V expose exploitable versions for privesc",
        "Combining network and local enumeration accelerates compromise in real-world scenarios"
      ]
    }
  ];

  return (
    <section id="labs" className="py-24 bg-secondary/20" ref={labsRef}>
      <div className={`container mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-6xl mb-4">
              <span className="text-gradient">Lab Challenges</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent" />
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Cybersecurity CTF challenges demonstrating practical skills in penetration testing, vulnerability assessment, and security analysis
            </p>
          </div>

          {/* Labs Accordion */}
          <Accordion type="single" collapsible className="space-y-6">
            {labs.map((lab, index) => {
              const Icon = lab.icon;
              return (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg overflow-hidden bg-card animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="p-0 hover:no-underline group">
                    {/* Challenge Header with War Room Image */}
                    <div className="relative w-full overflow-hidden">
                      <div className="absolute inset-0">
                        <img 
                          src={ctfWarroomUpdated}
                          alt="CTF Challenge War Room" 
                          className="w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
                      </div>
                      <div className="relative flex items-center gap-4 text-left px-6 py-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                          <Icon className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {lab.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{lab.platform}</p>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-6 pt-4">
                      {/* Problem Statement */}
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">Problem Statement</h4>
                        <p className="text-muted-foreground leading-relaxed">{lab.problem}</p>
                      </div>

                      {/* Approach */}
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">My Approach</h4>
                        <p className="text-muted-foreground leading-relaxed">{lab.approach}</p>
                      </div>

                      {/* Tools Used */}
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">Tools Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {lab.tools.map((tool, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1 bg-secondary text-secondary-foreground rounded text-sm"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Lessons */}
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Key Lessons Learned</h4>
                        <ul className="space-y-2">
                          {lab.lessons.map((lesson, i) => (
                            <li key={i} className="text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          {/* Lessons Learned Section with Parallax */}
          <div className="mt-16 relative rounded-lg overflow-hidden">
            <div className="absolute inset-0">
              <div ref={parallaxRef} className="w-full h-full">
                <img 
                  src={lessonsLearnedMatrix}
                  alt="Security Lessons Learned" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70" />
            </div>
            <div className="relative p-8 md:p-12 text-center">
              <h3 className="font-serif text-2xl md:text-3xl mb-4 text-foreground">
                Continuous Learning in Cybersecurity
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Each challenge reinforces defense in depth, the importance of proper authentication, 
                and the critical need for secure configurations. From vulnerability discovery to system fortification.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a 
                  href="https://tryhackme.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-[var(--shadow-glow)] transition-all"
                >
                  TryHackMe
                </a>
                <a 
                  href="https://hackthebox.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-[var(--shadow-glow)] transition-all"
                >
                  Hack The Box
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Labs;
