import express from 'express';
import AutoresController from '../controllers/autoresController.js';

const router = express.Router()

router
  .get('/autores', AutoresController.listarAutores)
  .post('/autores', AutoresController.cadastrarAutor)
  .put('/autores/:id', AutoresController.atualizarAutor)
  .get('/autores/:id', AutoresController.buscarAutorPorId)
  .delete('/autores/:id', AutoresController.excluirAutor)

export default router;