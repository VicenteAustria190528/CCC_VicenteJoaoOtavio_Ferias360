import { useState } from "react";

function Calendario({ solicitacoes }) {
  const [mesSelecionado, setMesSelecionado] = useState("");

  const aprovadas = solicitacoes.filter(
    (item) =>
      item.status === "Aprovada pelo Gestor" ||
      item.status === "Validada pelo RH"
  );

  const filtradas = mesSelecionado
    ? aprovadas.filter((item) => {
        const dataInicio = item.periodo.split(" a ")[0]; // pega início
        const mes = dataInicio.split("/")[1]; // pega mês
        return mes === mesSelecionado;
      })
    : aprovadas;

  return (
    <div>
      <h2>Calendário de Férias</h2>

      {/* FILTRO */}
      <div style={styles.filtro}>
        <label>Filtrar por mês:</label>
        <select
          value={mesSelecionado}
          onChange={(e) => setMesSelecionado(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="01">Janeiro</option>
          <option value="02">Fevereiro</option>
          <option value="03">Março</option>
          <option value="04">Abril</option>
          <option value="05">Maio</option>
          <option value="06">Junho</option>
          <option value="07">Julho</option>
          <option value="08">Agosto</option>
          <option value="09">Setembro</option>
          <option value="10">Outubro</option>
          <option value="11">Novembro</option>
          <option value="12">Dezembro</option>
        </select>
      </div>

      {/* LISTA */}
      <div style={styles.container}>
        {filtradas.length === 0 ? (
          <p>Nenhuma solicitação encontrada.</p>
        ) : (
          filtradas.map((item) => (
            <div key={item.id} style={styles.card}>
              <h3>{item.nome}</h3>
              <p><strong>Setor:</strong> {item.setor}</p>
              <p><strong>Período:</strong> {item.periodo}</p>
              <p><strong>Status:</strong> {item.status}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  filtro: {
    marginTop: "20px",
    marginBottom: "20px",
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    maxWidth: "1000px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
  },
};

export default Calendario;