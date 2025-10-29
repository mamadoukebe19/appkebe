import { Card } from "@/components/ui/card";
import { Cloud, GitBranch, Users, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Architecture & Migration",
      description: "Design and deploy secure, scalable cloud infrastructures on AWS. Expert guidance on cloud migration strategies and architecture reviews.",
      features: ["AWS Infrastructure Design", "Cloud Migration Planning", "Cost Optimization", "High Availability Setup"]
    },
    {
      icon: GitBranch,
      title: "DevOps & CI/CD Implementation",
      description: "Streamline your development workflow with automated pipelines, containerization, and infrastructure as code.",
      features: ["CI/CD Pipeline Setup", "Docker & Kubernetes", "Terraform & IaC", "GitOps Implementation"]
    },
    {
      icon: Users,
      title: "AWS Training & Certification Prep",
      description: "Comprehensive AWS training programs for individuals and teams. Hands-on labs and real-world scenarios for certification success.",
      features: ["Solutions Architect Training", "Hands-on Labs", "Certification Prep", "Custom Corporate Training"]
    },
    {
      icon: Shield,
      title: "Cloud Security & Compliance",
      description: "Implement robust security measures and ensure compliance with industry standards for your cloud infrastructure.",
      features: ["Security Architecture", "IAM Best Practices", "Compliance Setup", "Monitoring & Alerting"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Services Offered
        </h2>
        <div className="w-24 h-1 gradient-hero mx-auto mb-12 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 shadow-card hover:shadow-elegant transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="text-primary">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
