import { useState } from 'react';

export default function Tarjeta({ name, lastName, age, img, record }) {
  const [verInfo, setVerInfo] = useState(false);
  const [waitTransition, setWaitTransition] = useState(false);

  const handleTrans = () => {
    setWaitTransition(true);
    setVerInfo(!verInfo);
    setTimeout(() => setWaitTransition(false), 600);
  };
  return (
    <li
      className="section_betters_card"
      verinfo={verInfo ? 'true' : undefined}
      onClick={!waitTransition ? handleTrans : null}
    >
      <div
        className="section_betters_front"
        verinfo={verInfo ? 'true' : undefined}
      >
        <img
          className="section_betters_img"
          src={img}
          alt={`Imagen de ${name}`}
        />
        <button className="section_betters_info">
          <p className="section_betters_info_p">ver info</p>
        </button>
      </div>
      <div
        className="section_betters_back"
        verinfo={verInfo ? 'true' : undefined}
      >
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
    </li>
  );
}
