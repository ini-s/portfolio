import { IoClose, IoMenu } from "react-icons/io5";

import "./Header.css";

import { useState } from "react";

const Header = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    setShowSideNav((prev) => !prev);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setShowSideNav(false);
    }
  };

  return (
    <header className="full-bleed">
      <div className="logo-box">
        <a className="logo" href="#">
          Inioluwa Soetan
        </a>
      </div>

      <div className="side-nav-btn" onClick={toggleSideNav}>
        {!showSideNav && <IoMenu className="hamburger" />}
      </div>

      <nav className="navbar">
        <div className="nav-items">
          <ul className="navbar-nav">
            <li className="nav-item" onClick={() => scrollToSection("home")}>
              <a className="nav-link active" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item" onClick={() => scrollToSection("about")}>
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item" onClick={() => scrollToSection("skills")}>
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => scrollToSection("projects")}
            >
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item" onClick={() => scrollToSection("contact")}>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {showSideNav && (
        <>
          <nav className="side-nav" data-aos="zoom-in-left">
            <div className="toggle-button" onClick={toggleSideNav}>
              <IoClose />
            </div>
            <ul className="side-nav-links">
              <li className="nav-item">
                <a className="side-nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="side-nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="side-nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="side-nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="side-nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="overlay"></div>
        </>
      )}
    </header>
  );
};

export default Header;
