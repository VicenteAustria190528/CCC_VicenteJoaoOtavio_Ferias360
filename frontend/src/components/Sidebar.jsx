import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h2>Férias 360</h2>

      <ul style={styles.menu}>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/solicitar">Solicitar Férias</Link></li>
        <li><Link to="/historico">Histórico</Link></li>
        <li><Link to="/gestor">Aprovação Gestor</Link></li>
        <li><Link to="/rh">Validação RH</Link></li>
        <li><Link to="/relatorios">Relatórios</Link></li>
        <li><Link to="/calendario">Calendário</Link></li>
      </ul>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "220px",
    height: "100vh",
    backgroundColor: "#2ecc71",
    color: "#fff",
    padding: "20px",
  },
  menu: {
    listStyle: "none",
    marginTop: "20px",
    lineHeight: "2",
  },
};

export default Sidebar;