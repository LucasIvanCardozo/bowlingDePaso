import quilmes from '~/media/images/quilmesLogo.webp';
import patagonia from '~/media/images/patagoniaLogo.webp';
import stella from '~/media/images/stellaLogo.webp';
import coca from '~/media/images/cocaLogo.webp';

export default function Marcas() {
  return (
    <aside className="marcas">
      <ul className="marcas_ul">
        <li className="marcas_li">
          <img className="marcas_img" src={quilmes} alt="" loading="lazy" />
        </li>
        <li className="marcas_li">
          <img className="marcas_img" src={patagonia} alt="" loading="lazy" />
        </li>
        <li className="marcas_li">
          <img className="marcas_img" src={stella} alt="" loading="lazy" />
        </li>
        <li className="marcas_li">
          <img className="marcas_img" src={coca} alt="" loading="lazy" />
        </li>
      </ul>
    </aside>
  );
}
