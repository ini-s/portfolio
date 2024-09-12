import { useEffect} from "react";

import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";

import { IoMdArrowRoundUp } from "react-icons/io";

import "../styles/HomePage.css";

import { useState } from "react";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (

    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        {isVisible && (
          <div className="back-to-top-btn" onClick={scrollToTop}>
            <IoMdArrowRoundUp />
          </div>
        )}
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
