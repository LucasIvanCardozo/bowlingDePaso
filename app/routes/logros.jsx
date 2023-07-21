import { Link } from '@remix-run/react';
import styles from '~/styles/logros.css';
import stylesConfetis from '~/styles/confetis.css';
import stylesAnotacion from '~/styles/anotacion.css';
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
import Anotacion from '../components/anotacion';
import { useEffect, useState } from 'react';

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
    { rel: 'stylesheet', href: stylesAnotacion },
  ];
};

export default function Logros() {
  const [scoreboard, setScoreboard] = useState([]);
  const [elementRef, isVisible] = useIntersection({
    treshold: 0,
  });
  const [elementRef2, isVisible2] = useIntersection({
    treshold: 0,
  });

  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      if (i == 0) {
        const randomDer = Math.floor(Math.random() * 8);
        const randomIzq = Math.floor(Math.random() * 9 - randomDer);
        const suma = randomDer + randomIzq;
        console.log(`${i}: ${suma}`);
        scoreboard.push({ der: randomDer, izq: randomIzq, sum: suma });
      } else {
        const randomDer = Math.floor(Math.random() * 8);
        const randomIzq = Math.floor(Math.random() * (10 - randomDer));
        const sumaTotal = randomIzq + randomDer + scoreboard[i - 1].sum;
        console.log(`${i}: ${sumaTotal}`);
        scoreboard.push({ der: randomDer, izq: randomIzq, sum: sumaTotal });
      }
    }
  }, []);

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
        <div className="article_boxes">
          <div className="article_boxes_score">
            <Anotacion
              der={scoreboard[0] ? scoreboard[0].der : null}
              izq={scoreboard[0] ? scoreboard[0].izq : null}
              sum={scoreboard[0] ? scoreboard[0].sum : null}
              width={width}
            />
            <Anotacion
              der={scoreboard[1] ? scoreboard[1].der : null}
              izq={scoreboard[1] ? scoreboard[1].izq : null}
              sum={scoreboard[1] ? scoreboard[1].sum : null}
              width={width}
            />
            <Anotacion
              der={scoreboard[2] ? scoreboard[2].der : null}
              izq={scoreboard[2] ? scoreboard[2].izq : null}
              sum={scoreboard[2] ? scoreboard[2].sum : null}
              width={width}
            />
            <Anotacion
              der={scoreboard[3] ? scoreboard[3].der : null}
              izq={scoreboard[3] ? scoreboard[3].izq : null}
              sum={scoreboard[3] ? scoreboard[3].sum : null}
            />
            <Anotacion
              der={scoreboard[4] ? scoreboard[4].der : null}
              izq={scoreboard[4] ? scoreboard[4].izq : null}
              sum={scoreboard[4] ? scoreboard[4].sum : null}
            />
          </div>
          <Anotacion special={true} />
          <div className="article_boxes_score">
            <Anotacion
              der={scoreboard[5] ? scoreboard[5].der : null}
              izq={scoreboard[5] ? scoreboard[5].izq : null}
              sum={scoreboard[5] ? scoreboard[5].sum : null}
            />
            <Anotacion
              der={scoreboard[6] ? scoreboard[6].der : null}
              izq={scoreboard[6] ? scoreboard[6].izq : null}
              sum={scoreboard[6] ? scoreboard[6].sum : null}
            />
            <Anotacion
              der={scoreboard[7] ? scoreboard[7].der : null}
              izq={scoreboard[7] ? scoreboard[7].izq : null}
              sum={scoreboard[7] ? scoreboard[7].sum : null}
              width={width}
            />
            <Anotacion
              der={scoreboard[8] ? scoreboard[8].der : null}
              izq={scoreboard[8] ? scoreboard[8].izq : null}
              sum={scoreboard[8] ? scoreboard[8].sum : null}
              width={width}
            />
            <Anotacion
              der={scoreboard[9] ? scoreboard[9].der : null}
              izq={scoreboard[9] ? scoreboard[9].izq : null}
              sum={scoreboard[9] ? scoreboard[9].sum : null}
              width={width}
            />
          </div>
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
