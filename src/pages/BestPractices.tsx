import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';

const BestPractices: React.FC = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [strengthVariant, setStrengthVariant] = useState('secondary');

  const checkPasswordStrength = (pwd: string) => {
    let score = 0;
    
    if (pwd.length >= 8) score++;
    if (pwd.match(/[a-z]/) && pwd.match(/[A-Z]/)) score++;
    if (pwd.match(/\d/)) score++;
    if (pwd.match(/[^a-zA-Z\d]/)) score++;

    switch (score) {
      case 0:
      case 1:
        setStrength('Muy Débil');
        setStrengthVariant('danger');
        break;
      case 2:
        setStrength('Débil');
        setStrengthVariant('warning');
        break;
      case 3:
        setStrength('Buena');
        setStrengthVariant('info');
        break;
      case 4:
        setStrength('Fuerte');
        setStrengthVariant('success');
        break;
      default:
        setStrength('Muy Débil');
        setStrengthVariant('danger');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pwd = e.target.value;
    setPassword(pwd);
    checkPasswordStrength(pwd);
  };

  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <h1 className="fw-bold">Buenas Prácticas</h1>
          <p className="lead">
            Implementa estas prácticas para mejorar tu seguridad informática.
          </p>
        </Col>
      </Row>

      <Row>
        <Col lg={8} className="mb-4">
          <Card className="shadow-sm">
            <Card.Header>
              <h5 className="mb-0">Recomendaciones de Seguridad</h5>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>🔑 Contraseñas Seguras</strong>
                  <p className="mb-0">Usa contraseñas largas con mezcla de caracteres</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>🔄 Actualizaciones</strong>
                  <p className="mb-0">Mantén software y sistemas actualizados</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>📧 Phishing</strong>
                  <p className="mb-0">Verifica remitentes antes de hacer clic</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>💾 Backups</strong>
                  <p className="mb-0">Realiza copias de seguridad regularmente</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>🔐 MFA</strong>
                  <p className="mb-0">Habilita autenticación multifactor</p>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="shadow-sm">
            <Card.Header>
              <h5 className="mb-0">Verificador de Contraseñas</h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Prueba tu contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Escribe una contraseña"
                  />
                </Form.Group>
                
                {password && (
                  <Alert variant={strengthVariant} className="py-2">
                    <strong>Fortaleza: {strength}</strong>
                  </Alert>
                )}

                <div className="small text-muted">
                  <strong>Recomendaciones:</strong>
                  <ul className="mt-2">
                    <li>Mínimo 8 caracteres</li>
                    <li>Mayúsculas y minúsculas</li>
                    <li>Números y símbolos</li>
                  </ul>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Checklist de seguridad */}
      <Row className="mt-4">
        <Col>
          <Card className="bg-light border-0">
            <Card.Body>
              <h5 className="mb-3">Checklist de Seguridad Básica</h5>
              <Form>
                {[
                  "Contraseñas únicas para cada servicio",
                  "Autenticación de dos factores activada",
                  "Sistema operativo actualizado",
                  "Antivirus instalado y actualizado",
                  "Backups automáticos configurados",
                  "Firewall activado",
                  "Correos sospechosos verificados"
                ].map((item, index) => (
                  <Form.Check 
                    key={index}
                    type="checkbox"
                    id={`check-${index}`}
                    label={item}
                    className="mb-2"
                  />
                ))}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BestPractices;