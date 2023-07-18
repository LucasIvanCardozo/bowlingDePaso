import { Link } from '@remix-run/react';
import styles from '~/styles/premios.css';
import useIntersection from '~/useIntersection';
import boloDorado from '~/media/images/boloDorado.webp';

export const meta = () => {
  return [
    { title: 'Bowling de Paso - Premios' },
    {
      name: 'description',
      content: 'Entregamos premios al mejor!',
    },
  ];
};

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export default function Premios() {
  const [elementRef, isVisible] = useIntersection({
    treshold: 0,
  });
  return (
    <>
      <main className="main">
        <div className="titulo">
          <div className="titulo_estrellas">
            <div className="titulo_estrella">
              <img className="titulo_estrellaImg" src={boloDorado} alt="" />
            </div>
            <div className="titulo_estrella">
              <img className="titulo_estrellaImg" src={boloDorado} alt="" />
            </div>
            <div className="titulo_estrella">
              <img className="titulo_estrellaImg" src={boloDorado} alt="" />
            </div>
          </div>
          <h1
            className="titulo_h"
            ref={elementRef}
            isvisible={isVisible ? 'true' : 'false'}
          >
            PREMIOS
          </h1>
          <p className="titulo_descripcion">Solo para aficionados</p>
        </div>
      </main>
      <article>
        <section>
          <h2>Premios actuales</h2>
          <h3>100 palos</h3>
          <p>Llevate un vaso con nuestro logo!</p>
          <h3>130 palos</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nobis
            ipsum{' '}
          </p>
        </section>
        <section>
          <h2>Ganadores</h2>
        </section>
      </article>
    </>
  );
}
