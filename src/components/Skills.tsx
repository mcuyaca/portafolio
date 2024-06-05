const skillsData = [
  {
    name: " React Router | Angular | Astro",
    icons: ["/icons/reactrouter.svg", "icons/angular.svg", "/icons/astro.svg"],
    description:
      "Experiencia en la creación de aplicaciones frontend con frameworks como  React Router, Angular y Astro.",
  },
  {
    name: "Node.js | Typescript",
    icons: ["/icons/nodejs.svg", "/icons/typescript.svg"],
    description:
      "Competente en desarrollo del lado del servidor y creación de API escalables usando Node.js, Typescript y Express.",
  },
  {
    name: "HTML | CSS | JS",
    icons: ["/icons/html5.svg", "/icons/css3.svg", "/icons/javascript.svg"],
    description:
      "Experto en la creación de diseños web responsivos y elegantes utilizando HTML5, CSS3 y JavaScript.",
  },
  {
    name: "Database",
    icons: ["/icons/database.svg", "icons/postgresql.svg"],
    description:
      "Familiarizado con bases de datos SQL, como PostgreSQL. Además de implementar la migración de base de datos usando Umzug.",
  },
];

function Skills() {
  return (
    <section className="w-full border-t py-12  md:py-24 lg:py-32" id="Skills">
      <div className="container grid items-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Skills
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed">
            Aquí están algunas de mis mejores habilidades.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 sm:gap-12">
          <ul className="grid gap-4 md:grid-cols-2 lg:gap-6 xl:gap-8">
            {skillsData.map((skill, index) => (
              <li key={index} className="grid gap-2 ">
                {
                  <div className="flex justify-center gap-4  ">
                    {skill.icons.map((icon, i) => (
                      <img
                        key={i}
                        className="h-14 w-14"
                        src={icon}
                        alt={`${skill.name} icon`}
                      />
                    ))}
                  </div>
                }
                <h3 className="text-xl font-bold">{skill.name}</h3>
                <p className="text-pretty text-gray-500/70 dark:text-gray-400/70">
                  {skill.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
