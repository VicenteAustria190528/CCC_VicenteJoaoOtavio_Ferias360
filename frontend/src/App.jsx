import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import SolicitarFerias from "./pages/SolicitarFerias";
import Historico from "./pages/Historico";
import AprovacaoGestor from "./pages/AprovacaoGestor";
import ValidacaoRH from "./pages/ValidacaoRH";
import Relatorios from "./pages/Relatorios";
import Calendario from "./pages/Calendario";

function App() {
  const [solicitacoes, setSolicitacoes] = useState([
    {
      id: 1,
      nome: "João Silva",
      cracha: "1001",
      setor: "Financeiro",
      periodo: "01/07/2026 a 10/07/2026",
      email: "joao@empresa.com",
      telefone: "54999999999",
      status: "Aguardando Aprovação do Gestor",
    },
    {
      id: 2,
      nome: "Maria Souza",
      cracha: "1002",
      setor: "RH",
      periodo: "15/07/2026 a 25/07/2026",
      email: "maria@empresa.com",
      telefone: "54988888888",
      status: "Aprovada pelo Gestor",
    },
    {
      id: 3,
      nome: "Carlos Lima",
      cracha: "1003",
      setor: "TI",
      periodo: "05/08/2026 a 15/08/2026",
      email: "carlos@empresa.com",
      telefone: "54977777777",
      status: "Validada pelo RH",
    },
  ]);

  function adicionarSolicitacao(novaSolicitacao) {
    setSolicitacoes((prev) => [
      ...prev,
      {
        ...novaSolicitacao,
        id: prev.length + 1,
        status: "Aguardando Aprovação do Gestor",
      },
    ]);
  }

  function atualizarStatus(id, novoStatus) {
    setSolicitacoes((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: novoStatus } : item
      )
    );
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1, background: "#f5f6fa" }}>
        <Header />

        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Dashboard solicitacoes={solicitacoes} />} />
            <Route
              path="/solicitar"
              element={<SolicitarFerias onAdicionar={adicionarSolicitacao} />}
            />
            <Route
              path="/historico"
              element={<Historico solicitacoes={solicitacoes} />}
            />
            <Route
              path="/gestor"
              element={
                <AprovacaoGestor
                  solicitacoes={solicitacoes}
                  onAtualizarStatus={atualizarStatus}
                />
              }
            />
            <Route
              path="/rh"
              element={
                <ValidacaoRH
                  solicitacoes={solicitacoes}
                  onAtualizarStatus={atualizarStatus}
                />
              }
            />
            <Route path="/relatorios" element={<Relatorios />} />
            <Route path="/calendario" element={<Calendario />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;