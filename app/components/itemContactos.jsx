export default function ItemContactos({ name, description, link, image }) {
  const handleClick = () => {
    window.open(link, '_blank');
  };
  return (
    <li className="contactos_li" onClick={handleClick}>
      <div className="contactos_div">
        <img className="contactos_img" src={image} alt={`Logo de ${name}`} />
        <h5 className="contactos_h">{name}</h5>
      </div>
      <p className="contactos_p">{description}</p>
    </li>
  );
}
