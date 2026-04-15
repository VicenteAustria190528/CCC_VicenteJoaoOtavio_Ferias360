const users = require('../data/users');

const login = (req, res) => {
  const { email, senha } = req.body;

  const user = users.find(
    (u) => u.email === email && u.senha === senha
  );

  if (!user) {
    return res.status(401).json({ mensagem: 'Email ou senha inválidos' });
  }

  return res.json({
    mensagem: 'Login realizado com sucesso',
    usuario: {
      id: user.id,
      nome: user.nome,
      email: user.email,
      perfil: user.perfil
    }
  });
};

module.exports = {
  login
};