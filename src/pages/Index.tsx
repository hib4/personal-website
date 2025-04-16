import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Mail, Linkedin } from "lucide-react";
import { RotatingGreeting } from "@/components/RotatingGreeting";

const Index = () => {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of project one and its key features.",
      tags: ["React", "TypeScript", "Tailwind"],
      link: "#",
    },
    {
      title: "Project Two",
      description:
        "Another amazing project with its own unique characteristics.",
      tags: ["Next.js", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Project Three",
      description:
        "The third project showcasing different technologies and approaches.",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Project Three",
      description:
        "The third project showcasing different technologies and approaches.",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Project Three",
      description:
        "The third project showcasing different technologies and approaches.",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="section-padding pt-32 min-h-screen flex items-center">
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

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in opacity-0 animate-delay-100">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in opacity-0 animate-delay-100">
            About Me
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-lg text-muted-foreground mb-6 animate-fade-in opacity-0 animate-delay-300">
                I'm a passionate developer with experience in building modern
                web applications. I love working with React, TypeScript, and
                other cutting-edge technologies to create beautiful and
                functional user experiences.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "TypeScript",
                      "Node.js",
                      "Next.js",
                      "Tailwind CSS",
                      "PostgreSQL",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="bg-secondary px-3 py-1 rounded-md text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Experience</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Senior Developer at Tech Corp</li>
                    <li>Lead Developer at Startup Inc</li>
                    <li>Frontend Developer at Web Agency</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in opacity-0 animate-delay-100">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in opacity-0 animate-delay-300">
            I'm always open to new opportunities and interesting projects. Feel
            free to reach out!
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon" asChild>
              <a
                href="mailto:john@example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
