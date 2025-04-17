import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Moneyger",
      description:
        "An app to easily track money, spend wisely, and save smarter.",
      tags: ["Dart", "Flutter", "Python", "Firebase"],
      link: "https://play.google.com/store/apps/details?id=me.hib4.moneyger",
    },
    {
      title: "Garda Green",
      description:
        "An environmental adventure game where you dodge waste and collect stars.",
      tags: ["Dart", "Flutter", "JavaScript", "Flame Engine", "Firebase"],
      link: "https://play.google.com/store/apps/details?id=me.hib4.garda_green",
    },
    {
      title: "Garuda Hacks 5.0",
      description:
        "An app to collaborate, innovate, and compete in exciting hackathons.",
      tags: ["Dart", "Flutter", "Firebase", "Google Cloud Platform"],
      link: "https://apps.apple.com/us/app/garuda-hacks-5-0/id6504819018",
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
