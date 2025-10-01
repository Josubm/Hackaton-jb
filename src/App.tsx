import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Amenazas from './pages/Amenazas';
import Tecnologias from './pages/Tecnologias';
import BestPractices from './pages/BestPractices';
import RequireAuth from './components/RequireAuth';

// Importar todos los estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/CustomStyles.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <main className="flex-fill">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/amenazas" element={<Amenazas />} />
              <Route path="/tecnologias" element={<Tecnologias />} />
              <Route path="/practicas" element={<BestPractices />} />
              {/* Rutas protegidas */}
              <Route 
                path="/admin" 
                element={
                  <RequireAuth>
                    <div className="container py-5">
                      <div className="security-card">
                        <div className="security-card-header text-center">
                          <h1 className="text-white">🔐 Panel de Administración</h1>
                        </div>
                        <div className="card-body p-4">
                          <p>Esta es un área protegida para usuarios autenticados.</p>
                          <div className="row mt-4">
                            <div className="col-md-4 mb-3">
                              <div className="card security-card h-100">
                                <div className="card-body text-center">
                                  <i className="bi bi-shield-check security-icon text-primary"></i>
                                  <h5>Gestión de Amenazas</h5>
                                  <p className="text-muted">Administra el catálogo de amenazas</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <div className="card security-card h-100">
                                <div className="card-body text-center">
                                  <i className="bi bi-people security-icon text-success"></i>
                                  <h5>Usuarios</h5>
                                  <p className="text-muted">Gestiona usuarios del sistema</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 mb-3">
                              <div className="card security-card h-100">
                                <div className="card-body text-center">
                                  <i className="bi bi-graph-up security-icon text-warning"></i>
                                  <h5>Reportes</h5>
                                  <p className="text-muted">Genera reportes de seguridad</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </RequireAuth>
                } 
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;