import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Slider from '../components/Slider';

const Home: React.FC = () => {
  return (
    <div>
      <Slider />
      
      <Container>
        {/* Sección de Introducción */}
        <Row className="mb-5">
          <Col>
            <div className="text-center">
              <h2 className="fw-bold mb-4">Seguridad de la Información</h2>
              <p className="lead">
                La seguridad de la información es fundamental en la era digital. 
                Protege tus datos, sistemas y redes contra amenazas cibernéticas 
                mediante prácticas y tecnologías efectivas.
              </p>
            </div>
          </Col>
        </Row>

        {/* Pilares de la Seguridad */}
        <Row className="mb-5">
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="text-center">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '80px', height: '80px' }}>
                  <span className="fs-1">🔐</span>
                </div>
                <Card.Title>Confidencialidad</Card.Title>
                <Card.Text>
                  Garantiza que la información solo sea accesible para personas autorizadas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="text-center">
                <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '80px', height: '80px' }}>
                  <span className="fs-1">✓</span>
                </div>
                <Card.Title>Integridad</Card.Title>
                <Card.Text>
                  Asegura que la información no sea alterada de forma no autorizada.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="text-center">
                <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '80px', height: '80px' }}>
                  <span className="fs-1">⏰</span>
                </div>
                <Card.Title>Disponibilidad</Card.Title>
                <Card.Text>
                  Garantiza que la información esté disponible cuando sea necesaria.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Llamada a la acción */}
        <Row className="mb-5">
          <Col className="text-center">
            <Card className="bg-light border-0">
              <Card.Body className="py-5">
                <h3 className="fw-bold mb-3">¿Listo para aprender más?</h3>
                <p className="mb-4">
                  Explora nuestras secciones sobre amenazas, tecnologías y mejores prácticas 
                  para fortalecer tu seguridad informática.
                </p>
                <Button variant="primary" size="lg" href="/amenazas">
                  Comenzar a Explorar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;