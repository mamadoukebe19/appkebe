import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Server, Database, Code } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: ["AWS EC2", "S3", "RDS", "Lambda", "ECS", "Fargate", "VPC", "IAM", "CloudWatch"]
    },
    {
      icon: Server,
      title: "DevOps & Infrastructure",
      skills: ["Docker", "Kubernetes", "Terraform", "Ansible", "GitHub Actions", "GitLab CI/CD", "CloudFormation"]
    },
    {
      icon: Database,
      title: "Databases & Storage",
      skills: ["PostgreSQL", "MySQL", "NoSQL", "Amazon RDS", "S3"]
    },
    {
      icon: Code,
      title: "Languages & Tools",
      skills: ["Python", "SQL", "Jira", "Notion", "Grafana", "CloudWatch Monitoring"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technical Skills
        </h2>
        <div className="w-24 h-1 gradient-hero mx-auto mb-12 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 shadow-card hover:shadow-elegant transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge 
                    key={idx} 
                    variant="secondary"
                    className="text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                  >
                    {skill}
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

export default Skills;
