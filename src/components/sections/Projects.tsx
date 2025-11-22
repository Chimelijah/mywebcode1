import { useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import cloudNetworkEnhanced from "@/assets/cloud-network-enhanced.jpg";
import projectBlueprintDesk from "@/assets/project-blueprint-desk.jpg";
// Existing project images
import ciCdPipelineImg from "@/assets/ci-cd-pipeline.jpg";
import k8sManifestImg from "@/assets/k8s-manifest.jpg";
import terraformS3Img from "@/assets/terraform-s3.jpg";
// New project images (replace with your actual assets)
import aiSchedulingImg from "@/assets/ai-scheduling.jpg";
import aiDatabaseImg from "@/assets/ai-database.jpg";
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
      image: ciCdPipelineImg,
      mediumLink: "https://medium.com/@elijahchimera01/build-a-ci-cd-pipeline-with-aws-a8445bba8ff7",
    },
    {
      title: "Create Kubernetes Manifests",
      description: "Engineered Kubernetes manifests and Docker images to deploy a multi-tier backend application with high availability.",
      role: "Containerization and Orchestration Specialist",
      technologies: ["Kubernetes", "Docker", "AWS EKS", "AWS ECR", "YAML"],
      outcome: "Successfully deployed a highly available application cluster, validating environment configuration concepts",
      image: k8sManifestImg,
      mediumLink: "https://medium.com/@elijahchimera01/create-kubernetes-manifests-4947b76f3648",
    },
    {
      title: "Create S3 Buckets with Terraform",
      description: "Developed a reusable Infrastructure as Code (IaC) configuration using Terraform for automated AWS S3 bucket deployment.",
      role: "IaC Developer",
      technologies: ["Terraform", "AWS S3", "AWS CLI", "HCL"],
      outcome: "Created a single, idempotent script capable of deploying secure, pre-configured infrastructure",
      image: terraformS3Img,
      mediumLink: "https://medium.com/@elijahchimera01/create-s3-buckets-with-terraform-67e288c959fc",
    },
    {
      title: "Building an AI Workflow using n8n",
      description: "Developed an AI-powered scheduling assistant by building a workflow that processes natural language requests with a Large Language Model (LLM) and automatically creates events in Google Calendar.",
      role: "AI Engineer",
      technologies: ["n8n (automation)", "OpenAI Chat Model (GPT-4.0-mini)", "Google Calendar", "Prompt Engineering"],
      outcome: "Successfully integrated LLM function-calling capabilities for reliable scheduling based on user chat commands",
      image: aiSchedulingImg,
      mediumLink: "https://medium.com/@elijahchimera01/building-an-ai-workflow-using-n8n-a6e6a5d007b7",
    },
    {
      title: "Building a Database With Cursor and Supabase MCP",
      description: "Implemented a 'likes' feature for a music web app by establishing a live, cloud-hosted database connection using AI, showcasing the Model Context Protocol (MCP). This allowed for building and querying the database using only natural language commands.",
      role: "Backend/AI-Assisted Developer",
      technologies: ["Cursor (AI-assisted editor)", "Supabase (cloud database)", "Model Context Protocol (MCP)", "NextSound web app"],
      outcome: "Created a fully synced frontend/backend feature where users can interact with the database using natural language commands",
      image: aiDatabaseImg,
      mediumLink: "https://medium.com/@elijahchimera01/building-a-database-with-cursor-and-supabase-mcp-b8e935f8f3a7",
    }
  ];
  return (
    <section id="projects" className="py-32 min-h-screen relative w-full" ref={projectsRef}>
      {/* Cloud Network Banner with Parallax */}
      <div className={`w-full h-64 md:h-80 mb-16 relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div ref={parallaxRef} className="w-full h-full">
          <img
            src={cloudNetworkEnhanced}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-purple-900/50 to-background" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 -mt-32 relative z-10 w-full">
        <div className="max-w-7xl mx-auto">
          {/* Section Title and Description */}
          <div className="mb-16 animate-fade-in text-center md:text-left">
            <h2 className="font-bold text-5xl md:text-7xl mb-4">
              <span className="text-gradient">Projects</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-yellow-400 to-transparent mx-auto md:ml-0" />
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
              Projects showcasing proven expertise in designing and deploying scalable, fault-tolerant infrastructure using AWS and Kubernetes (EKS), underpinned by disciplined Infrastructure as Code (IaC) and CI/CD practices. I specialize in accelerating development cycles by integrating modern tools like Supabase for robust backend services and leveraging n8n for sophisticated low-code workflow automation and system integration. My focus is on building efficient, automated, and secure digital platforms from development to production.
            </p>
          </div>
          {/* Projects Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 w-full"
            role="region"
            aria-label="Project grid"
          >
            {projects.map((project, index) => (
              <Card
                key={index}
                className="project-card flex-shrink-0 w-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-primary/5 group relative overflow-hidden"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <div className="project-card-inner h-full">
                  {/* Project Image and Title */}
                  <div
                    className="relative h-48 overflow-hidden cursor-zoom-in group-hover:brightness-110"
                    onClick={() => setZoomProject(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setZoomProject(index)}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} Blueprint`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-primary to-yellow-400 py-2 px-4 transition-opacity duration-500 group-hover:opacity-100 opacity-90">
                      <h3 className="font-bold text-background text-sm line-clamp-2">{project.title}</h3>
                    </div>
                  </div>
                  {/* Project Details */}
                  <div className="p-4 sm:p-6 space-y-4 flex-1">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold border border-primary/30">
                      {project.role}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 rounded-md bg-secondary/20 text-secondary text-xs border border-secondary/30 transition-colors group-hover:bg-primary/20 group-hover:text-primary group-hover:border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Outcome Section */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm uppercase tracking-[0.35em] text-primary mb-2">Outcome</p>
                      <p className="text-sm text-muted-foreground line-clamp-3">{project.outcome}</p>
                    </div>
                    {/* Links */}
                    <div className="space-y-3 pt-4">
                      <a
                        href={project.mediumLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-semibold"
                      >
                        <ExternalLink size={16} />
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          {/* View All Projects Link */}
          <div className="mt-16 text-center animate-fade-in">
            <a
              href="https://medium.com/@elijahchimera01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xl font-semibold text-gradient hover:opacity-80 transition-opacity"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setZoomProject(null)}
          role="dialog"
          aria-label={`Preview of ${projects[zoomProject]?.title}`}
        >
          <div
            className="relative w-full max-w-4xl mx-4 sm:max-w-3xl rounded-2xl overflow-hidden bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 text-white/90 hover:text-white transition-all p-2 rounded-full bg-black/20"
              onClick={() => setZoomProject(null)}
              aria-label="Close preview"
            >
              <X size={24} />
            </button>
            <img
              src={projects[zoomProject]?.image || projectBlueprintDesk}
              alt={`Preview of ${projects[zoomProject]?.title}`}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;