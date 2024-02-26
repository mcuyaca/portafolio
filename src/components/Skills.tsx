import React from "react";

function Skills() {
  return (
    <section className="w-full border-t py-12  md:py-24 lg:py-32" id="Skills">
      <div className="container grid items-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Skills
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed">
            Aqui estan algunas de mis mejores habilidades.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 sm:gap-12">
          <ul className="grid gap-4 md:grid-cols-2 lg:gap-6 xl:gap-8">
            <li className="grid gap-1">
              <h3 className="text-xl font-bold">JavaScript</h3>
              <p className="text-pretty text-gray-500/70 dark:text-gray-400/70">
                Experiencia en la creación de aplicaciones frontend con
                frameworks como React.
              </p>
            </li>
            <li className="grid gap-1">
              <h3 className="text-xl font-bold">Node.js</h3>
              <p className="text-pretty text-gray-500/70 dark:text-gray-400/70">
                Competente en desarrollo del lado del servidor y creación de API
                escalables. usando Node.js y Express.
              </p>
            </li>
            <li className="grid gap-1">
              <h3 className="text-xl font-bold">HTML/CSS</h3>
              <p className="text-pretty text-gray-500/70 dark:text-gray-400/70">
                Experto en la creación de diseños web responsivos y elegantes
                utilizando HTML5 y CSS3.
              </p>
            </li>
            <li className="grid gap-1">
              <h3 className="text-xl font-bold">Database</h3>
              <p className="text-pretty text-gray-500/70 dark:text-gray-400/70">
                Familiarizado con bases de datos SQL, como PostgreSQL.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
