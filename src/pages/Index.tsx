import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Achievements />
      <Certifications />
      <Services />
      <Contact />
      
      <footer className="bg-card py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2025 Mamadou Amadou Kebe. Cloud & DevOps Engineer | AWS Technical Trainer</p>
          <p className="text-sm mt-2">Empowering businesses and professionals through cloud technology</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
