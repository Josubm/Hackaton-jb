import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

// Simulate a database with an array
let articles: any[] = [];

export const getArticles = (req: Request, res: Response) => {
  res.json(articles);
};

export const getArticle = (req: Request, res: Response) => {
  const article = articles.find(a => a.id === req.params.id);
  if (!article) {
    return res.status(404).json({ message: 'Article not found' });
  }
  res.json(article);
};

export const createArticle = (req: Request, res: Response) => {
  const { title, content } = req.body;
  const newArticle = {
    id: uuidv4(),
    title,
    content
  };
  articles.push(newArticle);
  res.status(201).json(newArticle);
};

export const updateArticle = (req: Request, res: Response) => {
  const article = articles.find(a => a.id === req.params.id);
  if (!article) {
    return res.status(404).json({ message: 'Article not found' });
  }

  article.title = req.body.title || article.title;
  article.content = req.body.content || article.content;

  res.json(article);
};

export const deleteArticle = (req: Request, res: Response) => {
  const index = articles.findIndex(a => a.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Article not found' });
  }

  articles.splice(index, 1);
  res.status(204).send();
};