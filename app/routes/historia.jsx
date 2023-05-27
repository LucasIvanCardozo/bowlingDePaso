import { Link } from '@remix-run/react';

export const meta = () => {
  return [
    { title: 'Bowling de Paso - Historia' },
    {
      name: 'description',
      content: 'Carta de comidas, busca tu favorita!',
    },
  ];
};

export default function Historia() {
  return (
    <>
      <h1>Pagina de historia</h1>
      <Link to="/">Volver</Link>
    </>
  );
}
