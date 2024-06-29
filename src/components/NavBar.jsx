// import "../MediaQuery.css";
import "./NavBar.css";
import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import HamburgerMenu from './HamburgerMenu';

function NavBar({ pageRefs }) {
  const [activeNav, setActiveNav] = useState(null);
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);
  const [menuIconToggle, setMenuIconToggle] = useState(true);

  const handleNavClickEvent = (linkname) => {
    if (pageRefs.current && pageRefs.current[linkname]) {
      pageRefs.current[linkname].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsNavBarVisible(!isNavBarVisible);
      setMenuIconToggle(!menuIconToggle);
    } else {
      console.error(`Ref for ${linkname} is not defined.`);
    }

    //highlight active link
    setActiveNav(linkname);
  };

  const handleToggleMobileMenu = () => {
    setIsNavBarVisible(!isNavBarVisible);
  };
  const handleClickforMenuToggleIcon = () => {
    setMenuIconToggle(!menuIconToggle);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <header id="site-header" className="pHeader">
      <Navbar.Brand>
        <Nav.Link
          className="navItem"
          // href="#Home"
          onClick={() => reloadPage()}
        >
          <img
            className="logoImg"
            src="img/logo.png"
            alt="D logo"
          />

        </Nav.Link>
      </Navbar.Brand>

      <Navbar
        className={isNavBarVisible ? "nav-bar mobile-visible" : "nav-bar"}
      >
        <Nav.Link className='navItem' href="#Home" active={activeNav === "home"} onClick={() => handleNavClickEvent('home')}>HOME</Nav.Link>
        <Nav.Link
          className="navItem"
          href="#Skills"
          active={activeNav === "skills"}
          onClick={() => handleNavClickEvent("skills")}
        >
          SKILLS
        </Nav.Link>
        <Nav.Link
          className="navItem"
          href="#Experience"
          active={activeNav === "experience"}
          onClick={() => handleNavClickEvent("experience")}
        >
          EXPERIENCE
        </Nav.Link>
        <Nav.Link
          className="navItem"
          href="#Projects"
          active={activeNav === "projects"}
          onClick={() => handleNavClickEvent("projects")}
        >
          PROJECTS
        </Nav.Link>
        <Nav.Link
          className="navItem"
          href="#Education"
          active={activeNav === "education"}
          onClick={() => handleNavClickEvent("education")}
        >
          EDUCATION
        </Nav.Link>
        <Nav.Link
          className="navItem"
          href="#Contact"
          active={activeNav === "contact"}
          onClick={() => handleNavClickEvent("contact")}
        >
          <button className="hireMeBtn">Contact Me</button>
        </Nav.Link>
      </Navbar>
      <div
        id="mobileHamMenu"
        className="mobile-menu"
        onClick={handleToggleMobileMenu}
      >
        <div>
          {/* <img src="./img/ham_menu.png" alt="two lines hamburger menu" className='ham-menu'/> */}
          <button
            type="button"
            className={menuIconToggle ? "menu-toggle" : "menu-toggle x"}
            onClick={handleClickforMenuToggleIcon}
          ></button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
