const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Seguridad de la Información</h5>
            <p className="mb-0">
              Plataforma educativa sobre ciberseguridad y protección de datos.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <h6>Enlaces Rápidos</h6>
            <ul className="list-unstyled">
              <li><a href="/amenazas" className="text-light">Amenazas Comunes</a></li>
              <li><a href="/tecnologias" className="text-light">Tecnologías</a></li>
              <li><a href="/practicas" className="text-light">Buenas Prácticas</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-3" />
        <div className="text-center">
          <small>&copy; 2024 Seguridad Informática. Todos los derechos reservados.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;