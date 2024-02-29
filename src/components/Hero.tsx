import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
            Hola, Soy Manuel Cuya
          </h1>

          <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Full-Stack Developer. Bienvenido a mi rincón en Internet.
          </p>
        </div>
        <div className="mx-auto flex  max-w-sm  gap-4">
          <a href="mailto:mcuya.ca@gmail.com">
            <Button className=" flex gap-2 font-semibold ">
              <Mail /> Contactame
            </Button>
          </a>

          <a
            href="https://drive.google.com/file/d/1dWAnWzKkzRboXVNK_OE_7BZ0sLAIyWXT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className=" flex gap-2  font-semibold ">
              <Download /> Descargar CV
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
