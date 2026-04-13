import { Container, Navbar as BSNavbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <BSNavbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <BSNavbar.Brand as={Link} to="/">Portfolio</BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="navbar-nav" />
        <BSNavbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" active={location.pathname === '/'}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" active={location.pathname === '/about'}>About</Nav.Link>
            <Nav.Link as={Link} to="/skills" active={location.pathname === '/skills'}>Skills</Nav.Link>
            <Nav.Link as={Link} to="/projects" active={location.pathname === '/projects'}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact" active={location.pathname === '/contact'}>Contact</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}
