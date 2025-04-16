import { Button } from "@/components/ui/button";
import { RotatingGreeting } from "@/components/RotatingGreeting";
import { scrollToSection } from "@/lib/utils";

const Hero = () => {
  return (
    <section
      id="hero"
      className="section-padding pt-32 min-h-screen flex items-center"
    >
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in opacity-0 animate-delay-100">
          <RotatingGreeting />
        </div>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in opacity-0 animate-delay-300">
          A full-stack developer crafting elegant solutions through code.
        </p>
        <div className="flex gap-4 animate-fade-in opacity-0 animate-delay-500">
          <Button onClick={() => scrollToSection("contact")}>
            Get in touch
          </Button>
          <Button onClick={() => scrollToSection("projects")} variant="outline">
            View projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
