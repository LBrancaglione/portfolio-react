import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/contact";
import Cursor from "./components/cursor/cursor";

const App = () => {
  return (
    <div>
       <Cursor />
      <section id="Inicio">
        <Navbar />
        <Hero />
      </section>
      <section id="Sobre">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Projetos">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contato">
        <Contact />
      </section>
    </div>
  );
};

export default App;