import { GraduationCap, Briefcase, Award, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Resume = () => {
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
    "Certified Ethical Hacker, Cisco Networking Academy - USIU Africa (Ongoing)",
    "Solutions Architect Associate, AWS (Ongoing)",
    "Python Essentials I, Cisco Networking Academy - May 10, 2025",
    "AWS Certified Cloud Practitioner, eMobilis Technology Academy - August 20, 2025",
    "Cybersecurity Fundamentals, IBM Skills Build - March 29, 2025",
    "Machine Learning for Data Science Projects, IBM Skills Build - March 26, 2025",
    "Enterprise Data Science in Practice, IBM Skills Build - March 20, 2025",
    "Data Fundamentals, IBM Skills Build - March 06, 2025",
    "AI Fundamentals, IBM Skills Build - November 24, 2024",
    "Certified Investment and Financial Analyst, KASNEB - December 09, 2022"
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

  return (
    <section id="resume" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
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
              {experience.map((job, index) => (
                <Card 
                  key={index} 
                  className="p-6 border-border hover:border-primary/50 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
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
              ))}
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
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <Card 
                    key={index}
                    className="p-4 border-border hover:border-primary/50 transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <p className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>{cert}</span>
                    </p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills">
              <div className="flex items-center gap-3 mb-8">
                <Wrench className="text-primary" size={28} />
                <h3 className="font-serif text-2xl md:text-3xl">Skills & Tools</h3>
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
