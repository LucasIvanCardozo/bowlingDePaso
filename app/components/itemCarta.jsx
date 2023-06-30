export default function ItemCarta({ data }) {
  return (
    <div className="itemCarta">
      <h2 className="itemCarta_titulo">{data.name}</h2>
      <ul className="itemCarta_ul">
        {data.data.map((data) => (
          <li className="itemCarta_li" key={data.name}>
            <p className="itemCarta_li_nombre">‧{data.name}</p>
            {data.description ? (
              <p className="itemCarta_li_descripcion">({data.description})</p>
            ) : (
              ''
            )}
          </li>
        ))}
        {data.hasOwnProperty('adicional') ? (
          <li className="itemCarta_adicional">
            <h4 className="itemCarta_adicional_titulo">adicional</h4>
            <p className="itemCarta_adicional_p">{data.adicional}</p>
          </li>
        ) : null}
      </ul>
    </div>
  );
}
