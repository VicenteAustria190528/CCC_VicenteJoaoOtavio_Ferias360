function Dashboard({ solicitacoes }) {
  const total = solicitacoes.length;

  const aguardandoGestor = solicitacoes.filter(
    (item) => item.status === "Aguardando Aprovação do Gestor"
  ).length;

  const aprovadasGestor = solicitacoes.filter(
    (item) => item.status === "Aprovada pelo Gestor"
  ).length;

  const validadasRH = solicitacoes.filter(
    (item) => item.status === "Validada pelo RH"
  ).length;

  const rejeitadasGestor = solicitacoes.filter(
    (item) => item.status === "Rejeitada pelo Gestor"
  ).length;

  const rejeitadasRH = solicitacoes.filter(
    (item) => item.status === "Rejeitada pelo RH"
  ).length;

  return (
    <div>
      <h2>Dashboard</h2>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>Total de Solicitações</h3>
          <p style={styles.numeroVerde}>{total}</p>
        </div>

        <div style={styles.card}>
          <h3>Aguardando Gestor</h3>
          <p style={styles.numeroAzul}>{aguardandoGestor}</p>
        </div>

        <div style={styles.card}>
          <h3>Aprovadas pelo Gestor</h3>
          <p style={styles.numeroVerde}>{aprovadasGestor}</p>
        </div>

        <div style={styles.card}>
          <h3>Validadas pelo RH</h3>
          <p style={styles.numeroVerde}>{validadasRH}</p>
        </div>

        <div style={styles.card}>
          <h3>Rejeitadas pelo Gestor</h3>
          <p style={styles.numeroVermelho}>{rejeitadasGestor}</p>
        </div>

        <div style={styles.card}>
          <h3>Rejeitadas pelo RH</h3>
          <p style={styles.numeroVermelho}>{rejeitadasRH}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
  },
  numeroVerde: {
    fontSize: "32px",
    fontWeight: "bold",
    marginTop: "10px",
    color: "#2ecc71",
  },
  numeroAzul: {
    fontSize: "32px",
    fontWeight: "bold",
    marginTop: "10px",
    color: "#3498db",
  },
  numeroVermelho: {
    fontSize: "32px",
    fontWeight: "bold",
    marginTop: "10px",
    color: "#e74c3c",
  },
};

export default Dashboard;