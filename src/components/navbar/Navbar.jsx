import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/*Sidebar*/}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Leonardo Brancaglione
        </motion.span>
        <div className="social">
          <a href="https://github.com/LBrancaglione">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.instagram.com/leonardobrancaglione/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/leonardo-brancaglione">
            <img src="/linkdin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
