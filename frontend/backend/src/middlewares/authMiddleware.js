const users = require('../data/users');

const mockAuth = (req, res, next) => {
  const userId = req.headers['x-user-id'];

  if (!userId) {
    return res.status(401).json({
      mensagem: 'Usuário não autenticado. Informe x-user-id no header.'
    });
  }

  const user = users.find((u) => u.id === Number(userId));

  if (!user) {
    return res.status(401).json({
      mensagem: 'Usuário inválido'
    });
  }

  req.user = user;
  next();
};

const authorize = (...perfisPermitidos) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ mensagem: 'Usuário não autenticado' });
    }

    if (!perfisPermitidos.includes(req.user.perfil)) {
      return res.status(403).json({
        mensagem: 'Acesso negado para este perfil'
      });
    }

    next();
  };
};

module.exports = {
  mockAuth,
  authorize
};