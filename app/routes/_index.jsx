import { Link } from '@remix-run/react';
import styles from '~/styles/_index.css';
import LogoTexto from '../components/logoTexto';
import estrellas from '~/media/images/estrellas.webp';
import bolo from '~/media/images/boloBlanco.webp';
import imagen1 from '~/media/images/imagen1.webp';
import imagen2 from '~/media/images/imagen2.webp';
import imagen3 from '~/media/images/maquinita.webp';
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
            alt="estrellas en webp"
          />
          <LogoTexto />
          <img
            className="main_bolo"
            src={bolo}
            alt="bolo blanco"
            loading="lazy"
          />
        </div>
      </main>
      <article className="article">
        <section className="section_intro">
          <div className="section_intro_text">
            <p className="section_intro_text_p1">
              En nuestro Bowling, sabemos que lo importante es disfrutar de la
              compañía mutua.
            </p>
            <p className="section_intro_text_p2">
              ¡Por eso es el lugar ideal para pasar un rato agradable todos
              juntos!
            </p>
          </div>
          <div className="section_intro_time">
            <div className="section_intro_time_days">
              <p className="section_intro_time_p">abierto</p>
              <p className="section_intro_time_p">todos los días!</p>
              <p className="section_intro_time_p">de 17hs a 2:30hs</p>
            </div>
            <div className="section_intro_time_slash"></div>
            <div className="section_intro_time_ubi">
              <p className="section_intro_time_p">ubicación</p>
              <p className="section_intro_time_p">córdoba</p>
              <p className="section_intro_time_p">3766</p>
            </div>
          </div>
        </section>

        <section className="section_first">
          <h2 className="section_first_titulo">nos&nbsp;mudamos!</h2>
          <div className="section_first_datos">
            <div className="section_first_containerImg">
              <img
                className="section_first_img"
                src={imagen1}
                alt="imagen del bowling"
                loading="lazy"
              />
            </div>
            <p className="section_first_p">
              ¡Tenemos grandes noticias! Nos hemos mudado a un nuevo lugar
              espectacular, más amplio y completamente renovado para brindarte
              una experiencia de entretenimiento única. Desde el momento en que
              ingreses, te maravillarás con su diseño moderno y elegante. Además
              de nuestras atracciones emocionantes, ahora ofrecemos más opciones
              gastronómicas y áreas de descanso mejoradas. Ven y descubre todo
              lo que hemos preparado para ti en nuestra nueva ubicación.
            </p>
          </div>
        </section>
        <section className="section_second">
          <h2 className="section_second_titulo">
            qué&nbsp;te&nbsp;podemos ofrecer?
          </h2>
          <div className="section_second_datos">
            <div className="section_second_containerImg">
              <img
                className="section_second_img"
                src={imagen2}
                alt="imagen del bowling"
                loading="lazy"
              />
            </div>
            <p className="section_second_p">
              ¡Ven a nuestro bowling y disfruta de una experiencia inolvidable!
              Celebramos cumpleaños, ofrecemos líneas gratis, diversión
              garantizada, variedad de comidas, cervezas, cócteles y un ambiente
              increíble. ¡Te esperamos para pasar momentos geniales!
            </p>
          </div>
        </section>
        <section className="section_third">
          <div className="section_third_containerImg">
            <img
              className="section_third_img"
              src={imagen3}
              alt="imagen del bowling"
              loading="lazy"
            />
          </div>

          <div className="section_third_datos">
            <h2 className="section_third_titulo">diversión!</h2>{' '}
            <p className="section_third_p">
              Explora una experiencia de entretenimiento completa en nuestro
              centro. Además del emocionante bowling, encontrarás maquinitas
              arcade y mesas de pool profesionales. ¡Diversión para todas las
              edades y gustos en un solo lugar!
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
