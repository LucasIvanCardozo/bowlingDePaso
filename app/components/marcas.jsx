import quilmes from '~/media/images/quilmesLogo.png';
import patagonia from '~/media/images/patagoniaLogo.png';
import stella from '~/media/images/stellaLogo.png';
import coca from '~/media/images/cocaLogo.png';

export default function Marcas() {
  return (
    <aside className="marcas">
      <ul className="marcas_ul">
        <li className="marcas_li">
          <img className="marcas_img" src={quilmes} alt="" />
        </li>
        <li className="marcas_li">
          <img className="marcas_img" src={patagonia} alt="" />
        </li>
        <li className="marcas_li">
          <img className="marcas_img" src={stella} alt="" />
        </li>
        <li className="marcas_li">
          <img className="marcas_img" src={coca} alt="" />
        </li>
      </ul>
    </aside>
  );
}
