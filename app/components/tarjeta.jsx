export default function Tarjeta({ name, lastName, age, img, record }) {
  return (
    <>
      <div className="section_betters_front">
        <img
          className="section_betters_img"
          src={img}
          alt={`Imagen de ${name}`}
        />
        <button className="section_betters_info">
          <p className="section_betters_info_p">ver info</p>
        </button>
      </div>
      <div className="section_betters_back">
        <div className="section_betters_data">
          <p className="section_betters_name">
            {name} {lastName}
          </p>
          <p className="section_betters_age">{age} años</p>
        </div>
        <div className="section_betters_record">
          <p className="section_betters_record_p">{record}</p>
        </div>
      </div>
    </>
  );
}
