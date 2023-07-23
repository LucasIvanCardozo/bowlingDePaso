import { useEffect, useLayoutEffect, useState } from 'react';

export default function Anotacion({ name, age, img, record }) {
  return (
    <div>
      <div>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <p>ver info</p>
        </div>
      </div>
      <div>
        <div>
          <p>{name}</p>
          <p>{age} años</p>
        </div>
        <div>
          <p>{record}</p>
        </div>
      </div>
    </div>
  );
}
