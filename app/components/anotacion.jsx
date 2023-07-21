import { useEffect, useLayoutEffect, useState } from 'react';

export default function Anotacion({ der, izq, sum, width, special }) {
  return width > 1024 || !width ? (
    special ? (
      <div class="special">
        <div class="special_sup">
          <div class="special_box"></div>
          <div class="special_box">
            <p class="special_text">{der}</p>
          </div>
          <div class="special_box">
            <p class="special_text">{izq}</p>
          </div>
        </div>
        <div class="special_inf">
          <p class="special_text">{sum}</p>
        </div>
      </div>
    ) : (
      <div class="anotacion">
        <div class="anotacion_sup">
          <div class="anotacion_box"></div>
          <div class="anotacion_box">
            <p class="anotacion_text">{der}</p>
          </div>
          <div class="anotacion_box">
            <p class="anotacion_text">{izq}</p>
          </div>
        </div>
        <div class="anotacion_inf">
          <p class="anotacion_text">{sum}</p>
        </div>
      </div>
    )
  ) : null;
}
