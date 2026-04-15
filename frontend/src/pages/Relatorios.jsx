import { useState } from "react";

function Relatorios({ solicitacoes }) {
  const [filtroStatus, setFiltroStatus] = useState("");

  const solicitacoesFiltradas = filtroStatus
    ? solicitacoes.filter((item) => item.status === filtroStatus)
    : solicitacoes;

  return (
    <div>
      <h2>Relatórios</h2>

      <div style={styles.filtros}>
        <label style={styles.label}>Filtrar por status:</label>
        <select
          value={filtroStatus}
          onChange={(e) => setFiltroStatus(e.target.value)}
          style={styles.select}
        >
          <option value="">Todos</option>
          <option value="Aguardando Aprovação do Gestor">
            Aguardando Aprovação do Gestor
          </option>
          <option value="Aprovada pelo Gestor">
            Aprovada pelo Gestor
          </option>
          <option value="Rejeitada pelo Gestor">
            Rejeitada pelo Gestor
          </option>
          <option value="Validada pelo RH">Validada pelo RH</option>
          <option value="Rejeitada pelo RH">Rejeitada pelo RH</option>
        </select>
      </div>

      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Nome</th>
              <th style={styles.th}>Setor</th>
              <th style={styles.th}>Período</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {solicitacoesFiltradas.map((item) => (
              <tr key={item.id}>
                <td style={styles.td}>{item.id}</td>
                <td style={styles.td}>{item.nome}</td>
                <td style={styles.td}>{item.setor}</td>
                <td style={styles.td}>{item.periodo}</td>
                <td style={styles.td}>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  filtros: {
    marginTop: "20px",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  label: {
    fontWeight: "bold",
  },
  select: {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "1100px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    textAlign: "left",
    borderBottom: "2px solid #ddd",
    padding: "10px",
  },
  td: {
    borderBottom: "1px solid #eee",
    padding: "10px",
  },
};

export default Relatorios;