import whatsapp from '~/media/images/whatsappLogo.webp';
import instagram from '~/media/images/instagramLogo.webp';
import facebook from '~/media/images/facebookLogo.webp';

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer_ul" id="contactos">
        <li className="footer_li">
          <a
            href="https://www.instagram.com/elbowlingdepaso/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="footer_img" src={instagram} alt="" loading="lazy" />
          </a>
        </li>
        <li className="footer_li">
          <a
            href="https://www.facebook.com/elbowlingdepaso2442"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="footer_img" src={facebook} alt="" loading="lazy" />
          </a>
        </li>
        <li className="footer_li">
          <a
            href="https://api.whatsapp.com/send?phone=542235368630&text=Hola!%20Quer%C3%ADa%20hacer%20una%20reserva%20para%20jugar%20al%20bowling!%F0%9F%8E%B3%F0%9F%8E%B3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="footer_img" src={whatsapp} alt="" loading="lazy" />
          </a>
        </li>
      </ul>
      <p className="footer_socialText">
        No dudes en escribirnos, resolveremos cualquier consulta que usted
        tenga!
      </p>
      <hr style={{ width: '80vw' }} />
      <div className="footer_terminos">
        <p className="footer_terminos_texto">©Todos los derechos reservados</p>

        <p className="footer_terminos_texto">
          Creado por{' '}
          <b>
            <a
              href="https://www.instagram.com/lucardozo27/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lucas Cardozo
            </a>
          </b>{' '}
          y diseñado por{' '}
          <b>
            <a
              href="https://www.instagram.com/felo_cardozo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Felipe Cardozo
            </a>
          </b>
        </p>
      </div>
    </footer>
  );
}
