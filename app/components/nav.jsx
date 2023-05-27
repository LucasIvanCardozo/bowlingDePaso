import { Link } from '@remix-run/react';

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav_ul">
        <li className="nav_li">
          <Link className="nav_link" to="/menu">
            MENÚ
          </Link>
        </li>
        <li className="nav_li">
          <Link className="nav_link" to="/precios">
            PRECIOS
          </Link>
        </li>
        <li className="nav_li">
          <Link className="nav_link" to="/">
            INICIO
          </Link>
        </li>
        <li className="nav_li">
          <Link className="nav_link" to="/historia">
            HISTORIA
          </Link>
        </li>
        <li className="nav_li">
          <Link className="nav_link" to="/contactos">
            CONTACTOS
          </Link>
        </li>
      </ul>
    </nav>
  );
}
