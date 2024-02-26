import "@park-ui/tailwind-plugin/preset.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex min-h-[100dvh] flex-col ">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
