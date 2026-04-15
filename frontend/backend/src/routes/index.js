const express = require('express');

const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const feriasRoutes = require('./feriasRoutes');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ mensagem: 'API do Férias 360 funcionando!' });
});

router.use('/auth', authRoutes);
router.use('/usuarios', userRoutes);
router.use('/ferias', feriasRoutes);

module.exports = router;