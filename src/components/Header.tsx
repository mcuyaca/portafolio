import { TerminalIcon } from "lucide-react";
import React from "react";

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center bg-white px-4 shadow-md lg:px-6">
      <a className="flex items-center justify-center gap-2" href="#">
        <TerminalIcon className="h-6 w-6" />
        <span className="font-semibold"> Mcuyaca</span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="#AboutMe"
        >
          About Me
        </a>
        <a
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="#Skills"
        >
          Skills
        </a>
        <a
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="#Projects"
        >
          Projects
        </a>
      </nav>
    </header>
  );
}

export default Header;
