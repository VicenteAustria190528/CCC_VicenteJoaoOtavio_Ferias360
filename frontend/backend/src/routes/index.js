const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ mensagem: 'API funcionando via routes!' });
});

module.exports = router;