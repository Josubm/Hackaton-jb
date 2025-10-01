import { Router, Request, Response } from 'express';
import { Amenaza } from '../types.js';

const router = Router();

// Base de datos simulada de amenazas de seguridad
let amenazas: Amenaza[] = [
  {
    id: 1,
    nombre: 'Phishing',
    tipo: 'Ingeniería Social',
    descripcion: 'Suplantación de identidad para obtener información confidencial',
    severidad: 'Alta',
    contramedidas: ['Educación usuarios', 'Filtros anti-spam', 'Verificación 2FA']
  },
  {
    id: 2,
    nombre: 'Ransomware',
    tipo: 'Malware',
    descripcion: 'Secuestro de datos mediante cifrado para exigir rescate',
    severidad: 'Alta',
    contramedidas: ['Backups regulares', 'Antivirus actualizado', 'Parches seguridad']
  },
  {
    id: 3,
    nombre: 'Inyección SQL',
    tipo: 'Ataque Web',
    descripcion: 'Inserción de código SQL malicioso en consultas de base de datos',
    severidad: 'Alta',
    contramedidas: ['Consultas parametrizadas', 'Validación entrada', 'WAF']
  }
];

// GET /api/amenazas - Obtener todas las amenazas
router.get('/', (req: Request, res: Response) => {
  res.json(amenazas);
});

// GET /api/amenazas/:id - Obtener amenaza por ID
router.get('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const amenaza = amenazas.find(a => a.id === id);
  
  if (!amenaza) {
    return res.status(404).json({ message: 'Amenaza no encontrada' });
  }
  
  res.json(amenaza);
});

// POST /api/amenazas - Crear nueva amenaza
router.post('/', (req: Request, res: Response) => {
  const nuevaAmenaza: Amenaza = {
    id: Math.max(...amenazas.map(a => a.id)) + 1,
    ...req.body
  };
  
  amenazas.push(nuevaAmenaza);
  res.status(201).json(nuevaAmenaza);
});

// PUT /api/amenazas/:id - Actualizar amenaza
router.put('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const index = amenazas.findIndex(a => a.id === id);
  
  if (index === -1) {
    return res.status(404).json({ message: 'Amenaza no encontrada' });
  }
  
  amenazas[index] = { ...amenazas[index], ...req.body };
  res.json(amenazas[index]);
});

// DELETE /api/amenazas/:id - Eliminar amenaza
router.delete('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const index = amenazas.findIndex(a => a.id === id);
  
  if (index === -1) {
    return res.status(404).json({ message: 'Amenaza no encontrada' });
  }
  
  amenazas.splice(index, 1);
  res.status(204).send();
});

export default router;