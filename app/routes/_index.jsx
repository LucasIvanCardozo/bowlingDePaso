import { Link } from '@remix-run/react';

export const meta = () => {
  return [
    { title: 'Bowling de Paso - Inicio' },
    {
      name: 'description',
      content: "Bienvenidos a la pagina principal de 'Bowling de Paso'!",
    },
  ];
};

export default function Index() {
  return (
    <>
      <div className="container">
        <h2>Inicio</h2>
      </div>
    </>
  );
}
