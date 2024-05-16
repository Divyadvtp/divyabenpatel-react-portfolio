// import "../MediaQuery.css";
import "./NavBar.css";
import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HamburgerMenu from './HamburgerMenu';


function NavBar({ pageRefs }) {
 
  const [activeNav, setActiveNav] = useState(null);

  const handleNavClickEvent = (linkname) => {
    if (pageRefs.current && pageRefs.current[linkname]) {
      pageRefs.current[linkname].scrollIntoView({ behavior: "smooth", block: "start" });
      }
      else {
        console.error(`Ref for ${linkname} is not defined.`);
      }

      //highlight active link 
      setActiveNav(linkname);
  }

  const handleHamMenuClickEvent = () => {
      alert("clicked");

  }

  return (
    <header id='site-header' className='pHeader'>
      <Navbar.Brand href="#Home">
            <img className='logoImg' src="img/logo.png" alt="D logo" />
      </Navbar.Brand>

      <Navbar className='nav-bar'>
            <Nav.Link className='navItem' href="#Home" active={activeNav === "home"} onClick={() => handleNavClickEvent('home')}>Home</Nav.Link>
            <Nav.Link className='navItem' href="#Skills" active={activeNav === "skills"} onClick={() => handleNavClickEvent('skills')}>Skills</Nav.Link>
            <Nav.Link className='navItem' href="#Experience" active={activeNav === "experience"} onClick={() => handleNavClickEvent('experience')}>Experience</Nav.Link>
            <Nav.Link className='navItem' href="#Projects" active={activeNav === "projects"} onClick={() => handleNavClickEvent('projects')}>Projects</Nav.Link>
            <Nav.Link className='navItem' href="#Contact" active={activeNav === "footer"} onClick={() => handleNavClickEvent('footer')}>
              <button className='hireMeBtn'>Contact Me</button>
            </Nav.Link>
      </Navbar>
      {/* <div className="mobile-menu">
        <HamburgerMenu onClick={handleHamMenuClickEvent}/>
      </div> */}
      
    </header>
  )
}

export default NavBar