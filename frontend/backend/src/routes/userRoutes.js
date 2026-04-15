const express = require('express');
const { listarUsuarios } = require('../controllers/userController');
const { mockAuth, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', mockAuth, authorize('gestor', 'rh'), listarUsuarios);

module.exports = router;