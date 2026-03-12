import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul>

      <li>
        <Link to="/">Página Inicial</Link>
      </li>

      <li>
        <Link to="/sobre">Sobre</Link>
      </li>

      <li>
        <Link to="/cadastro">Cadastrar Séries</Link>
      </li>

      <li>
        <Link to="/series">Lista de Séries</Link>
      </li>

    </ul>
  );
}

export default NavBar;
