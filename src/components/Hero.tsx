import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center gradient-subtle px-4 py-20">
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        <div className="mb-8 inline-block">
          <img
            src={profilePhoto}
            alt="Mamadou Amadou Kebe"
            className="w-48 h-48 rounded-full object-cover shadow-elegant border-4 border-primary/10"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
          Mamadou Amadou Kebe
        </h1>
        
        <p className="text-2xl md:text-3xl font-semibold text-gradient mb-4">
          Cloud & DevOps Engineer | AWS Technical Trainer
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          Transforming businesses through scalable cloud architectures and empowering the next generation of cloud professionals across Africa
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            size="lg" 
            className="gradient-hero hover:opacity-90 transition-smooth shadow-card"
            asChild
          >
            <a href="#contact">Get In Touch</a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 hover:bg-secondary transition-smooth"
            asChild
          >
            <a href="#experience">View My Work</a>
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center mt-8">
          <a
            href="https://www.linkedin.com/in/mamadou-amadou-kebe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-smooth"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:mamakebe027@gmail.com"
            className="text-muted-foreground hover:text-primary transition-smooth"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
