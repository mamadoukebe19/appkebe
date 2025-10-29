import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, Users } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect - Associate",
      icon: Award,
      type: "Technical"
    },
    {
      title: "AWS Certified Developer - Associate",
      icon: Award,
      type: "Technical"
    },
    {
      title: "AWS Certified SysOps Administrator - Associate",
      icon: Award,
      type: "Technical"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      icon: Award,
      type: "Technical"
    },
    {
      title: "AWS Authorized Instructor",
      icon: GraduationCap,
      type: "Teaching"
    },
    {
      title: "AWS re/Start Accredited Instructor",
      icon: GraduationCap,
      type: "Teaching"
    },
    {
      title: "AWS Community Builder (2024 - 2025)",
      icon: Users,
      type: "Community"
    },
    {
      title: "AWS User Group Leader - Dakar",
      icon: Users,
      type: "Community"
    }
  ];

  const education = [
    {
      degree: "AWS Cloud Associate",
      institution: "Azubi School, Ghana",
      period: "2022 - 2024"
    },
    {
      degree: "MBA, Supply Chain & Management",
      institution: "ISM, Dakar",
      period: "2018 - 2020"
    },
    {
      degree: "Master, English Literature",
      institution: "UCAD, Dakar",
      period: "2015 - 2019"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Certifications & Education
        </h2>
        <div className="w-24 h-1 gradient-hero mx-auto mb-12 rounded-full"></div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="p-4 shadow-card hover:shadow-elegant transition-smooth animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <cert.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <p className="font-medium text-sm mb-2">{cert.title}</p>
                <Badge variant="secondary" className="text-xs">
                  {cert.type}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Education</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="p-6 shadow-card hover:shadow-elegant transition-smooth animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <GraduationCap className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-semibold mb-2">{edu.degree}</h4>
                <p className="text-muted-foreground text-sm mb-1">{edu.institution}</p>
                <p className="text-muted-foreground text-xs">{edu.period}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
