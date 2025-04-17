import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 animate-fade-in opacity-0 animate-delay-100">
          Get in Touch
        </h2>
        <p className="text-lg text-muted-foreground mb-8 animate-fade-in opacity-0 animate-delay-300">
          I'm always open to new opportunities and exciting projects—feel
          free to reach out anytime!
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <a
              href="mailto:hiba@engineer.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a
              href="https://github.com/hib4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/hib4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
