import "./Home.css";

import { motion } from "framer-motion";

const Home = () => {  
  return (
    <section className="home" id="home">
      <motion.div
        className="home-text"
        initial={{ scale: 0, y: -100 }}
        whileInView={{ scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>
          Hello, I'm
          <span className="name"> Inioluwa </span>
          Soetan
        </h1>
        <p>Front End Developer</p>
      </motion.div>
    </section>
  );
};

export default Home;
