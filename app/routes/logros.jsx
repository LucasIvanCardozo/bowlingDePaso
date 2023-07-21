import { Link } from '@remix-run/react';
import styles from '~/styles/logros.css';
import stylesConfetis from '~/styles/confetis.css';
import useIntersection from '~/useIntersection';
import boloDorado from '~/media/images/boloDorado.webp';
import Confetis from '../components/confetis';
import wind from '~/media/images/viento.svg';
import ball from '~/media/images/elipse.svg';
import text100 from '~/media/images/100PalosTexto.svg';
import palos100 from '~/media/images/100Palos.svg';
import palos130 from '~/media/images/130Palos.svg';
import text130 from '~/media/images/130PalosTexto.svg';
import flecha from '~/media/images/flecha.svg';

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
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: stylesConfetis },
  ];
};

export default function Logros() {
  const [elementRef, isVisible] = useIntersection({
    treshold: 0,
  });
  const [elementRef2, isVisible2] = useIntersection({
    treshold: 0,
  });
  return (
    <>
      <main className="main">
        <div className="titulo">
          {/*<div className="titulo_estrellas">
            <div className="titulo_estrella">
              <img className="titulo_estrellaImg" src={boloDorado} alt="" />
            </div>
            <div className="titulo_estrella">
              <img className="titulo_estrellaImg" src={boloDorado} alt="" />
            </div>
            <div className="titulo_estrella">
              <img className="titulo_estrellaImg" src={boloDorado} alt="" />
            </div>
  </div>*/}
          <div className="titulo_hContenedor">
            <Confetis />
            <h1
              className="titulo_h"
              ref={elementRef}
              isvisible={isVisible ? 'true' : 'false'}
            >
              LOGROS
            </h1>
            <Confetis direction={true} />
          </div>
          <p className="titulo_descripcion">Un buen jugador</p>
          <p className="titulo_descripcion">merece ser recompenzado</p>
        </div>
      </main>
      <article className="article">
        <div className="article_text">
          <h2 className="article_title">Bowling challenge</h2>
          <p className="article_description">
            ¡Bienvenido a Bowling Challenge! Aquí encontrarás una experiencia
            única de bowling llena de emoción y desafíos. Demuestra tu destreza
            en la pista mientras te enfrentas a nuestras emocionantes misiones
            de puntería. Cada misión completada te acercará a increíbles premios
            que hemos preparado para ti. ¡Únete al Bowling Challenge y sé parte
            de la comunidad de jugadores que disfrutan de premios y diversión en
            cada lanzamiento!
          </p>
        </div>
        <section className="section_100PalosContainer">
          <img className="section_100Palos_flecha" src={flecha} alt="" />
          <div className="section_100Palos">
            <img
              className="section_100Palos_wind"
              src={wind}
              alt=""
              ref={elementRef2}
              isvisible={isVisible2 ? 'true' : 'false'}
            />
            <div className="section_100Palos_ball">
              <img
                className="section_100Palos_ballImg"
                src={ball}
                alt=""
                isvisible={isVisible2 ? 'true' : 'false'}
              />
              <img
                className="section_100Palos_textImg"
                src={text100}
                alt=""
                isvisible={isVisible2 ? 'true' : 'false'}
              />
            </div>
            <img className="section_100Palos_palos" src={palos100} alt="" />
            <img src="" alt="" />
          </div>
        </section>
        <section className="section_130PalosContainer">
          <img className="section_130Palos_palos" src={palos130} alt="" />
          <div className="section_130Palos_ball">
            <img className="section_130Palos_textImg" src={text130} alt="" />
            <img className="section_130Palos_ballImg" src={ball} alt="" />
          </div>
          <img className="section_130Palos_wind" src={wind} alt="" />
          <div className="comingsoon">
            <p className="comingsoon_text">
              <b>PROXIMAMENTE</b>
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
