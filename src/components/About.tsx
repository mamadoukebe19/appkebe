import { Card } from "@/components/ui/card";
import { Award, Globe, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "3+ Years Experience",
      description: "Designing and deploying cloud architectures"
    },
    {
      icon: Users,
      title: "50+ Students Trained",
      description: "AWS certification preparation & hands-on labs"
    },
    {
      icon: Globe,
      title: "Community Leader",
      description: "AWS User Group Leader & Community Builder"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About Me
        </h2>
        <div className="w-24 h-1 gradient-hero mx-auto mb-12 rounded-full"></div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 shadow-card">
          <p className="text-lg text-foreground leading-relaxed">
            DevOps Engineer with <span className="font-semibold text-primary">3+ years of experience</span> in designing, deploying, and automating cloud architectures. Expertise in containerization, CI/CD pipeline development, and infrastructure as code using <span className="font-semibold">Docker, Kubernetes, and Terraform</span>.
          </p>
          <p className="text-lg text-foreground leading-relaxed mt-4">
            Recognized for delivering <span className="font-semibold text-primary">secure, scalable solutions</span> and accelerating cloud transformation while aligning technology strategies with business objectives. Passionate about sharing knowledge as an <span className="font-semibold">AWS Authorized Instructor</span> and building the tech community across Africa.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
