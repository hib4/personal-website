import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 animate-fade-in opacity-0 animate-delay-100">
          About Me
        </h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-lg text-muted-foreground mb-6 animate-fade-in opacity-0 animate-delay-300">
              I’m a software engineer who enjoys building efficient, scalable
              solutions. I love writing clean code, optimizing systems, and
              tackling challenges with creativity and a little bit of fun along
              the way.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Android",
                    "Java",
                    "Kotlin",
                    "Flutter",
                    "Dart",
                    "Go",
                    "Python",
                    "Express.js",
                    "TypeScript",
                    "Node.js",
                    "PostgreSQL",
                    "Redis",
                    "Docker",
                    "Firebase",
                    "Many more...",
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
                  <li>Software Enginner Intern at Paper.id</li>
                  <li>Software Enginner Intern at PT Rect Media Komputindo</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
