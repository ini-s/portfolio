import "./Skills.css";

import { BiLogoTypescript } from "react-icons/bi";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiStyledcomponents, SiSvelte } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="full-bleed skills" id="skills">
      <h2>SKILLS</h2>
      <motion.div
        className="icons"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="skill">
          <FaHtml5 className="icon" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <FaCss3Alt className="icon" />
          <p>CSS3</p>
        </div>
        <div className="skill">
          <FaBootstrap className="icon" />
          <p>Bootstrap</p>
        </div>
        <div className="skill">
          <SiStyledcomponents className="icon" />
          <p>Styled components</p>
        </div>
        <div className="skill">
          <RiJavascriptFill className="icon" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <DiJqueryLogo className="icon" />
          <p>jQuery</p>
        </div>
        <div className="skill">
          <FaGit className="icon" />
          <p>git</p>
        </div>
        <div className="skill">
          <FaGithub className="icon" />
          <p>Github</p>
        </div>
        <div className="skill">
          <FaReact className="icon" />
          <p>React.js</p>
        </div>
        <div className="skill">
          <BiLogoTypescript className="icon" />
          <p>Typescript</p>
        </div>
        <div className="skill">
          <TbBrandNextjs className="icon" />
          <p>Next js</p>
        </div>
        <div className="skill">
          <SiSvelte className="icon" />
          <p>Svelte</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
