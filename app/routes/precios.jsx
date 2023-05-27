import { Link } from '@remix-run/react';

export const meta = () => {
  return [
    { title: 'Bowling de Paso - Precios' },
    {
      name: 'description',
      content: 'Carta de comidas, busca tu favorita!',
    },
  ];
};

export default function Precios() {
  return (
    <>
      <h1>Pagina de precios</h1>
      <Link to="/">Volver</Link>
    </>
  );
}
