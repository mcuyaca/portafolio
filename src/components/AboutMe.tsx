function AboutMe() {
  return (
    <section className="w-full border-t py-12 md:py-24 lg:py-32" id="AboutMe">
      <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>

          <p className="mx-auto max-w-[600px] text-pretty text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Soy ingeniero civil, pero descubri mi pasión cuando buscaba ser mas
            eficiente al hacer mi trabajo. Me di cuenta de que podía desarrollar
            proyectos que solucionen problemas cotidianos, lo que me llevó a
            decidir decicarme a la programación.
          </p>

          <p className=" mx-auto max-w-[600px] text-pretty text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Me especializo en JavaScript y mis herramientas principales son
            TypeScript, React y Node. ¡Contáctame para colaborar juntos!
          </p>
        </div>
        <div className="space-y-4 ">
          <h2 className="text-2xl font-bold tracking-tight">Social</h2>
          <div className=" container flex max-w-[600px] items-center justify-center gap-20   ">
            <a
              className="flex flex-col items-center justify-center space-y-1"
              href="https://www.linkedin.com/in/mcuyaca/"
              target="_blank"
            >
              <img
                className="h-14 w-14"
                src="/icons/linkedin.svg"
                alt="Linkedin icon"
              />
              <span className="text-xs text-gray-500 dark:text-gray-400">
                LinkedIn
              </span>
            </a>
            <a
              className="flex flex-col items-center justify-center space-y-1"
              href="https://github.com/mcuyaca"
              target="_blank"
            >
              <img
                className="h-14 w-14"
                src="/icons/github.svg"
                alt="Github icon"
              />
              <span className="text-xs text-gray-500 dark:text-gray-400">
                GitHub
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
