import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import cloudNetworkEnhanced from "@/assets/cloud-network-enhanced.jpg";
import projectBlueprintDesk from "@/assets/project-blueprint-desk.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

const Projects = () => {
  const { ref: projectsRef, isVisible } = useScrollAnimation(0.1);
  const parallaxRef = useParallax(0.25);
  const [zoomProject, setZoomProject] = useState<number | null>(null);
  
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
    <section id="projects" className="py-24 relative" ref={projectsRef}>
      {/* Cloud Network Banner with Parallax */}
      <div className={`w-full h-64 md:h-80 mb-16 relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div ref={parallaxRef} className="w-full h-full">
          <img 
            src={cloudNetworkEnhanced} 
            alt="Scalable Cloud Solutions" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-purple-900/50 to-background" />
        
        {/* Banner Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-5xl md:text-6xl font-bold text-gradient">Scalable Cloud Solutions</h3>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="mb-16 animate-fade-in">
            <h2 className="font-bold text-5xl md:text-7xl mb-4">
              <span className="text-gradient">Projects</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-yellow-400 to-transparent" />
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              AWS Cloud-based projects demonstrating expertise in DevOps, containerization, and Infrastructure as Code
            </p>
          </div>

          {/* Projects Carousel */}
          <div className="projects-carousel flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="project-card snap-center flex-shrink-0 w-[280px] md:w-[320px]"
              >
                <div className="project-card-inner">
                  {/* Front */}
                  <div className="project-card-face project-card-front">
                    <div className="relative h-48 overflow-hidden cursor-zoom-in" onClick={() => setZoomProject(index)}>
                      <img
                        src={projectBlueprintDesk}
                        alt={`${project.title} Blueprint`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-primary to-yellow-400 py-2 px-4">
                        <h3 className="font-bold text-background text-sm line-clamp-1">{project.title}</h3>
                      </div>
                    </div>
                    <div className="flex-1 p-6 space-y-4">
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold border border-primary/30">
                        {project.role}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 rounded-md bg-secondary/20 text-secondary text-xs border border-secondary/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="project-card-face project-card-back">
                    <div className="p-6 flex flex-col h-full justify-between space-y-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-primary mb-2">Outcome</p>
                        <p className="text-sm text-muted-foreground">{project.outcome}</p>
                      </div>
                      <div className="space-y-3">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-semibold"
                        >
                          <ExternalLink size={16} />
                          Read More
                        </a>
                        <a
                          href="https://github.com/Chimelijah"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          <Github size={16} />
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View All Projects Link */}
          <div className="mt-12 text-center animate-fade-in">
            <a
              href="https://medium.com/@elijahchimera01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg font-semibold text-gradient hover:opacity-80 transition-opacity"
            >
              View All Projects on Medium
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Image Zoom Modal */}
      {zoomProject !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md animate-zoom-overlay"
          onClick={() => setZoomProject(null)}
        >
          <div className="relative w-full max-w-3xl mx-4 rounded-3xl overflow-hidden bg-background zoom-image-wrapper" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 z-10 text-white/80 hover:text-white transition"
              onClick={() => setZoomProject(null)}
              aria-label="Close preview"
            >
              <X size={24} />
            </button>
            <img
              src={projectBlueprintDesk}
              alt="Project preview"
              className="w-full h-full object-cover zoom-image"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
