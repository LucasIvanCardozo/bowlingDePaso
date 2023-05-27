import { Link } from '@remix-run/react';

export const meta = () => {
  return [
    { title: 'Bowling de Paso - Contactos' },
    {
      name: 'description',
      content: 'Carta de comidas, busca tu favorita!',
    },
  ];
};

export default function Contactos() {
  return (
    <>
      <h1>Pagina de contactos</h1>
      <Link to="/">Volver</Link>
    </>
  );
}
