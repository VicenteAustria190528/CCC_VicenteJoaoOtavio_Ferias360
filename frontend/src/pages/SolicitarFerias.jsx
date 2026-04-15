import { useState } from "react";

function SolicitarFerias({ onAdicionar }) {
  const [form, setForm] = useState({
    nome: "",
    cracha: "",
    setor: "",
    dataInicial: "",
    dataFinal: "",
    email: "",
    telefone: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const novaSolicitacao = {
      nome: form.nome,
      cracha: form.cracha,
      setor: form.setor,
      periodo: `${form.dataInicial} a ${form.dataFinal}`,
      email: form.email,
      telefone: form.telefone,
    };

    onAdicionar(novaSolicitacao);

    setForm({
      nome: "",
      cracha: "",
      setor: "",
      dataInicial: "",
      dataFinal: "",
      email: "",
      telefone: "",
    });

    alert("Solicitação enviada com sucesso!");
  }

  return (
    <div>
      <h2>Solicitar Férias</h2>

      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.group}>
          <label>Nome</label>
          <input name="nome" type="text" placeholder="Digite o nome" value={form.nome} onChange={handleChange} />
        </div>

        <div style={styles.group}>
          <label>Crachá</label>
          <input name="cracha" type="text" placeholder="Digite o crachá" value={form.cracha} onChange={handleChange} />
        </div>

        <div style={styles.group}>
          <label>Setor</label>
          <input name="setor" type="text" placeholder="Digite o setor" value={form.setor} onChange={handleChange} />
        </div>

        <div style={styles.group}>
          <label>Data inicial</label>
          <input name="dataInicial" type="date" value={form.dataInicial} onChange={handleChange} />
        </div>

        <div style={styles.group}>
          <label>Data final</label>
          <input name="dataFinal" type="date" value={form.dataFinal} onChange={handleChange} />
        </div>

        <div style={styles.group}>
          <label>E-mail</label>
          <input name="email" type="email" placeholder="Digite o e-mail" value={form.email} onChange={handleChange} />
        </div>

        <div style={styles.group}>
          <label>Telefone</label>
          <input name="telefone" type="text" placeholder="Digite o telefone" value={form.telefone} onChange={handleChange} />
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