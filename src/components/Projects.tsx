import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";

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
          <Card>
            <div className="flex h-full flex-col">
              <CardContent className="flex-1  p-0">
                <img
                  alt="Project"
                  className="aspect-video overflow-hidden rounded-t-lg object-cover object-center"
                  height="225"
                  src="/Validify.png"
                />
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <h3 className="text-xl font-bold">Validify</h3>
                  <p className="text-pretty text-sm text-gray-500 dark:text-gray-400">
                    Validify es una aplicación Full Stack que tiene como
                    objetivo permitir cargar archivos CSV para la creación de
                    registros en una base de datos PostgreSQl.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <a
                  href="https://github.com/mcuyaca/Validify"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">Ver Github</Button>
                </a>
              </CardFooter>
            </div>
          </Card>
          <Card>
            <div className="flex h-full flex-col">
              <CardContent className="flex-1  p-0">
                <img
                  alt="Project"
                  className="aspect-video overflow-hidden rounded-t-lg object-cover object-center"
                  height="225"
                  src="/Keep.png"
                />
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <h3 className="text-xl font-bold">Codeable Keep</h3>
                  <p className="text-pretty text-sm text-gray-500 dark:text-gray-400">
                    Codeable Keep es una Single Page Application (SPA) que
                    permite a los usuarios crear, editar, organizar y eliminar
                    notas de una manera intuitiva y eficiente.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="gap-4">
                <a
                  href="https://github.com/mcuyaca/CodeableKeep"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">Ver Github</Button>
                </a>

                <a
                  href="https://codeable-keep.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">Ver página</Button>
                </a>
              </CardFooter>
            </div>
          </Card>
          <Card>
            <div className="flex h-full flex-col">
              <CardContent className="flex-1  p-0">
                <img
                  alt="Project"
                  className="aspect-video overflow-hidden rounded-t-lg object-cover object-center"
                  height="225"
                  src="/Doggy.png"
                />
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <h3 className="text-xl font-bold">DoggyDomDrawer</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    DoggyDomDrawer es una aplicación que te permite añadir
                    descripciones o datos a una imagen.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="gap-4">
                <a
                  href="https://github.com/mcuyaca/DoggyDomDrawer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">Ver en GitHub</Button>
                </a>
                <a
                  href="https://doggy-dom-drawer.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">Ver página</Button>
                </a>
              </CardFooter>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Projects;
