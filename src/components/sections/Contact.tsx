import { useState } from "react";
import { Mail, Phone, Linkedin, Github, ExternalLink, Loader2, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import contactConnection from "@/assets/contact-connection-forest.jpg";
import emailjs from '@emailjs/browser';
import { z } from 'zod';
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

const contactFormSchema = z.object({
  name: z.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  message: z.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
});

const Contact = () => {
  const { toast } = useToast();
  const { ref: contactRef, isVisible } = useScrollAnimation(0.1);
  const parallaxRef = useParallax(0.15);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Initialize EmailJS with your public key
  emailjs.init("OVAtgRv9wZX1jnkSO");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    try {
      const validatedData = contactFormSchema.parse(formData);
      
      setIsSubmitting(true);
      
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_c41onxj',      // Your Service ID
        'template_bjh23vv',     // Your Template ID
        {
          from_name: validatedData.name,
          from_email: validatedData.email,
          message: validatedData.message,
          to_email: 'elijahchimera01@gmail.com'
        },
        'OVAtgRv9wZX1jnkSO'     // Your Public Key
      );
      
      console.log('Email sent successfully:', result);
      
      // Show success message
      toast({
        title: "Message sent successfully! ✨",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      // Reset form only on success
      setFormData({ name: "", email: "", message: "" });
      setShowSuccessToast(true);
      setTimeout(() => setShowSuccessToast(false), 3000);
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const firstError = error.errors[0];
        toast({
          title: "Validation Error",
          description: firstError.message,
          variant: "destructive",
        });
      } else {
        // Handle EmailJS errors
        console.error('EmailJS error:', error);
        toast({
          title: "Failed to send message",
          description: "Please try again or contact me directly via email.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "elijahchimera01@gmail.com",
      link: "mailto:elijahchimera01@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 798 218 977",
      link: "tel:+254798218977"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/elijah-chimera-938718261"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my repositories",
      link: "https://github.com/Chimelijah"
    }
  ];

  const socialIcons = [
    { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/elijah-chimera-938718261" },
    { icon: Github, label: "GitHub", link: "https://github.com/Chimelijah" },
    { icon: Mail, label: "Email", link: "mailto:elijahchimera01@gmail.com" },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={contactRef}>
      {/* Background with Connection Visual and Parallax */}
      <div className="absolute inset-0">
        <div ref={parallaxRef} className="w-full h-full">
          <img 
            src={contactConnection} 
            alt="Network Connection Background" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Title */}
          <div className="mb-16 animate-fade-in text-center">
            <h2 className="font-serif text-4xl md:text-6xl mb-4">
              <span className="text-gradient">Get In Touch</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent mx-auto" />
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm currently seeking opportunities in cloud architecture and cybersecurity. Let's connect and discuss how I can contribute to your team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-6 md:p-8 border-border animate-slide-up">
              <h3 className="font-serif text-2xl mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="floating-field">
                  <label htmlFor="name" className="floating-label">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Elijah Chimera"
                    className="floating-input peer"
                  />
                  <span className="floating-underline" />
                </div>
                <div className="floating-field">
                  <label htmlFor="email" className="floating-label">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="floating-input peer"
                  />
                  <span className="floating-underline" />
                </div>
                <div className="floating-field">
                  <label htmlFor="message" className="floating-label">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your opportunity or how we can work together..."
                    className="floating-textarea peer"
                  />
                  <span className="floating-underline" />
                </div>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <Card className="p-6 md:p-8 border-border">
                <h3 className="font-serif text-2xl mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={index}
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                          <Icon className="text-primary" size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                        </div>
                        {item.link.startsWith('http') && (
                          <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={16} />
                        )}
                      </a>
                    );
                  })}
                </div>
              </Card>

              {/* Additional Links */}
              <Card className="p-6 md:p-8 border-border">
                <h3 className="font-serif text-2xl mb-4">More About Me</h3>
                <div className="space-y-3">
                  <a
                    href="https://medium.com/@elijahchimera01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      Read my technical blog on Medium
                    </span>
                    <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={16} />
                  </a>
                </div>
              </Card>
            </div>
          </div>

          {/* Social Row */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            {socialIcons.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.link}
                  target={social.link.startsWith("http") ? "_blank" : undefined}
                  rel={social.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="social-link group"
                  style={{ ["--wave-delay" as any]: `${index * 0.15}s` }}
                >
                  <Icon className="social-icon" size={18} />
                  <span>{social.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {showSuccessToast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
          <div className="success-toast">
            <CheckCircle2 size={20} />
            <div>
              <p className="font-semibold">Message delivered</p>
              <p className="text-sm text-white/80">I'll be in touch shortly.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
