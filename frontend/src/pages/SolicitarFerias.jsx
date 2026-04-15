function SolicitarFerias() {
  return (
    <div>
      <h2>Solicitar Férias</h2>

      <form style={styles.form}>
        <div style={styles.group}>
          <label>Nome</label>
          <input type="text" placeholder="Digite o nome" />
        </div>

        <div style={styles.group}>
          <label>Crachá</label>
          <input type="text" placeholder="Digite o crachá" />
        </div>

        <div style={styles.group}>
          <label>Setor</label>
          <input type="text" placeholder="Digite o setor" />
        </div>

        <div style={styles.group}>
          <label>Data inicial</label>
          <input type="date" />
        </div>

        <div style={styles.group}>
          <label>Data final</label>
          <input type="date" />
        </div>

        <div style={styles.group}>
          <label>E-mail</label>
          <input type="email" placeholder="Digite o e-mail" />
        </div>

        <div style={styles.group}>
          <label>Telefone</label>
          <input type="text" placeholder="Digite o telefone" />
        </div>

        <button type="submit" style={styles.button}>Enviar Solicitação</button>
      </form>
    </div>
  );
}

const styles = {
  form: {
    marginTop: "20px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "600px",
  },
  group: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
  },
  button: {
    backgroundColor: "#2ecc71",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default SolicitarFerias;