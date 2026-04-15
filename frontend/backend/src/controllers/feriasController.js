const ferias = require('../data/ferias');

const listarFerias = (req, res) => {
  res.json(ferias);
};

const criarSolicitacaoFerias = (req, res) => {
  const { usuarioId, dataInicio, dataFim } = req.body;

  if (!usuarioId || !dataInicio || !dataFim) {
    return res.status(400).json({
      mensagem: 'usuarioId, dataInicio e dataFim são obrigatórios'
    });
  }

  const novaSolicitacao = {
    id: ferias.length + 1,
    usuarioId,
    dataInicio,
    dataFim,
    status: 'pendente'
  };

  ferias.push(novaSolicitacao);

  return res.status(201).json({
    mensagem: 'Solicitação de férias criada com sucesso',
    solicitacao: novaSolicitacao
  });
};

const atualizarStatusFerias = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const solicitacao = ferias.find((f) => f.id === Number(id));

  if (!solicitacao) {
    return res.status(404).json({ mensagem: 'Solicitação não encontrada' });
  }

  if (!['aprovada', 'reprovada'].includes(status)) {
    return res.status(400).json({
      mensagem: 'Status deve ser "aprovada" ou "reprovada"'
    });
  }

  solicitacao.status = status;

  return res.json({
    mensagem: 'Status atualizado com sucesso',
    solicitacao
  });
};

module.exports = {
  listarFerias,
  criarSolicitacaoFerias,
  atualizarStatusFerias
};