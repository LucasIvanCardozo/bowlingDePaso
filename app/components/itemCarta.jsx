export default function ItemCarta({ data }) {
  return (
    <div className="itemCarta">
      <h2 className="itemCarta_titulo">{data.name}</h2>
      <ul className="itemCarta_ul">
        {data.data.map((data) => (
          <li className="itemCarta_li" key={data.name}>
            {data.name}
          </li>
        ))}
        {data.hasOwnProperty('adicional') ? (
          <li className="itemCarta_adicional">
            <h4 className="itemCarta_adicional_titulo">adicional</h4>
            <ul className="itemCarta_adicional_ul">
              {data.adicional.map((data) => (
                <li className="itemCarta_adicional_li" key={data.name}>
                  {data.name}
                </li>
              ))}
            </ul>
          </li>
        ) : null}
      </ul>
    </div>
  );
}
