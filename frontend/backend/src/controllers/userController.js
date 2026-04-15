const users = require('../data/users');

const listarUsuarios = (req, res) => {
  const usuariosSemSenha = users.map(({ senha, ...user }) => user);
  res.json(usuariosSemSenha);
};

module.exports = {
  listarUsuarios
};