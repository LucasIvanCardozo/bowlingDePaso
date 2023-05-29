import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import EnBlanco from '../components/enBlanco';
import styles from '~/styles/menu.css';
import pizza from '~/media/images/pizza.png';
import cerveza from '~/media/images/cerveza.png';
import helado from '~/media/images/helado.png';
import { useState } from 'react';

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
  return [{ rel: 'stylesheet', href: styles }];
};

export const loader = async () => {
  return json([
    { id: 0, name: 'cafeteria', subcategoriasBool: false, data: [] },
    { id: 1, name: 'bebidas', subcategoriasBool: false, data: [] },
    {
      id: 2,
      name: 'comidas',
      subcategoriasBool: true,
      data: [
        {
          name: 'tapeo',
          data: [],
        },
        { name: 'hamburguesas' },
        { name: 'pizzas' },
        {
          name: 'sandwiches',
          data: [
            {
              name: 'super panchos',
              subCategorias: [
                { name: 'solo' },
                { name: 'jamón y queso' },
                { name: 'queso y panenta' },
                { name: 'cheddar y panceta' },
                { name: 'cheddar, panceta y cebolla caramelizada' },
              ],
              adicional: [{ name: 'papitas pay' }],
            },
          ],
        },
        { name: 'guarniciones' },
      ],
    },
    { id: 3, name: 'postres', subcategoriasBool: false, data: [] },
  ]);
};

export default function Menu() {
  const data = useLoaderData();
  const [categoria, setCategoria] = useState(2);
  const [subCategoria, setSubcategoria] = useState(0);
  return (
    <>
      <main className="main">
        <div className="logoText">
          <p className="logoText_bowling">BOWLING</p>
          <p className="logoText_dePaso">DE PASO</p>
        </div>
        <h1 className="titulo">MENÚ</h1>
        <p className="titulo_descripcion">
          En nuestro Bowling ofrecemos una variedad de comidas y bebidas
          deliciosas para una experiencia completa.
        </p>
        <div className="stickers">
          <img className="sticker" src={pizza} alt="pizza sin fondo" />
          <img className="sticker" src={cerveza} alt="cerveza sin fondo" />
          <img className="sticker" src={helado} alt="helado sin fondo" />
        </div>
      </main>
      <article className="carta">
        <div className="carta_categorias">
          <ul className="carta_categoriasUl">
            {data[categoria].subcategoriasBool ? (
              <div className="carta_subcategorias">
                <ul className="carta_subcategoriasUl">
                  {data[categoria].data.map((data) => (
                    <li className="carta_subcategoriasLi" key={data.name}>
                      <p className="carta_subcategoriasP">{data.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {data.map((data) => (
              <li
                className="carta_categoriasLi"
                key={data.name}
                onClick={() => {
                  setCategoria(data.id);
                  setSubcategoria(0);
                }}
              >
                <p className="carta_categoriasP">{data.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <section className="carta_info"></section>
      </article>
    </>
  );
}
