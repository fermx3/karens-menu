const PlatilloVariantes = ({ variantes }) => {
  return (
    <div>
      {variantes.map((variante) => (
        <div key={variante.nombre}>
          <div>
            <h6>{variante.nombre}</h6>
            <h6>{variante.name}</h6>
          </div>
          <div>
            <p>{variante.desc}</p>
            <p>{variante.descEng}</p>
          </div>
          <div>
            <p>{variante.precio}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlatilloVariantes;
