import Platillo from '../platillo/Platillo';

const CategoryItems = ({ items, bebidas }) => {
  if (items) {
    return (
      <div>
        {items.map((item) => (
          <Platillo key={item.nombre} platillo={item} />
        ))}
      </div>
    );
  }

  return <div>{bebidas.map((bebida) => bebida.subCategoria)}</div>;
};

export default CategoryItems;
