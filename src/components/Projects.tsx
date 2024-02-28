import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";

const projects = [
  {
    name: "Validify",
    description:
      "Validify es una aplicación Full Stack que tiene como objetivo permitir cargar archivos CSV para la creación de registros en una base de datos PostgreSQL.",
    technologies: ["ReactRouter", "Tailwind", "Nodejs", "PostgreSQL"],
    githubLink: "https://github.com/mcuyaca/Validify",
  },
  {
    name: "Codeable Keep",
    description:
      "Codeable Keep es una Single Page Application (SPA) que permite a los usuarios crear, editar, organizar y eliminar notas de una manera intuitiva y eficiente.",
    technologies: ["React", "Tailwind", "Nodejs", "PostgreSQL"],
    githubLink: "https://github.com/mcuyaca/CodeableKeep",
    websiteLink: "https://codeable-keep.vercel.app/",
  },
  {
    name: "DoggyDomDrawer",
    description:
      "DoggyDomDrawer es una aplicación que te permite agregar descripciones o datos a una imagen directamente desde el navegador, los cuales luego puedes descargar.",
    technologies: ["Astro", "Tailwind", "JavaScript"],
    githubLink: "https://github.com/mcuyaca/DoggyDomDrawer",
    websiteLink: "https://doggy-dom-drawer.vercel.app/",
  },
];

function Projects() {
  return (
    <section className="w-full border-t py-12 md:py-24 lg:py-32" id="Projects">
      <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Echa un vistazo a algunos de los proyectos interesantes en los que
            he trabajado.
          </p>
        </div>
        <div className="grid gap-6 px-16 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index}>
              <div className="flex h-full flex-col">
                <CardContent className="flex-1  p-0">
                  <img
                    alt={project.name}
                    className="aspect-video overflow-hidden rounded-t-lg object-cover object-center"
                    height="225"
                    src={`/${project.name}.png`}
                  />
                  <div className="flex flex-1 flex-col gap-3 p-4">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <p className="text-pretty text-sm text-gray-500 dark:text-gray-400">
                      {project.description}
                    </p>
                    <div className="flex justify-center gap-4">
                      {project.technologies.map((tech, index) => (
                        <img
                          key={index}
                          className="h-10 w-10 "
                          src={`/icons/${tech.toLowerCase()}.svg`}
                          alt={`${tech} icon`}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline">Ver en GitHub</Button>
                  </a>

                  {project.websiteLink && (
                    <a
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline">Ver página</Button>
                    </a>
                  )}
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
