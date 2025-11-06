import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Building a CI/CD Pipeline with AWS",
      description: "Designed and implemented a scalable, fully automated continuous integration and deployment pipeline using AWS native services.",
      role: "DevOps Engineer",
      technologies: ["AWS CodePipeline", "AWS CodeBuild", "AWS CodeDeploy", "GitHub"],
      outcome: "Reduced time-to-deployment from manual steps to less than 5 minutes per cycle",
      link: "https://medium.com/@elijahchimera01"
    },
    {
      title: "Create Kubernetes Manifests",
      description: "Engineered Kubernetes manifests and Docker images to deploy a multi-tier backend application with high availability.",
      role: "Containerization and Orchestration Specialist",
      technologies: ["Kubernetes", "Docker", "AWS EKS", "AWS ECR", "YAML"],
      outcome: "Successfully deployed a highly available application cluster, validating environment configuration concepts",
      link: "https://medium.com/@elijahchimera01"
    },
    {
      title: "Create S3 Buckets with Terraform",
      description: "Developed a reusable Infrastructure as Code (IaC) configuration using Terraform for automated AWS S3 bucket deployment.",
      role: "IaC Developer",
      technologies: ["Terraform", "AWS S3", "AWS CLI", "HCL"],
      outcome: "Created a single, idempotent script capable of deploying secure, pre-configured infrastructure",
      link: "https://medium.com/@elijahchimera01"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-6xl mb-4">
              <span className="text-gradient">Projects</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent" />
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              AWS Cloud-based projects demonstrating expertise in DevOps, containerization, and Infrastructure as Code
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="p-6 border-border hover:border-primary/50 transition-all duration-300 group animate-slide-up flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title} on Medium`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-primary mb-3">{project.role}</p>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border mt-auto">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary font-semibold">Outcome:</span> {project.outcome}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12 animate-fade-in">
            <a 
              href="https://medium.com/@elijahchimera01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-[var(--shadow-glow)] transition-all duration-300 font-semibold"
            >
              View All Projects on Medium
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
