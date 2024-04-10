import "./About.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="full-bleed about">
      <motion.div
        className="left"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="pic-box">
          <img
            className="pic"
            src="/images/portfolio-pic.JPG"
            alt="profile-pic"
          />
        </div>
      </motion.div>
      <motion.div
        className="right"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>ABOUT</h2>
        <p>
          A passionate web developer always eager for opportunities to further
          develop personally and professionally. Experienced in collaborating
          effectively with teams, refining technical proficiencies, and
          dedicated to user-centric design principles.
        </p>
        <div className="about-links">
          <a href="https://github.com/ini-s">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/inioluwa-soetan-b082aa244/">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/kiinghazel">
            <FaSquareXTwitter />
          </a>
        </div>
        <button className="cv-btn">
          <a href="https://docs.google.com/document/d/1FnivIfGV1hSv0W33S08zBcHZYrYPKqQC7slxyi0OS3c/export?format=pdf">
            resume
          </a>
        </button>
      </motion.div>
    </section>
  );
};

export default About;
