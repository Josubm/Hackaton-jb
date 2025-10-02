import { Carousel } from 'react-bootstrap';

const Slider: React.FC = () => {
  return (
    <Carousel fade className="mb-5">
      <Carousel.Item>
        <div 
          className="d-block w-100 bg-primary text-white py-5"
          style={{ height: '400px' }}
        >
          <div className="container h-100 d-flex align-items-center">
            <div className="text-center w-100">
              <h1 className="display-4 fw-bold">Protege tu Información</h1>
              <p className="lead">Aprende sobre las mejores prácticas en seguridad informática</p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      
      <Carousel.Item>
        <div 
          className="d-block w-100 bg-success text-white py-5"
          style={{ height: '400px' }}
        >
          <div className="container h-100 d-flex align-items-center">
            <div className="text-center w-100">
              <h1 className="display-4 fw-bold">Amenazas Cibernéticas</h1>
              <p className="lead">Conoce los riesgos y cómo protegerte</p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      
      <Carousel.Item>
        <div 
          className="d-block w-100 bg-warning text-dark py-5"
          style={{ height: '400px' }}
        >
          <div className="container h-100 d-flex align-items-center">
            <div className="text-center w-100">
              <h1 className="display-4 fw-bold">Tecnologías de Defensa</h1>
              <p className="lead">Firewalls, Cifrado, Autenticación Multifactor</p>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;