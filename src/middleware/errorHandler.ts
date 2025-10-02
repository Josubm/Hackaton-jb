import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('Error:', err);

  if (err.type === 'auth') {
    return res.status(401).json({ message: 'No autorizado' });
  }

  if (err.type === 'input') {
    return res.status(400).json({ message: 'Entrada inválida' });
  }

  res.status(500).json({ 
    message: 'Algo salió mal en el servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
};