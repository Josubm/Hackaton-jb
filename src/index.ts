import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import amenazasRoutes from './routes/amenazasRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app: Express = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/amenazas', amenazasRoutes);

// Ruta de prueba
app.get('/api', (req: Request, res: Response) => {
  res.json({ 
    message: 'API de Seguridad de la Información',
    version: '1.0.0'
  });
});

// Manejo de errores
app.use(errorHandler);

app.listen(port, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${port}`);
});