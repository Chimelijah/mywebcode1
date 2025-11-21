import { GraduationCap, Briefcase, Award, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import skillsCertifications from "@/assets/skills-certifications.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Resume = () => {
  const { ref: resumeRef, isVisible } = useScrollAnimation(0.1);
  const experience = [
    {
      title: "Intern",
      company: "Communications Authority of Kenya",
      location: "Nairobi, Kenya",
      period: "January 2025 – May 2025",
      achievements: [
        "Prepared 7 reports on competition trends and potential anti-competitive practices to inform regulatory decisions on a weekly basis",
        "Supported the development of regulatory frameworks in 5 sectors to promote fair competition in the industry, reducing complaints by 21%",
        "Collaborated with 5 departmental teams to ensure compliance of over 200 licensees with national competition laws"
      ]
    },
    {
      title: "Intern, Diaspora Banking",
      company: "KCB Bank",
      location: "Nairobi, Kenya",
      period: "May 2024 – August 2024",
      achievements: [
        "Developed risk management strategies, reducing operational risks by 87% through compliance with banking regulations",
        "Supported implementation of an online banking feature, attracting 193 new users in three weeks",
        "Prepared correspondence for over 107 client accounts, boosting satisfaction and engagement"
      ]
    },
    {
      title: "Accounting Intern",
      company: "State Department of Social Protection",
      location: "Nairobi, Kenya",
      period: "May 2023 – October 2023",
      achievements: [
        "Analyzed financial data to support budgeting decisions for programs serving over 7,900 beneficiaries",
        "Streamlined invoicing processes, reducing processing time by 63%, improving vendor relations",
        "Improved compliance with government regulations by 19% through meticulous record management"
      ]
    }
  ];

  const certifications = [
    {
      name: "Certified Ethical Hacker",
      issuer: "Cisco Networking Academy - USIU Africa",
      date: "September 24, 2025",
      status: "Ongoing",
      link: null
    },
    {
      name: "Solutions Architect Associate",
      issuer: "AWS",
      date: "September 15, 2025",
      status: "Ongoing",
      link: null
    },
    {
      name: "Python Essentials I",
      issuer: "Cisco Networking Academy",
      date: "May 10, 2025",
      status: "Completed",
      link: "https://www.credly.com/badges/fa90453b-7b06-4067-83d6-02359e1092d7/linked_in_profile"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "eMobilis Technology Academy",
      date: "August 20, 2025",
      status: "Completed",
      link: "https://www.credly.com/badges/e3e2783e-4639-4257-b459-19b4f69801e2/linked_in_profile"
    },
    {
      name: "Cybersecurity Fundamentals",
      issuer: "IBM Skills Build",
      date: "March 29, 2025",
      status: "Completed",
      link: "https://www.credly.com/badges/b7957bb2-34b1-4478-9563-e1d3d4bf473f/linked_in_profile"
    },
    {
      name: "Machine Learning for Data Science Projects",
      issuer: "IBM Skills Build",
      date: "March 26, 2025",
      status: "Completed",
      link: "https://www.credly.com/badges/51408fcc-cea1-4dbc-8ad2-73ee01d4ae97/linked_in_profile"
    },
    {
      name: "Enterprise Data Science in Practice",
      issuer: "IBM Skills Build",
      date: "March 20, 2025",
      status: "Completed",
      link: "https://www.credly.com/badges/b037882d-42bc-4495-b243-cf414b923614/linked_in_profile"
    },
    {
      name: "Data Fundamentals",
      issuer: "IBM Skills Build",
      date: "March 06, 2025",
      status: "Completed",
      link: "https://www.credly.com/badges/b4fe3c4c-881a-492e-a16f-3331f6c79802/public_url"
    },
    {
      name: "AI Fundamentals",
      issuer: "IBM Skills Build",
      date: "November 24, 2024",
      status: "Completed",
      link: "https://www.credly.com/badges/2c768d7c-d846-4747-aa5d-7295b5beda76"
    },
    {
      name: "Certified Investment and Financial Analyst",
      issuer: "KASNEB",
      date: "December 09, 2022",
      status: "Completed",
      link: null
    }
  ];

  const technicalSkills = [
    "AI & Machine Learning",
    "Cloud Computing (AWS)",
    "Penetration Testing",
    "Offensive & Defensive Security",
    "Modern Architecture Design",
    "Networking & Security",
    "CI/CD Pipelines",
    "Financial Modeling",
    "Python Programming"
  ];

  const tools = [
    "Linux", "AWS IAM", "Wireshark", "tcpdump", "Python", "Bash", "Terraform", 
    "AWS CloudFormation", "Docker", "Kubernetes", "RDS", "DynamoDB", 
    "AWS CodePipeline", "Draw.io", "Nmap", "Nessus", "Metasploit", 
    "BurpSuite", "Hashcat", "John the Ripper", "Aircrack-ng"
  ];

  const softSkills = [
    "Team Collaboration", "Time Management", "Problem Solving", "Effective Communication",
    "Attention to Detail", "Strategic Thinking", "Continuous Learning", "Stakeholder Management",
    "Leadership", "Ethical Judgement", "Technical Writing"
  ];

  const resumeBackground = {
    backgroundImage: `
      radial-gradient(circle at 15% 20%, rgba(255, 0, 0, 0.12), transparent 50%),
      radial-gradient(circle at 85% 10%, rgba(255, 255, 255, 0.08), transparent 55%),
      linear-gradient(130deg, rgba(8, 8, 8, 0.95) 30%, rgba(15, 12, 12, 0.9) 70%),
      repeating-linear-gradient(
        to right,
        rgba(255,255,255,0.06) 0px,
        rgba(255,255,255,0.06) 1px,
        transparent 1px,
        transparent 40px
      ),
      repeating-linear-gradient(
        to bottom,
        rgba(255,255,255,0.04) 0px,
        rgba(255,255,255,0.04) 1px,
        transparent 1px,
        transparent 40px
      )
    `,
  } as const;

  const timelinePathLength = experience.length * 220;
  const timelinePathD = `M20 20 V ${timelinePathLength}`;

  return (
    <section id="resume" className="relative py-24 overflow-hidden" ref={resumeRef}>
      <div className="absolute inset-0 -z-10" style={resumeBackground} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/95 via-background/90 to-background" />
      <div className="container mx-auto px-6 relative">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Title */}
          <div className="mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-6xl mb-4">
              <span className="text-gradient">Resume</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent" />
          </div>

          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>

            {/* Experience Tab */}
            <TabsContent value="experience" className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="text-primary" size={28} />
                <h3 className="font-serif text-2xl md:text-3xl">Work Experience</h3>
              </div>
              <div className="relative pl-10 md:pl-16">
                <svg
                  className="absolute left-0 top-0 hidden md:block"
                  width="60"
                  height={timelinePathLength + 40}
                  viewBox={`0 0 60 ${timelinePathLength + 40}`}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d={timelinePathD}
                    stroke="url(#timelineGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="timeline-path"
                    style={{
                      strokeDasharray: timelinePathLength,
                      strokeDashoffset: isVisible ? 0 : timelinePathLength,
                    }}
                  />
                  <defs>
                    <linearGradient id="timelineGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="space-y-10">
                  {experience.map((job, index) => (
                    <div key={index} className="relative">
                      <div className="absolute left-[-2.75rem] top-6 hidden md:flex items-center justify-center">
                        <span className="timeline-node">{index + 1}</span>
                      </div>
                      <Card
                        className="p-6 border-border hover:border-primary/50 transition-all duration-300 animate-slide-up timeline-card"
                        style={{ animationDelay: `${index * 0.12}s` }}
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-semibold text-foreground">{job.title}</h4>
                            <p className="text-primary font-medium">{job.company}</p>
                            <p className="text-sm text-muted-foreground">{job.location}</p>
                          </div>
                          <span className="text-sm text-muted-foreground mt-2 md:mt-0">{job.period}</span>
                        </div>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-primary" size={28} />
                <h3 className="font-serif text-2xl md:text-3xl">Education</h3>
              </div>
              <Card className="p-6 border-border hover:border-primary/50 transition-all duration-300 animate-slide-up">
                <h4 className="text-xl font-semibold text-foreground mb-2">BSc in Economics and Finance</h4>
                <p className="text-primary font-medium mb-2">Kabarak University, Nakuru, Kenya</p>
                <p className="text-sm text-muted-foreground mb-4">September 2020 – December 2024</p>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium">GPA: 3.82</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium">CA: 69.70</span>
                </div>
                <ul className="space-y-2">
                  <li className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>Completed coursework in sustainability management, statistics, financial modelling and project management</span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>Participated in CFA Institute Research Challenge 2024, analyzing Safaricom's investment performance</span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>President of General Assembly Kabarak MUN, Vice President of Business Students Association</span>
                  </li>
                </ul>
              </Card>
            </TabsContent>

            {/* Certifications Tab */}
            <TabsContent value="certifications">
              <div className="flex items-center gap-3 mb-8">
                <Award className="text-primary" size={28} />
                <h3 className="font-serif text-2xl md:text-3xl">Certifications</h3>
              </div>
              <div className="space-y-4 mb-6">
                <p className="text-muted-foreground text-sm">
                  View all my certifications on Credly:{" "}
                  <a 
                    href="https://www.credly.com/users/elijah-chimera/badges" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    credly.com/users/elijah-chimera/badges
                  </a>
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <Card 
                    key={index}
                    className="p-5 border-border hover:border-primary/50 transition-all duration-300 animate-slide-up group"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="font-semibold text-foreground">{cert.name}</h4>
                          {cert.status === "Ongoing" && (
                            <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full font-medium flex-shrink-0">
                              Ongoing
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                        <p className="text-xs text-muted-foreground mb-2">{cert.date}</p>
                        {cert.link && (
                          <a 
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-primary hover:underline inline-flex items-center gap-1 group-hover:text-primary/80"
                          >
                            View Credly Badge →
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills">
              {/* Skills Header with Background */}
              <div className="relative mb-8 rounded-lg overflow-hidden">
                <div className="absolute inset-0">
                  <img 
                    src={skillsCertifications} 
                    alt="Technical Skills Background" 
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
                </div>
                <div className="relative flex items-center gap-3 p-6">
                  <Wrench className="text-primary" size={28} />
                  <h3 className="font-serif text-2xl md:text-3xl">Skills & Tools</h3>
                </div>
              </div>
              
              <div className="space-y-8">
                {/* Technical Skills */}
                <Card className="p-6 border-border">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>

                {/* Tools */}
                <Card className="p-6 border-border">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm hover:bg-secondary/80 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </Card>

                {/* Soft Skills */}
                <Card className="p-6 border-border">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm hover:bg-muted/80 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Resume;
