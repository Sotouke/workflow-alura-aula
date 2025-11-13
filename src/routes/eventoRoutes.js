import express from 'express';
import EventoController from '../controllers/eventosController.js';

const router = express.Router();

router
  .get('/eventos', EventoController.listarEventos);

export default router;
