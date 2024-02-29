import "@park-ui/tailwind-plugin/preset.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import ToTop from "./components/ToTop";

function App() {
  return (
    <div className="flex min-h-[100dvh] flex-col ">
      <Header />
      <main className="flex-1 animate-fade-in ">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
      </main>
      <Footer />
      <ToTop />
    </div>
  );
}

export default App;
