import { useState } from "react";
import { Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import contactConnection from "@/assets/contact-connection.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:elijahchimera01@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email application will open with the message.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
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

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Connection Visual */}
      <div className="absolute inset-0">
        <img 
          src={contactConnection} 
          alt="Network Connection Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Elijah Chimera"
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your opportunity or how we can work together..."
                    className="bg-secondary border-border focus:border-primary resize-none"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                >
                  Send Message
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
