import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


const NavBar = () => {

  return (
      <div>
        <Navbar bg="black" variant="dark" fixed='top' className='smooth-scroll'>
          <Container style={{ width: 600, paddingLeft: 80 }}>
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
