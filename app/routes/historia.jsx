import { Link } from '@remix-run/react';
import boloMain from '~/media/images/pelotaHistoria.webp';
import styles from '~/styles/historia.css';

export const meta = () => {
  return [
    { title: 'Bowling de Paso - Historia' },
    {
      name: 'description',
      content: 'Carta de comidas, busca tu favorita!',
    },
  ];
};

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export default function Historia() {
  return (
    <>
      <main className="main">
        <div className="main_container">
          <img
            src={boloMain}
            alt="pelota de bowling con transparencia"
            className="main_img"
            loading="lazy"
          />
          <header className="main_header">
            <h1 className="main_h1">historia</h1>
            <p className="main_p">de nuestro bowling</p>
          </header>
        </div>
      </main>
    </>
  );
}
