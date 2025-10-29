import { Card } from "@/components/ui/card";
import { Trophy, TrendingDown, Clock, Shield, Activity } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: TrendingDown,
      title: "Serverless Application Deployment",
      description: "Deployed serverless application on AWS Fargate with managed containers",
      impact: "30% reduction in infrastructure costs"
    },
    {
      icon: Activity,
      title: "Database Migration to Amazon RDS",
      description: "Migrated PostgreSQL database to Amazon RDS with high availability setup",
      impact: "Automated backups and performance optimization"
    },
    {
      icon: Clock,
      title: "Real-Time Monitoring System",
      description: "Implemented CloudWatch + Grafana monitoring with automated alerts",
      impact: "25% reduction in MTTR (Mean Time To Repair)"
    },
    {
      icon: Trophy,
      title: "High-Availability WordPress Deployment",
      description: "Deployed WordPress on EC2, RDS, and ELB with auto-scaling",
      impact: "99.9% uptime and seamless scaling"
    },
    {
      icon: Shield,
      title: "DDoS Protection Implementation",
      description: "Secured critical applications using AWS WAF and Shield",
      impact: "Protection against volumetric and application-layer attacks"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Key Achievements
        </h2>
        <div className="w-24 h-1 gradient-hero mx-auto mb-12 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="p-6 shadow-card hover:shadow-elegant transition-smooth animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <achievement.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-smooth" />
              <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
              <p className="text-muted-foreground text-sm mb-3">{achievement.description}</p>
              <div className="pt-3 border-t border-border">
                <p className="text-primary font-semibold text-sm">{achievement.impact}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
