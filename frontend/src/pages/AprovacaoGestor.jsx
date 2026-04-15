import { solicitacoes } from "../services/mockData";

function AprovacaoGestor() {
  const pendentes = solicitacoes.filter(
    (item) => item.status === "Aguardando Aprovação do Gestor"
  );

  return (
    <div>
      <h2>Aprovação do Gestor</h2>

      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Nome</th>
              <th style={styles.th}>Setor</th>
              <th style={styles.th}>Período</th>
              <th style={styles.th}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pendentes.map((item) => (
              <tr key={item.id}>
                <td style={styles.td}>{item.id}</td>
                <td style={styles.td}>{item.nome}</td>
                <td style={styles.td}>{item.setor}</td>
                <td style={styles.td}>{item.periodo}</td>
                <td style={styles.td}>
                  <button style={styles.aprovar}>Aprovar</button>
                  <button style={styles.rejeitar}>Rejeitar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  card: {
    marginTop: "20px",
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
  aprovar: {
    backgroundColor: "#2ecc71",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    marginRight: "8px",
    cursor: "pointer",
  },
  rejeitar: {
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default AprovacaoGestor;