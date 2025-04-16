import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
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
  );
};

export default Projects;
