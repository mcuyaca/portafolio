const skillsData = [
  {
    name: "JavaScript",
    icon: "/icons/javascript.svg",
    description:
      "Experiencia en la creación de aplicaciones frontend con frameworks como React, React Router y Astro.",
  },
  {
    name: "Node.js",
    icon: "/icons/nodejs.svg",
    description:
      "Competente en desarrollo del lado del servidor y creación de API escalables usando Node.js y Express.",
  },
  {
    name: "HTML/CSS",
    icons: ["/icons/html5.svg", "/icons/css3.svg"],
    description:
      "Experto en la creación de diseños web responsivos y elegantes utilizando HTML5 y CSS3.",
  },
  {
    name: "Database",
    icon: "/icons/database.svg",
    description: "Familiarizado con bases de datos SQL, como PostgreSQL.",
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
              <li key={index} className="grid gap-2">
                {Array.isArray(skill.icons) ? (
                  <div className="flex justify-center gap-4">
                    {skill.icons.map((icon, i) => (
                      <img
                        key={i}
                        className="h-14 w-14"
                        src={icon}
                        alt={`${skill.name} icon`}
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    className="mx-auto h-14 w-14"
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                  />
                )}
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
