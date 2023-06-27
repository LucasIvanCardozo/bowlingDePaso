import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import ItemContactos from './itemContactos';
import instagram from '~/media/images/instagramLogo.webp';
import facebook from '~/media/images/facebookLogo.webp';
import whastapp from '~/media/images/whatsappLogo.webp';

export default function Contactos() {
  return (
    <div id="contactos" className="contactos">
      <h2 className="contactos_titulo">Contactos</h2>
      <ul className="contactos_ul">
        <ItemContactos
          name="Instagram"
          description="Siguenos y comparte tus historias con nosotros!"
          link="https://www.instagram.com/elbowlingdepaso/"
          image={instagram}
        />
        <ItemContactos
          name="Facebook"
          description="Entérate de todas las novedades y ofertas al instante."
          link="https://www.facebook.com/elbowlingdepaso2442"
          image={facebook}
        />
        <ItemContactos
          name="Whatsapp"
          description="Contáctate con nosotros por cualquier duda que tengas."
          link="https://api.whatsapp.com/send?phone=542235368630&text=Hola!%20Quer%C3%ADa%20hacer%20una%20reserva%20para%20jugar%20al%20bowling!%F0%9F%8E%B3%F0%9F%8E%B3"
          image={whastapp}
        />
      </ul>
    </div>
  );
}
