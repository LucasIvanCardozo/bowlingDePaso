import { useState } from 'react';

export default function TarjetaAlbum({ name, lastName, age, img, record }) {
  return (
    <li className="section_album_li">
      <img className="section_album_img" src={img} alt="" loading="lazy" />
      <div className="section_album_data">
        <p className="section_album_name">
          {name} {lastName}
        </p>
        <div className="section_album_subLi">
          <p className="section_album_age">{age} años</p>
          <div className="section_album_record">
            <p className="section_album_score">{record}</p>
            <img className="section_album_pinImg" src="" alt="" />
          </div>
        </div>
      </div>
    </li>
  );
}
