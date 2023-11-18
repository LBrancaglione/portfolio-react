import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Todo List",
    img: "./todo-list.png",
    desc: "Uma lista de tarefas, com as funções create e delete",
    link: "https://lbrancaglione.github.io/TodoList/"
  },
  {
    id: 2,
    title: "Galeria de Imagens",
    img: "./gallery.png",
    desc: "Inseri e consome dados do firebase, possibilitando a exibição e adição de imagem dentro do banco de dados.",
    link: "https://lbrancaglione.github.io/expense-tracker/"
  },
  {
    id: 3,
    title: "Netflix Clone",
    img: "./Netflix-Clone.png",
    desc: "Consome dados da API Themoviedb.org e os estiliza de acordo com o padrão da Netflix.",
    link: "https://lbrancaglione.github.io/NetflixClone/"
  },
  {
    id: 4,
    title: "Sistema de Finanças",
    img: "./expanse-tracker.png",
    desc: "Calcula rentabilidade a partir dos dados obtidos por meio de prompts.",
    link: "https://lbrancaglione.github.io/expense-tracker/"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.link}>Visitar</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projetos</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;