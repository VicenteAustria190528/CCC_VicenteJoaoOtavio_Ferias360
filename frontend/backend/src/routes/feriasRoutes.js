const express = require('express');
const {
  listarFerias,
  criarSolicitacaoFerias,
  atualizarStatusFerias
} = require('../controllers/feriasController');

const { mockAuth, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', mockAuth, listarFerias);
router.post('/', mockAuth, authorize('funcionario', 'rh'), criarSolicitacaoFerias);
router.patch('/:id/status', mockAuth, authorize('gestor', 'rh'), atualizarStatusFerias);

module.exports = router;