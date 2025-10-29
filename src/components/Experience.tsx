import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "LeCloudFacile.com",
      role: "Consultant Cloud & Formateur AWS",
      location: "Dakar, Senegal",
      period: "Mar 2024 - Present",
      highlights: [
        "Facilitated cloud solutioning workshops with B2B clients, aligning technical decisions with business goals",
        "Designed and deployed secure and highly available cloud architectures on AWS",
        "Automated infrastructure using Terraform and CloudFormation, ensuring reproducibility and scalability",
        "Implemented CI/CD pipelines using GitHub Actions and GitLab CI, reducing deployment time by 40%",
        "Optimized AWS costs by ~20% through efficient resource utilization"
      ],
      technologies: ["AWS", "Terraform", "CI/CD", "GitHub Actions", "GitLab"]
    },
    {
      company: "IAM Dakar",
      role: "Formateur Cloud & DevOps",
      location: "Dakar, Senegal",
      period: "Jan 2024 - Present",
      highlights: [
        "Developed and structured courses integrating key DevOps concepts, including pipeline design and cloud automation",
        "Prepared comprehensive instructional materials—presentations, hands-on labs, and case studies",
        "Adapted teaching strategies to align academic requirements with industry DevOps practices"
      ],
      technologies: ["DevOps", "Cloud Computing", "CI/CD", "Education"]
    },
    {
      company: "Azubi Africa",
      role: "AWS Junior Trainer",
      location: "Ghana, Remote",
      period: "Sep 2022 - Sep 2023",
      highlights: [
        "Conducted hands-on workshops on AWS (EC2, RDS, VPC, IAM)",
        "Developed labs for Cloud Practitioner & Solutions Architect Associate certification preparation",
        "Set up collaborative environments for 50+ students per session"
      ],
      technologies: ["AWS", "EC2", "RDS", "VPC", "IAM", "Training"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Professional Experience
        </h2>
        <div className="w-24 h-1 gradient-hero mx-auto mb-12 rounded-full"></div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-6 md:p-8 shadow-card hover:shadow-elegant transition-smooth animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2 mb-4">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-foreground">
                    <span className="text-primary mt-1">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
