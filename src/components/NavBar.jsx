import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';  
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <div className='navBarContainer'>
      <Navbar className='navColor'>
      <Container>
        <div className='WebsiteNameLogo'>
          <Navbar.Brand href="#Home">
            <img className='logoImg' src="img/logo.png" alt="D logo" />
          </Navbar.Brand>
        </div>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <div className='menuItems'>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link className='navItem' href="#Work">Work</Nav.Link>
              <Nav.Link className='navItem' href="#About">About</Nav.Link>
              <Nav.Link className='navItem' href="#Work">Work</Nav.Link>
              <Nav.Link className='navItem' href="#Contact">Contact</Nav.Link>
              <Nav.Link className='navItem' href="#Contact">
                <button className='hireMeBtn'>Hire Me</button>
              </Nav.Link>

              {/* <Nav.Link className='navItem' href="#Skills">Skills</Nav.Link> */}
              {/* <Nav.Link className='navItem' href="#Projects">Projects</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar