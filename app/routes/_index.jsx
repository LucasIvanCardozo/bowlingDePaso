import { Link } from '@remix-run/react';
import styles from '~/styles/_index.css';
import LogoTexto from '../components/logoTexto';
import estrellas from '~/media/images/estrellas.png';
import bolo from '~/media/images/boloBlanco.png';
import imagen1 from '~/media/images/imagen1.png';
import imagen2 from '~/media/images/imagen2.png';
import { useEffect, useState } from 'react';

export const meta = () => {
  return [
    { title: 'Bowling de Paso - Inicio' },
    {
      name: 'description',
      content: "Bienvenidos a la pagina principal de 'Bowling de Paso'!",
    },
  ];
};

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export default function Index() {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return (
    <>
      <main className="main">
        <div className="main_banner">
          <img
            className="main_estrellas"
            src={estrellas}
            alt="estrellas en png"
          />
          <LogoTexto size={width >= 1024 ? 12 : width < 767 ? 5 : 10} />
          <img className="main_bolo" src={bolo} alt="bolo blanco" />
        </div>
      </main>
      <article className="article">
        <p className="article_p1_1">
          En nuestro Bowling, sabemos que lo importante es disfrutar de la
          compañía mutua.
        </p>
        <p className="article_p1_2">
          ¡Por eso es el lugar ideal para pasar un rato agradable todos juntos!
        </p>
        <div className="article_p2">
          <div className="article_p2_container1">
            <p className="article_p2_p">abierto</p>
            <p className="article_p2_p">todos los días!</p>
            <p className="article_p2_p">de 17hs a 2:30hs</p>
          </div>
          <span className="article_p2_span"></span>
          <div className="article_p2_container2">
            <p className="article_p2_p">ubicación</p>
            <p className="article_p2_p">córdoba</p>
            <p className="article_p2_p">3766</p>
          </div>
        </div>
        <section className="section1">
          <h2 className="section1_titulo">nos&nbsp;mudamos!</h2>
          <div className="section1_datos">
            <div className="section1_containerImg">
              <img
                className="section1_img"
                src={imagen1}
                alt="imagen del bowling"
              />
            </div>
            <p className="section1_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. cididunt ut labore et dolore magna
              aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
              viverra maecenas accumsan lacus vel facilisis.{' '}
            </p>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <section className="section2">
          <h2 className="section2_titulo">qué&nbsp;te&nbsp;podemos ofrecer?</h2>
          <div className="section1_datos">
            <div className="section1_containerImg">
              <img
                className="section1_img"
                src={imagen2}
                alt="imagen del bowling"
              />
            </div>
            <p className="section2_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. cididunt ut labore et dolore magna
              aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
              viverra maecenas accumsan lacus vel facilisis.{' '}
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
