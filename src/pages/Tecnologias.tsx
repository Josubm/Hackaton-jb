import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const Tecnologias: React.FC = () => {
  const tecnologias = [
    {
      categoria: "Cifrado",
      items: [
        { nombre: "AES-256", descripcion: "Algoritmo de cifrado simétrico estándar" },
        { nombre: "RSA", descripcion: "Cifrado asimétrico para intercambio de claves" },
        { nombre: "TLS/SSL", descripcion: "Protocolos para comunicaciones seguras" }
      ]
    },
    {
      categoria: "Autenticación",
      items: [
        { nombre: "OAuth 2.0", descripcion: "Autorización estándar para APIs" },
        { nombre: "MFA", descripcion: "Autenticación Multifactor" },
        { nombre: "Biometría", descripcion: "Reconocimiento facial y huellas digitales" }
      ]
    },
    {
      categoria: "Protección Perimetral",
      items: [
        { nombre: "Firewall", descripcion: "Filtrado de tráfico de red" },
        { nombre: "WAF", descripcion: "Firewall de Aplicaciones Web" },
        { nombre: "IDS/IPS", descripcion: "Sistemas de detección y prevención" }
      ]
    }
  ];

  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <h1 className="fw-bold">Tecnologías de Defensa</h1>
          <p className="lead">
            Herramientas y tecnologías para proteger sistemas y datos.
          </p>
        </Col>
      </Row>

      <Row>
        {tecnologias.map((categoria, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Header className="bg-primary text-white">
                <h5 className="mb-0">{categoria.categoria}</h5>
              </Card.Header>
              <ListGroup variant="flush">
                {categoria.items.map((item, itemIndex) => (
                  <ListGroup.Item key={itemIndex}>
                    <strong>{item.nombre}</strong>
                    <br />
                    <small className="text-muted">{item.descripcion}</small>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Sección adicional */}
      <Row className="mt-5">
        <Col>
          <Card className="bg-light border-0">
            <Card.Body className="p-5 text-center">
              <h3 className="fw-bold mb-3">Implementación de Seguridad</h3>
              <p className="lead mb-4">
                La combinación de estas tecnologías crea defensas en profundidad 
                que protegen contra múltiples vectores de ataque.
              </p>
              <div className="row text-start">
                <div className="col-md-4">
                  <h6>🔐 Cifrado de Datos</h6>
                  <p className="small">Protege la información en reposo y en tránsito</p>
                </div>
                <div className="col-md-4">
                  <h6>👤 Control de Acceso</h6>
                  <p className="small">Gestiona quién puede acceder a qué recursos</p>
                </div>
                <div className="col-md-4">
                  <h6>🛡️ Monitoreo</h6>
                  <p className="small">Detección temprana de actividades sospechosas</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Tecnologias;