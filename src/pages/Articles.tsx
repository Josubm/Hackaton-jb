import { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

interface Article {
  id: string;
  title: string;
  content: string;
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const { token } = useAuth();

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const response = await fetch('http://localhost:5000/api/articles');
    const data = await response.json();
    setArticles(data);
  };

  const handleSave = async () => {
    setError('');
    const url = editingArticle
      ? `http://localhost:5000/api/articles/${editingArticle.id}`
      : 'http://localhost:5000/api/articles';
    const method = editingArticle ? 'PUT' : 'POST';

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      setShowModal(false);
      setEditingArticle(null);
      setTitle('');
      setContent('');
      fetchArticles();
    } else {
      setError('Error al guardar el artículo');
    }
  };

  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    setTitle(article.title);
    setContent(article.content);
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('¿Está seguro de eliminar este artículo?')) {
      await fetch(`http://localhost:5000/api/articles/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchArticles();
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setEditingArticle(null);
    setTitle('');
    setContent('');
    setError('');
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Artículos de Seguridad</h1>
        <Button onClick={() => setShowModal(true)}>Nuevo Artículo</Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Título</th>
            <th>Contenido</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {articles.map(article => (
            <tr key={article.id}>
              <td>{article.title}</td>
              <td>{article.content}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleEdit(article)}>Editar</Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(article.id)} className="ms-2">Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editingArticle ? 'Editar Artículo' : 'Nuevo Artículo'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contenido</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
          <Button variant="primary" onClick={handleSave}>Guardar</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Articles;