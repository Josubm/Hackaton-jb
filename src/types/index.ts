export interface Amenaza {
  id: number;
  nombre: string;
  tipo: string;
  descripcion: string;
  severidad: 'Alta' | 'Media' | 'Baja';
  contramedidas: string[];
}

export interface User {
  id: string;
  username: string;
  email: string;
}

export interface LoginFormData {
  username: string;
  password: string;
}