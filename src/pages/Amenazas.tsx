import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Table, Button, Modal, Form, Alert } from 'react-bootstrap';
import { Amenaza } from '../types';
import { useAuth } from '../context/AuthContext';

const Amenazas: React.FC = () => {
  const [amenazas, setAmenazas] = useState<Amenaza[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingAmenaza, setEditingAmenaza] = useState<Amenaza | null>(null);
  
  const { token } = useAuth();

  useEffect(() => {
    fetchAmenazas();
  }, []);

  const fetchAmenazas = async () => {
    try {
      const response = await fetch('/api/amenazas');
      const data = await response.json();
      setAmenazas(data);
    } catch (err) {
      setError('Error al cargar las amenazas');
    } finally {
      setLoading(false);
    }
  };

  const getSeverityVariant = (severidad: string) => {
    switch (severidad) {
      case 'Alta': return 'danger';
      case 'Media': return 'warning';
      case 'Baja': return 'success';
      default: return 'secondary';
    }
  };

  if (loading) return <div className="text-center py-5">Cargando...</div>;

  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <h1 className="fw-bold">Amenazas de Seguridad</h1>
          <p className="lead">
            Conoce las principales amenazas cibernéticas y cómo protegerte.
          </p>
        </Col>
      </Row>

      {error && <Alert variant="danger">{error}</Alert>}

      <Row>
        {amenazas.map((amenaza) => (
          <Col md={6} lg={4} key={amenaza.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Header className="bg-light">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">{amenaza.nombre}</h5>
                  <Badge bg={getSeverityVariant(amenaza.severidad)}>
                    {amenaza.severidad}
                  </Badge>
                </div>
              </Card.Header>
              <Card.Body>
                <h6 className="text-muted">{amenaza.tipo}</h6>
                <p className="card-text">{amenaza.descripcion}</p>
                
                <div className="mt-3">
                  <h6>Contramedidas:</h6>
                  <ul className="small">
                    {amenaza.contramedidas.map((cm, index) => (
                      <li key={index}>{cm}</li>
                    ))}
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Tabla para vista detallada */}
      <Row className="mt-5">
        <Col>
          <Card className="shadow-sm">
            <Card.Header>
              <h5 className="mb-0">Resumen de Amenazas</h5>
            </Card.Header>
            <Card.Body>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Severidad</th>
                    <th>Descripción</th>
                    <th>Contramedidas</th>
                  </tr>
                </thead>
                <tbody>
                  {amenazas.map((amenaza) => (
                    <tr key={amenaza.id}>
                      <td className="fw-bold">{amenaza.nombre}</td>
                      <td>{amenaza.tipo}</td>
                      <td>
                        <Badge bg={getSeverityVariant(amenaza.severidad)}>
                          {amenaza.severidad}
                        </Badge>
                      </td>
                      <td>{amenaza.descripcion}</td>
                      <td>
                        <small>{amenaza.contramedidas.join(', ')}</small>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Amenazas;