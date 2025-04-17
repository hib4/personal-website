import { Button } from "@/components/ui/button";
import { RotatingGreeting } from "@/components/RotatingGreeting";
import { scrollToSection } from "@/lib/utils";

const Hero = () => {
  return (
    <section
      id="hero"
      className="section-padding pt-32 min-h-screen flex items-center relative isolate overflow-hidden"
    >
      {/* Blurry Gradient Circles */}
      <div className="absolute inset-0 -z-10 opacity-0 animate-fade-in animate-delay-100">
        {/* Main glowing circle */}
        <div
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[150%] sm:w-[120%] md:w-[100%]
            aspect-square rounded-full
            bg-[radial-gradient(circle_at_center,_#7d2ae8_0%,_transparent_70%)]
            opacity-20        /* same on all breakpoints */
            blur-[60px] sm:blur-[100px]
            animate-gradient-scale
          "
        ></div>

        {/* Secondary moving circle */}
        <div
          className="
            absolute top-1/3 left-1/4
            w-[120%] sm:w-[80%] md:w-[60%]
            aspect-square rounded-full
            bg-[radial-gradient(circle_at_center,_#3b82f6_0%,_transparent_70%)]
            opacity-15        /* same on all breakpoints */
            blur-[50px] sm:blur-[80px]
            animate-gradient-move
          "
        ></div>

        {/* Accent circle */}
        <div
          className="
            absolute bottom-1/4 right-1/4
            w-[80%] sm:w-[50%]
            aspect-square rounded-full
            bg-[radial-gradient(circle_at_center,_#ec4899_0%,_transparent_70%)]
            opacity-10        /* same on all breakpoints */
            blur-[40px] sm:blur-[60px]
            animate-gradient-move-delayed
          "
        ></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="animate-fade-in opacity-0 animate-delay-100">
          <RotatingGreeting />
        </div>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in opacity-0 animate-delay-300">
          A software engineer who finds clarity in chaos—and bugs in production.
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
