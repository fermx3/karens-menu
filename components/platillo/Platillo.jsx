import PlatilloVariantes from '../platillo-variantes/PlatilloVariantes';

const Platillo = ({
  platillo: { nombre, name, desc, descEng, precio, variantes },
}) => {
  return (
    <div>
      <div>
        <h5>{nombre}</h5>
        {name && <h6>{name}</h6>}
      </div>
      <div>
        <p>{desc}</p>
        <p>{descEng}</p>
      </div>
      <div>
        <p>{precio}</p>
      </div>
      {variantes && <PlatilloVariantes variantes={variantes} />}
    </div>
  );
};

export default Platillo;
