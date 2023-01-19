import express from 'express';
import LivrosController from '../controllers/livrosController.js';

const router = express.Router()

router
  .get('/livros', LivrosController.listarLivros)
  .post('/livros', LivrosController.cadastrarLivro)
  .get('/livros/busca', LivrosController.listarLivroPorEditora)
  .put('/livros/:id', LivrosController.atualizarLivro)
  .get('/livros/:id', LivrosController.buscarLivroPorId)
  .delete('/livros/:id', LivrosController.excluirLivro)


export default router;