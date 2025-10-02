import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand href="/" className="fw-bold">
          🔒 Seguridad Informática
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/amenazas">Amenazas</Nav.Link>
            <Nav.Link href="/tecnologias">Tecnologías</Nav.Link>
            <Nav.Link href="/practicas">Buenas Prácticas</Nav.Link>
            
            <NavDropdown title="Recursos" id="resources-nav-dropdown">
              <NavDropdown.Item href="/recursos/herramientas">Herramientas</NavDropdown.Item>
              <NavDropdown.Item href="/recursos/guías">Guías</NavDropdown.Item>
              <NavDropdown.Item href="/recursos/casos-estudio">Casos de Estudio</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <Nav>
            {user ? (
              <NavDropdown title={`Hola, ${user.username}`} id="user-nav-dropdown" align="end">
                <NavDropdown.Item href="/perfil">Mi Perfil</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>Cerrar Sesión</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;