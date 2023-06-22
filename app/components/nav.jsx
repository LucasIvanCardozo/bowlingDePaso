import { Link } from '@remix-run/react';
import { useState } from 'react';

export default function Nav() {
  const [selected, setSelected] = useState(0);

  return (
    <nav className="nav">
      <ul className="nav_ul">
        <li
          className={`nav_li${selected == 1 ? ' nav_selected' : ''}`}
          onClick={() => setSelected(1)}
        >
          <Link
            className={`nav_link${selected == 1 ? ' nav_link_selected' : ''}`}
            to="/"
          >
            INICIO
          </Link>
        </li>
        <li
          className={`nav_li${selected == 2 ? ' nav_selected' : ''}`}
          onClick={() => setSelected(2)}
        >
          <Link
            className={`nav_link${selected == 2 ? ' nav_link_selected' : ''}`}
            to="/precios"
          >
            PRECIOS
          </Link>
        </li>
        <li
          className={`nav_li${selected == 3 ? ' nav_selected' : ''}`}
          onClick={() => setSelected(3)}
        >
          <Link
            className={`nav_link${selected == 3 ? ' nav_link_selected' : ''}`}
            to="/menu"
          >
            MENU
          </Link>
        </li>
        <li
          className={`nav_li${selected == 4 ? ' nav_selected' : ''}`}
          onClick={() => setSelected(4)}
        >
          <Link
            className={`nav_link${selected == 4 ? ' nav_link_selected' : ''}`}
            to="/historia"
          >
            HISTORIA
          </Link>
        </li>
        <li
          className={`nav_li${selected == 5 ? ' nav_selected' : ''}`}
          onClick={() => setSelected(5)}
        >
          <Link
            className={`nav_link${selected == 5 ? ' nav_link_selected' : ''}`}
            to="#contactos"
          >
            CONTACTOS
          </Link>
        </li>
      </ul>
    </nav>
  );
}
