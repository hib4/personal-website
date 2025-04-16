import { Button } from "@/components/ui/button";
import { RotatingGreeting } from "@/components/RotatingGreeting";

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
          <Button asChild>
            <a href="#contact">Get in touch</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#projects">View projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
