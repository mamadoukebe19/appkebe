import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Globe } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Let's Connect
        </h2>
        <div className="w-24 h-1 gradient-hero mx-auto mb-8 rounded-full"></div>
        
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Ready to transform your cloud infrastructure or train your team? Let's discuss how I can help you achieve your goals.
        </p>
        
        <Card className="p-8 shadow-card">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a 
                  href="mailto:mamakebe027@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  mamakebe027@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Linkedin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/mamadou-amadou-kebe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  linkedin.com/in/mamadou-amadou-kebe
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-muted-foreground">Dakar, Senegal</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Globe className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Languages</h3>
                <p className="text-muted-foreground">French (Native), English (Bilingual)</p>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-6 border-t border-border">
            <Button 
              size="lg" 
              className="gradient-hero hover:opacity-90 transition-smooth shadow-card"
              asChild
            >
              <a href="mailto:mamakebe027@gmail.com">Send Me an Email</a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
