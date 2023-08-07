import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import EnBlanco from '../components/enBlanco';
import ItemCarta from '../components/itemCarta';
import Marcas from '../components/marcas';
import styles from '~/styles/menu.css';
import stylesItemCarta from '~/styles/itemCarta.css';
import stylesMarcas from '~/styles/marcas.css';
import pizza from '~/media/images/pizza.webp';
import cerveza from '~/media/images/cerveza.webp';
import helado from '~/media/images/helado.webp';
import { getPosts } from '../db/db';
import { useEffect, useState } from 'react';
import useIntersection from '~/useIntersection';

export const meta = () => {
  return [
    { title: 'Bowling de Paso - Menu' },
    {
      name: 'description',
      content: 'Carta de comidas, busca tu favorita!',
    },
  ];
};

export const links = () => {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: stylesItemCarta },
    { rel: 'stylesheet', href: stylesMarcas },
  ];
};

export const loader = async () => {
  return json(await getPosts());
};

export default function Menu() {
  const data = useLoaderData();
  const [categoria, setCategoria] = useState(0);
  const [subcategoria, setSubcategoria] = useState(0);
  const [pagina, setPagina] = useState({ categoria: 0, subcategoria: 0 });
  const [elementRef, isVisible] = useIntersection({
    treshold: 0,
  });
  const [elementRef2, isVisible2] = useIntersection({
    treshold: 0,
  });
  const [elementRef3, isVisible3] = useIntersection({
    treshold: 0,
  });
  const [elementRef4, isVisible4] = useIntersection({
    treshold: 0,
  });
  const [elementRef5, isVisible5] = useIntersection({
    treshold: 0,
  });
  return (
    <>
      <main className="main">
        <div className="titulo">
          <h1
            className="titulo_h"
            ref={elementRef}
            isvisible={isVisible ? 'true' : 'false'}
          >
            MENÚ
          </h1>
          <p className="titulo_descripcion">
            En nuestro Bowling ofrecemos una variedad de comidas y bebidas
            deliciosas para una experiencia completa.
          </p>
        </div>
        {/*<div className="stickers">
          <img
            className="sticker pizza"
            src={pizza}
            alt="pizza sin fondo"
            loading="lazy"
            ref={elementRef2}
            isvisible={isVisible2 ? "true" : "false"}
          />
          <img
            className="sticker cerveza"
            src={cerveza}
            alt="cerveza sin fondo"
            loading="lazy"
            ref={elementRef3}
            isvisible={isVisible3 ? "true" : "false"}
          />
          <img
            className="sticker helado"
            src={helado}
            alt="helado sin fondo"
            loading="lazy"
            ref={elementRef4}
            isvisible={isVisible4 ? "true" : "false"}
          />
        </div>*/}
      </main>
      <article className="carta">
        <div className="carta_categorias">
          <ul className="carta_categoriasUl">
            {data.map((data) => (
              <li
                className="carta_categoriasLi"
                key={data.name}
                ref={data.id == 0 ? elementRef5 : null}
                isvisible={isVisible5 && data.id == 0 ? 'true' : 'false'}
                onClick={() => {
                  categoria != data.id
                    ? (setCategoria(data.id),
                      data.subcategoriasBool
                        ? null
                        : setPagina({ categoria: data.id, subcategoria: 0 }))
                    : null;
                }}
                open={pagina.categoria == data.id}
              >
                <p className="carta_categoriasP">{data.name}</p>
              </li>
            ))}
            {data[categoria].subcategoriasBool ? (
              <div className="carta_subcategorias">
                <ul className="carta_subcategoriasUl">
                  {data[categoria].data.map((data) => (
                    <li
                      className="carta_subcategoriasLi"
                      key={data.name}
                      onClick={() =>
                        setPagina({
                          categoria: categoria,
                          subcategoria: data.id,
                        })
                      }
                    >
                      <p className="carta_subcategoriasP">{data.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </ul>
        </div>
        <section className="carta_info">
          {data[pagina.categoria].subcategoriasBool
            ? data[pagina.categoria].data[pagina.subcategoria].data.map(
                (data) => <ItemCarta key={data.name} data={data} />
              )
            : data[pagina.categoria].data.map((data) => (
                <ItemCarta key={data.name} data={data} />
              ))}
          <Marcas />
        </section>
      </article>
    </>
  );
}
