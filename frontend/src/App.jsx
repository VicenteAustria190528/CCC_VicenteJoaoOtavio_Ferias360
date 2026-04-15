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
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1, background: "#f5f6fa" }}>
        <Header />

        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/solicitar" element={<SolicitarFerias />} />
            <Route path="/historico" element={<Historico />} />
            <Route path="/gestor" element={<AprovacaoGestor />} />
            <Route path="/rh" element={<ValidacaoRH />} />
            <Route path="/relatorios" element={<Relatorios />} />
            <Route path="/calendario" element={<Calendario />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;