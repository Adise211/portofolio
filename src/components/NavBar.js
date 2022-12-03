import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import myIcon from '../images/myIcon.jpeg';


const NavBar = () => {

  return (
      <div>
        <Navbar bg="black" variant="dark" fixed='top' className='smooth-scroll'>
          <Container style={{ width: 800, paddingLeft: 120 }}>
          <Navbar.Brand>
            <img 
              src={myIcon} 
              alt='myLogo'
              style={{ 
                height: 50, 
                width: 50, 
                border: '1px white solid', 
                borderRadius: 50
              }}
            />
          </Navbar.Brand>
          <Navbar.Brand href="#intro" style={{color:'white'}}>Who I Am</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#skills" style={{color:'white'}}>Skills</Nav.Link>
            <Nav.Link href="#experience" style={{color:'white'}}>Experience</Nav.Link>
            <Nav.Link href="#projects" style={{color:'white'}}>Projects</Nav.Link>
            <Nav.Link href="#contact" style={{color:'white'}}>Contact Me</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </div>

  )
}

export default NavBar;
