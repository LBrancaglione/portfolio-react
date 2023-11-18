import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Analista e desenvolvedor de <br /> sistemas.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Front-end </motion.b>
            ideias
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>em interfaces </motion.b>{" "}
            incríveis!
          </h1>
          <button>O que eu faço?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Front-End</h2>
          <p>
            Interface visual, interatividade, essencial para boa experiência do
            usuário, impactando diretamente no sucesso de plataformas digitais.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Minha formação</h2>
          <p>
            Sou Técnico e Tecnólogo em análise e desenvolvimento de sistemas, e
            tenho diversos cursos de especialização.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Quem eu sou ?</h2>
          <p>
            Hoje tenho 21 anos dediquei a maior parte da minha vida ao estudo,
            buscando conhecimento e desenvolvimento pessoal. Minha jornada foi
            marcada pelo comprometimento com o aprendizado acadêmico,
            consolidando uma base sólida para enfrentar os desafios futuros.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Experiência</h2>
          <p>
            Hoje sou jovem aprendiz, já desenvolvi diversos projetos práticos e
            funcionais de sistemas que poderiam ser implementados. Tenho dominio sob SCSS, React/React Native, PHP. 
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
