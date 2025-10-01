import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Simulate a user database
const users = [
  {
    id: 1,
    username: 'admin',
    // Password is 'admin' encrypted with bcrypt
    password: '$2a$10$Xy.JbE5qMMMewGLp8.7Qe.ZO.5.5d5z5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q'
  }
];

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate JWT token
  const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', { expiresIn: '1h' });

  res.json({ token });
};